import { ReactNode } from 'react';
import { TagColor } from '@shared/utils/job-tag-color';

export interface JobItem {
  id: number;
  companyName: string;
  title: string;
  dueDate?: string;
  locations: string[];
  jobTypes?: string[];
  isScraped: boolean; // 데이터에는 상태가 포함됨
  imageUrl?: string;
  dDay: number; // 프론트에서 계산 로직으로 대체
  url: string;
}

export interface BookmarkedJobCardProps {
  companyName: string;
  title: string;
  dueDate?: string;
  imageUrl?: string;
  locations: string[];
  jobTypes?: string[];
  dDay?: number;
  jobTagColor?: TagColor;
  scrapAction?: ReactNode; // ui 전용
  onClick?: () => void;
}
