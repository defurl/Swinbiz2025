<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden">
    
    <!-- Main Content for Map - Mobile First -->
    <main class="w-full md:flex-grow md:order-2 relative h-[40vh] md:h-full">
      <MapComponent />
    </main>
    
    <!-- Sidebar for Analysis -->
    <aside class="w-full md:w-1/3 lg:w-1/4 p-4 md:p-6 bg-white shadow-lg overflow-y-auto md:order-1 h-[60vh] md:h-full flex-shrink-0">
      <AnalysisPanel />
    </aside>

  </div>
</template>

<script setup>
import AnalysisPanel from '../components/AnalysisPanel.vue';
import MapComponent from '../components/MapComponent.vue';
</script>

<style scoped>
/* Ensure proper scrolling on mobile */
@media (max-width: 768px) {
  aside {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    padding-bottom: 1rem; /* Extra space at bottom */
  }
}
</style>
