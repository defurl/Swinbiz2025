<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-cover bg-center text-white py-32 px-4" style="background-image: url('https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="relative container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Tìm địa điểm tốt nhất cho<br>doanh nghiệp F&B của bạn
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          F&BSpot giúp các doanh nghiệp F&B chọn vị trí kinh doanh thông minh hơn - bằng dữ liệu thực tế về dân cư, đối thủ, traffic và xu hướng tiêu dùng. Không còn chọn địa điểm theo cảm tính.
        </p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
          Bắt đầu ngay
        </button>
      </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4 text-center">
            <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div class="flex items-center bg-gray-100 p-4 rounded-lg">
                    <div class="p-3 mr-4 text-blue-500 bg-white rounded-full shadow">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-800">Địa điểm thông minh</h3>
                </div>
                <div class="flex items-center bg-yellow-100 p-4 rounded-lg border-2 border-yellow-400">
                     <div class="p-3 mr-4 text-yellow-500 bg-white rounded-full shadow">
                       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-800">Phân tích thị trường tự động</h3>
                </div>
                <div class="flex items-center bg-gray-100 p-4 rounded-lg">
                     <div class="p-3 mr-4 text-green-500 bg-white rounded-full shadow">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="font-semibold text-gray-800">Tiết kiệm thời gian, chi phí</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gray-50 py-16">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-4">
                <div class="relative h-64 rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1517498499704-74a49d01540d?auto=format&fit=crop&w=800&q=60" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                        <h3 class="text-white text-2xl font-bold">BẢN ĐỒ ĐỐI THỦ & TRAFFIC THEO GIỜ</h3>
                    </div>
                </div>
                 <div class="relative h-64 rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=60" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                        <h3 class="text-white text-2xl font-bold">PHÂN TÍCH CHI PHÍ THUÊ & LỢI NHUẬN TIỀM NĂNG</h3>
                    </div>
                </div>
                 <div class="relative h-64 rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=60" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                        <h3 class="text-white text-2xl font-bold">DỰ BÁO XU HƯỚNG TIÊU DÙNG F&B THEO KHU VỰC</h3>
                    </div>
                </div>
                 <div class="relative h-64 rounded-lg overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1560421683-6253b804483a?auto=format&fit=crop&w=800&q=60" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6">
                        <h3 class="text-white text-2xl font-bold">DASHBOARD TỐI ƯU VẬN HÀNH (VỚI GÓI PREMIUM)</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-12">TÌM HIỂU CÁCH HOẠT ĐỘNG</h2>
            <div class="max-w-3xl mx-auto space-y-8">
                <div class="flex items-center text-left">
                    <div class="flex-shrink-0 mr-6">
                        <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-2xl font-bold">1</div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-gray-700">Chọn khu vực</h3>
                        <p class="text-gray-600">Nhập vị trí, chọn loại hình (café, restaurant, fast-food...).</p>
                    </div>
                </div>
                <div class="flex items-center text-left text-gray-700">
                     <div class="flex-shrink-0 mr-6">
                        <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-2xl font-bold">2</div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">Phân tích tự động</h3>
                        <p class="text-gray-600">Hệ thống tạo bản đồ heatmap, phân tích đối thủ, traffic, dân cư, quy hoạch.</p>
                    </div>
                </div>
                <div class="flex items-center text-left text-gray-700">
                     <div class="flex-shrink-0 mr-6">
                        <div class="w-16 h-16 rounded-full bg-yellow-400 text-white flex items-center justify-center text-2xl font-bold">3</div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold">Nhận kết quả & Quyết định</h3>
                        <p class="text-gray-600">Hệ thống gợi ý "Proceed / Switch", và đề xuất loại hình phù hợp.</p>
                    </div>
                </div>
            </div>
             <button class="mt-12 !bg-yellow-500 !hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
              TRẢI NGHIỆM NGAY
            </button>
        </div>
    </section>

    <!-- Target Audience Section -->
    <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">DÀNH CHO AI?</h2>
            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" class="w-full h-64 object-cover">
                    <div class="p-8 text-center">
                        <h3 class="text-2xl font-bold mb-2">DOANH NGHIỆP F&B / NGƯỜI THUÊ MẶT BẰNG</h3>
                        <p class="text-gray-600 mb-6">Tìm vị trí mở quán phù hợp, giảm rủi ro, tối ưu chi phí.</p>
                        <button class="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">"Tôi là người thuê"</button>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80" class="w-full h-64 object-cover">
                    <div class="p-8 text-center">
                        <h3 class="text-2xl font-bold mb-2">CHỦ MẶT BẰNG / NHÀ CHO THUÊ, BÁN</h3>
                        <p class="text-gray-600 mb-6">Tăng độ tin cậy, tìm khách thuê đúng nhu cầu.</p>
                        <button class="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300">"Tôi là chủ mặt bằng"</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script setup>
// No script logic needed for the landing page content.
</script>

