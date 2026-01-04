// const DashboardPage = () => {
//   return <div>DashboardPage</div>;
// };

// export default DashboardPage;

// 테스트 코드 (PR 리뷰 후 삭제 예정)
import { useEffect } from "react";

import { testUser } from "@shared/apis/test";

const DashboardPage = () => {
  useEffect(() => {
    testUser();
  }, []);

  return <div>DashboardPage</div>;
}

export default DashboardPage;