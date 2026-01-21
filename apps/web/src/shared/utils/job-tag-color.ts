export type TagColor =
  | 'pastel_red'
  | 'pastel_mint'
  | 'pastel_orange'
  | 'pastel_skyblue'
  | 'pastel_pink'
  | 'pastel_purple'
  | 'disabled_gray';

export const getJobTagColor = (jobType?: string): TagColor => {
  if (!jobType) {
    return 'disabled_gray';
  }

  // 1. 대소문자 무시를 위해 소문자로 변환
  const type = jobType.toLowerCase();

  // 2. 키워드 포함 여부로 색상 결정 (순서대로 체크)
  if (type.includes('contract')) {
    return 'pastel_red';
  }
  if (type.includes('temporary')) {
    return 'pastel_mint';
  }
  if (type.includes('freelanc')) {
    // freelancer, freelance 모두 대응
    return 'pastel_orange';
  }
  if (type.includes('part-time') || type.includes('part time')) {
    return 'pastel_skyblue';
  }
  if (type.includes('intern')) {
    return 'pastel_pink';
  }
  if (type.includes('full-time') || type.includes('regular')) {
    return 'pastel_purple';
  }

  // 매칭되는 게 없으면 기본 색상
  return 'disabled_gray';
};
