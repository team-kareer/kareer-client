import { themeVars, typography, zIndex } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: zIndex.contentSection,
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '52.6rem',
      zIndex: zIndex.backgroundFill,
      pointerEvents: 'none',
      background:
        'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)',
    },
  },
});

export const lottieWrapper = style({
  position: 'relative',
  zIndex: zIndex.lottie,
});

export const introSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4.8rem 0 0 3.6rem',
  position: 'absolute',
  zIndex: zIndex.introSection,
  gap: '0.8rem',
});

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const text = style({
  ...typography.sub5_m_20,
  color: themeVars.color.grayscale.gray500,
  whiteSpace: 'pre-wrap',
  textAlign: 'left',
});

export const stepFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  minWidth: 0,
  position: 'relative',
  zIndex: zIndex.contentSection,
  backgroundColor: themeVars.color.grayscale.gray200,
});
