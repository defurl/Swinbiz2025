<template>
    <div class="flex flex-col md:flex-row h-[calc(100vh-68px)]"> <!-- 68px is approx header height -->
      <!-- Analysis Panel -->
      <div class="w-full md:w-1/3 lg:w-1/4 h-full overflow-y-auto bg-white shadow-lg p-6 z-10">
        <AnalysisPanel />
      </div>
  
      <!-- Map Area - Made it full width and added position relative to ensure proper rendering -->
      <div class="w-full md:w-2/3 lg:w-3/4 h-full relative">
        <Map />
      </div>
    </div>
  </template>
  
  <script setup>
  import AnalysisPanel from '../components/AnalysisPanel.vue';
  import Map from '../components/Map.vue';
  </script>

<style scoped>
/* Ensure this page gets full width treatment */
:deep(.map-container) {
  width: 100%;
  height: 100%;
}
</style>
