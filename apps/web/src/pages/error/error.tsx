import ErrorLayout from '@shared/ui/empty-feedback/empty-feedback';

const ErrorPage = () => {
  return (
    <div>
      <ErrorLayout variant="page" onAction={() => window.location.reload()} />
    </div>
  );
};

export default ErrorPage;
