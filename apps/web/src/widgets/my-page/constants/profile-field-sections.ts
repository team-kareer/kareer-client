export const PROFILE_FIELD_SECTIONS = [
  [{ label: 'Target Job', key: 'targetJob' }],
  [
    { label: 'Date of Birth', key: 'birthDate' },
    { label: 'Country', key: 'country' },
  ],
  [
    { label: 'Degree', key: 'degree' },
    { label: 'University', key: 'university' },
    { label: 'Major', key: 'primaryMajor' },
    { label: 'Secondary Major', key: 'secondaryMajor' },
  ],
  [
    { label: 'Current Visa Type', key: 'visaType' },
    { label: 'Current Visa Start Date', key: 'visaExpiredAt' },
  ],
  [
    { label: 'TOPIK / KIIP Level', key: 'languageLevel' },
    { label: 'English Level', key: 'englishLevel' },
  ],
] as const;
