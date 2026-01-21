import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { bg_career_roadmap } from '@shared/assets';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  padding: '2rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
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
  backgroundImage: `url(${bg_career_roadmap})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '10px',
});
