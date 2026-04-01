import { themeVars } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '20px',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
});

export const section = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 33rem)',
  gap: '2.4rem',
  selectors: {
    '& + &': {
      borderTop: `1px solid ${themeVars.color.grayscale.gray300}`,
      paddingTop: '2.8rem',
      marginTop: '2.8rem',
    },
  },
});
