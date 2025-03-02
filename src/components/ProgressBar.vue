<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  progress: number;
}

const { progress } = defineProps<Props>();
const percentage = computed(() => `${progress}%`);
</script>

<template>
  <div class="progress-bar" :style="{ '--progress': percentage }">
    {{ progress }}
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  position: relative;
  width: 100%;
  height: 1rem;
  background: hsl(var(--clr-surface));
  border-radius: 100vw;
  overflow: hidden;
  padding: 0.25rem;

  &::before {
    content: '';
    display: block;
    width: var(--progress);
    height: 100%;
    background-color: hsl(var(--clr-accent));
    border-radius: 100vw;
    transition: width 0.3s ease-in-out;
  }
}
</style>
