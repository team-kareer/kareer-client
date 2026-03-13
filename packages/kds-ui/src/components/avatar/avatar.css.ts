import { recipe } from '@vanilla-extract/recipes';

export const img = recipe({
  base: {
    borderRadius: '50%',
    anchorName: '--anchor-user-profile',
  },
  variants: {
    size: {
      mini: {
        width: '5.2rem',
        height: '5.2rem',
      },
      // 마이페이지에서 사용할 크기
      // default: {
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
