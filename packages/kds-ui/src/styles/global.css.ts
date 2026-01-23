import { globalStyle } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

globalStyle('html, body', {
  overflow: 'hidden',
  padding: '0',
  fontSize: '78.125%',
  // fontSize: '62.5%',
  fontFamily: `'Pretendard Variable', sans-serif`,
});

globalStyle('#root', {
  width: '100%',
  height: '100dvh',
  boxShadow: '0 0 24px rgba(0, 0, 0, 0.12)',
});

globalStyle('*::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('main::-webkit-scrollbar', {
  display: 'block',
  width: '1.65rem',
  height: '100%',
});

globalStyle('main.scroll-visible', {
  color: themeVars.color.primary[300],
  transition: 'all 0.4s ease-in-out',
});

globalStyle('main.scroll-hidden', {
  color: 'transparent',
  transition: 'all 0.4s ease-in-out',
});

globalStyle('main::-webkit-scrollbar-thumb', {
  border: '5.3px solid transparent',
  borderRadius: '20px',
  boxShadow: 'inset 11px 11px 0',
});

globalStyle('main::-webkit-scrollbar-track', {
  boxShadow: 'none',
  backgroundColor: 'transparent',
});
