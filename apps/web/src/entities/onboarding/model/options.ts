export const LANGUAGE_LEVEL_OPTIONS = [
  'LEVEL_1',
  'LEVEL_2',
  'LEVEL_3',
  'LEVEL_4',
  'LEVEL_5',
  'Not taken yet',
];

export const VISA_TYPE_OPTIONS = ['D-2', 'D-10'];

export const TARGET_JOB_OPTIONS = [
  'Planning & Strategy',
  'Production',
  'Marketing',
  'Sales',
];

export const OUTSIDE_KOREA_DEGREE_OPTIONS = [
  "Bachelor's Degree",
  "Master's Degree",
  'Doctoral(PhD)',
];

export const SOUTH_KOREA_DEGREE_OPTIONS = [
  'Associate Degree',
  ...OUTSIDE_KOREA_DEGREE_OPTIONS,
];

export const DEGREE_MAP: Record<string, string> = {
  DOMESTIC_ASSOCIATE: 'Associate Degree',
  DOMESTIC_BACHELORS: "Bachelor's Degree",
  DOMESTIC_MASTERS: "Master's Degree",
  DOMESTIC_DOCTORATE: 'Doctoral(PhD)',
  OVERSEAS_BACHELORS: "Bachelor's Degree",
  OVERSEAS_MASTERS: "Master's Degree",
  OVERSEAS_DOCTORATE: 'Doctoral(PhD)',
};

export const LABEL_TO_DEGREE_TYPE_MAP: Record<string, string> = {
  'Associate Degree': 'ASSOCIATE',
  "Bachelor's Degree": 'BACHELORS',
  "Master's Degree": 'MASTERS',
  'Doctoral(PhD)': 'DOCTORATE',
};
