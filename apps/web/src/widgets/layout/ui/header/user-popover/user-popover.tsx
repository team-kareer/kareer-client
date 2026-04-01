import { LogoutIcon } from '@kds/icons';
import { Avatar } from '@kds/ui';
import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { VisaStatusList } from '@widgets/dashboard/ui';
import { AUTH_MUTATION_OPTIONS } from '@features/auth/queries/queries';

import * as styles from './user-popover.css';

interface UserPopoverProps {
  profileUrl?: string;
  name?: string;
  email?: string;
}

const UserPopover = ({ profileUrl, name, email }: UserPopoverProps) => {
  const { t } = useTranslation('userPopover');
  const { mutate } = useMutation({
    ...AUTH_MUTATION_OPTIONS.LOGOUT(),
  });
  const handleLogout = () => mutate();
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <Avatar profileUrl={profileUrl} use="popover" />
        <div>
          <div className={styles.text['name']}>{name}</div>
          <div className={styles.text['email']}>{email}</div>
        </div>
      </section>
      <section className={styles.middle}>
        <div className={styles.text['status']}>{t('section.status')}</div>
        <VisaStatusList />
      </section>
      <button className={styles.bottom} onClick={handleLogout}>
        <LogoutIcon width={24} height={24} />
        <div className={styles.text['logout']}>{t('action.logout')}</div>
      </button>
    </div>
  );
};

export default UserPopover;
