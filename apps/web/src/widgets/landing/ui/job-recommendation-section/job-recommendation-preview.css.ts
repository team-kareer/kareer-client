import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const preview = style({
  padding: '2.2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '14px',
  backgroundColor: themeVars.color.grayscale.white,
  boxShadow: '0 8px 40px rgba(59, 110, 248, 0.08)',
});

export const uploadBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginBottom: '1.4rem',
  padding: '0.8rem 1rem',
  border: `1.5px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const upload = style({
  padding: '0.5rem 1rem',
  border: `1px solid ${themeVars.color.primary[300]}`,
  borderRadius: '7px',
  color: themeVars.color.grayscale.gray700,
  backgroundColor: themeVars.color.primary[100],
  fontSize: '1.1rem',
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

export const file = style({
  padding: '0.4rem 0.9rem',
  borderRadius: '6px',
  color: themeVars.color.grayscale.gray700,
  backgroundColor: themeVars.color.grayscale.gray100,
  fontSize: '1.1rem',
  whiteSpace: 'nowrap',
});

export const todoOption = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginLeft: 'auto',
  color: themeVars.color.grayscale.gray500,
  fontSize: '1.1rem',
  whiteSpace: 'nowrap',
});

export const toggle = style({
  position: 'relative',
  width: '2.8rem',
  height: '1.6rem',
  borderRadius: '99px',
  backgroundColor: themeVars.color.primary[500],
});

export const toggleThumb = style({
  position: 'absolute',
  top: '0.2rem',
  right: '0.2rem',
  width: '1.2rem',
  height: '1.2rem',
  borderRadius: '50%',
  backgroundColor: themeVars.color.grayscale.white,
});

export const jobGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.8rem',
});
