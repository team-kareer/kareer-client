export interface JobItem {
  id: number;
  companyName: string;
  title: string;
  dueDate?: string;
  locations: string[];
  jobTypes?: string[];
  isScraped: boolean;
  imageUrl?: string;
  url: string;
}
