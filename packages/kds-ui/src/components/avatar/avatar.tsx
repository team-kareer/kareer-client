import { AvatarIcon } from '@kds/icons';

import * as styles from './avatar.css';

interface AvatarProps {
  profileUrl: string | undefined;
  size?: 'mini'; //| 'default'
}

const Avatar = ({ profileUrl, size }: AvatarProps) => {
  return profileUrl ? (
    <img
      src={profileUrl}
      alt="사용자 프로필 이미지"
      className={styles.img({ size: size })}
    />
  ) : (
    <AvatarIcon />
  );
};

export default Avatar;
