<template>
  <div>
    <!-- Account Overview -->
    <section>
      <h2 class="text-2xl font-bold text-blue-800 mt-4 mb-4">
        Tổng quan tài khoản22
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card border-blue-300">
          <h3 class="font-semibold text-blue-700 flex items-center space-x-2">
            <i class="fas fa-map-marked-alt"></i>
            <span>Khu vực đã phân tích</span>
          </h3>
          <p class="text-3xl font-bold text-blue-900 mt-2">3 khu vực</p>
          <button class="text-red-600 font-medium mt-2 hover:underline">
            Tìm khu vực >
          </button>
        </div>
        <div class="card border-gray-300">
          <h3 class="font-semibold text-blue-700 flex items-center space-x-2">
            <i class="fas fa-user-friends"></i> <span>Chủ nhà đã liên hệ</span>
          </h3>
          <p class="text-3xl font-bold text-blue-900 mt-2">2 người</p>
        </div>
        <div class="card border-gray-300">
          <h3 class="font-semibold text-blue-700 flex items-center space-x-2">
            <i class="fas fa-heart"></i> <span>Địa điểm yêu thích</span>
          </h3>
          <p class="text-3xl font-bold text-blue-900 mt-2">2 địa điểm</p>
          <p class="text-gray-500 text-sm">+0 mới vào hôm nay</p>
        </div>
      </div>
    </section>
    <!-- Personalized Info -->
    <section class="mt-10">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">
        Thông tin dành riêng cho bạn
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Gợi ý -->
        <div class="card bg-gray-200">
          <h3 class="font-semibold text-blue-800 mb-2 flex items-center">
            <i class="fas fa-lightbulb text-yellow-400 mr-2"></i> Gợi ý
          </h3>
          <div class="bg-gray-300 rounded-2xl p-4">
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
            <div
              class="bg-gray-200 rounded-md p-3 hover:bg-gray-300 transition"
            >
              <i class="fas fa-calendar-alt text-red-500 mr-2"></i> Lịch hẹn xem
              mặt bằng
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
  </div>
</template>

<script>
export default { name: "Overview2" };
</script>
