import { Accordion } from '@widgets/roadmap';

import * as styles from './accordion-list.css';

const mockData = [
  {
    phase: 1,
    title: 'Verify Requirements',
    subTitle: 'Initial setup and documentation',
    dueDate: 'Sep. 2025 - Nov.  2025',
  },
  {
    phase: 2,
    title: 'Title Here',
    subTitle: 'Sub-text here',
    dueDate: 'Mon. 20XX - Mon.  20XX',
  },
  {
    phase: 3,
    title: 'D-10 Transition',
    subTitle: 'Initial setup and documentation',
    dueDate: 'Sep. 2025 - Nov.  2025',
  },
];

const AccordionList = () => {
  // 추후 api 응답 값으로 변경
  return (
    <section className={styles.container}>
      {mockData.map((data) => (
        <Accordion
          key={data.title}
          phase={data.phase}
          title={data.title}
          subTitle={data.subTitle}
          dueDate={data.dueDate}
        />
      ))}
    </section>
  );
};

export default AccordionList;
