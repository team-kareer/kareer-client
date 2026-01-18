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

export interface VisaStatusResponse {
  visaType: string;
  visaExpiredAt: string;
  expectedGraduationDate: string;
  graduationDate: string | null;
}
