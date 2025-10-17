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
            ? 'text-white !bg-blue-800 border-b-3 '
            : 'text-blue-700 !hover:bg-blue-200 border-b-3 '
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
            v-model="listing.address"
            type="text"
            placeholder="Nhập số nhà, đường, phường, quận..."
            class="w-full border border-blue-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p v-if="errors.address" class="text-red-600 text-sm mt-1">{{ errors.address }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block font-medium text-blue-900 mb-1">Diện tích (m²)</label>
            <input
              v-model.number="listing.area"
              type="number"
              min="0"
              class="w-full border border-blue-400 rounded-full px-4 py-2"
            />
            <p v-if="errors.area" class="text-red-600 text-sm mt-1">{{ errors.area }}</p>
          </div>
          <div>
            <label class="block font-medium text-blue-900 mb-1">Giá thuê/tháng</label>
            <input
              v-model.number="listing.price"
              type="number"
              min="0"
              class="w-full border border-blue-400 rounded-full px-4 py-2"
            />
            <p v-if="errors.price" class="text-red-600 text-sm mt-1">{{ errors.price }}</p>
          </div>
        </div>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Loại mặt bằng</label>
          <select v-model="listing.type" class="w-full border border-blue-400 rounded-full px-4 py-2">
            <option disabled value="">-- Chọn loại --</option>
            <option>Shophouse / Nhà phố</option>
            <option>Kiosk</option>
            <option>Tầng trệt chung cư</option>
          </select>
          <p v-if="errors.type" class="text-red-600 text-sm mt-1">{{ errors.type }}</p>
        </div>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Tiện ích có sẵn</label>
          <select v-model="listing.amenities" class="w-full border border-blue-400 rounded-full px-4 py-2">
            <option disabled value="">-- Chọn tiện ích --</option>
            <option>Bảo vệ</option>
            <option>Toilet</option>
            <option>PCCC</option>
            <option>Chỗ đỗ xe</option>
          </select>
          <p v-if="errors.amenities" class="text-red-600 text-sm mt-1">{{ errors.amenities }}</p>
        </div>

        <div>
          <label class="block font-medium text-blue-900 mb-1">Mô tả chi tiết</label>
          <textarea
            v-model="listing.description"
            rows="3"
            placeholder="Mặt bằng tầng 1, view đẹp, gần văn phòng..."
            class="w-full border border-blue-400 rounded-2xl px-4 py-2"
          ></textarea>
          <p v-if="errors.description" class="text-red-600 text-sm mt-1">{{ errors.description }}</p>
        </div>
      </div>

      <!-- Step 2: Yêu cầu & điều kiện -->
      <div v-if="currentStep === 1" class="space-y-4">
        <h2 class="text-lg font-semibold text-blue-800 mb-4">Yêu cầu & điều kiện</h2>
        <div>
          <label class="block font-medium text-blue-900 mb-1">Loại kinh doanh phù hợp</label>
          <select v-model="listing.businessType" class="w-full border border-blue-400 !rounded-full px-4 py-2">
            <option disabled value="">-- Chọn loại kinh doanh --</option>
            <option>Cafe</option>
            <option>Bakery</option>
            <option>Fast Food</option>
            <option>Bán lẻ</option>
          </select>
          <p v-if="errors.businessType" class="text-red-600 text-sm mt-1">{{ errors.businessType }}</p>
        </div>
        <div>
          <label class="block font-medium text-blue-900 mb-1">Thời hạn thuê tối thiểu</label>
          <input
            v-model="listing.minLease"
            type="text"
            placeholder="Ví dụ: 6 tháng"
            class="w-full border border-blue-400 rounded-full px-4 py-2"
          />
          <p v-if="errors.minLease" class="text-red-600 text-sm mt-1">{{ errors.minLease }}</p>
        </div>
        <div>
          <label class="block font-medium text-blue-900 mb-1">Điều kiện thuê</label>
          <textarea
            v-model="listing.conditions"
            rows="3"
            placeholder="Nhập yêu cầu hoặc điều kiện đặc biệt..."
            class="w-full border border-blue-400 rounded-2xl px-4 py-2"
          ></textarea>
          <p v-if="errors.conditions" class="text-red-600 text-sm mt-1">{{ errors.conditions }}</p>
        </div>
      </div>

      <!-- Step 3: Xác nhận hợp đồng -->
      <div v-if="currentStep === 2" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-3">
          <h2 class="text-lg font-semibold text-blue-800 mb-4">Xác nhận thông tin</h2>
          <div class="p-4 border border-blue-300 rounded-lg bg-blue-50">
            <p class="font-medium text-blue-900">Địa chỉ: {{ listing.address || '—' }}</p>
            <p class="font-medium text-blue-900">Giá thuê: {{ formattedPrice || '—' }}</p>
            <p class="font-medium text-blue-900">Diện tích: {{ listing.area ? listing.area + ' m²' : '—' }}</p>
            <p v-if="listing.type" class="font-medium text-blue-900">Loại: {{ listing.type }}</p>
          </div>
          <div v-if="submissionError" class="text-red-600 mt-2">{{ submissionError }}</div>
        </div>

        <div class="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-6 w-full">
          <div class="w-full flex flex-col items-center mb-4">
            <div v-if="listing.image" class="w-full h-48 mb-3">
              <img :src="listing.image" alt="preview" class="w-full h-full object-cover rounded-md" />
            </div>
            <div v-else class="w-full h-48 mb-3 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">Chưa có ảnh</div>

            <label class="!bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              Tải ảnh lên
              <input type="file" accept="image/*" @change="onFileChange" class="hidden" />
            </label>
          </div>

          <button @click="openPreview" class="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-2 rounded-full">
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

      <!-- Submit button on final step -->
      <button
        v-if="currentStep === tabs.length - 1"
        @click="submitListing"
        :disabled="!isValid"
        class="ml-4 !bg-green-600 disabled:opacity-50 text-white px-6 py-2 rounded-full hover:bg-green-500 flex items-center gap-2"
      >
        Gửi bài đăng
      </button>
    </div>

    <!-- Preview Modal -->
    <div v-if="showPreview" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg max-w-xl w-full p-6 relative">
        <button @click="closePreview" class="absolute top-3 right-3 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">X</button>
        <h3 class="text-lg font-semibold mb-4">Xem trước bài đăng</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img v-if="listing.image" :src="listing.image" class="w-full h-48 object-cover rounded-md" />
            <div v-else class="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">Chưa có ảnh</div>
          </div>
          <div>
            <p class="font-semibold">Địa chỉ</p>
            <p class="mb-2">{{ listing.address }}</p>
            <p class="font-semibold">Giá</p>
            <p class="mb-2">{{ formattedPrice }}</p>
            <p class="font-semibold">Diện tích</p>
            <p class="mb-2">{{ listing.area ? listing.area + ' m²' : '—' }}</p>
            <p class="font-semibold">Mô tả</p>
            <p class="mb-2">{{ listing.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Success Modal -->
    <div v-if="showSuccess" class="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
      <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative">
        <button @click="closeSuccess" class="absolute top-4 right-4 bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">X</button>
        <div class="text-center">
          <h2 class="text-2xl font-bold text-green-700 mb-4">Chúc mừng! Bài đăng đã được tạo</h2>
          <p class="mb-6 text-gray-600">Bài đăng của bạn đã được lưu. Bạn có thể xem các bài đăng đã tạo ở trang quản lý.</p>
          <div class="flex items-center justify-center gap-4">
            <button @click="goToListed" class="bg-blue-700 text-white px-6 py-2 rounded-md">Đi tới bài đăng của tôi</button>
            <button @click="closeSuccess" class="bg-gray-200 px-6 py-2 rounded-md">Đóng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Create',
  setup(_, { emit }) {
    const tabs = [
      { id: 1, label: 'Thông tin mặt bằng' },
      { id: 2, label: 'Yêu cầu & điều kiện' },
      { id: 3, label: 'Xác nhận hợp đồng' }
    ]

    const currentStep = ref(0)

    const listing = reactive({
      address: '',
      area: null,
      price: null,
      type: '',
      amenities: '',
      description: '',
      businessType: '',
      minLease: '',
      conditions: '',
      image: null // single data URL
    })

  const errors = reactive({})
  const submissionError = ref('')
  const showPreview = ref(false)
  const showSuccess = ref(false)

  const router = useRouter()

    const isValid = computed(() => {
      // all required fields must be present
      return (
        listing.address &&
        listing.area > 0 &&
        listing.price > 0 &&
        listing.type &&
        listing.amenities &&
        listing.description &&
        listing.businessType &&
        listing.minLease &&
        listing.conditions
      )
    })

    const formattedPrice = computed(() => {
      if (!listing.price && listing.price !== 0) return '—'
      return new Intl.NumberFormat('vi-VN').format(listing.price) + ' đ / tháng'
    })

    function validateAll() {
      errors.address = listing.address ? '' : 'Địa chỉ là bắt buộc.'
      errors.area = listing.area && listing.area > 0 ? '' : 'Diện tích phải lớn hơn 0.'
      errors.price = listing.price && listing.price > 0 ? '' : 'Giá phải lớn hơn 0.'
      errors.type = listing.type ? '' : 'Vui lòng chọn loại mặt bằng.'
      errors.amenities = listing.amenities ? '' : 'Vui lòng chọn tiện ích.'
      errors.description = listing.description ? '' : 'Mô tả là bắt buộc.'
      errors.businessType = listing.businessType ? '' : 'Vui lòng chọn loại kinh doanh.'
      errors.minLease = listing.minLease ? '' : 'Vui lòng nhập thời hạn thuê.'
      errors.conditions = listing.conditions ? '' : 'Vui lòng nhập điều kiện.'

      // return boolean
      return Object.values(errors).every(e => !e)
    }

    function nextStep() {
      // validate current step fields
      if (currentStep.value === 0) {
        // basic step 1 validation
        const ok = listing.address && listing.area > 0 && listing.price > 0 && listing.type && listing.amenities && listing.description
        if (!ok) {
          validateAll()
          return
        }
      }
      if (currentStep.value < tabs.length - 1) currentStep.value++
    }

    function prevStep() {
      if (currentStep.value > 0) currentStep.value--
    }

    function onFileChange(e) {
      const file = (e.target.files && e.target.files[0]) || null
      if (!file) return
      const reader = new FileReader()
      reader.onload = ev => {
        // replace any existing image
        listing.image = ev.target.result
      }
      reader.readAsDataURL(file)
    }

    function openPreview() {
      // ensure current form is saved in listing
      showPreview.value = true
    }

    function closePreview() {
      showPreview.value = false
    }

    function submitListing() {
      submissionError.value = ''
      if (!validateAll()) {
        submissionError.value = 'Vui lòng hoàn thành tất cả các trường trước khi gửi.'
        // jump to first step with an error
        const firstErrorKey = Object.keys(errors).find(k => errors[k])
        if (firstErrorKey) currentStep.value = 0
        return
      }

      // Create a plain object copy for storage
      const payload = {
        address: listing.address,
        area: listing.area,
        price: listing.price,
        type: listing.type,
        amenities: listing.amenities,
        description: listing.description,
        businessType: listing.businessType,
        minLease: listing.minLease,
        conditions: listing.conditions,
        image: listing.image || null,
        createdAt: new Date().toISOString()
      }

      try {
        // store in localStorage as a simple persistence layer
        const existing = JSON.parse(localStorage.getItem('listings') || '[]')
        existing.push(payload)
        localStorage.setItem('listings', JSON.stringify(existing))

        // emit event for parent components
        emit && emit('listing-submitted', payload)

        // reset form -> clear listing fields
        Object.assign(listing, {
          address: '',
          area: null,
          price: null,
          type: '',
          amenities: '',
          description: '',
          businessType: '',
          minLease: '',
          conditions: '',
          image: null
        })
        // clear errors
        Object.keys(errors).forEach(k => (errors[k] = ''))

        // show a larger success modal
        showSuccess.value = true
      } catch (err) {
        submissionError.value = 'Lưu bài đăng thất bại.'
        console.error(err)
      }
    }

    function closeSuccess() {
      showSuccess.value = false
    }

    function goToListed() {
      // navigate to the listings page
      try {
        router.push('/listing/listed')
      } catch (err) {
        console.error('Router navigation failed', err)
      }
    }

    return {
      tabs,
      currentStep,
      nextStep,
      prevStep,
      listing,
      errors,
      isValid,
      onFileChange,
      openPreview,
      closePreview,
      showPreview,
      showSuccess,
      submitListing,
      closeSuccess,
      goToListed,
      formattedPrice,
      submissionError
    }
  }
}
</script>


