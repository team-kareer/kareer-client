import useFunnel from '@shared/hooks/usefunnel';

const TestPage = () => {
  const {
    Funnel,
    Step,
    goToStep,
    goToPrevStep,
    currentStep,
    currentStepIndex,
  } = useFunnel(['가입시작', '가입정보', '가입완료'], '/');

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <p>현재 단계: {currentStep}</p>
        <p>현재 인덱스: {currentStepIndex}</p>
      </div>
      <Funnel>
        <Step name="가입시작">
          <div>
            <h2>1단계 : 가입시작</h2>
            <button onClick={goToStep}>다음</button>
          </div>
        </Step>
        <Step name="가입정보">
          <div>
            <h2>2단계 : 가입정보</h2>
            <button onClick={goToStep}>다음</button>
            <button onClick={goToPrevStep}>이전</button>
          </div>
        </Step>
        <Step name="가입완료">
          <div>
            <h2>3단계 : 가입완료</h2>
            <button onClick={goToStep}>완료</button>
            <button onClick={goToPrevStep}>이전</button>
          </div>
        </Step>
      </Funnel>
    </div>
  );
};

export default TestPage;
