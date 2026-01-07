import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  width: '100%',
  height: '100dvh',
  padding: '0',
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
