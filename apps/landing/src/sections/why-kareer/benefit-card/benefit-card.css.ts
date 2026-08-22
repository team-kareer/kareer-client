import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const card = style({
  padding: '2.6rem 2.2rem',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: '14px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  textAlign: 'left',
  backdropFilter: 'blur(12px)',
  transition: 'all 0.25s ease',
  ':hover': {
    transform: 'translateY(-4px)',
    borderColor: 'rgba(255, 255, 255, 0.32)',
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    // boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
  },
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  height: '3.2rem',
  color: themeVars.color.grayscale.white,
  marginBottom: '1.4rem',
});

export const cardTitle = style({
  ...typography.body4_sb_16,
  marginBottom: '0.8rem',
  color: themeVars.color.grayscale.white,
});

export const cardDescription = style({
  ...typography.cap3_r_12,
  color: 'rgba(255, 255, 255, 0.65)',
  lineHeight: 1.7,
});
