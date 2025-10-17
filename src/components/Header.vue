<template>
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <a href="#" class="flex items-center space-x-2">
              <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-2xl font-bold text-gray-900">F&B Spot</span>
          </a>
        </div>
        <div class="hidden md:flex items-center font-medium text-gray-600 space-x-6">
          <a href="#" class="hover:text-blue-600 transition-colors duration-200">Giải pháp cho doanh nghiệp F&B</a>
          <a href="#" class="hover:text-blue-600 transition-colors duration-200">Giải pháp cho chủ mặt bằng</a>
          <a href="#" class="hover:text-blue-600 transition-colors duration-200">Blog</a>
          <a href="#" class="hover:text-blue-600 transition-colors duration-200">Về chúng tôi</a>
        </div>
         <div class="hidden md:flex items-center space-x-4">
          <a href="#" class="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">Trợ giúp</a>
            <button class="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 md:hidden">
              <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
        </div>
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </nav>
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white">
          <a href="#" class="block text-gray-600 hover:text-blue-600 py-2">Giải pháp cho doanh nghiệp F&B</a>
          <a href="#" class="block text-gray-600 hover:text-blue-600 py-2">Giải pháp cho chủ mặt bằng</a>
          <a href="#" class="block text-gray-600 hover:text-blue-600 py-2">Blog</a>
          <a href="#" class="block text-gray-600 hover:text-blue-600 py-2">Về chúng tôi</a>
          <a href="#" class="block text-gray-600 hover:text-blue-600 py-2">Trợ giúp</a>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isMenuOpen = ref(false);
  </script>
  