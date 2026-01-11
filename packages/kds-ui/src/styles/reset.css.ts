import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*:not(dialog)', {
  margin: 0,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('button', {
  border: 'none',
});

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root, #__next', {
  isolation: 'isolate',
  height: '100%',
});
