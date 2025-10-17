<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-50 font-sans">
    <Header />
    <main class="flex-grow w-full relative overflow-hidden">
      <!-- Router view with transitions -->
      <router-view v-slot="{ Component, route }">
        <transition 
          :name="route.meta.transition || 'page'" 
          mode="out-in"
          @before-enter="beforeEnter"
          @after-leave="afterLeave">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ref, onMounted } from 'vue';
import { animations } from './utils/animations';

// Page transition hooks
const beforeEnter = (el) => {
  document.body.style.overflow = 'hidden';
};

const afterLeave = (el) => {
  document.body.style.overflow = '';
};

// Initial page load animation
onMounted(() => {
  // Make sure overflow is enabled on initial load
  document.body.style.overflow = '';
  
  // Animate header and footer on initial load
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  animations.slideInDown(header, 0.8, 0.2);
  animations.slideInUp(footer, 0.8, 0.4);
});
</script>

<style>
/* Global styles can be added here */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');

body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

/* Common transition classes */
.transition-fast {
  transition: all 0.2s ease;
}

.transition-medium {
  transition: all 0.3s ease;
}

.transition-slow {
  transition: all 0.5s ease;
}

/* Enhanced focus styles */
:focus-visible {
  outline: 2px solid #646cff;
  outline-offset: 2px;
}

/* Improved scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>
