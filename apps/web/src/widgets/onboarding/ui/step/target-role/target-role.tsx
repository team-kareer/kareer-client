import { Autocomplete, Checkbox } from '@kds/ui';

import { Controller, useWatch } from 'react-hook-form';

import { OnboardingForm, OnboardingStepTitle } from '@widgets/onboarding';

import * as styles from './target-role.css';
import { useFormContext } from 'react-hook-form';

const PLACEHOLDER = {
  PRIMARY_MAJOR: 'Enter your major',
  SECONDARY_MAJOR: 'Enter your major',
  TARGET_JOB: 'Enter your job',
};

const MAJOR_OPTIONS = [
  'Computer Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
];

const SECONDARY_MAJOR_OPTIONS = [
  'Software Engineer',
  'Data Scientist',
  'Product Manager',
  'Designer',
  'Other',
];

const TARGET_JOB_OPTIONS = [
  'Developer',
  'Production',
  'Marketer',
  'Planning & Strategy',
];

// 직무별 스킬/경험 옵션
interface SkillOption {
  id: string;
  title: string;
  description: string;
}

const JOB_SKILL_OPTIONS: Record<string, SkillOption[]> = {
  Developer: [
    {
      id: 'tech-stack',
      title: 'Tech Stack',
      description:
        'I have experience with these languages / frameworks (e.g., Java, Python, JavaScript, Spring, React, Node.js).',
    },
    {
      id: 'cs-tools',
      title: 'CS & Tools',
      description:
        'I understand basic CS topics (data structures, algorithms, databases) and use Git / GitHub regularly.',
    },
    {
      id: 'projects',
      title: 'Projects',
      description:
        'I have 1+ completed projects (personal, school, or team) with code on GitHub or a portfolio site.',
    },
    {
      id: 'team-work',
      title: 'Team / Work Experience',
      description:
        'I have worked on a team or real-world setting (internship, part-time, open-source, or collaboration with designers/PMs) as a developer.',
    },
  ],
  'Data Analyst': [
    {
      id: 'data-tools',
      title: 'Data Tools',
      description:
        'I can work with data using Excel/Google Sheets (formulas, pivot tables) and at least one BI tool (e.g., Tableau, Power BI)',
    },
    {
      id: 'sql-programming',
      title: 'SQL & Programming',
      description:
        'I can write basic SQL queries (SELECT, JOIN, GROUP BY) and have some experience with Python or R for data analysis.',
    },
    {
      id: 'analysis-storytelling',
      title: 'Analysis & Storytelling',
      description:
        'I have practiced turning data into insights (simple analysis, charts, or reports) and explaining results in plain language.',
    },
    {
      id: 'projects',
      title: 'Projects',
      description:
        'I have 1+ data projects (school, Kaggle, personal) that I can show in a portfolio or GitHub.',
    },
  ],
  Marketer: [
    {
      id: 'content-creative',
      title: 'Content & Creative',
      description:
        'I can plan and create engaging content (copywriting, images, short-form video) tailored to target audiences.',
    },
    {
      id: 'channels-trends',
      title: 'Channels & Trends',
      description:
        'I understand social media algorithms (Instagram, TikTok, Blog) and digital advertising basics.',
    },
    {
      id: 'data-experimentation',
      title: 'Data & Experimentation',
      description:
        'I have looked at simple marketing metrics (clicks, conversions, followers) and tried A/B tests or small experiments.',
    },
    {
      id: 'projects',
      title: 'Projects',
      description:
        'I have participated in at least one campaign or project (school club, side project, internship) with measurable outcomes.',
    },
  ],
  'Business / Sales': [
    {
      id: 'client-communication',
      title: 'Client Communication',
      description:
        'I am comfortable talking or writing with customers/partners in English or Korean (email, calls, meetings).',
    },
    {
      id: 'sales-tools-process',
      title: 'Sales Tools & Process',
      description:
        'I understand basic sales steps (prospection → meeting → proposal → follow-up) and have used simple CRM/spreadsheet tracking.',
    },
    {
      id: 'numbers-targets',
      title: 'Numbers & Targets',
      description:
        'I am used to working with simple sales KPIs (leads, meetings, revenue) and tracking them over time.',
    },
    {
      id: 'projects',
      title: 'Projects',
      description:
        'I have experience in a customer-facing role (part-time, internship, club, volunteering) where I had to persuade or negotiate.',
    },
  ],
};

const TargetRole = () => {
  const {
    control,
    setValue,
    // formState: { errors },
  } = useFormContext<OnboardingForm>();

  const targetJob = useWatch({
    control,
    name: 'targetJob',
    defaultValue: '',
  });

  const targetJobSkill = useWatch({
    control,
    name: 'targetJobSkill',
    defaultValue: '',
  });

  // 선택된 스킬들을 배열로 변환 (comma-separated string)
  const selectedSkills = targetJobSkill
    ? targetJobSkill.split(',').filter(Boolean)
    : [];

  // 현재 직무에 해당하는 스킬 옵션들
  const currentJobSkills = targetJob ? JOB_SKILL_OPTIONS[targetJob] || [] : [];

  // 스킬 체크박스 토글
  const handleSkillToggle = (skillId: string) => {
    const isSelected = selectedSkills.includes(skillId);
    const newSkills = isSelected
      ? selectedSkills.filter((id) => id !== skillId)
      : [...selectedSkills, skillId];
    setValue('targetJobSkill', newSkills.join(','));
  };

  return (
    <section>
      <OnboardingStepTitle stepNumber={3} title="Target Role" />
      <div className={styles.inputContainer}>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Primary Major</p>
          <Controller
            name="primaryMajor"
            control={control}
            rules={{ required: 'Enter your major' }}
            render={({ field }) => (
              <>
                <Autocomplete
                  {...field}
                  placeholder={PLACEHOLDER.PRIMARY_MAJOR}
                  options={MAJOR_OPTIONS}
                />
              </>
            )}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Secondary Major (Optional)</p>
          <Controller
            name="secondaryMajor"
            control={control}
            render={({ field }) => (
              <>
                <Autocomplete
                  {...field}
                  placeholder={PLACEHOLDER.SECONDARY_MAJOR}
                  options={SECONDARY_MAJOR_OPTIONS}
                />
              </>
            )}
          />
        </div>
        <div className={styles.autoWrapper}>
          <p className={styles.label}>Target Job</p>
          <Controller
            name="targetJob"
            control={control}
            rules={{ required: 'Enter your job' }}
            render={({ field }) => (
              <>
                <Autocomplete
                  {...field}
                  placeholder={PLACEHOLDER.TARGET_JOB}
                  options={TARGET_JOB_OPTIONS}
                />
              </>
            )}
          />
        </div>
      </div>
      {targetJob && (
        <div className={styles.checkboxContainer}>
          {currentJobSkills.map((skill) => (
            <div
              key={skill.id}
              className={styles.checkboxWrapper}
              onClick={() => handleSkillToggle(skill.id)}
            >
              <Checkbox
                isChecked={selectedSkills.includes(skill.id)}
                onChange={() => handleSkillToggle(skill.id)}
              />
              <div className={styles.checkboxContent}>
                <h3 className={styles.checkboxTitle}>{skill.title}</h3>
                <p className={styles.checkboxDescription}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TargetRole;
