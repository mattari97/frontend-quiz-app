<script setup lang="ts">
import { quizzes } from '@/assets/json/quizzes.json';
import welcomeData from '@/assets/json/welcome.json';
import CategoryCard from '@/components/CategoryCard.vue';
import HeroSection from '@/components/HeroSection.vue';
</script>

<template>
  <main class="welcome">
    <HeroSection v-bind="welcomeData" />
    <div class="welcome-categories">
      <CategoryCard
        v-for="(quiz, index) in quizzes"
        :key="index"
        :accent-color="quiz.accentColor"
        :icon="quiz.icon"
        :title="quiz.title"
      />
    </div>
  </main>
</template>

<style scoped lang="scss">
.welcome {
  display: grid;
  grid-template-rows: auto 1fr;

  &-categories {
    display: grid;
    row-gap: var(--quiz-card-gap-outer);
  }
}
</style>
