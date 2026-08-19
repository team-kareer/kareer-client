import * as styles from './career-roadmap-preview.css';

type PhaseState = 'past' | 'current' | 'future';
type StatusTone = 'warning' | 'primary' | 'muted';
type ActionState = 'active' | 'default' | 'completed';
type ActionTagTone = 'visa' | 'career';

interface RoadmapPhase {
  step: number;
  name: string;
  state: PhaseState;
  status: string;
  statusTone: StatusTone;
}

interface RoadmapAction {
  id: string;
  tag: string;
  tagTone: ActionTagTone;
  label: string;
  state: ActionState;
  date?: string;
  result?: string;
}

const ROADMAP_PHASES = [
  {
    step: 1,
    name: 'Verify Requirements\nSep – Nov',
    state: 'past',
    status: 'Incomplete 2',
    statusTone: 'warning',
  },
  {
    step: 2,
    name: 'Build Experience\nCurrent Phase',
    state: 'current',
    status: 'Remained 3',
    statusTone: 'primary',
  },
  {
    step: 3,
    name: 'D-10 Transition\nSep – Nov',
    state: 'future',
    status: 'Scheduled 8',
    statusTone: 'muted',
  },
] satisfies RoadmapPhase[];

const ROADMAP_ACTIONS = [
  {
    id: 'internship-log',
    tag: 'Visa',
    tagTone: 'visa',
    label: 'Prepare internship log',
    date: 'Jan 24',
    state: 'active',
  },
  {
    id: 'experience-portfolio',
    tag: 'Career',
    tagTone: 'career',
    label: 'Build experience portfolio',
    date: 'Jan 24',
    state: 'default',
  },
  {
    id: 'university-documents',
    tag: 'Career',
    tagTone: 'career',
    label: 'Register university documents',
    result: 'Done ✓',
    state: 'completed',
  },
] satisfies RoadmapAction[];

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
