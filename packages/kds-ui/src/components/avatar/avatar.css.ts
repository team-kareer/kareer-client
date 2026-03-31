import { recipe } from '@vanilla-extract/recipes';

export const img = recipe({
  base: {
    borderRadius: '50%',
  },
  variants: {
    use: {
      mypage: {
        width: '6.4rem',
        height: '6.4rem',
      },
      header: {
        anchorName: '--anchor-user-profile',
        width: '5.2rem',
        height: '5.2rem',
      },
      popover: {
        width: '4.2rem',
        height: '4.2rem',
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      },
    },
  },
});
