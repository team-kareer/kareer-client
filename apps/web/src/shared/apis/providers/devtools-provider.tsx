import { lazy, Suspense, useEffect, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  })),
);

const DevtoolsProvider = () => {
  const [showDevtools, setShowDevtools] = useState(false);

  useEffect(() => {
    // window 객체에 함수 등록
    // @ts-expect-error : window에 원래 있는 속성이 아니라서 ts 에러가 나니 무시
    window.toggleDevtools = () => setShowDevtools((prev) => !prev);
  }, []);

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )}
    </>
  );
};

export default DevtoolsProvider;
