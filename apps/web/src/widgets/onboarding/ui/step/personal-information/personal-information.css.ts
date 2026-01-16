import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const contentTitleWrapper = style({
  paddingBottom: '3.2rem',
});

export const inputContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2.4rem',
  paddingRight: '6.6rem',
  paddingBottom: '1.1rem',
});

export const inputWrapper = style({
  width: '100%',
});

export const inputWrapperLeft = style({
  gridColumn: '1 / 2',
});

export const labelWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
});

export const label = style({
  ...typography.body7_sb_14,
  color: themeVars.color.grayscale.gray500,
  paddingBottom: '0.8rem',
});

export const subLabel = style({
  ...typography.body8_m_14,
  color: themeVars.color.grayscale.gray400,
});

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  paddingBottom: '0.8rem',
  gap: '0.4rem',
});
