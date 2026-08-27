import * as styles from './voice-card.css';

interface VoiceCardProps {
  content: string;
  interviewInfo: string;
}

const VoiceCard = ({ content, interviewInfo }: VoiceCardProps) => (
  <article className={styles.card}>
    <p className={styles.quote}>{content}</p>
    <p className={styles.meta}>{interviewInfo}</p>
  </article>
);

export default VoiceCard;
