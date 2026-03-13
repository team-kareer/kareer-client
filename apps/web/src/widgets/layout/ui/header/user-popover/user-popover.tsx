import { LogoutIcon } from '@kds/icons';
import { Avatar } from '@kds/ui';

import { VisaStatusList } from '@widgets/dashboard/ui';

import * as styles from './user-popover.css';

interface UserPopoverProps {
  profileUrl: string;
  name: string;
  email: string;
}

const UserPopover = ({ profileUrl, name, email }: UserPopoverProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <Avatar profileUrl={profileUrl} size="popover" />
        <div>
          <div className={styles.text['name']}>{name}</div>
          <div className={styles.text['email']}>{email}</div>
        </div>
      </section>
      <section className={styles.middle}>
        <div className={styles.text['status']}>My status</div>
        <VisaStatusList />
      </section>
      <section className={styles.bottom}>
        <LogoutIcon />
        <div className={styles.text['logout']}>Log Out</div>
      </section>
    </div>
  );
};

export default UserPopover;
