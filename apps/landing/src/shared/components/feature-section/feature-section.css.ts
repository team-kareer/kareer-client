import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    padding: '8.8rem 4.8rem',
  },
  variants: {
    background: {
      default: {
        backgroundColor: themeVars.color.grayscale.white,
      },
      muted: {
        backgroundColor: themeVars.color.grayscale.gray100,
      },
    },
  },
});

export const inner = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '7.2rem',
    maxWidth: '104rem',
    margin: '0 auto',
  },
  variants: {
    previewPosition: {
      left: {
        flexDirection: 'row-reverse',
      },
      right: {
        flexDirection: 'row',
      },
    },
  },
});

export const content = style({
  flex: 1,
});

export const featureLabel = style({
  marginBottom: '1.2rem',
  color: themeVars.color.primary[500],
  fontSize: '1.1rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

export const title = style({
  marginBottom: '1.4rem',
  color: themeVars.color.grayscale.gray800,
  fontSize: '3.6rem',
  fontWeight: 800,
  lineHeight: 1.2,
  letterSpacing: '-0.02em',
  whiteSpace: 'pre-line',
});

export const description = style({
  ...typography.body6_r_16,
  maxWidth: '44rem',
  color: themeVars.color.grayscale.gray700,
  lineHeight: 1.75,
});

export const preview = style({
  flex: 1,
});
