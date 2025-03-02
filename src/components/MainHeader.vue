<script setup lang="ts">
import MoonIcon from '@/components/icons/MoonIcon.vue';
import SunIcon from '@/components/icons/SunIcon.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import type { Quiz } from '@/types';

interface Props {
  quiz: Quiz | null;
}

const { quiz } = defineProps<Props>();
</script>

<template>
  <header class="header">
    <div v-if="quiz" class="header-quiz__container">
      <div class="header-quiz__image" :style="{ 'background-color': quiz.accentColor }">
        <img :src="quiz.icon" alt="" />
      </div>
      <span class="header-quiz__label">{{ quiz.title }}</span>
    </div>
    <div class="header-theme__container">
      <SunIcon class="header-theme__icon" />
      <ThemeSwitch />
      <MoonIcon class="header-theme__icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  padding-inline: 1.5rem;
  height: 4.5rem;
}

.header-quiz {
  &__container {
    display: flex;
    align-items: center;
    gap: 1rem;
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
    font-size: var(--fs-heading-base);
    font-weight: var(--fw-medium);
    line-height: var(--lh-none);
    color: hsl(var(--clr-heading));
  }
}

.header-theme {
  &__container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  &__icon {
    width: 16px;
    aspect-ratio: 1;
    color: hsl(var(--clr-theme-icon));
  }
}
</style>
