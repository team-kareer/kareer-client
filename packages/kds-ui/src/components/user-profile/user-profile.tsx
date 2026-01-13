import * as styles from './user-profile.css';

interface UserProfileProps {
  profileUrl: string;
  size?: 'mini'; //| 'default'
}

const UserProfile = ({ profileUrl, size }: UserProfileProps) => {
  return (
    <img
      src={profileUrl}
      alt="사용자 프로필 이미지"
      className={styles.img({ size: size })}
    />
  );
};

export default UserProfile;
