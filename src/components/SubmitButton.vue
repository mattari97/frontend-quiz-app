<script setup lang="ts">
interface Props {
  label: string;
  disabled?: boolean;
}

const props = defineProps<Props>();

interface Emits {
  submit: [];
}
const emits = defineEmits<Emits>();
const submit = () => emits('submit');
</script>

<template>
  <button class="submit-button" @click="submit" :disabled="props.disabled">
    {{ props.label }}
  </button>
</template>

<style scoped lang="scss">
.submit-button {
  &[disabled=''] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  cursor: pointer;
  position: relative;
  height: 4rem;
  background-color: hsl(var(--clr-accent));
  font-size: var(--fs-heading-base);
  font-weight: var(--fw-medium);
  line-height: var(--lh-none);
  color: hsl(var(--clr-light));
  border-radius: 0.75rem;
  box-shadow: var(--box-shadow);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: hsl(var(--clr-light) / 0.5);
    opacity: 0;
    transition: opacity 150ms linear;
  }

  &:not([disabled='']):hover::before {
    opacity: 1;
  }

  @media (min-width: 768px) {
    height: 5rem;
    border-radius: 1.5rem;
  }
}
</style>
