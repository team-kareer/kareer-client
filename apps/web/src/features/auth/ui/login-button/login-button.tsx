import { ArrowRightIcon } from '@kds/icons';
import { Button } from '@kds/ui';
import { useTranslation } from 'react-i18next';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton = ({ onClick }: LoginButtonProps) => {
  const { t } = useTranslation('login');

  return (
    <Button preset="large_outlined" onClick={onClick}>
      <p>{t('actions.googleLogin')}</p>
      <ArrowRightIcon width={19} height={19} />
    </Button>
  );
};

export default LoginButton;
