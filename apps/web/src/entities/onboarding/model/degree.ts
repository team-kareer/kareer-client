import { LABEL_AND_LOCATION_TO_DEGREE_MAP } from './options';

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
