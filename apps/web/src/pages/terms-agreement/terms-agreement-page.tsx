import { Button, Checkbox } from '@kds/ui';
import { useSuspenseQuery } from '@tanstack/react-query';

import { AccordionList, useTermsCheck } from '@widgets/terms-agreement';
import { TERMS_QUERY_OPTIONS } from '@entities/terms';

import * as styles from './terms-agreement-page.css';

const TermsAgreementPage = () => {
  const { data } = useSuspenseQuery({
    ...TERMS_QUERY_OPTIONS.GET_TERMS_LIST(),
  });
  const { checkedItems, allChecked, handleToggleAll, handleToggleItem } =
    useTermsCheck(data?.terms ?? []);

  const canSubmit = (data?.terms ?? [])
    .filter((data) => data.required)
    .every((data) => checkedItems[data.termId ?? 0]);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <header className={styles.header}>Terms & Privacy Consent</header>
        <div className={styles.termsSection}>
          <div className={styles.sectionContent}>
            <div className={styles.checkArea}>
              <Checkbox isChecked={allChecked} onClick={handleToggleAll} />
              <span>Agree to all</span>
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
      <Button preset="large_primary" disabled={!canSubmit}>
        Agree and Start
      </Button>
    </div>
  );
};

export default TermsAgreementPage;
