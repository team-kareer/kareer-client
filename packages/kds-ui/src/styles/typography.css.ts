import { styleVariants } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

export const typography = styleVariants({
  // Head
  head1_sb_40: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[40],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  head2_sb_32: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[32],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  head3_m_32: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[32],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  head4_sb_24: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[24],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  head5_r_24: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[24],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },

  // Sub
  sub1_sb_22: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[22],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  sub2_m_22: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[22],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  sub3_r_22: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[22],
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  sub4_sb_20: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[20],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  sub5_m_20: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[20],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  sub6_r_20: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[20],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },

  // Body
  body1_sb_18: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[18],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body2_m_18: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[18],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body3_r_18: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[18],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body4_sb_16: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[16],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body5_m_16: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[16],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body6_r_16: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[16],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body7_sb_14: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[14],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body8_m_14: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[14],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body9_r_14: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[14],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },

  // Caption
  cap1_sb_12: {
    fontWeight: themeVars.fontWeight.semibold,
    fontSize: themeVars.fontSize[12],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  cap2_m_12: {
    fontWeight: themeVars.fontWeight.medium,
    fontSize: themeVars.fontSize[12],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  cap3_r_12: {
    fontWeight: themeVars.fontWeight.regular,
    fontSize: themeVars.fontSize[12],
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.tight,
  },
});
