import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '../../styles';

import { typography } from '../../styles/typography.css';

const base = style({
  padding: '0.5rem 1.2rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  userSelect: 'none',
  ...typography.cap1_sb_12,
});

export const tagColor = styleVariants({
  // Primary
  primary_blue: [
    base,
    {
      color: themeVars.color.grayscale.white,
      backgroundColor: themeVars.color.primary[500],
    },
  ],
  primary_black: [
    base,
    {
      color: themeVars.color.grayscale.white,
      backgroundColor: themeVars.color.grayscale.gray800,
    },
  ],

  // Pastel
  pastel_blue: [
    base,
    {
      color: themeVars.color.primary[500],
      backgroundColor: themeVars.color.primary[100],
    },
  ],
  pastel_red: [
    base,
    {
      color: themeVars.color.pastel.kared_500,
      backgroundColor: themeVars.color.pastel.kared_100,
    },
  ],
  pastel_mint: [
    base,
    {
      color: themeVars.color.pastel.kamint_500,
      backgroundColor: themeVars.color.pastel.kamint_100,
    },
  ],
  pastel_orange: [
    base,
    {
      color: themeVars.color.pastel.kaorange_500,
      backgroundColor: themeVars.color.pastel.kaorange_100,
    },
  ],
  pastel_pink: [
    base,
    {
      color: themeVars.color.pastel.kapink_500,
      backgroundColor: themeVars.color.pastel.kapink_100,
    },
  ],
  pastel_purple: [
    base,
    {
      color: themeVars.color.pastel.kapurple_500,
      backgroundColor: themeVars.color.pastel.kapurple_100,
    },
  ],
  pastel_skyblue: [
    base,
    {
      color: themeVars.color.pastel.kaskyblue_500,
      backgroundColor: themeVars.color.pastel.kaskyblue_100,
    },
  ],

  // disabled
  disabled_gray: [
    base,
    {
      color: themeVars.color.grayscale.gray500,
      backgroundColor: themeVars.color.grayscale.gray100,
    },
  ],

  // Outlined
  outlined_blue: [
    base,
    {
      color: themeVars.color.primary[500],
      backgroundColor: themeVars.color.grayscale.white,
      border: `1px solid ${themeVars.color.grayscale.gray300}`,
    },
  ],
  outlined_black: [
    base,
    {
      color: themeVars.color.grayscale.gray800,
      backgroundColor: themeVars.color.grayscale.white,
      border: `1px solid ${themeVars.color.grayscale.gray300}`,
    },
  ],

  // Navigation
  navigation: [
    base,
    {
      ...typography.cap2_m_12,
      padding: '0.8rem 1rem',
      color: themeVars.color.grayscale.white,
      backgroundColor: themeVars.color.grayscale.gray800,
      borderRadius: '10px',
      boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    },
  ],
});
