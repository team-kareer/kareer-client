import { useEffect, useState } from 'react';

export const useAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const animationDuration = 500;

  const toggle = () => {
    if (!isOpen) {
      setShouldRender(true);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        setShouldRender(false);
      }, animationDuration);
    }
  };

  useEffect(() => {
    if (shouldRender) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsOpen(true);
        });
      });
    }
  }, [shouldRender]);

  return { isOpen, shouldRender, toggle };
};
