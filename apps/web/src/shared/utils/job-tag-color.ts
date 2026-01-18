export type TagColor =
  | 'pastel_red'
  | 'pastel_mint'
  | 'pastel_orange'
  | 'pastel_skyblue'
  | 'pastel_pink'
  | 'pastel_purple'
  | 'disabled_gray';

const JOB_COLOR_MAP: Record<string, TagColor> = {
  'Contract worker': 'pastel_red',
  'Temporary worker': 'pastel_mint',
  Freelancer: 'pastel_orange',
  'Part-time job': 'pastel_skyblue',
  Intern: 'pastel_pink',
  'Full-time': 'pastel_purple',
};

export const getJobTagColor = (jobType?: string): TagColor => {
  if (!jobType) {
    return 'disabled_gray';
  }
  return JOB_COLOR_MAP[jobType] || 'disabled_gray';
};
