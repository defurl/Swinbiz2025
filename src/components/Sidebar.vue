<template>
  <div>
    <!-- Mobile top bar -->
    <header class="md:hidden flex items-center justify-between bg-[#17348C] text-white px-4 py-3">
      <div class="flex items-center gap-3">
        <i class="fas fa-bars text-yellow-400"></i>
        <span class="font-semibold">Menu</span>
      </div>
      <button @click="toggleMobile" class="bg-blue-700 hover:bg-blue-600 p-2 rounded">
        <i v-if="!mobileOpen" class="fas fa-chevron-down !text-yellow-500 h-5 w-5"></i>
        <i v-else class="fas fa-chevron-up !text-yellow-500 h-5 w-5"></i>
      </button>
    </header>

    <!-- Mobile nav (dropdown) -->
    <nav v-if="mobileOpen" class="md:hidden bg-[#17348C] !text-yellow px-4 py-3 space-y-2">
      <router-link to="/listing/overview" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-blue-700">
        <i class="fas fa-chart-pie text-yellow-400"></i>
        <span class="font-semibold">Tổng quan</span>
      </router-link>
      <router-link to="/listing/listed" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-blue-700">
        <i class="fas fa-map-marked-alt text-yellow-400"></i>
        <span class="font-semibold">Tin đã Đăng</span>
      </router-link>
      <router-link to="/listing/create" class="flex items-center gap-3 px-2 py-2 rounded hover:bg-blue-700">
        <i class="fas fa-pen-to-square text-yellow-400"></i>
        <span class="font-semibold">Đăng Tin</span>
      </router-link>
    </nav>

    <!-- Desktop sidebar -->
    <aside :class="['hidden md:flex flex-col bg-[#17348C] text-white h-screen relative transition-all duration-200', collapsed ? 'w-16' : 'w-64']">
      <!-- collapse toggle (left edge) -->
      <button @click="toggle" class="hidden md:flex items-center justify-center absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#17348C] rounded-full w-8 h-8 shadow">
        <!-- Use Font Awesome chevron and keep rotation + yellow color -->
        <i :class="['fas fa-chevron-left h-4 w-4 transition-transform text-yellow-400', collapsed ? 'rotate-180' : '']"></i>
      </button>

      <!-- Navigation -->
      <nav class="flex-1 mt-6 space-y-4 overflow-y-auto">
        <router-link 
          to="/listing/overview" 
          v-slot="{ isActive }"
          class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          active-class="bg-blue-800"
        >
          <i class="fas fa-chart-pie text-yellow-400"></i>
          <span :class="collapsed ? 'hidden' : ''">Tổng quan</span>
        </router-link>

        <router-link 
          to="/listing/listed"
          v-slot="{ isActive }" 
          class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          active-class="bg-blue-800"
        >
          <i class="fas fa-map-marked-alt text-yellow-400"></i>
          <span :class="collapsed ? 'hidden' : ''">Tin đã Đăng</span>
        </router-link>

        <router-link 
          to="/listing/create" 
          v-slot="{ isActive }" 
          class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          active-class="bg-blue-800"
        >
          <i class="fas fa-pen-to-square text-yellow-400"></i>
          <span :class="collapsed ? 'hidden' : ''">Đăng Tin</span>
        </router-link>
      </nav>  
    </aside>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'Sidebar',
  setup() {
    const COLLAPSED_KEY = 'sidebar-collapsed'
    const collapsed = ref(false)
    const mobileOpen = ref(false)

    // read persisted preference on mount (guard in case localStorage unavailable)
    onMounted(() => {
      try {
        const saved = localStorage.getItem(COLLAPSED_KEY)
        if (saved !== null) collapsed.value = saved === 'true'
      } catch (e) {
        // ignore
      }
    })

    // persist whenever it changes
    watch(collapsed, (val) => {
      try {
        localStorage.setItem(COLLAPSED_KEY, val ? 'true' : 'false')
      } catch (e) {
        // ignore
      }
    })

    function toggle() {
      collapsed.value = !collapsed.value
    }

    function toggleMobile() {
      mobileOpen.value = !mobileOpen.value
    }

    return { collapsed, mobileOpen, toggle, toggleMobile }
  }
}
</script>
