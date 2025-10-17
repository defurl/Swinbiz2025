<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-100">
    
    <!-- Sidebar for Analysis -->
    <aside class="w-full md:w-1/3 lg:w-1/4 p-6 bg-white shadow-lg overflow-y-auto">
      <AnalysisPanel />
    </aside>

    <!-- Main Content for Map -->
    <main class="flex-grow relative">
      <MapComponent />
    </main>

  </div>
</template>

<script setup>
import AnalysisPanel from '../components/AnalysisPanel.vue';
import MapComponent from '../components/MapComponent.vue';
</script>

