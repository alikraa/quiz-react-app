import { useState } from 'react';
import { Game } from './components/game.tsx';
import { Result } from './components/result.tsx';
import { questions } from './ts/questions.ts';
import styles from './app.module.css';

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index: number) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className={styles.quizWrapper}>
      {step !== questions.length ? (
        <Game
          question={question}
          onClickVariant={onClickVariant}
          step={step}
          arraySize={questions.length}
        />
      ) : (
        <Result correct={correct} arraySize={questions.length} />
      )}
    </div>
  );
}

export { App };
