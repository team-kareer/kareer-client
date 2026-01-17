import { ReactNode } from 'react';

import { TagColor } from '@shared/utils/job-tag-color';

export interface JobItem {
  id: number;
  companyName: string;
  title: string;
  dueDate?: string;
  dDay: number;
  locations: string[];
  jobTypes?: string[];
  isScraped: boolean; // 데이터에는 상태가 포함됨
  imageUrl?: string;
  url: string;
}

export interface BookmarkedJobCardProps {
  companyName: string;
  title: string;
  dueDate?: string;
  dDay: number;
  imageUrl?: string;
  locations: string[];
  jobTypes?: string[];
  jobTagColor?: TagColor; // ui 전용
  scrapAction?: ReactNode; // ui 전용
  onClick?: () => void;
}
