import { themeVars, typography, zIndex } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  right: 0,
  left: 0,
  zIndex: zIndex.autocomplete,
  height: '6.2rem',
  padding: '0 4.8rem',
  borderBottom: `1px solid ${themeVars.color.grayscale.gray300}`,
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
  backdropFilter: 'blur(12px)',
});

export const navigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const sectionNavigation = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.4rem',
});

export const sectionLink = style({
  ...typography.cap2_m_12,
  padding: '0.4rem 0',
  borderBottom: '2px solid transparent',
  color: themeVars.color.grayscale.gray500,
  transition: 'color 0.2s ease',
  ':hover': {
    color: themeVars.color.grayscale.gray800,
  },
});
