import { ComponentProps, ReactNode } from 'react';
import { CuriousIcon, MagniIcon, PlusIcon, SurpriseIcon } from '@kds/icons';
import { Button } from '@kds/ui';

import * as styles from './empty-feedback.css';

type EmptyLayoutVariant = 'card' | 'section' | 'page';
type ButtonPreset = ComponentProps<typeof Button>['preset'];

interface LayoutConfigItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
  button: {
    preset: ButtonPreset;
    label: string;
    icon?: ReactNode;
  };
}

const LAYOUT_CONFIG: Record<EmptyLayoutVariant, LayoutConfigItem> = {
  card: {
    icon: <CuriousIcon width={90} height={90} />,
    title: 'Nothing to do yet',
    subtitle: `Add a task to stay on track\nwith your career plan.`,
    button: {
      preset: 'small_primary',
      icon: <PlusIcon width={16} height={16} />,
      label: 'Add a To-Do',
    },
  },
  section: {
    icon: <MagniIcon width={100} height={100} />,
    title: 'Let’s find the job opportunities that fit me',
    subtitle: 'Find jobs that fit you and save them',
    button: {
      preset: 'medium_outlined',
      label: 'View Job Posting',
    },
  },
  page: {
    icon: <SurpriseIcon width={185} height={185} />,
    title: 'Something went wrong!',
    subtitle: 'Please try again in a moment',
    button: {
      preset: 'large_primary',
      label: 'Try again',
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
  const config = LAYOUT_CONFIG[variant];
  const { button } = config;

  return (
    <main className={styles.container({ layout: variant })}>
      <div className={styles.iconWrapper({ layout: variant })}>
        {config.icon}
      </div>
      <div className={styles.textContent}>
        <h3 className={styles.title({ layout: variant })}>
          {title || config.title}
        </h3>
        <p className={styles.subtitle({ layout: variant })}>
          {subtitle || config.subtitle}
        </p>
      </div>
      <Button preset={button.preset} onClick={onAction}>
        {button.icon && <span>{button.icon}</span>}
        {buttonLabel || button.label}
      </Button>
    </main>
  );
};

export default EmptyLayout;
