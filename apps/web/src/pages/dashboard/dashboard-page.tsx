import { Tag } from '@kds/ui';

const DashboardPage = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h1>Tag 컴포넌트 테스트</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <Tag color="primary_blue">text</Tag>
        <Tag color="primary_black">text</Tag>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <Tag color="pastel_blue">text</Tag>
        <Tag color="pastel_red">text</Tag>
        <Tag color="pastel_mint">text</Tag>
        <Tag color="pastel_orange">text</Tag>
        <Tag color="pastel_pink">text</Tag>
        <Tag color="pastel_purple">text</Tag>
        <Tag color="pastel_skyblue">text</Tag>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <Tag color="outlined_blue">text</Tag>
        <Tag color="outlined_black">text</Tag>
        <Tag color="disabled_gray">text</Tag>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <Tag color="navigation">home</Tag>
      </div>
    </div>
  );
};

export default DashboardPage;
