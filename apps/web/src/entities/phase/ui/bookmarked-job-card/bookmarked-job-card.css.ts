import { themeVars, typography } from '@kds/ui/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '1.2rem',
  padding: '1.6rem',
  border: `1px solid ${themeVars.color.grayscale.gray300}`,
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
  flexDirection: 'column',
  width: '20.2rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    // 어두워지고 버튼이 생김
  },
});

export const imageBox = style({
  position: 'relative', // 스크랩 버튼 absolute 위치 지정용
  width: '100%',
  height: '12rem',
  borderRadius: '10px',
  backgroundColor: themeVars.color.grayscale.gray100,
  overflow: 'hidden', // 이미지가 borderRadius 밖으로 나가지 않도록
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover', // 이미지 비율 유지하면서 영역 채우기
});

export const scrapButtonWrapper = style({
  flexShrink: 0,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: '1.2rem',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const companyName = style([
  typography.cap2_m_12,
  {
    color: themeVars.color.grayscale.gray400,
  },
]);

export const title = style([
  typography.body4_sb_16,
  {
    color: themeVars.color.grayscale.gray800,
    // 말줄임 표 추가
  },
]);

export const dueDate = style([
  typography.cap2_m_12,
  {
    color: themeVars.color.grayscale.gray500,
  },
]);

export const tagsWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.4rem',
  flexWrap: 'wrap',
});
