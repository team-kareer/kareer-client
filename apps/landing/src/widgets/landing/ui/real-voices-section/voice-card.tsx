import * as styles from './voice-card.css';

interface VoiceCardProps {
  quote: string;
  meta: string;
}

const VoiceCard = ({ quote, meta }: VoiceCardProps) => (
  <article className={styles.card}>
    <p className={styles.quote}>{quote}</p>
    <p className={styles.meta}>{meta}</p>
  </article>
);

export default VoiceCard;
