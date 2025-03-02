<script setup lang="ts">
import MoonIcon from '@/components/icons/MoonIcon.vue';
import SunIcon from '@/components/icons/SunIcon.vue';
import QuizBadge from '@/components/QuizBadge.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import type { Quiz } from '@/types';

interface Props {
  quiz: Quiz | null;
}

const { quiz } = defineProps<Props>();
</script>

<template>
  <header class="header">
    <QuizBadge v-if="quiz" :quiz="quiz" />
    <div class="header__theme">
      <SunIcon class="header__theme-icon" />
      <ThemeSwitch />
      <MoonIcon class="header__theme-icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  height: 4.5rem;

  &__theme {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;

    &-icon {
      width: 16px;
      aspect-ratio: 1;
      color: hsl(var(--clr-theme-icon));
    }
  }
}
</style>
