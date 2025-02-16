<script setup lang="ts">
import type { TTheme } from '@/types';
import { getLocalStorageData, setLocalStorageData } from '@/utils/storage';
import { computed, onMounted, ref, type ComputedRef, type Ref } from 'vue';
import MoonIcon from './icons/MoonIcon.vue';
import SunIcon from './icons/SunIcon.vue';

const theme: Ref<TTheme | undefined> = ref();
const themeSwitchLabel: ComputedRef<string> = computed(() => {
  const label = theme.value === 'light' ? 'dark' : 'light';
  return `Switch to ${label} mode`;
});

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  setLocalStorageData('theme', theme.value);
  document.documentElement.dataset.theme = theme.value;
};

onMounted(() => {
  const storageTheme = getLocalStorageData('theme', null);
  const isValidTheme = 'light' === storageTheme || 'dark' === storageTheme;

  if (isValidTheme) {
    theme.value = storageTheme;
    document.documentElement.dataset.theme = storageTheme;
    return;
  }

  const preferedTheme: TTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  theme.value = preferedTheme;
  document.documentElement.dataset.theme = preferedTheme;
});
</script>

<template>
  <header class="header">
    <div class="header-theme__container">
      <SunIcon class="header-theme__icon" />
      <button class="header-theme__switch" @click="toggleTheme" :data-theme="theme">
        <span class="sr-only">{{ themeSwitchLabel }}</span>
      </button>
      <MoonIcon class="header-theme__icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1rem 1.5rem;
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

  &__switch {
    --height: 20px;
    --width: 32px;
    --offset: 4px;
    cursor: pointer;
    height: var(--height);
    width: var(--width);
    background-color: hsl(var(--clr-accent));
    position: relative;
    border-radius: 100vw;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: var(--offset);
      left: var(--offset);
      height: calc(var(--height) - (2 * var(--offset)));
      aspect-ratio: 1;
      background-color: hsl(var(--clr-light));
      border-radius: 100vw;
      transition: transform 150ms ease-in-out;
    }

    &[data-theme='dark']::before {
      transform: translateX(calc(var(--width) / 2 - var(--offset)));
    }
  }
}
</style>
