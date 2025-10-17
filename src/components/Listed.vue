<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Danh sách bài đăng</h2>

    <!-- Search & Filters -->
    <div class="flex flex-col md:flex-row gap-4 mb-6 items-center">
      <input v-model="q" placeholder="Tìm kiếm theo địa chỉ..." class="border rounded px-4 py-2 w-full md:w-1/3 text-gray-800" />

      <input v-model.number="filters.minPrice" type="number" placeholder="Giá từ (triệu đ)" class="border rounded px-4 py-2 w-full md:w-1/6 text-gray-800" />
      <input v-model.number="filters.maxPrice" type="number" placeholder="Giá đến (triệu đ)" class="border rounded px-4 py-2 w-full md:w-1/6 text-gray-800" />
      <input v-model.number="filters.minArea" type="number" placeholder="Diện tích tối thiểu (m²)" class="border rounded px-4 py-2 w-full md:w-1/6 text-gray-800" />

      <select v-model="filters.type" class="border rounded px-4 py-2 w-full md:w-1/6 text-gray-800">
        <option value="">Tất cả loại</option>
        <option>Shophouse / Nhà phố</option>
        <option>Kiosk</option>
        <option>Tầng trệt chung cư</option>
      </select>

      <button @click="resetFilters" class="ml-auto bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm px-3 py-2 rounded">RESET</button>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(item, idx) in filtered" :key="item.createdAt + idx" class="border rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer bg-white" @click="openDetail(item)">
        <div class="h-40 bg-gray-100">
          <img v-if="item.image" :src="item.image" class="w-full h-full object-cover" />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-500">No image</div>
        </div>
        <div class="p-4">
          <p class="font-semibold text-blue-800">{{ item.address }}</p>
          <p class="text-sm text-gray-700">{{ formatPrice(item.price) }}</p>
          <p class="text-sm text-gray-700">{{ item.area }} m²</p>
        </div>
      </div>
    </div>

    <!-- Detail Modal -->
    <div v-if="detail" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative text-gray-800">
        <button @click="closeDetail" class="absolute top-3 right-3 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 text-gray-700">
          <span class="text-gray-700">✕</span>
        </button>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img v-if="detail.image" :src="detail.image" class="w-full h-64 object-cover rounded-md" />
            <div v-else class="w-full h-64 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">No image</div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2 text-blue-800">{{ detail.address }}</h3>
            <p class="text-gray-700 mb-2"><span class="font-semibold text-gray-800">Giá:</span> {{ formatPrice(detail.price) }}</p>
            <p class="text-gray-700 mb-2"><span class="font-semibold text-gray-800">Diện tích:</span> {{ detail.area }} m²</p>
            <p class="text-gray-700 mb-2"><span class="font-semibold text-gray-800">Loại:</span> {{ detail.type }}</p>
            <p class="text-gray-700 mb-2"><span class="font-semibold text-gray-800">Mô tả:</span> {{ detail.description }}</p>
            <p class="text-gray-600 text-sm mt-4">Thời hạn thuê: {{ detail.minLease || 'Chưa xác định' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import shop1 from '../assets/shop1.jpg'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop3.jpg'
import shop4 from '../assets/shop4.jpg'
import shop5 from '../assets/shop5.jpg'
import shop6 from '../assets/shop6.jpg'

export default {
  name: 'Listed',
  setup() {
  const q = ref('')
  const filters = reactive({ minPrice: null, maxPrice: null, minArea: null, type: '' })
    const detail = ref(null)

    // six sample hardcoded listings (shop1..shop6)
    const samples = [
      {
        address: '123 Nguyễn Trãi',
        price: 20000000,
        area: 50,
        type: 'Shophouse / Nhà phố',
        description: 'Mặt bằng đẹp, gần trung tâm',
        image: shop1,
        createdAt: 'sample-1'
      },
      {
        address: '45 Lê Lợi',
        price: 15000000,
        area: 40,
        type: 'Kiosk',
        description: 'Vị trí đông người qua lại',
        image: shop2,
        createdAt: 'sample-2'
      },
      {
        address: '78 Trường Chinh',
        price: 25000000,
        area: 70,
        type: 'Tầng trệt chung cư',
        description: 'Tầng trệt rộng rãi, có chỗ đậu xe',
        image: shop3,
        createdAt: 'sample-3'
      },
      {
        address: '10 Phố Huế',
        price: 18000000,
        area: 45,
        type: 'Shophouse / Nhà phố',
        description: 'Gần chợ, phù hợp kinh doanh',
        image: shop4,
        createdAt: 'sample-4'
      },
      {
        address: '200 Bà Triệu',
        price: 30000000,
        area: 80,
        type: 'Tầng trệt chung cư',
        description: 'Vị trí đẹp, view mặt tiền',
        image: shop5,
        createdAt: 'sample-5'
      },
      {
        address: '77 Hai Bà Trưng',
        price: 12000000,
        area: 35,
        type: 'Kiosk',
        description: 'Kiosk nhỏ, chi phí hợp lý',
        image: shop6,
        createdAt: 'sample-6'
      }
    ]

    function loadFromStorage() {
      try {
        const items = JSON.parse(localStorage.getItem('listings') || '[]')
        // ensure consistent shape
        return items.map(i => ({ ...i }))
      } catch (err) {
        return []
      }
    }

    const stored = ref(loadFromStorage())

    const all = computed(() => [...samples, ...stored.value])

    function formatPrice(v) {
      if (!v && v !== 0) return '—'
      return new Intl.NumberFormat('vi-VN').format(v) + ' đ / tháng'
    }

    const filtered = computed(() => {
      return all.value.filter(item => {
        if (q.value && (!item.address || !item.address.toLowerCase().includes(q.value.toLowerCase()))) return false
        if (filters.type && item.type !== filters.type) return false
        // price filters are entered in millions (triệu đ) — convert to full VND for comparison
        if (filters.minPrice && item.price < filters.minPrice * 1000000) return false
        if (filters.maxPrice && item.price > filters.maxPrice * 1000000) return false
        if (filters.minArea && item.area < filters.minArea) return false
        return true
      })
    })

    function openDetail(item) {
      detail.value = item
    }

    function closeDetail() {
      detail.value = null
    }

    function resetFilters() {
      q.value = ''
      filters.minPrice = null
      filters.maxPrice = null
      filters.minArea = null
      filters.type = ''
    }

    // listen for storage changes (other tabs or CreateListing saving)
    window.addEventListener('storage', (e) => {
      if (!e || e.key === 'listings') {
        stored.value = loadFromStorage()
      }
    })

    return { q, filters, filtered, formatPrice, detail, openDetail, closeDetail, resetFilters }
  }
}
</script>
