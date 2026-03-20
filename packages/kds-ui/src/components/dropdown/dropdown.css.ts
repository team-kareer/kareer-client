import { themeVars, typography, zIndex } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'inline-block',
  backgroundColor: themeVars.color.grayscale.white,
  padding: '0.75rem 1.2rem',
  borderRadius: '10px',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const trigger = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  width: '10.9rem',
  ...typography.body7_sb_14,
  color: themeVars.color.primary[500],
});

export const icon = style({
  flexShrink: 0,
});

export const panel = style({
  position: 'absolute',
  top: 'calc(100% + 0.4rem)',
  left: 0,
  zIndex: zIndex.autocomplete,
  minWidth: '100%',
  background: themeVars.color.grayscale.white,
  borderRadius: '10px',
  overflow: 'hidden',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '0.75rem 1.2rem ',
  color: themeVars.color.grayscale.gray600,
  ...typography.body8_m_14,

  ':hover': {
    background: themeVars.color.grayscale.gray100,
  },
});
