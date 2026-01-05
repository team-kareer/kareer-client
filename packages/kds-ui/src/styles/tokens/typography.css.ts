import { styleVariants } from '@vanilla-extract/css';

import { font } from './font.css';

export const typography = styleVariants({
  // Head
  head1_sb_40: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[40],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  head2_sb_32: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[32],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  head3_m_32: {
    fontWeight: font.weight.medium,
    fontSize: font.size[32],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  head4_sb_24: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[24],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  head5_r_24: {
    fontWeight: font.weight.regular,
    fontSize: font.size[24],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },

  // Sub
  sub1_sb_22: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[22],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  sub2_m_22: {
    fontWeight: font.weight.medium,
    fontSize: font.size[22],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  sub3_r_22: {
    fontWeight: font.weight.regular,
    fontSize: font.size[22],
    lineHeight: font.lineHeight.normal,
    letterSpacing: font.letterSpacing.tight,
  },
  sub4_sb_20: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[20],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  sub5_m_20: {
    fontWeight: font.weight.medium,
    fontSize: font.size[20],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  sub6_r_20: {
    fontWeight: font.weight.regular,
    fontSize: font.size[20],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },

  // Body
  body1_sb_18: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[18],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body2_m_18: {
    fontWeight: font.weight.medium,
    fontSize: font.size[18],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body3_r_18: {
    fontWeight: font.weight.regular,
    fontSize: font.size[18],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body4_sb_16: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[16],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body5_m_16: {
    fontWeight: font.weight.medium,
    fontSize: font.size[16],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body6_r_16: {
    fontWeight: font.weight.regular,
    fontSize: font.size[16],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body7_sb_14: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[14],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body8_m_14: {
    fontWeight: font.weight.medium,
    fontSize: font.size[14],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  body9_r_14: {
    fontWeight: font.weight.regular,
    fontSize: font.size[14],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },

  // Caption
  cap1_sb_12: {
    fontWeight: font.weight.semibold,
    fontSize: font.size[12],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  cap2_m_12: {
    fontWeight: font.weight.medium,
    fontSize: font.size[12],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
  cap3_r_12: {
    fontWeight: font.weight.regular,
    fontSize: font.size[12],
    lineHeight: font.lineHeight.tight,
    letterSpacing: font.letterSpacing.tight,
  },
});
