import styles from '../app.module.css';
import { ResultProps } from '../ts/interfaces.ts';

function Result({ correct, arraySize }: ResultProps) {
  const image = 'https://cdn-icons-png.flaticon.com/512/2278/2278992.png';
  return (
    <div className={styles.resultWrapper}>
      <img src={image} alt="Finish" className={styles.resultImg} />
      <h2 className={styles.resultTitle}>
        Вы отгадали {correct} ответа из {arraySize}
      </h2>
      <a href="/">
        <button type="button" className={styles.resultButton}>
          Попробовать снова
        </button>
      </a>
    </div>
  );
}

export { Result };
