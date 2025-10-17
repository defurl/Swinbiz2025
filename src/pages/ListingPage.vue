<template>
  <div>
    
  <div class="flex flex-col md:flex-row h-screen bg-gray-50 font-sans">

      <Sidebar />

      <!-- Main Content -->
      <main class="flex-1 p-5 overflow-y-auto">
        <!-- Header -->
        
        <div class="flex justify-between items-center mb-1">
          <div class="flex items-center space-x-2 max-w-sm">
            <i class="fas fa-user-circle text-blue-700 !text-4xl"></i>
            <span class="text-gray-700 text-md md:text-lg !pr-1">Xin chào, <strong>USER</strong></span>
          </div>
          

          <div class="flex items-center space-x-2">
            <div class="flex mwhitespace-nowrap items-center border border-gray-300 rounded-full !px-2 !py-2">
              <i class="fas fa-coins text-yellow-400 mr-2"></i>
              <span class=" text-blue-700 font-semibold">0&nbsp;đ</span>
            </div>
            <button class="min-w-6 !bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold !px-2 !py-2 !rounded-full">
              Nạp tiền
            </button>
            <!-- <i class="fas fa-bell text-blue-800 text-xl cursor-pointer"></i> -->
          </div>
        </div>
        <hr class="mt-2 border-gray-300 flex-grow" />

        <!-- Content Area -->
        <router-view></router-view>


        <!-- <Overvierw />
        <Overvierw2 /> -->
      </main>
      
    </div>

  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>


