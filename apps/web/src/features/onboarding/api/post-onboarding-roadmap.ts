import { END_POINT } from '@features/onboarding';
import { api } from '@shared/apis/configs/instance';

import { parseSseEvents } from './parse-sse-events';

interface RoadmapGenerationFailedEvent {
  message?: string;
}

export const postAiRoadMap = async (): Promise<void> => {
  const response = await api.post(END_POINT.ONBOARDING.POST_AI_ROADMAP, {
    headers: { Accept: 'text/event-stream' },
    timeout: false,
  });
  const reader = response.body?.getReader();

  if (!reader) {
    throw new Error('로드맵 생성 스트림을 열지 못했습니다.');
  }

  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });

      const parsed = parseSseEvents(buffer, done);
      buffer = parsed.remaining;

      for (const event of parsed.events) {
        if (event.event === 'roadmap-completed') {
          return;
        }

        if (event.event === 'roadmap-failed') {
          const failure = JSON.parse(
            event.data,
          ) as RoadmapGenerationFailedEvent;
          throw new Error(failure.message ?? '로드맵 생성에 실패했습니다.');
        }
      }

      if (done) {
        throw new Error('로드맵 생성 스트림이 완료 전에 종료되었습니다.');
      }
    }
  } finally {
    reader.releaseLock();
  }
};
