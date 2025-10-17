<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-50 font-sans">
    <Header />
    <main class="flex-grow w-full">
      <!-- The router will inject page components here -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Global styles can be added here */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>
