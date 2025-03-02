<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { useGlobalStore } from '@/stores';
import WelcomeVue from '@/views/WelcomeVue.vue';
import QuizVue from '@/views/QuizVue.vue';

const store = useGlobalStore();
</script>

<template>
  <MainHeader :quiz="store.quiz" />
  <WelcomeVue v-if="!store.quiz" />
  <QuizVue v-else />
</template>
