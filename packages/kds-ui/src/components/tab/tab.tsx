import { HTMLAttributes, ReactNode, useState } from 'react';

import { TabContext, useTabContext } from './hooks/use-tab-context';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  initialValue: string;
}

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface PanelProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tab: string;
}

const Container = ({
  children,
  initialValue,
  className,
  ...props
}: ContainerProps) => {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      <section className={className} {...props}>
        {children}
      </section>
    </TabContext.Provider>
  );
};

const List = ({ children, className, ...props }: ListProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

const Panel = ({ children, tab, className, ...props }: PanelProps) => {
  const { selectedTab } = useTabContext();
  const isActive = selectedTab === tab;

  if (!isActive) {
    return null;
  }

  return (
    <article className={className} {...props}>
      {children}
    </article>
  );
};

const Tab = {
  Container: Container,
  List: List,
  Panel: Panel,
};

export default Tab;
