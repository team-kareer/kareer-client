import { style, styleVariants } from '@vanilla-extract/css';

import { color } from '../../styles/tokens/color.css';
import { typography } from '../../styles/typography.css';

const base = style({
  padding: '0.5rem 1.2rem',
  display: 'inline-flex',
  borderRadius: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  border: 'none',
  userSelect: 'none',
  ...typography.cap1_sb_12,
});

export const tagColor = styleVariants({
  // Primary
  primary_blue: [
    base,
    {
      color: color.grayscale.white,
      backgroundColor: color.primary[500],
    },
  ],
  primary_black: [
    base,
    {
      color: color.grayscale.white,
      backgroundColor: color.grayscale.gray800,
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
});
