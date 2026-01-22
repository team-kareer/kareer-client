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

export const LABEL_AND_LOCATION_TO_DEGREE_MAP: Record<
  string,
  Record<string, string>
> = {
  'Associate Degree': {
    'south-korea': 'DOMESTIC_ASSOCIATE',
  },
  "Bachelor's Degree": {
    'south-korea': 'DOMESTIC_BACHELORS',
    'outside-korea': 'OVERSEAS_BACHELORS',
  },
  "Master's Degree": {
    'south-korea': 'DOMESTIC_MASTERS',
    'outside-korea': 'OVERSEAS_MASTERS',
  },
  'Doctoral(PhD)': {
    'south-korea': 'DOMESTIC_DOCTORATE',
    'outside-korea': 'OVERSEAS_DOCTORATE',
  },
};
