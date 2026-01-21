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
  Sales: [
    {
      id: 'client-communication',
      title: 'Client Communication',
      description:
        'I am comfortable with professional business communication (email, calls, meetings) in English or Korean.',
    },
    {
      id: 'sales-tools-process',
      title: 'Sales Process & Tools',
      description:
        'I understand the sales cycle (prospecting → closing) and can use CRM tools or Excel for lead management.',
    },
    {
      id: 'trade-knowledge',
      title: 'Trade Knowledge',
      description:
        'I have basic knowledge of export/import procedures, Incoterms, or trade documentation (Invoices, PL).',
    },
    {
      id: 'persuasion-negotiation',
      title: 'Persuasion & Negotiation',
      description:
        'I have experience in customer-facing roles where I had to persuade, negotiate, or resolve conflicts.',
    },
  ],
  Marketing: [
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
      id: 'data-insights',
      title: 'Data & Insights',
      description:
        'I can analyze marketing metrics (Reach, CTR, ROAS) to measure performance and improve strategies.',
    },
    {
      id: 'global-localization',
      title: 'Global/Localization',
      description:
        'I have experience adapting global campaigns to fit specific local cultures or languages.',
    },
  ],
  'Planning & Strategy': [
    {
      id: 'research-analysis',
      title: 'Research & Analysis',
      description:
        'I can conduct market research, analyze competitors, and derive logical insights from data.',
    },
    {
      id: 'documentation-tools',
      title: 'Documentation & Tools',
      description:
        'I am proficient in creating business proposals and reports using PowerPoint, Excel, or Notion.',
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description:
        'I have experience managing schedules, defining KPIs, or leading a project from start to finish.',
    },
    {
      id: 'communication-flow',
      title: 'Communication Flow',
      description:
        'I can clearly summarize complex issues and facilitate communication between different teams.',
    },
  ],
  Production: [
    {
      id: 'process-scm',
      title: 'Process & SCM',
      description:
        'I understand the basics of manufacturing flows, supply chain management, or inventory cycles.',
    },
    {
      id: 'data-erp',
      title: 'Data & ERP',
      description:
        'I can manage production data (defect rates, inventory levels) using Excel or ERP systems.',
    },
    {
      id: 'quality-safety',
      title: 'Quality & Safety',
      description:
        'I am familiar with Quality Control (QC) standards or basic industrial safety regulations.',
    },
    {
      id: 'onsite-coordination',
      title: 'On-site Coordination',
      description:
        'I can bridge communication between field workers, management, and external suppliers effectively.',
    },
  ],
};
