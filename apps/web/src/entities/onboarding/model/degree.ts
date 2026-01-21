import { DEGREE_MAP, LABEL_AND_LOCATION_TO_DEGREE_MAP } from './options';

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

export const getDegreeValue = (
  label: string,
  degreeLocation: string,
): string => {
  const apiValue = LABEL_AND_LOCATION_TO_DEGREE_MAP[label]?.[degreeLocation];

  if (!apiValue) {
    return '';
  }

  return apiValue;
};
