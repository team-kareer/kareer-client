import { Input } from '@kds/ui';

import * as styles from './profile-field.css';

interface ProfileFieldProps {
  label: string;
  value: string;
}

const ProfileField = ({ label, value }: ProfileFieldProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.profileFieldHeader}>{label}</p>
      <Input value={value} readOnly />
    </div>
  );
};

export default ProfileField;
