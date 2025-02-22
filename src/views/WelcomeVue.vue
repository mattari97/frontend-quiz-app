<script setup lang="ts">
import { quizzes } from '@/assets/json/quizzes.json';
import welcomeData from '@/assets/json/welcome.json';
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
      <button v-for="(quiz, index) in quizzes" :key="index" class="welcome-categories__button">
        <div class="welcome-categories__image" :style="{ 'background-color': quiz.accentColor }">
          <img :src="quiz.icon" alt="" />
        </div>
        <span class="welcome-categories__label">{{ quiz.title }}</span>
      </button>
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
