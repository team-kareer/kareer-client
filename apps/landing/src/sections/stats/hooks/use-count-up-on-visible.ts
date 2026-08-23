import { useEffect, useRef, useState } from 'react';

const ANIMATION_DURATION = 1800;
const VISIBLE_THRESHOLD = 0.15;

const useCountUpOnVisible = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let animationFrameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();

        const startTime = performance.now();
        const updateProgress = (currentTime: number) => {
          const elapsedRatio = Math.min(
            (currentTime - startTime) / ANIMATION_DURATION,
            1,
          );
          setProgress(1 - Math.pow(1 - elapsedRatio, 3));

          if (elapsedRatio < 1) {
            animationFrameId = requestAnimationFrame(updateProgress);
          }
        };

        animationFrameId = requestAnimationFrame(updateProgress);
      },
      { threshold: VISIBLE_THRESHOLD },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { containerRef, progress };
};

export default useCountUpOnVisible;
