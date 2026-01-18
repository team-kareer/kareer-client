import { useCallback, useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const timerRef = useRef<number | null>(null);
  const timeout = 1000;

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onScroll = useCallback(() => {
    if (!timerRef.current) {
      setIsScrolling(true);
    } else {
      clearTimeout(timerRef.current);
    }

    timerRef.current = window.setTimeout(() => {
      setIsScrolling(false);
      timerRef.current = null;
    }, timeout);
  }, [timeout]);

  return {
    onScroll,
    className: isScrolling ? 'scroll-visible' : 'scroll-hidden',
  };
};
