export type TTheme = 'light' | 'dark';

export type TLocalStorageKey = 'theme';

export interface QuizData {
  quizzes: Quiz[];
}

export interface Quiz {
  title: string;
  icon: string;
  accentColor: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export type StoreQuiz = Pick<Quiz, 'accentColor' | 'icon' | 'title'>;
