import { useState } from 'react';

import { Autocomplete } from '@kds/ui';

const MAJOR_OPTIONS = [
  'Frontend Developer',
  'Backend Developer',
  'Fullstack Developer',
  'Mobile Developer',
  'UI/UX Designer',
  'Product Manager',
  'Scrum Master',
  'DevOps Engineer',
  'Data Scientist',
  'AI Engineer',
  'Cybersecurity Engineer',
  'Game Developer',
  'Blockchain Developer',
  'System Administrator',
  'Network Engineer',
  'Database Administrator',
  'Security Analyst',
];

const DashboardPage = () => {
  const [value, setValue] = useState('');

  return (
    <div
      style={{
        padding: '2rem',
        width: '400px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: 'lightgray',
      }}
    >
      <Autocomplete
        value={value}
        onChange={setValue}
        options={MAJOR_OPTIONS}
        placeholder="Enter your major"
      />
    </div>
  );
};

export default DashboardPage;
