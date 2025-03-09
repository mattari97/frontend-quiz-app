<script setup lang="ts">
import { useGlobalStore } from '@/stores';
import { computed } from 'vue';
import resultsData from '@/assets/json/results.json';
import HeroSection from '@/components/HeroSection.vue';
import QuizBadge from '@/components/QuizBadge.vue';
import SubmitButton from '@/components/SubmitButton.vue';

const store = useGlobalStore();
const result = computed(() =>
  store.answers.reduce((count, item) => count + (item.answer === item.correctAnswer ? 1 : 0), 0),
);
const questionCount = computed(() => store.quiz?.questions.length ?? 0);
const resetQuiz = () => store.setQuiz(null);
</script>

<template>
  <main class="results">
    <HeroSection v-bind="resultsData" />
    <div class="results__content">
      <div class="results__card">
        <QuizBadge :quiz="store.quiz!" />
        <span class="results__card-result">{{ result }}</span>
        <span class="results__card-count">out of {{ questionCount }}</span>
      </div>
      <SubmitButton label="Play Again" @click="resetQuiz" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.results {
  display: grid;

  &__content {
    display: grid;
    grid-auto-rows: min-content;
    row-gap: var(--quiz-card-gap-outer);
  }

  &__card {
    display: grid;
    grid-auto-rows: min-content;
    place-items: center;
    padding: 2rem;
    border-radius: 0.75rem;
    background-color: hsl(var(--clr-surface));

    &-result {
      font-size: var(--fs-display);
      color: hsl(var(--clr-heading));
      font-weight: var(--fw-medium);
      line-height: var(--lh-title);
      margin-block: 1rem;
    }

    &-count {
      font-size: var(--fs-heading-base);
      line-height: var(--lh-none);
    }

    @media (min-width: 768px) {
      padding: 3rem;
      border-radius: 1.5rem;

      &-result {
        margin-block: 2.5rem 1rem;
      }
    }
  }
}
</style>
