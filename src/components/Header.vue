<template>
  <header class="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
    <nav class="container mx-auto px-2 sm:px-4 lg:px-6 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center" v-animate="{ animation: 'fadeIn', duration: 0.8 }">
        <router-link to="/" class="flex items-center space-x-2">
          <!-- Logo image -->
          <img :src="logoImage" alt="F&B Spot Logo" class="h-12 object-contain hover:scale-105 transition-transform duration-300" />
        </router-link>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center font-medium text-gray-600 space-x-6">
        <router-link 
          v-for="(item, index) in menuItems" 
          :key="index" 
          :to="item.path" 
          v-animate="{ animation: 'fadeIn', duration: 0.5, delay: 0.1 * index }"
          class="relative py-2 hover:text-blue-600 transition-all duration-200 nav-link"
        >
          {{ item.label }}
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 nav-indicator"></span>
        </router-link>
      </div>

      <!-- Help + User Icon -->
      <div class="hidden md:flex items-center space-x-4" v-animate="{ animation: 'fadeIn', duration: 0.8, delay: 0.4 }">
        <router-link to="/help" class="flex items-center space-x-2 text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 px-3 py-1.5 rounded-md hover:bg-blue-50">
          <i class="fas fa-question-circle"></i>
          <span>Trợ giúp</span>
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button 
          @click="toggleMenu"
          v-button-hover
          class="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-300 p-2 rounded-md"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  
  <!-- Mobile Menu with animation -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform -translate-y-10 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-10 opacity-0"
  >
    <div v-show="isMenuOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100 shadow-lg">
      <router-link 
        v-for="(item, index) in menuItems" 
        :key="index" 
        :to="item.path" 
        class="block text-gray-600 hover:text-blue-600 py-3 px-2 border-b border-gray-100 transition-all duration-300 hover:pl-4"
        @click="isMenuOpen = false"
      >
        <div class="flex items-center space-x-2">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </div>
      </router-link>
      <router-link to="/help" class="block text-gray-600 hover:text-blue-600 py-3 px-2 transition-all duration-300 hover:pl-4" @click="isMenuOpen = false">
        <div class="flex items-center space-x-2">
          <i class="fas fa-question-circle"></i>
          <span>Trợ giúp</span>
        </div>
      </router-link>
    </div>
  </transition>
</header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { animations } from '../utils/animations';
import logoImage from '../assets/logo.png';

const isMenuOpen = ref(false);
const route = useRoute();

const menuItems = [
  { 
    label: 'Giải pháp cho doanh nghiệp F&B',
    path: '/select-location',
    icon: 'fas fa-store'
  },
  { 
    label: 'Giải pháp cho chủ mặt bằng',
    path: '/listing',
    icon: 'fas fa-building'
  },
  { 
    label: 'Về chúng tôi',
    path: '/',
    icon: 'fas fa-info-circle'
  }
];

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMenuOpen.value = false;
});

// Toggle mobile menu with animation
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  // Add scroll behavior for header
  const header = document.querySelector('header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down & not at the top
      header.classList.add('shadow-lg');
      header.classList.add('py-2');
      header.classList.remove('py-3');
    } else {
      // Scrolling up or at the top
      if (scrollTop <= 10) {
        header.classList.remove('shadow-lg');
        header.classList.remove('py-2');
        header.classList.add('py-3');
      }
    }
    
    lastScrollTop = scrollTop;
  });
});
</script>

<style scoped>
.nav-link:hover .nav-indicator {
  width: 100%;
}

/* Header scroll animation */
header {
  transform-origin: top;
}
</style>
