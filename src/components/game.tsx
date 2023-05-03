import styles from '../app.module.css';
import { GameProps } from '../ts/interfaces.ts';

function Game({ question, onClickVariant, step, arraySize }: GameProps) {
  const variants = question.variants.map((item, index) => (
    <li
      key={item}
      className={styles.gameAnswerOptions}
      onClick={() => onClickVariant(index)}
    >
      {item}
    </li>
  ));

  const percent = Math.round((step / arraySize) * 100);

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.gameProgress}>
        <div
          className={styles.gameProgressInner}
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className={styles.gameContent}>
        <h1 className={styles.gameQuestion}>{question.title}</h1>
        <ul className={styles.gameListAnswers}>{variants}</ul>
      </div>
    </div>
  );
}

export { Game };
