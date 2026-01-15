import { useState } from 'react';

export const useAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const animationDuration = 500;

  const toggle = () => {
    if (!isOpen) {
      // 열 때: 먼저 렌더링하고 애니메이션 시작
      setShouldRender(true);
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    } else {
      // 닫을 때: 애니메이션 끝난 후 언마운트
      setIsOpen(false);
      setTimeout(() => {
        setShouldRender(false);
      }, animationDuration);
    }
  };

  return { isOpen, shouldRender, toggle };
};
