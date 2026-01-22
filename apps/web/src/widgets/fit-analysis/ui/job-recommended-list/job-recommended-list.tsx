import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import BookmarkedJobList from '@features/job/ui/bookmarked-job-list/bookmarked-job-list';
import { JobPostingItem } from '@entities/job/model/types';
import { JOB_MUTATION_OPTIONS } from '@entities/job/queries/queries';
import { BOOKMARKED_JOB_QUERY_KEY } from '@entities/job/queries/query-key';
import { TODO_QUERY_OPTIONS } from '@entities/todo/queries/queries';
import { TODO_QUERY_KEY } from '@entities/todo/queries/query-key';

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

  const queryClient = useQueryClient();

  const { data: todoData } = useQuery(TODO_QUERY_OPTIONS.GET_TODO_LIST());

  const hasCompletedTodo = () => {
    if (!todoData) {
      return false;
    }

    const visaCompleted = todoData.visaActionItems?.some(
      (item) => item.completed,
    );
    const careerCompleted = todoData.careerActionItems?.some(
      (item) => item.completed,
    );

    return visaCompleted || careerCompleted;
  };

  const isCheckboxDisabled = !hasCompletedTodo();

  const { mutate: recommendMutate, isPending: isRecommendPending } =
    useMutation({
      ...JOB_MUTATION_OPTIONS.RECOMMEND_JOB_POSTINGS(),
      onSuccess: (response) => {
        const dataList = response.data?.jobPostingResponses ?? [];
        setRecommendations(dataList as JobItem[]);
      },
    });

  const { mutate: bookmarkMutate, isPending: isBookmarkPending } = useMutation({
    ...JOB_MUTATION_OPTIONS.TOGGLE_BOOKMARK_JOB_POSTING(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BOOKMARKED_JOB_QUERY_KEY.BOOKMARKED_JOB(),
      });
    },
  });

  useEffect(() => {
    recommendMutate({
      files: [],
      includeCompletedTodo: false,
    });
  }, [recommendMutate]);

  const handleClickFindPosition = () => {
    if (files.length === 0) {
      return;
    }

    const rawFiles = files.map((f) => f.file);

    recommendMutate({
      files: rawFiles,
      includeCompletedTodo: isChecked,
    });
  };

  const handleToggle = (jobPostingId: number) => {
    setRecommendations((prev) =>
      prev.map((job) =>
        job.jobPostingId === jobPostingId
          ? { ...job, isBookmarked: !job.isBookmarked }
          : job,
      ),
    );

    bookmarkMutate({
      jobPostingId,
    });
  };

  // 외부에서 투두가 변경되었을 때
  useEffect(() => {
    // window 이벤트를 통한 투두 변경 감지
    const handleTodoChanged = () => {
      queryClient.invalidateQueries({
        queryKey: TODO_QUERY_KEY.TODO_LIST(),
      });
    };

    window.addEventListener('todoChanged', handleTodoChanged);
    return () => window.removeEventListener('todoChanged', handleTodoChanged);
  }, [queryClient]);

  const isPending = isRecommendPending || isBookmarkPending;

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
        isCheckboxDisabled={isCheckboxDisabled}
      />
      <BookmarkedJobList jobs={recommendations} onScrap={handleToggle} />
    </div>
  );
};

export default JobRecommendationList;
