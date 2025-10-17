<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <!-- Tabs -->
    <div class="flex mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        @click="currentStep = index"
        :class="[
          'flex-1 text-center py-3 font-semibold transition-colors !border !border-blue-400 duration-200 mx-1',
          currentStep === index
            ? 'text-white !bg-blue-800 border-b-3 !rounded-full'
            : 'text-blue-700 !hover:bg-blue-200 border-b-3 !rounded-full'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Step Content -->
    <div class="min-h-[400px]">
      <!-- Step 1: Thông tin mặt bằng -->
      <div v-if="currentStep === 0" class="space-y-4">
        <h2 class="text-lg font-semibold text-blue-800 mb-4">Thông tin mặt bằng</h2>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Địa chỉ mặt bằng</label>
          <input
            type="text"
            placeholder="Nhập số nhà, đường, phường, quận..."
            class="w-full border border-blue-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-medium text-blue-900 mb-1">Diện tích (m²)</label>
            <input
              type="number"
              class="w-full border border-blue-400 rounded-full px-4 py-2"
            />
          </div>
          <div>
            <label class="block font-medium text-blue-900 mb-1">Giá thuê/tháng</label>
            <input
              type="number"
              class="w-full border border-blue-400 rounded-full px-4 py-2"
            />
          </div>
        </div>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Loại mặt bằng</label>
          <select class="w-full border border-blue-400 rounded-full px-4 py-2">
            <option>Shophouse / Nhà phố</option>
            <option>Kiosk</option>
            <option>Tầng trệt chung cư</option>
          </select>
        </div>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Tiện ích có sẵn</label>
          <select class="w-full border border-blue-400 rounded-full px-4 py-2">
            <option>Bảo vệ, Toilet, PCCC, Chỗ đỗ xe...</option>
          </select>
        </div>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Mô tả chi tiết</label>
          <textarea
            rows="3"
            placeholder="Mặt bằng tầng 1, view đẹp, gần văn phòng..."
            class="w-full border border-blue-400 rounded-2xl px-4 py-2"
          ></textarea>
        </div>
      </div>

      <!-- Step 2: Yêu cầu & điều kiện -->
      <div v-if="currentStep === 1" class="space-y-4">
        <h2 class="text-lg font-semibold text-blue-800 mb-4">Yêu cầu & điều kiện</h2>
        <div>
          <label class="block font-medium text-blue-900 mb-1">Loại kinh doanh phù hợp</label>
          <select class="w-full border border-blue-400 !rounded-full px-4 py-2">
            <option>Cafe</option>
            <option>Bakery</option>
            <option>Fast Food</option>
          </select>
        </div>
        <div>
          <label class="block font-medium text-blue-900 mb-1">Thời hạn thuê tối thiểu</label>
          <input
            type="text"
            placeholder="Ví dụ: 6 tháng"
            class="w-full border border-blue-400 rounded-full px-4 py-2"
          />
        </div>
        <div>
          <label class="block font-medium text-blue-900 mb-1">Điều kiện thuê</label>
          <textarea
            rows="3"
            placeholder="Nhập yêu cầu hoặc điều kiện đặc biệt..."
            class="w-full border border-blue-400 rounded-2xl px-4 py-2"
          ></textarea>
        </div>
      </div>

      <!-- Step 3: Xác nhận hợp đồng -->
      <div v-if="currentStep === 2" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-3">
          <h2 class="text-lg font-semibold text-blue-800 mb-4">Xác nhận thông tin</h2>
          <div class="p-4 border border-blue-300 rounded-lg bg-blue-50">
            <p class="font-medium text-blue-900">Địa chỉ: 123 Nguyễn Trãi</p>
            <p class="font-medium text-blue-900">Giá thuê: 20.000.000 đ / tháng</p>
            <p class="font-medium text-blue-900">Diện tích: 50 m²</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-6">
          <button class="!bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 mb-4">
            Tải ảnh lên
          </button>
          <button class="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-full">
            Xem trước bài đăng
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="flex justify-end items-center mt-8">
      <button
        v-if="currentStep > 0"
        @click="prevStep"
        class="text-blue-800 font-semibold flex items-center hover:underline rounded-full"
      >
        ← Quay lại
      </button>
      <button
        v-if="currentStep < tabs.length - 1"
        @click="nextStep"
        class="ml-auto !bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 flex items-center gap-2"
      >
        Tiếp tục →
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Create",
  setup() {
    const tabs = [
      { id: 1, label: 'Thông tin mặt bằng' },
      { id: 2, label: 'Yêu cầu & điều kiện' },
      { id: 3, label: 'Xác nhận hợp đồng' }
    ]

    const currentStep = ref(0)

    function nextStep() {
      if (currentStep.value < tabs.length - 1) currentStep.value++
    }

    function prevStep() {
      if (currentStep.value > 0) currentStep.value--
    }

    return { tabs, currentStep, nextStep, prevStep }
  }
}
</script>

