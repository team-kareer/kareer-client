export interface SkillOption {
  id: string;
  title: string;
  description: string;
}

/**
 * 직무별 스킬 옵션 배열
 * @description 각 직무에 대한 스킬 체크박스 옵션
 */
export const JOB_SKILL_OPTIONS: Record<string, SkillOption[]> = {
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
