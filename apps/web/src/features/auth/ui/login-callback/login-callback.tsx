import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { exchangeGoogleCode } from '@features/auth/api/exchange-google-code';
import { tokenService } from '@shared/auth/token-service';
import { ROUTE_PATH } from '@shared/router';

const LoginCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');

    if (!code) {
      navigate(ROUTE_PATH.LOGIN, { replace: true });
      return;
    }

    const exchangeCode = async () => {
      try {
        const response = await exchangeGoogleCode(code);

        tokenService.saveAccessToken(response.data.accessToken);

        navigate(
          response.data.onboardingRequired
            ? ROUTE_PATH.ONBOARDING
            : ROUTE_PATH.DASHBOARD,
          { replace: true },
        );
      } catch {
        navigate(ROUTE_PATH.LOGIN, { replace: true });
      }
    };

    exchangeCode();
  }, [navigate]);

  return <div>Loading</div>;
};

export default LoginCallback;
