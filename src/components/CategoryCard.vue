<script setup lang="ts">
import { useGlobalStore } from '@/stores';

interface Props {
  accentColor: string;
  icon: string;
  title: string;
}

const props = defineProps<Props>();
const store = useGlobalStore();

const startQuiz = () => store.setQuiz(props.title);
</script>

<template>
  <button class="category-card" @click="startQuiz">
    <span class="category-card__image" :style="{ 'background-color': props.accentColor }">
      <img :src="props.icon" alt="" />
    </span>
    <span class="category-card__label">{{ props.title }}</span>
  </button>
</template>

<style scoped lang="scss">
.category-card {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  gap: var(--quiz-card-gap-inner);
  border-radius: var(--quiz-card-border-radius);
  background-color: hsl(var(--clr-surface));
  box-shadow: var(--box-shadow);

  &__image {
    display: grid;
    place-items: center;
    height: var(--quiz-card-image-height);
    aspect-ratio: 1;
    padding: var(--quiz-card-image-padding);
    border-radius: var(--quiz-card-image-border-radius);
  }

  &__label {
    display: block;
    font-size: var(--fs-heading-base);
    font-weight: var(--fw-medium);
    line-height: var(--lh-none);
    color: hsl(var(--clr-heading));
  }
}
</style>
