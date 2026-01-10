import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BangCircleIcon,
  BookmarkCheckIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  CustomMapIcon,
  EditIcon,
  FitAnalysisIcon,
  GoogleIcon,
  HomeIcon,
  InfoCircleIcon,
  InfoIcon,
  PlusIcon,
  ProfileIcon,
  RoadmapIcon,
  SparkleIcon,
  SuccessCircleIcon,
  TimerIcon,
  TodoCheckIcon,
  TodoIcon,
  UpdateIcon,
  XCircleIcon,
  XIcon,
} from '@kds/icons';

const DashboardPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
      }}
    >
      <div style={{ display: 'flex', gap: '16px' }}>
        <ArrowDownIcon />
        <ArrowLeftIcon />
        <ArrowRightIcon />
        <ArrowUpIcon />
        <BangCircleIcon />
        <BookmarkIcon />
        <BookmarkCheckIcon />
        <CalendarIcon />
        <CheckIcon />
        <CheckCircleIcon />
        <CustomMapIcon />
        <EditIcon />
        <FitAnalysisIcon />
        <GoogleIcon />
        <HomeIcon />
        <InfoIcon />
        <InfoCircleIcon />
        <PlusIcon />
        <ProfileIcon />
        <RoadmapIcon />
        <SparkleIcon />
        <SuccessCircleIcon />
        <TimerIcon />
        <TodoIcon />
        <TodoCheckIcon />
        <UpdateIcon />
        <XIcon />
        <XCircleIcon />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1> 사이즈 체크 </h1>
        <ArrowDownIcon width={48} height={48} />
        <ArrowLeftIcon width={48} height={48} />
        <ArrowRightIcon width={48} height={48} />
        <ArrowUpIcon width={48} height={48} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1> 컬러 지정 </h1>
        <ArrowDownIcon width={96} height={96} color="red" />
        <ArrowLeftIcon width={96} height={96} color="blue" />
        <ArrowRightIcon width={96} height={96} color="green" />
        <ArrowUpIcon width={96} height={96} color="yellow" />
      </div>
    </div>
  );
};

export default DashboardPage;
