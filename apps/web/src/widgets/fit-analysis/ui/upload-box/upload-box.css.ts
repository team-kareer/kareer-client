import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
});

export const actionSection = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '0.8rem',
});

export const fileContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.2rem 1.6rem',
  backgroundColor: themeVars.color.grayscale.white,
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '10px',
  flex: 1,
  minWidth: 0,
  width: '100%',
});

export const fileSection = style({
  display: 'flex',
  gap: '2rem',
});

export const fileWrapper = style({
  display: 'flex',
  gap: '0.4rem',
});

export const fileName = style({
  maxWidth: '16rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const fileInput = style({
  display: 'none',
});

export const checkSection = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
});

export const checkText = style({
  ...typography.body9_r_14,
  color: themeVars.color.grayscale.gray500,
});

export const infoSection = style({
  display: 'flex',
  gap: '1.6rem',
});

export const info = style({
  ...typography.cap3_r_12,
  color: themeVars.color.grayscale.gray500,
});

export const notice = style({
  ...typography.cap3_r_12,
  color: themeVars.color.pastel.kared_500,
});
