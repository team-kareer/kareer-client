import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '14px',
  backgroundColor: themeVars.color.grayscale.white,
  boxShadow: '0 8px 40px rgba(59, 110, 248, 0.08)',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '1.6rem',
});

export const heading = style({
  color: themeVars.color.grayscale.gray800,
  fontSize: '1.2rem',
  fontWeight: 700,
});

export const headingAccent = style({
  color: themeVars.color.primary[500],
});

export const phaseCount = style({
  color: themeVars.color.grayscale.gray500,
  fontSize: '1rem',
});

export const phases = style({
  display: 'flex',
  position: 'relative',
  marginBottom: '1.8rem',

  selectors: {
    '&::before': {
      position: 'absolute',
      top: '1.4rem',
      right: '2.8rem',
      left: '2.8rem',
      height: '2px',
      zIndex: 0,
      background: `linear-gradient(90deg, ${themeVars.color.grayscale.gray300} 33%, ${themeVars.color.primary[500]} 33%, ${themeVars.color.primary[500]} 66%, ${themeVars.color.grayscale.gray300} 66%)`,
      content: '',
    },
  },
});

export const phase = style({
  position: 'relative',
  flex: 1,
  zIndex: 1,
  textAlign: 'center',
});

export const phaseDot = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '2.8rem',
    height: '2.8rem',
    margin: '0 auto 0.6rem',
    borderRadius: '50%',
    fontSize: '1.1rem',
    fontWeight: 700,
  },
  variants: {
    state: {
      past: {
        color: themeVars.color.grayscale.gray500,
        backgroundColor: themeVars.color.grayscale.gray300,
      },
      current: {
        color: themeVars.color.grayscale.white,
        backgroundColor: themeVars.color.primary[500],
        boxShadow: '0 0 0 4px rgba(59, 110, 248, 0.2)',
      },
      future: {
        border: `2px solid ${themeVars.color.grayscale.gray300}`,
        color: themeVars.color.grayscale.gray500,
        backgroundColor: themeVars.color.grayscale.white,
      },
    },
  },
});

export const phaseName = recipe({
  base: {
    color: themeVars.color.grayscale.gray500,
    fontSize: '1rem',
    lineHeight: 1.3,
    whiteSpace: 'pre-line',
  },
  variants: {
    current: {
      true: {
        color: themeVars.color.primary[500],
        fontWeight: 600,
      },
    },
  },
});

export const phaseStatus = recipe({
  base: {
    marginTop: '0.2rem',
    fontSize: '0.9rem',
  },
  variants: {
    tone: {
      warning: {
        color: themeVars.color.pastel.kared_500,
      },
      primary: {
        color: themeVars.color.primary[500],
      },
      muted: {
        color: themeVars.color.grayscale.gray500,
      },
    },
  },
});

export const actions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const action = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.9rem',
    padding: '0.9rem 1.2rem',
    border: `1px solid ${themeVars.color.grayscale.gray300}`,
    borderRadius: '9px',
    color: themeVars.color.grayscale.gray800,
    fontSize: '1.2rem',
  },
  variants: {
    state: {
      active: {
        borderColor: themeVars.color.primary[300],
        backgroundColor: themeVars.color.primary[100],
      },
      default: {},
      completed: {
        opacity: 0.45,
      },
    },
  },
});

export const actionTag = recipe({
  base: {
    padding: '0.2rem 0.7rem',
    borderRadius: '99px',
    fontSize: '0.9rem',
    fontWeight: 600,
  },
  variants: {
    tone: {
      visa: {
        color: themeVars.color.primary[500],
        backgroundColor: themeVars.color.primary[100],
      },
      career: {
        color: themeVars.color.pastel.kamint_500,
        backgroundColor: themeVars.color.pastel.kamint_100,
      },
    },
  },
});

export const actionLabel = recipe({
  variants: {
    completed: {
      true: {
        color: themeVars.color.grayscale.gray500,
        textDecoration: 'line-through',
      },
    },
  },
});

export const actionDate = style({
  marginLeft: '0.4rem',
  color: themeVars.color.grayscale.gray500,
  fontSize: '1rem',
});

export const todoAction = style({
  marginLeft: 'auto',
  padding: '0.3rem 0.9rem',
  border: `1px solid ${themeVars.color.primary[500]}`,
  borderRadius: '99px',
  color: themeVars.color.primary[500],
  fontSize: '1rem',
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

export const actionResult = style({
  marginLeft: 'auto',
  color: themeVars.color.pastel.kamint_500,
  fontSize: '1rem',
  fontWeight: 600,
});
