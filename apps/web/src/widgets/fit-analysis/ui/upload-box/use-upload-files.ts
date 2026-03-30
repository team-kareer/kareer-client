import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MAX_FILES = 2;
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

export interface FileItem {
  id: string;
  name: string;
  file: File;
}

const createFileItems = (files: File[]) =>
  files.map((file) => ({
    id: crypto.randomUUID(),
    name: file.name,
    file,
  }));

export const useUploadFiles = () => {
  const { t } = useTranslation('fitAnalysis');
  const [files, setFiles] = useState<FileItem[]>([]);
  const [noticeMessage, setNoticeMessage] = useState('');

  const addFiles = (selectedFiles: File[]) => {
    setFiles((prev) => {
      const oversizeFiles = selectedFiles.filter(
        (file) => file.size > MAX_FILE_SIZE,
      );

      const validFiles = selectedFiles.filter(
        (file) => file.size <= MAX_FILE_SIZE,
      );

      const existingNames = prev.map((file) => file.name);

      const uniqueFiles = validFiles.filter(
        (file) => !existingNames.includes(file.name),
      );

      const hasDuplicates = uniqueFiles.length !== validFiles.length;
      const hasOversize = oversizeFiles.length > 0;

      if (prev.length + uniqueFiles.length > MAX_FILES) {
        setNoticeMessage(t('jobRecommendation.upload.notice.limitExceeded'));
        return prev;
      }

      if (hasOversize) {
        setNoticeMessage(t('jobRecommendation.upload.notice.sizeExceeded'));
      } else if (hasDuplicates) {
        setNoticeMessage(t('jobRecommendation.upload.notice.duplicateName'));
      } else {
        setNoticeMessage('');
      }

      if (uniqueFiles.length === 0) {
        return prev;
      }
      return [...prev, ...createFileItems(uniqueFiles)];
    });
  };

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const remaining = prev.filter((file) => file.id !== id);
      setNoticeMessage('');
      return remaining;
    });
  };

  return { files, noticeMessage, addFiles, removeFile };
};
