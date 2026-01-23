import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  variants: {
    type: {
      company: {
        ...typography.cap2_m_12,
        color: themeVars.color.grayscale.gray400,
      },
      title: {
        ...typography.body4_sb_16,
        color: themeVars.color.grayscale.gray800,
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
      },
      dueDate: {
        ...typography.cap2_m_12,
        color: themeVars.color.grayscale.gray500,
      },
    },
  },
});

export const container = style({
  display: 'flex',
  gap: '1.2rem',
  padding: '1.6rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
  flexDirection: 'column',
  width: '100%',
  aspectRatio: '234 / 302',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    transform: 'translateY(-8px)',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
  },
});

export const imageBox = style({
  position: 'relative',
  width: '100%',
  minWidth: '20.2rem',
  minHeight: '12rem',
  flex: 1,
  borderRadius: '10px',
  overflow: 'hidden',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

export const dDayTag = style({
  position: 'absolute',
  top: '0.8rem',
  left: '0.8rem',
  zIndex: 'tag',
});

export const scrapButtonWrapper = style({
  flexShrink: 0,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.2rem',
  flexShrink: 0,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  flex: 1,
  minWidth: 0,
});

export const tagsWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.4rem',
  flexWrap: 'wrap',
  flexDirection: 'column',
});
