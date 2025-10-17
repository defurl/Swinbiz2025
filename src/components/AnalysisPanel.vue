<template>
  <div class="text-gray-800 relative">
    <!-- Loading Overlay -->
    <transition
      enter-active-class="transition-opacity duration-500"
      leave-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div v-if="isLoading" class="absolute inset-0 bg-white flex flex-col items-center justify-center z-10">
        <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p class="mt-4 text-gray-600 font-medium">Đang phân tích dữ liệu...</p>
      </div>
    </transition>
    
    <h2 class="text-2xl font-bold mb-1">Khu vực:</h2>
    <h3 class="text-xl font-semibold text-blue-600 mb-6">Dịch Vọng Hậu, Cầu Giấy, Hà Nội</h3>

    <div class="space-y-6">
      <!-- Area Details -->
      <div>
        <ul class="space-y-2 text-gray-700 list-inside">
          <li><strong>1. Diện tích:</strong> 1.48 km²</li>
          <li><strong>2. Dân số:</strong> 31,879 người (năm 2022)</li>
          <li><strong>3. Mật độ dân số:</strong> Khoảng 21,539 người/km²</li>
          <li><strong>4. Phân loại khu vực:</strong> Khu dân cư + văn phòng + trường học</li>
        </ul>
      </div>

      <!-- F&B Models -->
      <div>
        <h4 class="text-lg font-bold mb-3">Mô hình F&B phổ biến:</h4>
        <div class="flex items-center">
          <div class="w-2/5">
            <PieChart :data="chartData" />
          </div>
          <div class="w-3/5 pl-4 text-sm">
            <ul class="space-y-1">
              <li v-for="item in chartData" :key="item.label" class="flex items-center">
                <span class="inline-block w-3 h-3 rounded-full mr-2" :style="{ backgroundColor: item.color }"></span>
                {{ item.label }}: <strong>{{ item.value }}%</strong>
              </li>
            </ul>
          </div>
        </div>
        <button class="mt-4 w-full !bg-yellow-400 !hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300">
          Xem chi tiết...
        </button>
      </div>

      <!-- Traffic -->
      <div>
        <h4 class="text-lg font-bold mb-2">Lưu lượng & Traffic trung bình:</h4>
        <ul class="space-y-2 text-gray-700 list-inside">
          <li><strong>1. Traffic trung bình:</strong> 4,200 người/giờ</li>
          <li><strong>2. Giờ cao điểm:</strong> 7:00-9:00 sáng | 17:00-20:00 tối</li>
          <li><strong>3. Nguồn traffic chính:</strong> Văn phòng & sinh viên khu vực</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PieChart from './PieChart.vue';
import { animations } from '../utils/animations';

const isLoading = ref(true);

const chartData = [
  { label: 'Cà phê', value: 39.1, color: '#4A90E2' },
  { label: 'Đồ ăn nhanh', value: 26.1, color: '#50E3C2' },
  { label: 'Nhà hàng', value: 17.4, color: '#F5A623' },
  { label: 'Trà sữa', value: 17.4, color: '#BD10E0' },
];

onMounted(() => {
  // Simulate data loading with a delay
  setTimeout(() => {
    isLoading.value = false;
    // Apply fade-in animation to content after loading
    const container = document.querySelector('.text-gray-800');
    if (container) {
      animations.fadeIn(container, 0.8);
    }
  }, 1200); // Slightly longer than map loading to ensure sequence
});
</script>

