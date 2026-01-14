import { Tag } from '@kds/ui';

import { BookmarkedJobCard } from '@entities/phase';

const DashboardPage = () => {
  return (
    <div>
      <BookmarkedJobCard
        companyName={'Company Name'}
        title="2 lined title here 2 lined title here 2 lined title he"
        dueDate={'Mon XX, 20XX'}
        tags={<Tag color={'primary_blue'} children={'text'} />}
      />
    </div>
  );
};

export default DashboardPage;
