export const PERSONAL_INFORMATION_PLACEHOLDERS = {
  NAME: 'Enter your name',
  DATE: 'Enter the Date',
  COUNTRY: 'Select the Country',
  OPIK_LEVEL: 'Select the level',
  DEGREE: 'Select the degree',
} as const;

export const VISA_INFORMATION_PLACEHOLDERS = {
  CURRENT_VISA_TYPE: 'Select the visa type',
  ISSUANCE_DATE: 'Enter the Date',
  GRADUATION_DATE: 'Enter the Date',
  EXPIRATION_DATE: 'Enter the Date',
  NUMBER: 'Enter the Number',
} as const;

export const TARGET_ROLE_PLACEHOLDERS = {
  PRIMARY_MAJOR: 'Enter your major',
  SECONDARY_MAJOR: 'Enter your major',
  TARGET_JOB: 'Enter your job',
} as const;

export const PLACEHOLDER_BY_TARGET_JOB: Record<string, string> = {
  'Business / Sales':
    "e.g. [Academic] In my 'Global Marketing' course, I analyzed consumer trends in my home country and presented an entry strategy for Korean appliances, earning an A+. [Professional] Later, as a trade intern, I managed email correspondence with buyers and assisted in preparing trade documents like Invoices.",
  Marketer:
    "e.g. [Academic] Conducted a survey of 100 international students for a 'Consumer Psychology' course to analyze K-brand awareness. [Professional] As a marketing intern, I managed local social media channels and improved post reach by 30% through data-driven targeting and localized content.",
  'Data Analyst':
    "e.g. [Academic] Developed a startup business model and designed risk management strategies using SWOT analysis in a 'Business Strategy' course. [Professional] During a field practicum, I organized inventory data to identify cost-saving opportunities and suggested streamlining report procedures.",
  Developer:
    "e.g. [Academic] In an 'Operations Management' course, I studied SCM principles and completed a simulation project on MRP using ERP systems. [Professional] During a manufacturing internship, I tracked inventory flow and analyzed supplier prices for cost reduction. I also updated quality checklists.",
};
