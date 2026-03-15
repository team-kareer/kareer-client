import { Button } from '@kds/ui';
import { useMutation } from '@tanstack/react-query';

import { AUTH_MUTATION_OPTIONS } from '@features/auth/model/logout';

// TODO: 제거 예정
const TestLogoutButton = () => {
  const { mutate } = useMutation({
    ...AUTH_MUTATION_OPTIONS.LOGOUT(),
  });
  return (
    <Button preset="large_outlined" onClick={() => mutate()}>
      <p>로그아웃</p>
    </Button>
  );
};

export default TestLogoutButton;
