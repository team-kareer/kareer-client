export const TODO_ITEMS = [
  {
    id: 'opt-application',
    label: 'Submit OPT Application',
    due: 'D-1',
    completed: false,
    urgent: true,
  },
  {
    id: 'arc-documents',
    label: 'Prepare ARC Documents',
    due: 'D-5',
    completed: false,
    urgent: false,
  },
  {
    id: 'health-insurance',
    label: 'Get Health Insurance',
    due: 'D-10',
    completed: false,
    urgent: false,
  },
  {
    id: 'university-registration',
    label: 'Register at University',
    due: 'Done',
    completed: true,
    urgent: false,
  },
] as const;
