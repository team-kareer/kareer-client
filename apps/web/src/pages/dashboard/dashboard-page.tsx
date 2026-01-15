import UploadBox from '@widgets/fit-analysis/ui/upload-box/upload-box';

const DashboardPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: '20px',
        height: '200px',
      }}
    >
      <UploadBox />
    </div>
  );
};

export default DashboardPage;
