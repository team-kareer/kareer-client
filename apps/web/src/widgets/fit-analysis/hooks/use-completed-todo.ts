import { useQueries, useQuery } from '@tanstack/react-query';

import { PHASE_QUERY_OPTIONS } from '@entities/phase/queries/queries';
import { TODO_QUERY_OPTIONS } from '@entities/todo/queries/queries';

/**
 * 완료된 투두/액션이 하나라도 있는지 확인하는 훅
 * @returns 완료된 항목이 있으면 true, 없으면 false
 */
export const useCompletedTodo = () => {
  // 투두 리스트 조회
  const { data: todoData } = useQuery(TODO_QUERY_OPTIONS.GET_TODO_LIST());

  // 페이즈 리스트 조회
  const { data: phaseListData } = useQuery(
    PHASE_QUERY_OPTIONS.GET_PHASE_LIST(),
  );

  // 모든 페이즈의 로드맵 데이터 조회
  const allRoadmapQueries = useQueries({
    queries: (phaseListData?.phases ?? []).map((phase) => ({
      ...PHASE_QUERY_OPTIONS.GET_PAHSE_ITEM_ROADMAP(phase.phaseId ?? 0),
    })),
  });

  const hasCompletedTodo = (): boolean => {
    // 투두 완료 여부 확인
    if (todoData) {
      const visaCompleted = todoData.visaActionItems?.some(
        (item) => item.completed,
      );
      const careerCompleted = todoData.careerActionItems?.some(
        (item) => item.completed,
      );

      if (visaCompleted || careerCompleted) {
        return true;
      }
    }

    // 모든 페이즈의 로드맵에서 Done 액션 확인
    for (const query of allRoadmapQueries) {
      const roadmapData = query.data;
      if (roadmapData) {
        const doneActions = roadmapData.actions?.Done;

        if (doneActions && Object.keys(doneActions).length > 0) {
          return true;
        }
      }
    }

    return false;
  };

  return hasCompletedTodo();
};
