const fs = require('fs');

const commitMsgFilePath = process.argv[2];
const commitMessage = fs.readFileSync(commitMsgFilePath, 'utf8').trim();

const allowedTypes = [
  'feat', // 새로운 기능
  'fix', // 버그 수정
  'refactor', // 리팩토링
  'design', // CSS 등 UI 디자인 변경
  'style', // 코드 포맷팅
  'docs', // 문서 수정
  'test', // 테스트 코드
  'chore', // 빌드, 패키지 등
  'init', // 프로젝트 초기화
  'rename', // 파일/폴더명 변경
  'remove', // 파일 삭제
];

// "type: message" 형식 체크
const commitRegex = /^(\w+):\s{1,}(.+)$/;
const match = commitMessage.match(commitRegex);

if (!match) {
  console.error(`
❌ 커밋 실패!
❗ 형식: "type: message" (type과 message 사이 공백 필수)
   
📌 예시:
   feat: 로그인 기능 추가
   fix: 대시보드 버그 수정
`);
  process.exit(1);
}

const type = match[1];

if (!allowedTypes.includes(type.toLowerCase())) {
  console.error(`
❌ 커밋 실패!
❗ "${type}"는 허용되지 않은 커밋 타입입니다.

✅ 허용된 타입: ${allowedTypes.join(', ')}
`);
  process.exit(1);
}

console.log('✅ 커밋 메시지 검증 통과!');
