<script setup lang="ts">
import { computed } from 'vue';
import CorrectIcon from '@/components/icons/CorrectIcon.vue';
import IncorrectIcon from '@/components/icons/IncorrectIcon.vue';
import { useGlobalStore } from '@/stores';

interface Props {
  answer: string;
  index: number;
}

const props = defineProps<Props>();
const store = useGlobalStore();
const letter = computed(() => String.fromCharCode(65 + props.index));
const storeAnswer = computed(() => store.answers[store.questionIndex]);
const isActive = computed(() => storeAnswer.value.answer === props.answer);
const isCorrectAnswer = computed(() => storeAnswer.value.correctAnswer === props.answer);
const isValidated = computed(() => storeAnswer.value.validated);

const outline = computed(() => {
  if (isActive.value && !isValidated.value) return 'active';
  if (isActive.value && isValidated.value) {
    return isCorrectAnswer.value ? 'success' : 'error';
  }

  return '';
});

const icon = computed(() => {
  if (isValidated.value && isCorrectAnswer.value) return 'success';
  if (isValidated.value && isActive.value && !isCorrectAnswer.value) return 'error';

  return '';
});
</script>

<template>
  <button
    class="answer"
    :data-outline="outline"
    :disabled="isActive || isValidated"
    @click="store.setAnswer(props.answer)"
  >
    <span class="answer__letter">{{ letter }}</span>
    <span class="answer__answer">{{ props.answer }}</span>
    <div class="answer__icon">
      <Transition name="fade">
        <CorrectIcon v-if="icon === 'success'" class="success" />
        <IncorrectIcon v-else-if="icon === 'error'" class="error" />
      </Transition>
    </div>
  </button>
</template>

<style scoped lang="scss">
.answer {
  --outline-width: 2px;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 4rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: hsl(var(--clr-surface));
  box-shadow: var(--box-shadow);
  outline: var(--outline-width) solid transparent;
  outline-offset: calc(-1 * var(--outline-width));
  transition: outline-color 150ms ease-out;

  &:not([disabled='']) {
    cursor: pointer;

    &:hover .answer__letter {
      background-color: hsl(278 100% 95%);
      color: hsl(var(--clr-accent));
    }
  }

  &[data-outline='active'] {
    outline-color: hsl(var(--clr-accent));

    & .answer__letter {
      background-color: hsl(var(--clr-accent));
      color: hsl(var(--clr-light));
    }
  }

  &[data-outline='success'] {
    outline-color: hsl(var(--clr-success));

    & .answer__letter {
      background-color: hsl(var(--clr-success));
      color: hsl(var(--clr-light));
    }
  }

  &[data-outline='error'] {
    outline-color: hsl(var(--clr-error));

    & .answer__letter {
      background-color: hsl(var(--clr-error));
      color: hsl(var(--clr-light));
    }
  }

  &__letter {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    height: 2.5rem;
    aspect-ratio: 1;
    border-radius: 6px;
    background-color: hsl(var(--clr-primary-100));
    font-size: var(--fs-heading-base);
    font-weight: var(--fw-medium);
    color: hsl(var(--clr-primary-300));
    transition: color 150ms ease-out, background-color 150ms ease-out;
  }

  &__answer {
    flex: 1;
    display: block;
    font-size: var(--fs-heading-sm);
    color: hsl(var(--clr-heading));
    line-height: var(--lh-title);
    text-align: left;
  }

  &__icon {
    flex-shrink: 0;
    width: 2rem;
    aspect-ratio: 1;

    & > svg {
      width: 100%;
      height: 100%;

      &.success {
        color: hsl(var(--clr-success));
      }

      &.error {
        color: hsl(var(--clr-error));
      }

      &.fade-enter-active {
        transition: opacity 150ms ease-out;
      }

      &.fade-enter-from {
        opacity: 0;
      }
    }
  }
}
</style>
