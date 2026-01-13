import * as styles from './avatar.css';

interface AvatarProps {
  profileUrl: string;
  size?: 'mini'; //| 'default'
}

const Avatar = ({ profileUrl, size }: AvatarProps) => {
  return (
    <img
      src={profileUrl}
      alt="사용자 프로필 이미지"
      className={styles.img({ size: size })}
    />
  );
};

export default Avatar;
