import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  variants: {
    layout: {
      page: {
        gap: '2.4rem',
        height: '100%',
      },
      section: {
        minHeight: '30.2rem',
        backgroundColor: themeVars.color.grayscale.gray200,
        borderRadius: '20px',
        gap: '1.6rem',
      },
      card: {
        minHeight: '29.9rem',
        backgroundColor: themeVars.color.grayscale.gray100,
        borderRadius: '20px',
        gap: '2rem',
      },
    },
  },
});

export const iconWrapper = recipe({
  variants: {
    layout: {
      page: { marginBottom: '1.2rem' },
      section: { marginBottom: '0rem' },
      card: { marginBottom: '0.4rem' },
    },
  },
});

export const textContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.4rem',
  width: '100%',
});

export const content = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  variants: {
    layout: {
      page: { gap: '2.4rem' },
      section: { gap: '1.6rem' },
      card: { gap: '2rem' },
    },
  },
});

export const title = recipe({
  variants: {
    layout: {
      page: {
        ...typography.head2_sb_32,
        color: themeVars.color.grayscale.gray500,
      },
      section: {
        ...typography.sub1_sb_22,
        color: themeVars.color.grayscale.gray700,
      },
      card: {
        ...typography.body1_sb_18,
        color: themeVars.color.grayscale.gray500,
      },
    },
  },
});

export const subtitle = recipe({
  base: { whiteSpace: 'pre-wrap' },
  variants: {
    layout: {
      page: {
        ...typography.head5_r_24,
        color: themeVars.color.grayscale.gray400,
      },
      section: {
        ...typography.body2_m_18,
        color: themeVars.color.grayscale.gray500,
      },
      card: {
        ...typography.body9_r_14,
        color: themeVars.color.grayscale.gray400,
      },
    },
  },
});
