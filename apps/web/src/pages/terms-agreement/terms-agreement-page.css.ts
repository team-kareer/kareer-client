import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '13.4rem 6.7rem 4.8rem 6.6rem',
  flex: 1,
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  width: '100%',
});

export const header = style({
  ...typography.head4_sb_24,
  color: themeVars.color.grayscale.gray800,
});

export const termsSection = style({
  maxHeight: '44.1rem',
  padding: '2rem',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const sectionContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  height: '100%',
  overflowY: 'scroll',
});

export const checkArea = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray900,
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const line = style({
  border: 'none',
  borderTop: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const termsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});
