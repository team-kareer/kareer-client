export interface JobItem {
  id: number;
  companyName: string;
  title: string;
  dueDate?: string;
  locations: string[];
  jobTypes?: string[];
  isScraped: boolean; // 데이터에는 상태가 포함됨
  imageUrl?: string;
  url: string;
}
