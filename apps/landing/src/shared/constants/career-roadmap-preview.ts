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

export const ROADMAP_PHASES = [
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

export const ROADMAP_ACTIONS = [
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
