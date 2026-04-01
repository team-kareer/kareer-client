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
      title: 'jobSkills.developer.techStack.title',
      description: 'jobSkills.developer.techStack.description',
    },
    {
      id: 'cs-tools',
      title: 'jobSkills.developer.csTools.title',
      description: 'jobSkills.developer.csTools.description',
    },
    {
      id: 'projects',
      title: 'jobSkills.developer.projects.title',
      description: 'jobSkills.developer.projects.description',
    },
    {
      id: 'team-work-experience',
      title: 'jobSkills.developer.teamWorkExperience.title',
      description: 'jobSkills.developer.teamWorkExperience.description',
    },
  ],
  'Data Analyst': [
    {
      id: 'data-tools',
      title: 'jobSkills.dataAnalyst.dataTools.title',
      description: 'jobSkills.dataAnalyst.dataTools.description',
    },
    {
      id: 'sql-programming',
      title: 'jobSkills.dataAnalyst.sqlProgramming.title',
      description: 'jobSkills.dataAnalyst.sqlProgramming.description',
    },
    {
      id: 'analysis-storytelling',
      title: 'jobSkills.dataAnalyst.analysisStorytelling.title',
      description: 'jobSkills.dataAnalyst.analysisStorytelling.description',
    },
    {
      id: 'projects',
      title: 'jobSkills.dataAnalyst.projects.title',
      description: 'jobSkills.dataAnalyst.projects.description',
    },
  ],
  Marketer: [
    {
      id: 'channels-tools',
      title: 'jobSkills.marketer.channelsTools.title',
      description: 'jobSkills.marketer.channelsTools.description',
    },
    {
      id: 'content-copy',
      title: 'jobSkills.marketer.contentCopy.title',
      description: 'jobSkills.marketer.contentCopy.description',
    },
    {
      id: 'data-experimentation',
      title: 'jobSkills.marketer.dataExperimentation.title',
      description: 'jobSkills.marketer.dataExperimentation.description',
    },
    {
      id: 'projects',
      title: 'jobSkills.marketer.projects.title',
      description: 'jobSkills.marketer.projects.description',
    },
  ],
  'Global Sales': [
    {
      id: 'client-communication',
      title: 'jobSkills.globalSales.clientCommunication.title',
      description: 'jobSkills.globalSales.clientCommunication.description',
    },
    {
      id: 'sales-tools-process',
      title: 'jobSkills.globalSales.salesToolsProcess.title',
      description: 'jobSkills.globalSales.salesToolsProcess.description',
    },
    {
      id: 'numbers-targets',
      title: 'jobSkills.globalSales.numbersTargets.title',
      description: 'jobSkills.globalSales.numbersTargets.description',
    },
    {
      id: 'projects',
      title: 'jobSkills.globalSales.projects.title',
      description: 'jobSkills.globalSales.projects.description',
    },
  ],
};
