import { XIcon } from '@kds/icons';
import { type AutocompleteOption, Button } from '@kds/ui';

import * as styles from './industry-field-chips.css';

interface IndustryFieldChipsProps {
  fields: AutocompleteOption[];
  onRemove: (fieldCode: string) => void;
}

const IndustryFieldChips = ({ fields, onRemove }: IndustryFieldChipsProps) => {
  return (
    <div className={styles.container}>
      {fields.map((field) => (
        <Button
          key={field.code}
          preset="small_outlined"
          onClick={() => onRemove(field.code ?? '')}
        >
          {field.label ?? field.code}
          <XIcon width={16} height={16} />
        </Button>
      ))}
    </div>
  );
};

export default IndustryFieldChips;
