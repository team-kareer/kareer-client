import { style, styleVariants } from '@vanilla-extract/css';

import { color } from '../../styles/tokens/color.css';
import { typography } from '../../styles/typography.css';

const base = style({
  display: 'flex',
  height: '19.2rem',
  padding: '2rem 2rem',
  alignItems: 'flex-start',
  flexShrink: 0,
  borderRadius: '10px',
  backgroundColor: color.grayscale.white,
  ...typography.body9_r_14,
});

export const textFieldBorderColor = styleVariants({
  default: [
    base,
    {
      border: `1px solid ${color.grayscale.gray300}`,
      color: color.grayscale.gray400,
    },
  ],
  clicked: [
    base,
    {
      border: `1px solid ${color.primary[500]}`,
      color: 'currentColor',
    },
  ],
  completed: [
    base,
    {
      border: `1px solid ${color.grayscale.gray300}`,
      color: color.grayscale.gray800,
    },
  ],
  error: [
    base,
    {
      border: `1px solid ${color.pastel.kared_500}`,
      color: color.grayscale.gray800,
    },
  ],

  // Pastel
  pastel_blue: [
    base,
    {
      color: color.primary[500],
      backgroundColor: color.primary[100],
    },
  ],
  pastel_red: [
    base,
    {
      color: color.pastel.kared_500,
      backgroundColor: color.pastel.kared_100,
    },
  ],
  pastel_mint: [
    base,
    {
      color: color.pastel.kamint_500,
      backgroundColor: color.pastel.kamint_100,
    },
  ],
  pastel_orange: [
    base,
    {
      color: color.pastel.kaorange_500,
      backgroundColor: color.pastel.kaorange_100,
    },
  ],
  pastel_pink: [
    base,
    {
      color: color.pastel.kapink_500,
      backgroundColor: color.pastel.kapink_100,
    },
  ],
  pastel_purple: [
    base,
    {
      color: color.pastel.kapurple_500,
      backgroundColor: color.pastel.kapurple_100,
    },
  ],
  pastel_skyblue: [
    base,
    {
      color: color.pastel.kaskyblue_500,
      backgroundColor: color.pastel.kaskyblue_100,
    },
  ],

  // disabled
  disabled_gray: [
    base,
    {
      color: color.grayscale.gray500,
      backgroundColor: color.grayscale.gray100,
    },
  ],

  // Outlined
  outlined_blue: [
    base,
    {
      color: color.primary[500],
      backgroundColor: color.grayscale.white,
      border: `1px solid ${color.grayscale.gray300}`,
    },
  ],
  outlined_black: [
    base,
    {
      color: color.grayscale.gray800,
      backgroundColor: color.grayscale.white,
      border: `1px solid ${color.grayscale.gray300}`,
    },
  ],

  // Navigation
  navigation: [
    base,
    {
      ...typography.cap2_m_12,
      padding: '0.8rem 1rem',
      color: color.grayscale.white,
      backgroundColor: color.grayscale.gray800,
      borderRadius: '10px',
      boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    },
  ],
});
