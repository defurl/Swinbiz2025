<template>
  <div>
    <!-- Hero Section -->
        <section 
            class="relative bg-cover bg-center text-white py-32 px-4"
            :style="{ backgroundImage: `url(${heroImage})` }"
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

    <!-- Value Proposition Section -->
    <section class="py-16 bg-white">
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto p-4">
          "F&BSpot giúp các doanh nghiệp F&B chọn vị trí kinh doanh thông minh hơn - bằng dữ liệu thực tế về dân cư, đối thủ, traffic và xu hướng tiêu dùng. 
          Không còn chọn địa điểm theo cảm tính."
        </p>
        <div class="container mx-auto px-4 text-center">
            <div class="grid md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div class="flex items-center justify-center bg-blue-600 p-3 rounded-3xl text-white shadow-md">
                <div class="p-3 mr-2 bg-white/20 rounded-full">
                <i class="fas fa-map-marked-alt text-white text-2xl"></i>
                </div>
                <h3 class="font-semibold text-lg">Chọn địa điểm thông minh</h3>
            </div>

            <div class="flex items-center justify-center bg-yellow-500 p-3 rounded-3xl text-white shadow-md">
                <div class="p-3 mr-2 bg-white/20 rounded-full">
                <i class="fas fa-chart-line text-white text-2xl"></i>
                </div>
                <h3 class="font-semibold text-lg">Phân tích thị trường tự động</h3>
            </div>

            <div class="flex items-center justify-center bg-blue-600 p-3 rounded-3xl text-white shadow-md">
                <div class="p-3 mr-2 bg-white/20 rounded-full">
                <i class="fas fa-clock text-white text-2xl"></i>
                </div>
                <h3 class="font-semibold text-lg">Tiết kiệm thời gian, chi phí</h3>
            </div>
            </div>

        </div>
    </section>

    <!-- Features Section -->
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2">

        <!-- Card 1 -->
        <div
          class="relative h-80 overflow-hidden flex items-center justify-center text-center text-white p-6 "
          :style="{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${feature1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <h3 class="text-2xl font-bold max-w-sm">
            BẢN ĐỒ ĐỐI THỦ & TRAFFIC THEO GIỜ
          </h3>
        </div>

        <!-- Card 2 -->
        <div
          class="relative h-80 overflow-hidden flex items-center justify-center text-center text-white p-6 "
          :style="{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${feature2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <h3 class="text-2xl font-bold max-w-sm">
            PHÂN TÍCH CHI PHÍ THUÊ & LỢI NHUẬN TIỀM NĂNG
          </h3>
        </div>

        <!-- Card 3 -->
        <div
          class="relative h-80 overflow-hidden flex items-center justify-center text-center text-white p-6 "
          :style="{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${feature3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <h3 class="text-2xl font-bold max-w-sm">
            DỰ BÁO XU HƯỚNG TIÊU DÙNG F&B THEO KHU VỰC
          </h3>
        </div>

        <!-- Card 4 -->
        <div
          class="relative h-80 overflow-hidden flex items-center justify-center text-center text-white p-6 "
          :style="{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${feature4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <h3 class="text-2xl font-bold max-w-sm">
            DASHBOARD TỐI ƯU VẬN HÀNH (VỚI GÓI PREMIUM)
          </h3>
        </div>

      </div>
    </div>
  </section>



    <!-- How It Works Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-blue-800 mb-12">TÌM HIỂU CÁCH HOẠT ĐỘNG</h2>
        <div class="max-w-2xl mx-auto space-y-4"> <!-- Step 1 -->
          <div class="flex items-center text-left p-3 border-2 border-blue-500 rounded-full">
            <div class="flex-shrink-0 mr-6">
              <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-3xl"> <i
                  class="fas fa-map-marker-alt"></i> </div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-blue-800">Chọn khu vực</h3>
              <p class="text-blue-800">Nhập vị trí, chọn loại hình (café, restaurant, fast-food...).</p>
            </div>
          </div> <!-- Step 2 -->
          <div class="flex items-center text-left text-blue-800 p-3 border-2 border-blue-500 rounded-full">
            <div class="flex-shrink-0 mr-6">
              <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-3xl"> <i
                  class="fas fa-search"></i> </div>
            </div>
            <div>
              <h3 class="text-xl font-bold">Phân tích tự động</h3>
              <p class="text-blue-800">Hệ thống tạo bản đồ heatmap, phân tích đối thủ, traffic, dân cư, quy hoạch.</p>
            </div>
          </div> <!-- Step 3 -->
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
        </div> <!-- CTA Button --> <button class="mt-8 !bg-yellow-400 text-blue-800 font-extrabold py-3 px-16 text-lg">
          TRẢI NGHIỆM NGAY </button>
      </div>
    </section>

    <!-- Target Audience Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">DÀNH CHO AI?</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img :src="audience1" class="w-full h-64 object-cover" />
                    <div class="p-8 text-center">
                        <h3 class="text-lg text-gray-800 font-bold mb-2">DOANH NGHIỆP F&B / NGƯỜI THUÊ MẶT BẰNG</h3>
                        <p class="text-gray-600 mb-6">Tìm vị trí mở quán phù hợp, giảm rủi ro, tối ưu chi phí.</p>
                        <button class="w-full !bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">"Tôi là người thuê"</button>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img :src="audience2" class="w-full h-64 object-cover" />
                    <div class="p-8 text-center">
                        <h3 class="text-lg text-gray-800 font-bold mb-2">CHỦ MẶT BẰNG / MẶT BẰNG CHO THUÊ, BÁN</h3>
                        <p class="text-gray-600 mb-6">Tăng độ tin cậy, tìm khách thuê đúng nhu cầu.</p>
                        <button class="w-full !bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">"Tôi là chủ mặt bằng"</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script setup>
    import heroImage from '../assets/hero.jpg';
    import feature1 from '../assets/feature1.jpg'
    import feature2 from '../assets/feature2.jpg'
    import feature3 from '../assets/feature3.jpg'
    import feature4 from '../assets/feature4.jpg'
    import audience1 from '../assets/audience1.jpg'
    import audience2 from '../assets/audience2.jpg'
    </script>

