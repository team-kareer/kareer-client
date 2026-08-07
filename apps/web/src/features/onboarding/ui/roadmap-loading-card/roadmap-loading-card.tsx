import { CheckIcon } from '@kds/icons';
import type { AnimationEvent } from 'react';
import { useTranslation } from 'react-i18next';

import * as styles from './roadmap-loading-card.css';

export type RoadmapLoadingCompletedStepCount = 0 | 1 | 2 | 3;

interface RoadmapLoadingCardProps {
  name: string;
  completedStepCount: RoadmapLoadingCompletedStepCount;
  onExitComplete?: () => void;
}

type StepStatus = 'active' | 'done' | 'pending';

const getStepStatus = (
  stepIndex: number,
  completedStepCount: RoadmapLoadingCompletedStepCount,
): StepStatus => {
  if (stepIndex < completedStepCount) {
    return 'done';
  }

  if (stepIndex === completedStepCount) {
    return 'active';
  }

  return 'pending';
};

const RoadmapLoadingCard = ({
  name,
  completedStepCount,
  onExitComplete,
}: RoadmapLoadingCardProps) => {
  const { t } = useTranslation('onboarding');
  const isComplete = completedStepCount === 3;
  const steps = [
    {
      id: 'profileReview',
      title: t('roadmapLoading.steps.profileReview.title', { name }),
      description: t('roadmapLoading.steps.profileReview.description'),
    },
    {
      id: 'jobMatching',
      title: t('roadmapLoading.steps.jobMatching.title'),
      description: t('roadmapLoading.steps.jobMatching.description'),
    },
    {
      id: 'roadmapCreation',
      title: t('roadmapLoading.steps.roadmapCreation.title', { name }),
      description: t('roadmapLoading.steps.roadmapCreation.description'),
    },
  ];
  const currentStep = steps[completedStepCount];
  const stepItems = steps.map((step, index) => {
    const status = getStepStatus(index, completedStepCount);
    const isLastStep = index === steps.length - 1;

    return {
      ...step,
      status,
      hasConnector: !isLastStep,
      isConnectorActive: status === 'done',
    };
  });

  const handleAnimationEnd = (event: AnimationEvent<HTMLElement>) => {
    if (event.target === event.currentTarget && isComplete) {
      onExitComplete?.();
    }
  };

  return (
    <section
      className={styles.card({ isComplete })}
      onAnimationEnd={handleAnimationEnd}
    >
      <h2 className={styles.heading}>
        {isComplete
          ? t('roadmapLoading.completedTitle', { name })
          : t('roadmapLoading.title')}
      </h2>
      <p className={styles.screenReaderStatus} role="status">
        {currentStep?.title ?? t('roadmapLoading.completedTitle', { name })}
      </p>
      <div className={styles.stepList} role="list">
        {stepItems.map(
          ({
            id,
            title,
            description,
            status,
            hasConnector,
            isConnectorActive,
          }) => (
            <div key={id} role="listitem">
              <div className={styles.stepRow({ status })}>
                <span className={styles.statusIcon}>
                  <span className={styles.pendingIcon({ status })} />
                  <span className={styles.loadingIcon({ status })} />
                  <span className={styles.doneIcon({ status })}>
                    <CheckIcon width={16} height={16} />
                  </span>
                </span>
                <span className={styles.stepContent}>
                  <span className={styles.stepTitle({ status })}>{title}</span>
                  <span className={styles.stepDescription({ status })}>
                    {description}
                  </span>
                </span>
              </div>
              {hasConnector && (
                <span className={styles.connector}>
                  <span
                    className={styles.connectorFill({
                      isActive: isConnectorActive,
                    })}
                  />
                </span>
              )}
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default RoadmapLoadingCard;
