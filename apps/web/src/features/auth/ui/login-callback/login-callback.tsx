import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

import { exchangeGoogleCode } from '@features/auth/api/exchange-google-code';
import { tokenService } from '@shared/auth/token-service';
import { ROUTE_PATH } from '@shared/router';

const LoginCallback = () => {
  const navigate = useNavigate();
  const hasExchangedRef = useRef(false);

  useEffect(() => {
    if (hasExchangedRef.current) {
      return;
    }
    hasExchangedRef.current = true;

    const code = new URLSearchParams(window.location.search).get('code');

    if (!code) {
      navigate(ROUTE_PATH.LOGIN, { replace: true });
      return;
    }

    const exchangeCode = async () => {
      try {
        const response = await exchangeGoogleCode(code);

        if (!response?.accessToken) {
          throw new Error('AccessToekn을 찾을 수 없습니다.');
        }

        tokenService.saveAccessToken(response.accessToken);

        navigate(
          response.onboardingRequired
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
