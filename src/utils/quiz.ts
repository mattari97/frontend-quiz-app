import { quizzes } from '@/assets/json/quizzes.json';

export const validateQuizTitle = (title: string) => {
  return -1 !== quizzes.findIndex(q => q.title === title);
};
