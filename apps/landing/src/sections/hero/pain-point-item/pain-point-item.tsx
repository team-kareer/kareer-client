import { ReactNode } from 'react';

import * as styles from './pain-point-item.css';

interface PainPointItemProps {
  icon: ReactNode;
  label: string;
}

const PainPointItem = ({ icon, label }: PainPointItemProps) => (
  <div className={styles.painPoint}>
    {icon}
    {label}
  </div>
);

export default PainPointItem;
