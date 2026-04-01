export const PROFILE_FIELD_SECTIONS = [
  [{ label: 'profile.fields.targetJob', key: 'targetJob' }],
  [
    { label: 'profile.fields.birthDate', key: 'birthDate' },
    { label: 'profile.fields.country', key: 'country' },
  ],
  [
    { label: 'profile.fields.degree', key: 'degree' },
    { label: 'profile.fields.university', key: 'university' },
    { label: 'profile.fields.primaryMajor', key: 'primaryMajor' },
    { label: 'profile.fields.secondaryMajor', key: 'secondaryMajor' },
  ],
  [
    { label: 'profile.fields.visaType', key: 'visaType' },
    { label: 'profile.fields.visaExpiredAt', key: 'visaExpiredAt' },
  ],
  [
    { label: 'profile.fields.languageLevel', key: 'languageLevel' },
    { label: 'profile.fields.englishLevel', key: 'englishLevel' },
  ],
] as const;
