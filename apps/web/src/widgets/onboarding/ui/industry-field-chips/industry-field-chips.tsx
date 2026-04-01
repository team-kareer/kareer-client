import { XIcon } from '@kds/icons';
import { Button } from '@kds/ui';

import * as styles from './industry-field-chips.css';

interface IndustryFieldChipsProps {
  fields: string[];
  onRemove: (field: string) => void;
}

const IndustryFieldChips = ({ fields, onRemove }: IndustryFieldChipsProps) => {
  return (
    <div className={styles.container}>
      {fields.map((field) => (
        <Button
          key={field}
          preset="small_outlined"
          onClick={() => onRemove(field)}
        >
          {field}
          <XIcon width={16} height={16} />
        </Button>
      ))}
    </div>
  );
};

export default IndustryFieldChips;
