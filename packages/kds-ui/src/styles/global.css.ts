import { globalStyle } from '@vanilla-extract/css';

import { height } from './tokens/height.css';
import { width } from './tokens/width.css';

globalStyle('html, body', {
  minWidth: '100vw',
  minHeight: '100vh',
  overflow: 'hidden',
  padding: '0',
  fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

globalStyle('body', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle('#root', {
  width: width.minWidth,
  height: height.minHeight,
  boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)',
});
