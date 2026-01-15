import { createContext, useContext } from 'react';

interface TabContextProps {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export const TabContext = createContext<TabContextProps | null>(null);

export const useTabContext = () => {
  const tabContext = useContext(TabContext);

  if (!tabContext) {
    throw new Error('Tab 컴포넌트는 Tab.Container 내부에서 사용해주세요.');
  }

  return tabContext;
};
