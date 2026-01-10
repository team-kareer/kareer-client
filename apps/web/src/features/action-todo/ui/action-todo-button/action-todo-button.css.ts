import { style } from '@vanilla-extract/css';
import { color, typography } from '@kds/ui/styles';

export const actionTodoButton = style({
  ...typography.body7_sb_14,
  color: color.primary[500],
  backgroundColor: color.grayscale.white,
  borderRadius: '10px',
  border: `1px solid ${color.grayscale.gray300}`,
  padding: '0.75rem 1.2rem',
  cursor: 'pointer',
  display: 'flex',
  gap: '0.4rem',
  selectors: {
    '&:hover': {
      backgroundColor: color.grayscale.gray100,
    },
  },
});
