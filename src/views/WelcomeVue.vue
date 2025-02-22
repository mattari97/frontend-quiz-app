<script setup lang="ts">
import { quizzes } from '@/assets/json/quizzes.json';
import welcomeData from '@/assets/json/welcome.json';
import CategoryCard from '@/components/CategoryCard.vue';
</script>

<template>
  <main class="welcome">
    <section class="welcome-hero">
      <h1 class="welcome-hero__title">
        <span>{{ welcomeData.title }}</span>
        <span>{{ welcomeData.titleBold }}</span>
      </h1>
      <p class="welcome-hero__caption">{{ welcomeData.caption }}</p>
    </section>
    <section class="welcome-categories">
      <CategoryCard
        v-for="(quiz, index) in quizzes"
        :key="index"
        :accent-color="quiz.accentColor"
        :icon="quiz.icon"
        :title="quiz.title"
      />
    </section>
  </main>
</template>

<style scoped lang="scss">
.welcome {
  display: grid;
  grid-template-rows: auto 1fr;
}

.welcome-hero {
  display: grid;
  row-gap: 1rem;
  padding: 2rem 1.5rem 2.5rem;

  &__title {
    display: grid;
    row-gap: 0.5rem;
    color: hsl(var(--clr-heading));
    font-size: var(--fs-heading-lg);
    line-height: var(--lh-none);

    & > span {
      display: block;
    }

    & > span:last-of-type {
      font-weight: var(--fw-medium);
    }
  }

  &__caption {
    font-style: italic;
  }
}

.welcome-categories {
  display: grid;
  row-gap: 0.75rem;
}
</style>
