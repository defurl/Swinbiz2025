<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-2 sm:px-4 lg:px-6 py-2 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center space-x-2">
          <!-- Logo image -->
          <img :src="logoImage" alt="F&B Spot Logo" class=" h-12 object-contain" />
        </router-link>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center font-medium text-gray-600 space-x-6">
        <router-link to="/analysis" class="hover:text-blue-600 transition-colors duration-200">
          Giải pháp cho doanh nghiệp F&B
        </router-link>
        <router-link to="/listing" class="hover:text-blue-600 transition-colors duration-200">
          Giải pháp cho chủ mặt bằng
        </router-link>
        <router-link to="/" class="hover:text-blue-600 transition-colors duration-200">
          Blog
        </router-link>
        <router-link to="/" class="hover:text-blue-600 transition-colors duration-200">
          Về chúng tôi
        </router-link>
      </div>

      <!-- Help + User Icon -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link to="/help" class="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
          Trợ giúp
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen"
          class="text-gray-600 hover:text-gray-800 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white">
      <router-link to="/analysis" class="block text-gray-600 hover:text-blue-600 py-2">
        Giải pháp cho doanh nghiệp F&B
      </router-link>
      <router-link to="/listing" class="block text-gray-600 hover:text-blue-600 py-2">
        Giải pháp cho chủ mặt bằng
      </router-link>
      <router-link to="/" class="block text-gray-600 hover:text-blue-600 py-2">
        Blog
      </router-link>
      <router-link to="/" class="block text-gray-600 hover:text-blue-600 py-2">
        Về chúng tôi
      </router-link>
      <router-link to="/" class="block text-gray-600 hover:text-blue-600 py-2">
        Trợ giúp
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logoImage from '../assets/logo.png';
const isMenuOpen = ref(false)
</script>
