import { style } from '@vanilla-extract/css';

import { color, typography } from '@kds/ui/styles';

const base = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  borderRadius: '1rem',
  padding: '1.2rem 1.6rem',

  // 기본 상태
  backgroundColor: color.grayscale.white,
  border: `1.5px solid transparent`,

  selectors: {
    // 호버 상태
    '&:hover': {
      backgroundColor: color.primary[100],
      border: `1.5px solid ${color.primary[300]}`,
    },
    // 클릭 상태
    '&:active': {
      backgroundColor: color.primary[200],
      border: `1.5px solid ${color.primary[400]}`,
    },
  },
});

export const actionCard = base;

export const titleStyle = style({
  ...typography.body7_sb_14,
  color: color.grayscale.gray800,

  selectors: {
    [`${base}:hover &`]: {
      color: color.primary[500],
    },
    [`${base}:active &`]: {
      color: color.primary[500],
    },
  },
});

export const subTitleStyle = style({
  ...typography.cap3_r_12,
  color: color.grayscale.gray400,

  selectors: {
    [`${base}:hover &`]: {
      color: color.primary[300],
    },
    [`${base}:active &`]: {
      color: color.primary[300],
    },
  },
});

export const dateStyle = style({
  ...typography.cap2_m_12,
  color: color.grayscale.gray500,
  marginTop: '0.5rem',

  selectors: {
    [`${base}:hover &`]: {
      color: color.primary[400],
    },
    [`${base}:active &`]: {
      color: color.primary[400],
    },
  },
});
