import type { Quiz } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { quizzes } from '@/assets/json/quizzes.json';
import { validateQuizTitle } from '@/utils';

interface Answer {
  answer: string;
  correctAnswer: string;
  validated: boolean;
}
export const useGlobalStore = defineStore('global', () => {
  const answers = ref<Answer[]>([]);
  const questionIndex = ref(0);
  const quiz = ref<Quiz | null>(null);

  const goToNextQuestion = () => {
    questionIndex.value += 1;
  };

  const setAnswer = (answer: string) => {
    answers.value[questionIndex.value].answer = answer;
  };

  const setQuiz = (title: string | null) => {
    if (null === title || !validateQuizTitle(title)) {
      quiz.value = null;
      return;
    }

    const selectedQuiz = quizzes.find(q => q.title === title) as Quiz;
    quiz.value = selectedQuiz;
    questionIndex.value = 0;
    answers.value = selectedQuiz.questions.map(question => ({
      answer: '',
      correctAnswer: question.answer,
      validated: false,
    }));
  };

  const validateAnswer = () => {
    answers.value[questionIndex.value].validated = true;
  };

  return {
    answers,
    questionIndex,
    quiz,
    goToNextQuestion,
    setAnswer,
    setQuiz,
    validateAnswer,
  };
});
