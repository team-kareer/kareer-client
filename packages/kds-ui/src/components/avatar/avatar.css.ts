import { recipe } from '@vanilla-extract/recipes';

export const img = recipe({
  base: {
    borderRadius: '50%',
    anchorName: '--anchor-user-profile',
  },
  variants: {
    size: {
      header: {
        width: '5.2rem',
        height: '5.2rem',
      },
      popover: {
        width: '4.2rem',
        height: '4.2rem',
      },
      // 마이페이지에서 사용할 크기
      // mypage: {
      // }
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
