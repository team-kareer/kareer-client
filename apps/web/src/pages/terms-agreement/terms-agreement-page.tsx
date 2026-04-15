import { Button, Checkbox } from '@kds/ui';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { AccordionList, useTermsCheck } from '@widgets/terms-agreement';
import { Term, TERMS_QUERY_OPTIONS } from '@entities/terms';
import { USER_QUERY_KEY } from '@entities/user/queries';
import { queryClient } from '@shared/apis/providers/query-client';
import { ROUTE_PATH } from '@shared/router';

import * as styles from './terms-agreement-page.css';

const TermsAgreementPage = () => {
  const { t } = useTranslation('termsAgreement');
  const navigate = useNavigate();
  const { data } = useSuspenseQuery({
    ...TERMS_QUERY_OPTIONS.GET_TERMS_LIST(),
  });
  const terms = data?.terms ?? [];

  const { mutate: submitTerms } = useMutation({
    ...TERMS_QUERY_OPTIONS.POST_TERM_AGREEMENTS(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: USER_QUERY_KEY.USER_COMPLETION(),
      });
      navigate(ROUTE_PATH.ONBOARDING);
    },
  });
  const { checkedItems, allChecked, handleToggleAll, handleToggleItem } =
    useTermsCheck(terms);

  const canSubmit = terms
    .filter((data: Term) => data.required)
    .every((data: Term) => checkedItems[data.termId ?? 0]);
  const handleSubmit = () => {
    const agreements = terms.map((term: Term) => ({
      termId: term.termId ?? 0,
      agreed: checkedItems[term.termId ?? 0] ?? false,
    }));
    submitTerms({ agreements });
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <header className={styles.header}>{t('header.title')}</header>
        <div className={styles.termsSection}>
          <div className={styles.sectionContent}>
            <div className={styles.checkArea}>
              <Checkbox isChecked={allChecked} onClick={handleToggleAll} />
              <span>{t('actions.agreeAll')}</span>
            </div>
            <hr className={styles.line} />
            <section className={styles.termsList}>
              <AccordionList
                terms={data?.terms ?? []}
                checkedItems={checkedItems}
                onToggle={handleToggleItem}
              />
            </section>
          </div>
        </div>
      </div>
      <Button
        preset="large_primary"
        onClick={handleSubmit}
        disabled={!canSubmit}
      >
        {t('actions.submit')}
      </Button>
    </div>
  );
};

export default TermsAgreementPage;
