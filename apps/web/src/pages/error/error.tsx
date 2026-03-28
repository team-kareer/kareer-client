import { useTranslation } from 'react-i18next';

import { ROUTE_PATH } from '@shared/router/path';
import { EmptyLayout } from '@shared/ui';
export interface ErrorPageProps {
  onAction?: () => void;
  isNotFound?: boolean;
}

const ErrorPage = ({ onAction, isNotFound }: ErrorPageProps) => {
  const { t } = useTranslation('empty');

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
      title={isNotFound ? t('notFound.title') : undefined}
      subtitle={isNotFound ? t('notFound.description') : undefined}
      buttonLabel={isNotFound ? t('notFound.button') : undefined}
    />
  );
};

export default ErrorPage;
