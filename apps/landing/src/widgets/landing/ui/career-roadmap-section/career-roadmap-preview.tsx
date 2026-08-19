import { ROADMAP_ACTIONS, ROADMAP_PHASES } from '@widgets/landing/constants';

import * as styles from './career-roadmap-preview.css';

const CareerRoadmapPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>
          Your path to{' '}
          <span className={styles.headingAccent}>E-7 Employment Visa</span>
        </p>
        <p className={styles.phaseCount}>3 Phases</p>
      </div>

      <div className={styles.phases}>
        {ROADMAP_PHASES.map(({ step, name, state, status, statusTone }) => (
          <div key={step} className={styles.phase}>
            <div className={styles.phaseDot({ state })}>{step}</div>
            <p className={styles.phaseName({ current: state === 'current' })}>
              {name}
            </p>
            <p className={styles.phaseStatus({ tone: statusTone })}>{status}</p>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        {ROADMAP_ACTIONS.map(
          ({ id, tag, tagTone, label, state, date, result }) => (
            <div key={id} className={styles.action({ state })}>
              <span className={styles.actionTag({ tone: tagTone })}>{tag}</span>
              <span
                className={styles.actionLabel({
                  completed: state === 'completed',
                })}
              >
                {label}
              </span>
              {date && <span className={styles.actionDate}>{date}</span>}
              {state !== 'completed' && (
                <span className={styles.todoAction}>+ To-Do</span>
              )}
              {result && <span className={styles.actionResult}>{result}</span>}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default CareerRoadmapPreview;
