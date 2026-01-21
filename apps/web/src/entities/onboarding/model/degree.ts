import { DEGREE_MAP, LABEL_TO_DEGREE_TYPE_MAP } from './options';

/**
 * API 값(서버 형식)을 표시용 텍스트로 변환하는 함수
 * @returns 표시용 텍스트
 */
export const getDegreeLabel = (value: string): string => {
  if (!value) {
    return '';
  }
  return DEGREE_MAP[value] || value;
};

/**
 * 표시용 텍스트를 API 값(서버 형식)으로 변환하는 함수
 * @param label - 표시용 텍스트
 */
export const getDegreeValue = (
  label: string,
  degreeLocation: string,
): string => {
  const prefix = degreeLocation === 'south-korea' ? 'DOMESTIC_' : 'OVERSEAS_';

  const degreeType =
    LABEL_TO_DEGREE_TYPE_MAP[label] || label.toUpperCase().replace(/\s+/g, '_');
  return `${prefix}${degreeType}`;
};
