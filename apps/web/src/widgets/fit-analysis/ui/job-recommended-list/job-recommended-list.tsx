import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';
import { JobPostingItem } from '@entities/job/model/types';
import { JOB_MUTATION_OPTIONS } from '@entities/job/queries/queries';

import UploadBox from '../upload-box/upload-box';
import { useUploadFiles } from '../upload-box/use-upload-files';

import * as styles from './job-recommended-list.css';

export type JobItem = JobPostingItem & {
  handleOpenDetail?: () => void;
};

const JobRecommendationList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { files, noticeMessage, addFiles, removeFile } = useUploadFiles();
  const [recommendations, setRecommendations] = useState<JobItem[]>([]);

  const { mutate, isPending } = useMutation({
    ...JOB_MUTATION_OPTIONS.RECOMMEND_JOB_POSTINGS(),
    onSuccess: (response) => {
      const dataList = response.data?.jobPostingResponses ?? [];
      setRecommendations(dataList as JobItem[]);
    },
  });

  useEffect(() => {
    mutate({
      files: [],
      includeCompletedTodo: false,
    });
  }, [mutate]);

  const handleClickFindPosition = () => {
    if (files.length === 0) {
      return;
    }

    const rawFiles = files.map((f) => f.file);

    mutate({
      files: rawFiles,
      includeCompletedTodo: isChecked,
    });
  };

  const handleToggle = (id: number) => {
    setRecommendations((prev) =>
      prev.map((job) =>
        job.jobPostingId === id
          ? { ...job, isBookmarked: !job.isBookmarked }
          : job,
      ),
    );
  };

  return (
    <div className={styles.listWrapper}>
      <UploadBox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onClick={handleClickFindPosition}
        files={files}
        noticeMessage={noticeMessage}
        onAddFiles={addFiles}
        onRemoveFile={removeFile}
        isLoading={isPending}
      />
      <BookmarkedJobList jobs={recommendations} onScrap={handleToggle} />
    </div>
  );
};

export default JobRecommendationList;
