<script setup lang="ts">
import type { Quiz } from '@/types';

interface Props {
  quiz: Quiz;
}

const { quiz } = defineProps<Props>();
</script>

<template>
  <div class="quiz-badge">
    <div class="quiz-badge__image" :style="{ 'background-color': quiz.accentColor }">
      <img :src="quiz.icon" alt="" />
    </div>
    <span class="quiz-badge__label">{{ quiz.title }}</span>
  </div>
</template>

<style scoped lang="scss">
.quiz-badge {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__image {
    display: grid;
    place-items: center;
    height: 2.5rem;
    aspect-ratio: 1;
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  &__label {
    font-size: var(--fs-heading-base);
    font-weight: var(--fw-medium);
    line-height: var(--lh-none);
    color: hsl(var(--clr-heading));
  }
}
</style>
