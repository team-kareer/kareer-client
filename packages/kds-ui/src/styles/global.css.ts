import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  width: '100dvw',
  height: '100dvh',
  margin: '0',
  padding: '0',
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
