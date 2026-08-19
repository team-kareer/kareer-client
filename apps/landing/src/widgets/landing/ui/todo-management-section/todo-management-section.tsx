import { useTranslation } from 'react-i18next';

import FeatureSection from '../feature-section/feature-section';
import TodoManagementPreview from './todo-management-preview';

const TodoManagementSection = () => {
  const { t } = useTranslation('landing');

  return (
    <FeatureSection
      featureLabel={t('features.todo.label')}
      title={t('features.todo.title')}
      description={t('features.todo.description')}
      preview={<TodoManagementPreview />}
      background="muted"
    />
  );
};

export default TodoManagementSection;
