import { AvatarIcon } from '@kds/icons';

import * as styles from './avatar.css';

interface AvatarProps {
  profileUrl?: string;
  use?: 'header' | 'popover' | 'mypage';
  onClick?: () => void;
}

const Avatar = ({ profileUrl, use, onClick }: AvatarProps) => {
  const isClickable = onClick !== undefined;

  return profileUrl ? (
    <img
      src={profileUrl}
      alt="사용자 프로필 이미지"
      className={styles.img({ use: use, clickable: isClickable })}
      onClick={onClick}
    />
  ) : (
    <AvatarIcon width={52} height={52} onClick={onClick} />
  );
};

export default Avatar;
