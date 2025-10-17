<template>
    <div class="space-y-6 text-gray-800 max-w-md mx-auto">
      <div>
          <h1 class="text-2xl font-bold text-gray-900">Phân tích khu vực</h1>
          <p class="text-md text-gray-600 font-semibold">80 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
      </div>
  
      <!-- Recommendation Card -->
      <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-r-lg">
          <p class="font-bold">Đề xuất: Triển khai</p>
          <p>Khu vực có tiềm năng cao cho mô hình quán cà phê và đồ ăn nhanh.</p>
      </div>
  
      <!-- Demographics Card -->
      <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h2 class="text-lg font-bold mb-3">Dân cư</h2>
          <ul class="space-y-2 text-sm">
              <li class="flex justify-between"><span>Mật độ dân số:</span> <span class="font-semibold">Cao</span></li>
              <li class="flex justify-between"><span>Thu nhập trung bình:</span> <span class="font-semibold">Khá</span></li>
              <li class="flex justify-between"><span>Đối tượng chính:</span> <span class="font-semibold">Nhân viên văn phòng, sinh viên</span></li>
          </ul>
      </div>
  
       <!-- Competitor Card -->
      <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h2 class="text-lg font-bold mb-3">Đối thủ cạnh tranh (bán kính 500m)</h2>
          <ul class="space-y-2 text-sm">
              <li class="flex justify-between items-center">
                  <span>Highlands Coffee</span>
                  <span class="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full">Cao</span>
              </li>
              <li class="flex justify-between items-center">
                  <span>The Coffee House</span>
                   <span class="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded-full">Cao</span>
              </li>
               <li class="flex justify-between items-center">
                  <span>Cộng Cà Phê</span>
                  <span class="text-xs font-bold text-white bg-orange-500 px-2 py-1 rounded-full">Trung bình</span>
              </li>
              <li class="flex justify-between items-center">
                  <span>Aha Cafe</span>
                  <span class="text-xs font-bold text-white bg-yellow-500 px-2 py-1 rounded-full">Thấp</span>
              </li>
          </ul>
      </div>
  
      <!-- Traffic Card -->
      <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h2 class="text-lg font-bold mb-3">Lưu lượng truy cập</h2>
          <ul class="space-y-2 text-sm">
              <li class="flex justify-between"><span>Giờ cao điểm (sáng):</span> <span class="font-semibold">8:00 - 9:00</span></li>
              <li class="flex justify-between"><span>Giờ cao điểm (trưa):</span> <span class="font-semibold">12:00 - 13:30</span></li>
              <li class="flex justify-between"><span>Lưu lượng cuối tuần:</span> <span class="font-semibold">Trung bình</span></li>
          </ul>
      </div>
  
      <!-- Financial Card -->
      <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h2 class="text-lg font-bold mb-3">Chi phí & Lợi nhuận (Ước tính)</h2>
           <ul class="space-y-2 text-sm">
              <li class="flex justify-between"><span>Giá thuê mặt bằng:</span> <span class="font-semibold">45 triệu/tháng</span></li>
              <li class="flex justify-between"><span>Doanh thu tiềm năng:</span> <span class="font-semibold">250 - 350 triệu/tháng</span></li>
              <li class="flex justify-between"><span>Thời gian hoàn vốn:</span> <span class="font-semibold">12 - 18 tháng</span></li>
          </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Add subtle hover effects to make the panel more interactive */
  .shadow-md:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  </style>
