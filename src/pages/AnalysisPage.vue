<template>
    <div class="flex flex-col md:flex-row h-[calc(100vh-68px)]"> <!-- 68px is approx header height -->
      <!-- Analysis Panel -->
      <div class="w-full md:w-1/3 lg:w-1/4 h-full overflow-y-auto bg-white shadow-lg p-6">
        <AnalysisPanel />
      </div>
  
      <!-- Map Area -->
      <div class="w-full md:w-2/3 lg:w-3/4 h-full">
        <MapC />
      </div>
    </div>
  </template>
  
  <script setup>
  import AnalysisPanel from '../components/AnalysisPanel.vue';
  import Map from '../components/Map.vue';
  </script>
  