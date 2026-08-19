import { LANDING_SECTION_ID } from './section-id';

export const NAVIGATION_ITEMS = [
  {
    labelKey: 'header.navigation.features',
    sectionId: LANDING_SECTION_ID.features,
  },
  {
    labelKey: 'header.navigation.reviews',
    sectionId: LANDING_SECTION_ID.reviews,
  },
  {
    labelKey: 'header.navigation.earlyAccess',
    sectionId: LANDING_SECTION_ID.earlyAccess,
  },
] as const;

export type LandingSectionId = (typeof NAVIGATION_ITEMS)[number]['sectionId'];
