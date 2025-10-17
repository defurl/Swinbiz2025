<template>
  <!-- Sidebar -->
  <aside class="w-full md:w-64 bg-[#17348C] text-white flex flex-col md:flex-none">
    
    <!-- Navigation -->
    <nav class="flex-1 mt-6 space-y-4 overflow-y-auto">
      <router-link 
        to="/listing/overview" 
        v-slot="{ isActive }"
        class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        active-class="bg-blue-800"
      >
        <i class="fas fa-chart-pie text-yellow-400"></i>
        <span
            :class="isActive ? '!text-white underline underline-offset-2 decoration-1 decoration-yellow-400' : ''"
        >
            Tổng quan
        </span>
      </router-link>

      <router-link 
        to="/listing/listed"
        v-slot="{ isActive }" 
        class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        active-class="bg-blue-800"
      >
        <i class="fas fa-map-marked-alt text-yellow-400"></i>
        <span
            :class="isActive ? '!text-white underline underline-offset-1 decoration-1 decoration-yellow-400' : ''"
        >
            Tin đã Đăng
        </span>
      </router-link>

      <router-link 
        to="/listing/create" 
        v-slot="{ isActive }" 
        class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        active-class="bg-blue-800"
      >
        <i class="fas fa-pen-to-square text-yellow-400"></i>
        <span
            :class="isActive ? '!text-white underline underline-offset-1 decoration-1 decoration-yellow-400' : ''"
        >
            Đăng Tin
        </span>
      </router-link>
    </nav>  

  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
