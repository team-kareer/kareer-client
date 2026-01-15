import { Input } from '@kds/ui';

const DashboardPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        flexDirection: 'column',
        width: '33rem',
      }}
    >
      <Input placeholder="기본 입력창" status="default" />

      <Input placeholder="에러 상태" status="error" />

      <Input placeholder="성공 상태" status="success" />
    </div>
  );
};

export default DashboardPage;
