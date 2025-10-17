<template>
  <div>
    <!-- Listing Section -->
    <section 
            class="relative bg-cover bg-center text-white py-32 px-4"
            :style="{ backgroundImage: `url(${listingImage})` }"
        >
      <div class="absolute inset-0 bg-black opacity-10"></div>
      <div class="relative container mx-auto ">  
        <h1 class="text-lg font-bold leading-snug md:leading-tight text-center mb-6 px-4">
          Tìm địa điểm tốt nhất cho <br class="hidden sm:block">doanh nghiệp F&B của bạn
        </h1>


        <div class="flex justify-center">
          <router-link 
            to="/analysis"
            class="!bg-blue-600 mt-4 !text-white font-bold py-3 px-8 rounded-full text-md sm:text-lg md:text-xl lg:text-xl transition duration-300 transform hover:scale-105 inline-flex items-center justify-center"
          >
            <span>Bắt đầu ngay</span>
          </router-link>
        </div>

      </div>
    </section>


    <!-- How It Works Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-blue-800 mb-12">TÌM HIỂU CÁCH HOẠT ĐỘNG</h2>
        <div class="max-w-2xl mx-auto space-y-4"> 
          <!-- Step 1 -->
          <div class="flex items-center text-left p-3 border-2 border-blue-500 rounded-full">
            <div class="flex-shrink-0 mr-6">
              <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-3xl"> <i
                  class="fas fa-map-marker-alt"></i> </div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-blue-800">Chọn khu vực</h3>
              <p class="text-blue-800">Nhập vị trí, chọn loại hình (café, restaurant, fast-food...).</p>
            </div>
          </div> 
          <!-- Step 2 -->
          <div class="flex items-center text-left text-blue-800 p-3 border-2 border-blue-500 rounded-full">
            <div class="flex-shrink-0 mr-6">
              <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-3xl"> <i
                  class="fas fa-search"></i> </div>
            </div>
            <div>
              <h3 class="text-xl font-bold">Phân tích tự động</h3>
              <p class="text-blue-800">Hệ thống tạo bản đồ heatmap, phân tích đối thủ, traffic, dân cư, quy hoạch.</p>
            </div>
          </div> 
          <!-- Step 3 -->
          <div class="flex items-center text-left text-blue-800 p-3 border-2 border-blue-500 rounded-full">
            <div class="flex-shrink-0 mr-6">
              <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-3xl"> <i
                  class="fas fa-check-circle"></i> </div>
            </div>
            <div>
              <h3 class="text-xl font-bold">Nhận kết quả & Quyết định</h3>
              <p class="text-blue-800">Hệ thống gợi ý "Proceed / Switch", và đề xuất loại hình phù hợp.</p>
            </div>
          </div>
        </div> 
        <!-- CTA Button --> 
        <button class="mt-8 !bg-yellow-400 text-blue-800 font-extrabold py-3 px-16 text-lg">
          TRẢI NGHIỆM NGAY 
        </button>
      </div>
    </section>

  <div class="flex flex-col md:flex-row h-screen bg-gray-50 font-sans">

    <!-- Sidebar -->
    <aside class="w-full md:w-64 bg-[#17348C] text-white flex flex-col md:flex-none">
      <!-- Logo -->
      <div class="flex items-center gap-3 px-6 py-6 border-b border-blue-700">
        <i class="fas fa-map-marker-alt text-2xl text-white"></i>
        <p class="text-3xl font-bold">F&B Spot</p>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 mt-6 space-y-4 overflow-y-auto">
        <router-link 
          to="/overview" 
          class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          active-class="bg-blue-800"
        >
          <i class="fas fa-chart-pie text-yellow-400"></i>
          <span>Tổng quan</span>
        </router-link>

        <router-link 
          to="/areas" 
          class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          active-class="bg-blue-800"
        >
          <i class="fas fa-map-marked-alt text-yellow-400"></i>
          <span>Khu vực đã phân tích</span>
        </router-link>

        <router-link 
          to="/contacts" 
          class="flex items-center gap-3 px-6 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          active-class="bg-blue-800"
        >
          <i class="fas fa-users text-yellow-400"></i>
          <span>Chủ mặt bằng liên hệ</span>
        </router-link>
      </nav>

      <!-- Footer -->
      <div class="px-6 py-4 border-t border-blue-700 flex items-center gap-3">
        <i class="fas fa-user text-yellow-400"></i>
        <span class="font-semibold text-lg">Tài khoản</span>
      </div>
    </aside>

      <!-- Main Content -->
      <main class="flex-1 p-8 overflow-y-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-2">
          <div class="flex items-center space-x-2">
            <i class="fas fa-user-circle text-blue-700 text-3xl"></i>
            <span class="text-gray-700 text-lg">Xin chào, <strong>USER</strong></span>
          </div>
          

          <div class="flex items-center space-x-3">
            <div class="flex min-w-5 items-center border border-gray-300 rounded-full px-3 py-1">
              <i class="fas fa-coins text-yellow-400 mr-2"></i>
              <span class=" text-blue-700 font-semibold">0 đ</span>
            </div>
            <button class="min-w-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-3 py-2 rounded-full">
              Nạp tiền
            </button>
            <i class="fas fa-bell text-blue-800 text-xl cursor-pointer"></i>
          </div>
        </div>
        <hr class=" border-gray-300 flex-grow" />

        <!-- Account Overview -->
        <section>
          <h2 class="text-2xl font-bold text-blue-800 mt-4 mb-4">Tổng quan tài khoản</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card border-blue-300">
              <h3 class="font-semibold text-blue-700 flex items-center space-x-2">
                <i class="fas fa-map-marked-alt"></i>
                <span>Khu vực đã phân tích</span>
              </h3>
              <p class="text-3xl font-bold text-blue-900 mt-2">3 khu vực</p>
              <button class="text-red-600 font-medium mt-2 hover:underline">Tìm khu vực ></button>
            </div>

            <div class="card border-gray-300">
              <h3 class="font-semibold text-blue-700 flex items-center space-x-2">
                <i class="fas fa-user-friends"></i>
                <span>Chủ nhà đã liên hệ</span>
              </h3>
              <p class="text-3xl font-bold text-blue-900 mt-2">2 người</p>
            </div>

            <div class="card border-gray-300">
              <h3 class="font-semibold text-blue-700 flex items-center space-x-2">
                <i class="fas fa-heart"></i>
                <span>Địa điểm yêu thích</span>
              </h3>
              <p class="text-3xl font-bold text-blue-900 mt-2">2 địa điểm</p>
              <p class="text-gray-500 text-sm">+0 mới vào hôm nay</p>
            </div>
          </div>
        </section>

        <!-- Personalized Info -->
        <section class="mt-10">
          <h2 class="text-2xl font-bold text-blue-800 mb-4">Thông tin dành riêng cho bạn</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Gợi ý -->
            <div class="card bg-gray-200">
              
                <h3 class="font-semibold text-blue-800 mb-2 flex items-center">
                  <i class="fas fa-lightbulb text-yellow-400 mr-2"></i> Gợi ý
                </h3>
                <div class=" bg-gray-300 rounded-2xl p-4">
                  <p class="text-gray-700 text-sm">
                    Dựa trên lịch sử tìm kiếm, bạn có thể quan tâm tới khu vực:
                  </p>
                  <ul class="list-disc ml-5 mt-2 text-sm text-gray-600">
                    <li>Nguyễn Văn Huyên: Traffic cao buổi sáng</li>
                    <li>Hồ Tùng Mậu: Cạnh tranh thấp, nhiều sinh viên</li>
                  </ul>
              </div>
            </div>

            <!-- Thông báo -->
            <div class="card bg-gray-100">
              <h3 class="font-semibold text-blue-800 mb-2 flex items-center">
                <i class="fas fa-envelope text-red-500 mr-2"></i> Thông báo
              </h3>
              <div class="space-y-3">
                <div class="bg-gray-200 rounded-md p-3 hover:bg-gray-300 transition">
                  <i class="fas fa-calendar-alt text-red-500 mr-2"></i> Lịch hẹn xem mặt bằng
                </div>
                <div class="bg-gray-200 rounded-md p-3">
                  <i class="fas fa-file-alt text-blue-700 mr-2"></i> Báo cáo tuần
                  <div class="bg-blue-700 text-white mt-2 p-2 rounded-md text-sm">
                    Khu vực Cầu Giấy có xu hướng traffic tăng 8%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>

  </div>
</template>

<script setup>
  import listingImage from '../assets/listing_bg.jpg';
</script>


