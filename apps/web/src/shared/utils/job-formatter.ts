export type TagColor =
  | 'pastel_red'
  | 'pastel_mint'
  | 'pastel_orange'
  | 'pastel_skyblue'
  | 'pastel_pink'
  | 'pastel_purple'
  | 'disabled_gray';

const JOB_COLOR_MAP: Record<string, TagColor> = {
  'Full-time': 'pastel_purple',
  'Contract worker': 'pastel_red',
  'Temporary worker': 'pastel_mint',
  Freelancer: 'pastel_orange',
  'Part-time job': 'pastel_skyblue',
  'Part-time': 'pastel_skyblue',
  Intern: 'pastel_pink',
  Internship: 'pastel_pink',
};

export const formatArrangementDisplay = (arrangement?: string[]): string => {
  if (!arrangement || arrangement.length === 0) {
    return '-';
  }

  const firstItem = arrangement[0]!;
  const remainingCount = arrangement.length - 1;

  if (remainingCount > 0) {
    return `${firstItem} +${remainingCount}`;
  }

  return firstItem;
};

export const formatAddressDisplay = (address?: string[]): string => {
  if (!address || address.length === 0) {
    return '-';
  }

  // 주소를 ", "로 join하기 (예: "Gangnam-gu, Seoul")
  return address.join(', ');
};

export const getJobTagColor = (arrangement?: string[]): TagColor => {
  if (!arrangement || arrangement.length === 0) {
    return 'disabled_gray';
  }

  const firstArrangement = arrangement[0]!;
  return JOB_COLOR_MAP[firstArrangement] || 'disabled_gray';
};
