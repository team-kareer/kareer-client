import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// 개선 필요, 중복 코드 제거도
export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      page: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: themeVars.color.grayscale.gray100,
      },
      section: {
        maxWidth: '96.6rem',
        minHeight: '30.2rem',
        backgroundColor: themeVars.color.grayscale.gray200,
        borderRadius: '2rem',
      },
      card: {
        maxWidth: '21.6rem',
        minHeight: '29.9rem',
        backgroundColor: themeVars.color.grayscale.gray100,
        borderRadius: '1rem',
      },
    },
  },
});

export const iconWrapper = recipe({
  variants: {
    variant: {
      page: { marginBottom: '1.2rem' },
      section: { marginBottom: '0rem' },
      card: { marginBottom: '0.4rem' },
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const title = recipe({
  variants: {
    variant: {
      page: [
        typography.head2_sb_32,
        { color: themeVars.color.grayscale.gray500 },
      ],
      section: [
        typography.sub1_sb_22,
        { color: themeVars.color.grayscale.gray700 },
      ],
      card: [
        typography.body1_sb_18,
        { color: themeVars.color.grayscale.gray500 },
      ],
    },
  },
});

export const subtitle = recipe({
  base: { whiteSpace: 'pre-wrap' },
  variants: {
    variant: {
      page: [
        typography.head5_r_24,
        { color: themeVars.color.grayscale.gray400 },
        { marginBottom: '2.4rem' },
      ],
      section: [
        typography.body2_m_18,
        { color: themeVars.color.grayscale.gray500 },
        { marginBottom: '1.6rem' },
      ],
      card: [
        typography.body9_r_14,
        { color: themeVars.color.grayscale.gray400 },
        { marginBottom: '2rem' },
      ],
    },
  },
});
