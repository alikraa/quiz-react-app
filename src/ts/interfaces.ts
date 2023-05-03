interface GameProps {
  question: {
    id: number;
    title: string;
    variants: string[];
    correct: number;
  };

  onClickVariant: (index: number) => void;
  step: number;
  arraySize: number;
}

interface ResultProps {
  correct: number;
  arraySize: number;
}

export type { GameProps, ResultProps };
