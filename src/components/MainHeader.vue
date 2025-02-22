<script setup lang="ts">
import MoonIcon from '@/components/icons/MoonIcon.vue';
import SunIcon from '@/components/icons/SunIcon.vue';
import ThemeSwitch from '@/components/ThemeSwitch.vue';
</script>

<template>
  <header class="header">
    <div class="header-theme__container">
      <SunIcon class="header-theme__icon" />
      <ThemeSwitch />
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
}
</style>
