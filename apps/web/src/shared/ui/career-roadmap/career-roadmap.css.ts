import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
});

export const header = recipe({
  base: {
    ...typography.body4_sb_16,
  },
  variants: {
    variant: {
      default: {
        color: themeVars.color.grayscale.gray800,
      },
      goal: {
        color: themeVars.color.primary[500],
      },
    },
  },
});

export const roadmap = style({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '1.2rem',
  padding: '2rem 12.1rem',
  // 영역 확인을 위한 배경색 - 추후 삭제 예정
  backgroundColor: '#F4F6FE',
  borderRadius: '10px',
});
