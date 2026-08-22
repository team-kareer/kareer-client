import { themeVars } from '@kds/ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const jobCard = style({
  overflow: 'hidden',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.white,
});

export const jobImage = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: '7.2rem',
  padding: '0.8rem',
  background: `linear-gradient(135deg, ${themeVars.color.grayscale.gray300}, ${themeVars.color.grayscale.gray400})`,
});

export const deadline = style({
  padding: '0.2rem 0.8rem',
  borderRadius: '99px',
  color: themeVars.color.grayscale.gray800,
  backgroundColor: themeVars.color.grayscale.white,
  fontSize: '1rem',
  fontWeight: 600,
});

export const jobBody = style({
  padding: '0.8rem 1rem',
});

export const company = style({
  marginBottom: '0.2rem',
  color: themeVars.color.grayscale.gray500,
  fontSize: '0.9rem',
  fontWeight: 600,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

export const jobTitle = style({
  marginBottom: '0.4rem',
  color: themeVars.color.grayscale.gray800,
  fontSize: '1.1rem',
  fontWeight: 700,
  lineHeight: 1.3,
});

export const date = style({
  marginBottom: '0.6rem',
  color: themeVars.color.grayscale.gray500,
  fontSize: '1rem',
});

export const jobTags = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.4rem',
});

const jobTagBase = style({
  padding: '0.2rem 0.7rem',
  borderRadius: '99px',
  fontSize: '0.9rem',
  fontWeight: 500,
  whiteSpace: 'nowrap',
});

export const jobTag = styleVariants({
  blue: [
    jobTagBase,
    {
      border: `1px solid ${themeVars.color.primary[300]}`,
      color: themeVars.color.primary[600],
      backgroundColor: themeVars.color.primary[100],
    },
  ],
  green: [
    jobTagBase,
    {
      border: `1px solid ${themeVars.color.pastel.kamint_500}`,
      color: themeVars.color.pastel.kamint_500,
      backgroundColor: themeVars.color.pastel.kamint_100,
    },
  ],
  orange: [
    jobTagBase,
    {
      border: `1px solid ${themeVars.color.pastel.kaorange_500}`,
      color: themeVars.color.pastel.kaorange_500,
      backgroundColor: themeVars.color.pastel.kaorange_100,
    },
  ],
  gray: [
    jobTagBase,
    {
      border: `1px solid ${themeVars.color.grayscale.gray300}`,
      color: themeVars.color.grayscale.gray700,
      backgroundColor: themeVars.color.grayscale.gray100,
    },
  ],
});
