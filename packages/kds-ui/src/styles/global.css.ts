import { globalStyle } from '@vanilla-extract/css';

import { width } from './tokens/width.css';

globalStyle('html, body', {
  minWidth: width.minWidth,
  height: '100dvh',
  overflow: 'hidden',
  padding: '0',
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

globalStyle('body', {
  display: 'flex',
  justifyContent: 'center',
});

globalStyle('#root', {
  width: width.minWidth,
});
