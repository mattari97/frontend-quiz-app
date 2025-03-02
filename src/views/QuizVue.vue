<script setup lang="ts">
import AnswerCard from '@/components/AnswerCard.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import { useGlobalStore } from '@/stores';
import { computed } from 'vue';

const store = useGlobalStore();
const questionCount = computed(() => store.quiz!.questions.length);
const questionData = computed(() => store.quiz!.questions[store.questionIndex]);
const progress = computed(() => ((store.questionIndex + 1) / questionCount.value) * 100);
const isValidated = computed(() => store.answers[store.questionIndex].validated);
const isSubmitDisabled = computed(
  () => !isValidated.value && !store.answers[store.questionIndex].answer,
);
const submitLabel = computed(() => {
  if (!isValidated.value) {
    return 'Submit Answer';
  }

  return progress.value === 100 ? 'See Results' : 'Next Question';
});

const submitAnswer = () => {
  if (!isValidated.value) {
    store.validateAnswer();
    return;
  }

  if (store.questionIndex + 1 < questionCount.value) {
    store.goToNextQuestion();
    return;
  }

  // Show results
};
</script>

<template>
  <main class="quiz">
    <span class="quiz__counter">Question {{ store.questionIndex + 1 }} of {{ questionCount }}</span>
    <h1 class="quiz__question">{{ questionData.question }}</h1>
    <ProgressBar :progress="progress" />
    <div class="quiz__answers">
      <AnswerCard
        v-for="(answer, index) of questionData.options"
        :key="index"
        :answer="answer"
        :index="index"
      />
      <SubmitButton :label="submitLabel" :disabled="isSubmitDisabled" @submit="submitAnswer" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.quiz {
  padding: 2rem 1.5rem;

  &__counter {
    font-style: italic;
    display: block;
    line-height: var(--lh-none);
    margin-block-end: 0.75rem;
  }

  &__question {
    font-size: var(--fs-heading-md);
    font-weight: var(--fw-medium);
    color: hsl(var(--clr-heading));
    line-height: var(--lh-title);
    margin-block-end: 1.5rem;
  }

  &__answers {
    margin-block-start: 2.5rem;
    display: grid;
    row-gap: 0.75rem;
  }
}
</style>
