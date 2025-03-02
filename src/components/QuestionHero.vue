<script setup lang="ts">
import { useGlobalStore } from '@/stores';
import { computed } from 'vue';
import ProgressBar from '@/components/ProgressBar.vue';

interface Props {
  question: string;
}

const props = defineProps<Props>();
const store = useGlobalStore();
const questionCount = computed(() => store.quiz!.questions.length);
const progress = computed(() => ((store.questionIndex + 1) / questionCount.value) * 100);
</script>

<template>
  <section class="question-hero">
    <span class="question-hero__counter">
      Question {{ store.questionIndex + 1 }} of {{ questionCount }}
    </span>
    <h1 class="question-hero__question">{{ props.question }}</h1>
    <ProgressBar :progress="progress" />
  </section>
</template>

<style scoped lang="scss">
.question-hero {
  display: grid;
  grid-auto-rows: min-content;
  padding-block: 2rem 2.5rem;

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
}
</style>
