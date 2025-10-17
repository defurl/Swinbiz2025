<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Chọn địa điểm phân tích</h1>
        <p class="text-gray-500 mb-8">Bắt đầu bằng cách chọn một địa điểm có sẵn bên dưới.</p>
      </div>

      <!-- Search Bar (Disabled for Prototype) -->
      <div class="relative mb-6">
        <input 
          type="text" 
          placeholder="Tìm kiếm địa chỉ, khu vực..."
          class="w-full p-4 pl-12 !text-gray-500 text-lg bg-gray-100 rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-not-allowed"
          disabled
        >
        <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"></i>
      </div>

      <!-- Location List -->
      <div>
        <h2 class="text-sm font-semibold text-gray-500 uppercase mb-3">Gợi ý</h2>
        <div class="space-y-3">
          <!-- Prototype Location Item -->
          <router-link to="/analysis" class="block group">
            <div class="flex items-center p-4 bg-white border rounded-lg hover:bg-blue-50 hover:border-blue-500 transition duration-300 cursor-pointer">
              <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <i class="fas fa-map-marker-alt text-2xl"></i>
                </div>
              </div>
              <div class="flex-grow">
                <h3 class="font-bold text-gray-800 group-hover:text-blue-700">80 Duy Tân, Cầu Giấy, Hà Nội</h3>
                <p class="text-sm text-gray-500">Khu vực: Dịch Vọng Hậu</p>
              </div>
              <div class="flex-shrink-0 ml-4">
                <i class="fas fa-chevron-right text-gray-400 group-hover:text-blue-600"></i>
              </div>
            </div>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// No script logic needed for this static prototype page
</script>
