export type HttpErrorLike = Error & {
  request?: Request;
  response?: Response;
};

// ky 등에서 던지는 에러는 request/response를 함께 갖고 있어 타입 가드로 안전하게 좁힙니다.
export const isHttpError = (error: unknown): error is HttpErrorLike => {
  if (!(error instanceof Error)) {
    return false;
  }

  const request = (error as { request?: Request }).request;
  const response = (error as { response?: Response }).response;

  return request instanceof Request || response instanceof Response;
};
