<script setup lang="ts">
interface Props {
  title: string;
  titleBold: string;
  caption?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section class="hero-section">
    <h1 class="hero-section__title">
      <span class="hero-section__title-normal">{{ props.title }}</span>
      <span class="hero-section__title-bold">{{ props.titleBold }}</span>
    </h1>
    <p v-if="caption" class="hero-section__caption">{{ props.caption }}</p>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 1rem;
  padding-block-end: 2.5rem;

  &__title {
    display: grid;
    grid-auto-rows: min-content;
    row-gap: 0.5rem;
    color: hsl(var(--clr-heading));
    font-size: var(--fs-heading-lg);
    line-height: var(--lh-none);

    &-normal {
      display: block;
    }

    &-bold {
      font-weight: var(--fw-medium);
    }
  }

  &__caption {
    font-style: italic;
  }

  @media (min-width: 768px) {
    padding-block-end: 4rem;
  }

  @media (min-width: 1152px) {
    row-gap: 3rem;
  }
}
</style>
