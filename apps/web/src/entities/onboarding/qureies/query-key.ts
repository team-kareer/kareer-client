export const ONBOARDING_QUERY_KEY = {
  ALL: ['onboarding'],
  MAJOR_LIST: () => [...ONBOARDING_QUERY_KEY.ALL, 'major-list'],
  COUNTRY_LIST: () => [...ONBOARDING_QUERY_KEY.ALL, 'country-list'],
};
