import { ComponentProps, ReactNode } from 'react';
import { CuriousIcon, MagnifierIcon, PlusIcon, SurpriseIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

import * as styles from './empty-feedback.css';

type EmptyLayoutVariant = 'card' | 'section' | 'page';
type ButtonPreset = ComponentProps<typeof Button>['preset'];

interface LayoutConfigItem {
  icon: ReactNode;
  button: {
    preset: ButtonPreset;
    icon?: ReactNode;
  };
}

const LAYOUT_CONFIG: Record<EmptyLayoutVariant, LayoutConfigItem> = {
  card: {
    icon: <CuriousIcon width={90} height={90} />,
    button: {
      preset: 'small_primary',
      icon: <PlusIcon width={16} height={16} />,
    },
  },
  section: {
    icon: <MagnifierIcon width={100} height={100} />,
    button: {
      preset: 'medium_outlined',
    },
  },
  page: {
    icon: <SurpriseIcon width={185} height={185} />,
    button: {
      preset: 'large_primary',
    },
  },
};

interface EmptyLayoutProps {
  variant: EmptyLayoutVariant;
  onAction: () => void;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
}

const EmptyLayout = ({
  variant,
  onAction,
  title,
  subtitle,
  buttonLabel,
}: EmptyLayoutProps) => {
  const { t } = useTranslation('empty');
  const config = LAYOUT_CONFIG[variant];
  const titleText = title ?? t(`${variant}.title`);
  const subtitleText = subtitle ?? t(`${variant}.description`);
  const buttonText = buttonLabel ?? t(`${variant}.button`);

  return (
    <main className={styles.container({ layout: variant })}>
      <div className={styles.iconWrapper({ layout: variant })}>
        {config.icon}
      </div>
      <div className={styles.textContent}>
        <h3 className={styles.title({ layout: variant })}>{titleText}</h3>
        <p className={styles.subtitle({ layout: variant })}>{subtitleText}</p>
      </div>
      <Button preset={config.button.preset} onClick={onAction}>
        {config.button.icon && <span>{config.button.icon}</span>}
        {buttonText}
      </Button>
    </main>
  );
};

export default EmptyLayout;
