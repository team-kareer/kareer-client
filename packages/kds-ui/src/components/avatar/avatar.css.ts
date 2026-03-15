import { recipe } from '@vanilla-extract/recipes';

export const img = recipe({
  base: {
    borderRadius: '50%',
    anchorName: '--anchor-user-profile',
  },
  variants: {
    use: {
      mypage: {
        width: '6.4rem',
        height: '6.4rem',
      },
      header: {
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
