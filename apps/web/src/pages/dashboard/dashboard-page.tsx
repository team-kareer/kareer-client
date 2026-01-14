import { useState } from 'react';

import { TextField } from '../../shared/ui/text-field/text-field';

const MAX_LENGTH = 1000;

const PLACEHOLDER_TEXTS = {
  developer:
    'e.g : I built a campus delivery app using React and Spring Boot for my Capstone project. I manage my GitHub actively and placed 2nd in a university hackathon. I also worked as a back-end intern at a fintech startup and hold an Engineer Information Processing certification.',
  data: 'e.g : I worked as a research assistant in the Big Data Lab, analyzing Seoul tourism patterns using Python and Tableau. I participated in a Dacon data competition and reached the top 10%. I have a strong command of SQL for data extraction and hold ADsP and SQLD certifications. I also led a study group for deep learning basics.',
  marketing:
    "e.g : I operated a K-beauty Instagram account reaching 10k followers. I worked as a Global Student Reporter for the Seoul Metropolitan Government and participated in the 'International Student Supporters' program. I am proficient in Adobe Photoshop (GTQ Level 1) and video editing. I also interned at a cosmetics company, assisting with overseas sales and English-Korean translation.",
  business:
    'e.g : I co-founded a small campus startup platform for trading used textbooks. I served as the president of the International Student Association, organizing cultural exchange festivals. I won the Excellence Award in a Business Idea Contest sponsored by the university. I have advanced Excel skills (MOS Master) and experience in import/export logistics from a trading company internship.',
} as const;

const DashboardPage = () => {
  const [developer, setDeveloper] = useState('');
  const [data, setData] = useState('');
  const [marketing, setMarketing] = useState('');
  const [business, setBusiness] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        value={developer}
        onChange={(e) => setDeveloper(e.target.value)}
        placeholder={PLACEHOLDER_TEXTS.developer}
        maxLength={MAX_LENGTH}
      />
      <TextField
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder={PLACEHOLDER_TEXTS.data}
        maxLength={MAX_LENGTH}
      />
      <TextField
        value={marketing}
        onChange={(e) => setMarketing(e.target.value)}
        placeholder={PLACEHOLDER_TEXTS.marketing}
        maxLength={MAX_LENGTH}
      />
      <TextField
        value={business}
        onChange={(e) => setBusiness(e.target.value)}
        placeholder={PLACEHOLDER_TEXTS.business}
        maxLength={MAX_LENGTH}
      />
    </div>
  );
};

export default DashboardPage;
