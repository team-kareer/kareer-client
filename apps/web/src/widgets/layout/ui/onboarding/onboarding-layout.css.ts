import { themeVars, typography, zIndex } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: zIndex.contentSection,
});

export const introSection = style({
  display: 'flex',
  flexDirection: 'column',
  width: '55rem',
  height: '100%',
  position: 'relative',
  minHeight: 0,
  overflow: 'hidden',
});

export const textSection = style({
  position: 'relative',
  padding: '4.8rem 20.2rem 0 3.6rem',
  flexShrink: 0,
  zIndex: 1,
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const text = style({
  ...typography.sub5_m_20,
  color: themeVars.color.grayscale.gray500,
  whiteSpace: 'pre-wrap',
});

export const lottieBackground = style({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
});

export const lottie = style({
  width: '100%',
  height: '100%',
});

export const stepFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minWidth: 0,
  backgroundColor: themeVars.color.grayscale.gray200,
});
