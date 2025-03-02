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
  <button class="category-card__button" @click="startQuiz">
    <div class="category-card__image" :style="{ 'background-color': props.accentColor }">
      <img :src="props.icon" alt="" />
    </div>
    <span class="category-card__label">{{ props.title }}</span>
  </button>
</template>

<style scoped lang="scss">
.category-card {
  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 4rem;
    padding-inline: 0.75rem;
    margin-inline: 1.5rem;
    border-radius: 0.75rem;
    background-color: hsl(var(--clr-surface));
    box-shadow: var(--box-shadow);
  }

  &__image {
    display: grid;
    place-items: center;
    height: 2.5rem;
    aspect-ratio: 1;
    padding: 0.5rem;
    border-radius: 0.375rem;
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
