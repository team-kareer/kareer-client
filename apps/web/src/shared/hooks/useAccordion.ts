import { useEffect, useState } from 'react';

export const useAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const animationDuration = 500;

  const open = () => {
    setShouldRender(true);
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShouldRender(false);
    }, animationDuration);
  };

  const toggle = () => {
    if (!isOpen) {
      open();
    } else {
      close();
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

  return { isOpen, shouldRender, toggle, open, close };
};
