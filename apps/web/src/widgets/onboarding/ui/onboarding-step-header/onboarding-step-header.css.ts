import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  padding: '1.2rem 1.6rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '2rem',
  backgroundColor: themeVars.color.grayscale.gray100,
  marginRight: '6.6rem',
  overflow: 'hidden',
});

const passedLine = {
  borderBottom: `1px solid ${themeVars.color.primary[900]}`,
} as const;

const pendingLine = {
  borderBottom: `1px dashed ${themeVars.color.grayscale.gray600}`,
} as const;

export const line = recipe({
  base: {
    flex: 1,
  },
  variants: {
    status: {
      Done: passedLine,
      'In Process': pendingLine,
      Disabled: pendingLine,
    },
  },
});
