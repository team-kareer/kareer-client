// 테스트 파일(PR 리뷰 후 삭제 예정)

import { api } from './configs/instance';

export const testUser = async () => {
    try {
        const users = await api.get('users').json();
        console.log('Users', users);
        return users;
    } catch(err) {
        console.error("error: ", err);
        throw err;
    }
}