import { style, styleVariants } from '@vanilla-extract/css';

import { color } from '../../styles/tokens/color.css';
import { typography } from '../../styles/typography.css';

export const base = style({
  padding: '0.3125rem 0.75rem',
  ...typography.cap1_sb_12,
});

export const tagColor = styleVariants({
  // Primary
  primary_blue: {
    color: color.grayscale.white,
    backgroundColor: color.primary[500],
  },
  primary_black: {
    color: color.grayscale.white,
    backgroundColor: color.grayscale.gray800,
  },

  // Pastel
  pastel_blue: {
    color: color.primary[500],
    backgroundColor: color.primary[100],
  },
  pastel_red: {
    color: color.pastel.kared_500,
    backgroundColor: color.pastel.kared_100,
  },
  pastel_mint: {
    color: color.pastel.kamint_500,
    backgroundColor: color.pastel.kamint_100,
  },
  pastel_orange: {
    color: color.pastel.kaorange_500,
    backgroundColor: color.pastel.kaorange_100,
  },
  pastel_pink: {
    color: color.pastel.kapink_500,
    backgroundColor: color.pastel.kapink_100,
  },
  pastel_purple: {
    color: color.pastel.kapurple_500,
    backgroundColor: color.pastel.kapurple_100,
  },
  pastel_skyblue: {
    color: color.pastel.kaskyblue_500,
    backgroundColor: color.pastel.kaskyblue_100,
  },

  // Outlined
  outlined_blue: {
    color: color.primary[500],
    backgroundColor: color.grayscale.white,
    border: `1px solid ${color.grayscale.gray300}`,
  },
  outlined_black: {
    color: color.grayscale.gray800,
    backgroundColor: color.grayscale.white,
    border: `1px solid ${color.grayscale.gray300}`,
  },

  // Disabled
  disabled: {
    backgroundColor: color.grayscale.gray100,
    color: color.grayscale.gray400,
  },
});
