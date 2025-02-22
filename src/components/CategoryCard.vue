<script setup lang="ts">
interface Props {
  accentColor: string;
  icon: string;
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button class="category-card__button">
    <div class="category-card__image" :style="{ 'background-color': props.accentColor }">
      <img :src="props.icon" alt="" />
    </div>
    <span class="category-card__label">{{ props.title }}</span>
  </button>
</template>

<style lang="scss">
.category-card {
  &__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    margin-inline: 1.5rem;
    border-radius: 0.75rem;
    background-color: hsl(var(--clr-surface));
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &__image {
    display: grid;
    place-items: center;
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  &__label {
    display: block;
    font-size: var(--fs-heading-base);
    color: hsl(var(--clr-heading));
  }
}
</style>
