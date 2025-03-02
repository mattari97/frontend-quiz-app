<script setup lang="ts">
import { quizzes } from '@/assets/json/quizzes.json';
import welcomeData from '@/assets/json/welcome.json';
import CategoryCard from '@/components/CategoryCard.vue';
import HeroSection from '@/components/HeroSection.vue';
</script>

<template>
  <main class="welcome">
    <HeroSection v-bind="welcomeData" />
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

.welcome-categories {
  display: grid;
  row-gap: 0.75rem;
}
</style>
