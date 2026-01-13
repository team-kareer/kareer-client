import { themeVars, typography } from '@kds/ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  padding: '1.6rem 2rem',
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.gray100,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const title = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray800,
});

export const headerItemCount = style({
  ...typography.cap2_m_12,
  color: themeVars.color.grayscale.gray500,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const sectionType = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const typeItemCount = style({
  ...typography.cap1_sb_12,
});

export const typeItemCountVariants = styleVariants({
  Visa: {
    color: themeVars.color.pastel.kapurple_500,
  },
  Career: {
    color: themeVars.color.pastel.kaskyblue_500,
  },
  Done: {
    color: themeVars.color.grayscale.gray400,
  },
});
