import { ROUTE_PATH } from '@shared/router/path';
import { EmptyLayout } from '@shared/ui';
export interface ErrorPageProps {
  onAction?: () => void;
  isNotFound?: boolean;
}

const ErrorPage = ({ onAction, isNotFound }: ErrorPageProps) => {
  const handleAction = () => {
    if (isNotFound) {
      window.location.replace(ROUTE_PATH.DASHBOARD);
      return;
    }

    if (onAction) {
      onAction();
      return;
    }

    window.location.reload();
  };

  return (
    <EmptyLayout
      variant="page"
      onAction={handleAction}
      title={isNotFound ? 'Page Not Found' : undefined}
      subtitle={
        isNotFound ? 'The page you are looking for does not exist.' : undefined
      }
      buttonLabel={isNotFound ? 'Go to Dashboard' : undefined}
    />
  );
};

export default ErrorPage;
