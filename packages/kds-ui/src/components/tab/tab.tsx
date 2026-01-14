import { ReactNode, useState } from 'react';

import { TabContext, useTabContext } from './hooks/use-tab-context';

interface ContainerProps {
  children: ReactNode;
  initialValue: string;
  className?: string;
}

interface ListProps {
  children: ReactNode;
  className?: string;
}

interface PanelProps {
  children: ReactNode;
  tab: string;
  className?: string;
}

const Container = ({ children, initialValue, className }: ContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <nav className={className}>{children}</nav>
    </TabContext.Provider>
  );
};

const List = ({ children, className }: ListProps) => {
  return <div className={className}>{children}</div>;
};

const Panel = ({ children, tab, className }: PanelProps) => {
  const { selectedTab } = useTabContext();
  const isActive = selectedTab === tab;

  if (!isActive) {
    return null;
  }

  return <article className={className}>{children}</article>;
};

const Tab = {
  Container: Container,
  List: List,
  Panel: Panel,
};

export default Tab;
