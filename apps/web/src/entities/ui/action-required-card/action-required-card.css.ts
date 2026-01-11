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
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: color.primary[100],
      border: `1.5px solid ${color.primary[300]}`,
    },
    '&:active:not(:has(button:active))': {
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

// disabled 상태 스타일
export const disabledContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '0.8rem',

  borderRadius: '10px',
  padding: '1.2rem 1.6rem',
  border: `1.5px solid transparent`,
  backgroundColor: color.grayscale.gray200,
});

// 타이틀 스타일
export const titleStyle = style({
  ...typography.body7_sb_14,
  color: color.grayscale.gray800,
  selectors: {
    [`${container}:hover &`]: {
      color: color.primary[500],
    },
  },
});

// disabled 상태 타이틀 스타일
export const disabledTitleStyle = style({
  ...typography.body7_sb_14,
  color: color.grayscale.gray500,
});

// 서브타이틀 스타일
export const subTitleStyle = style({
  ...typography.cap3_r_12,
  color: color.grayscale.gray400,
  selectors: {
    [`${container}:hover &`]: {
      color: color.primary[300],
    },
  },
});

// disabled 상태 서브타이틀 스타일
export const disabledSubTitleStyle = style({
  ...typography.cap3_r_12,
  color: color.grayscale.gray400,
});

export const dueDateStyle = style({
  ...typography.cap2_m_12,
  color: color.grayscale.gray500,
  marginTop: '0.4rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  selectors: {
    [`${container}:hover &`]: {
      color: color.primary[400],
    },
  },
});
