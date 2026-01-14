import { ArrowRightIcon } from '@kds/icons';
import { Button } from '@kds/ui';

const BUTTON_TEXT = 'Get Started Free with Google';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <Button preset="large_outlined" onClick={onClick}>
      <p>{BUTTON_TEXT}</p>
      <ArrowRightIcon width={19} height={19} />
    </Button>
  );
};

export default LoginButton;
