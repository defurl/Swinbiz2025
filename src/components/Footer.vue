<template>
    <footer class="bg-gray-900 text-white relative overflow-hidden">
      <!-- Wave decoration -->
      <div class="absolute w-full top-0 left-0 right-0 h-12 overflow-hidden">
        <svg class="absolute bottom-0 w-full h-16 transform translate-y-1/2" 
          viewBox="0 0 1440 320" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
            fill="#1a202c" 
            fill-opacity="1">
          </path>
        </svg>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-20" v-animate="{ animation: 'fadeIn', duration: 0.8 }">
        <div class="grid md:grid-cols-1 gap-8">
          <div class="space-y-4">
            <a href="#" class="flex items-center justify-center space-x-2 transform transition-transform duration-500 hover:scale-105">
              <svg class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="text-2xl font-bold">F&B Spot</span>
            </a>
            <p class="text-center text-gray-400">Giải pháp thông minh để tìm kiếm mặt bằng kinh doanh F&B.</p>
          </div>
          
          <!-- Social Media Links -->
          <div class="flex justify-center space-x-6 mt-6">
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <i class="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
        
        <hr class="my-8 border-gray-700 opacity-50" />
        
        <div class="text-center text-gray-400 text-sm" v-animate="{ animation: 'fadeIn', duration: 0.5, delay: 0.3 }">
          <p>&copy; 2025 F&B Spot. All Rights Reserved.</p>
        </div>
      </div>
      
      <!-- Bottom decoration -->
      <div class="w-full h-3 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-500"></div>
    </footer>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { animations } from '../utils/animations';
  
  onMounted(() => {
    // Animate social media icons with stagger
    const socialIcons = document.querySelectorAll('footer a i');
    animations.staggerFadeIn(socialIcons, 0.3, 0.1);
  });
  </script>
  
  <style scoped>
  /* Add wave animation */
  @keyframes wave {
    0% { transform: translateX(0) translateY(0) rotate(0); }
    50% { transform: translateX(-25%) translateY(2px) rotate(3deg); }
    100% { transform: translateX(0) translateY(0) rotate(0); }
  }
  
  footer svg {
    animation: wave 15s ease-in-out infinite;
  }
  </style>
  