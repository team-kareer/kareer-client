import { color, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0.8rem',

  borderRadius: '10px',
  padding: '1.2rem 1.6rem',
  backgroundColor: color.grayscale.white,
  border: `1.5px solid transparent`,
  transition: 'background-color 0.2s ease, border-color 0.2s ease',

  selectors: {
    '&:hover': {
      backgroundColor: color.primary[100],
      border: `1.5px solid ${color.primary[300]}`,
    },
    '&:active': {
      backgroundColor: color.primary[200],
      border: `1.5px solid ${color.primary[400]}`,
    },
  },
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const titleStyle = style({
  ...typography.body7_sb_14,
  color: color.grayscale.gray800,
  selectors: {
    [`${container}:hover &, ${container}:active &`]: {
      color: color.primary[500],
    },
  },
});

export const subTitleStyle = style({
  ...typography.cap3_r_12,
  color: color.grayscale.gray400,
  selectors: {
    [`${container}:hover &, ${container}:active &`]: {
      color: color.primary[300],
    },
  },
});

export const dueDateStyle = style({
  ...typography.cap2_m_12,
  color: color.grayscale.gray500,
  marginTop: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  lineHeight: '14px',
  selectors: {
    [`${container}:hover &, ${container}:active &`]: {
      color: color.primary[400],
    },
  },
});
