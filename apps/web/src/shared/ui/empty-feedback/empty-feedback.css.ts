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
    gap: '1.6rem',
  },
  variants: {
    variant: {
      // 수정
      page: {
        width: '100%',
        height: '113.6rem',
        backgroundColor: themeVars.color.grayscale.gray100,
      },
      section: {
        width: '96.6rem',
        height: '30.2rem',
        backgroundColor: themeVars.color.grayscale.gray200,
      },
      card: {
        width: '21.6rem',
        height: '29.9rem',
        backgroundColor: themeVars.color.grayscale.gray100,
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
  justifyContent: 'center',
  gap: '0.8rem',
});

export const title = recipe({
  base: { textAlign: 'center' },
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
  base: { textAlign: 'center', marginTop: '8px', whiteSpace: 'pre-wrap' }, // 줄바꿈 처리용
  variants: {
    variant: {
      page: [
        typography.head5_r_24,
        { color: themeVars.color.grayscale.gray600 },
      ],
      section: [
        typography.body2_m_18,
        { color: themeVars.color.grayscale.gray500 },
      ],
      card: [
        typography.body9_r_14,
        { color: themeVars.color.grayscale.gray400 },
      ],
    },
  },
});
