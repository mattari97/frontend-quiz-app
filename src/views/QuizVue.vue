<script setup lang="ts">
import AnswerCard from '@/components/AnswerCard.vue';
import QuestionHero from '@/components/QuestionHero.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import { useGlobalStore } from '@/stores';
import { computed } from 'vue';

const store = useGlobalStore();
const questionData = computed(() => store.quiz!.questions[store.questionIndex]);
const isValidated = computed(() => store.answers[store.questionIndex].validated);
const isSubmitDisabled = computed(
  () => !isValidated.value && !store.answers[store.questionIndex].answer,
);
const submitLabel = computed(() => {
  if (!isValidated.value) {
    return 'Submit Answer';
  }

  return store.questionIndex === store.quiz?.questions.length ? 'See Results' : 'Next Question';
});

const submitAnswer = () => {
  if (!isValidated.value) {
    store.validateAnswer();
    return;
  }

  store.goToNextQuestion();
};
</script>

<template>
  <main class="quiz">
    <QuestionHero :question="questionData.question" />
    <section class="quiz__answers">
      <AnswerCard
        v-for="(answer, index) of questionData.options"
        :key="index"
        :answer="answer"
        :index="index"
      />
      <SubmitButton :label="submitLabel" :disabled="isSubmitDisabled" @submit="submitAnswer" />
    </section>
  </main>
</template>

<style scoped lang="scss">
.quiz {
  display: grid;

  &__answers {
    display: grid;
    row-gap: var(--quiz-card-gap-outer);
  }
}
</style>
