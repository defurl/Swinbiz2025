<template>
  <div>
    <!-- Hero Section with Enhanced Animations -->
    <section
      ref="heroSection"
      class="relative bg-cover bg-center text-white py-32 px-4 overflow-hidden"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <!-- Animated overlay gradient -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-black/30 animate-gradient"></div>
      </div>
      
      <!-- Animated particles -->
      <div class="particle-container absolute inset-0">
        <div v-for="n in 20" :key="`particle-${n}`" 
             class="particle absolute bg-white rounded-full opacity-60"
             :style="getRandomParticleStyle()">
        </div>
      </div>
      
      <div class="relative container mx-auto z-10">
        <h1
          ref="heroTitle"
          class="text-3xl md:text-4xl font-bold leading-snug md:leading-tight text-center mb-8 px-4 text-shadow"
        >
          Tìm địa điểm tốt nhất cho <br class="hidden sm:block" />doanh nghiệp
          F&B của bạn
        </h1>

        <div class="flex justify-center">
          <AppButton
            ref="ctaButton"
            size="lg"
            color="primary"
            class="!text-blue-400 mt-4 rounded-full text-xl px-8 shadow-lg"
            animate
            icon="fas fa-map-marker-alt"
            @click="navigateToSelection"
          >
            Bắt đầu ngay
          </AppButton>
        </div>
        
        <!-- Simplified scroll indicator with less intrusive animation -->
      </div>
    </section>

    <!-- Value Proposition Section with Scroll Animations -->
    <section ref="valueSection" class="py-24 bg-white relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="hidden md:block absolute -right-16 -top-16 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
      <div class="hidden md:block absolute -left-16 -bottom-16 w-48 h-48 bg-yellow-100 rounded-full opacity-50"></div>
      
      <!-- Quote -->
      <div class="relative z-10">
        <p class="text-lg md:text-2xl mb-12 max-w-3xl mx-auto p-4 italic font-light text-center text-gray-700 value-quote">
          <span class="absolute -top-8 left-0 text-6xl text-blue-200">"</span>
          F&BSpot giúp các doanh nghiệp F&B chọn vị trí kinh doanh thông minh hơn
          - bằng dữ liệu thực tế về dân cư, đối thủ, traffic và xu hướng tiêu
          dùng. Không còn chọn địa điểm theo cảm tính.
          <span class="absolute -bottom-8 right-0 text-6xl text-blue-200">"</span>
        </p>
      </div>
      
      <div class="container mx-auto px-4 text-center">
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div
            ref="featureCard1"
            class="feature-card flex flex-col items-center p-6 rounded-xl text-center transition-all duration-500 bg-white border border-gray-100 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div class="p-4 mb-4 bg-blue-100 rounded-full text-blue-600">
              <i class="fas fa-map-marked-alt text-2xl"></i>
            </div>
            <h3 class="font-semibold text-lg text-gray-800 mb-3">Chọn địa điểm thông minh</h3>
            <p class="text-gray-600 text-sm">Sử dụng dữ liệu thực tế để tìm vị trí kinh doanh phù hợp nhất cho doanh nghiệp F&B của bạn.</p>
          </div>

          <div
            ref="featureCard2"
            class="feature-card flex flex-col items-center p-6 rounded-xl text-center transition-all duration-500 bg-white border border-gray-100 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div class="p-4 mb-4 bg-yellow-100 rounded-full text-yellow-600">
              <i class="fas fa-chart-line text-2xl"></i>
            </div>
            <h3 class="font-semibold text-lg text-gray-800 mb-3">Phân tích thị trường tự động</h3>
            <p class="text-gray-600 text-sm">Dữ liệu thực tế về thị trường F&B giúp đưa ra quyết định kinh doanh sáng suốt.</p>
          </div>
          
          <div
            ref="featureCard3"
            class="feature-card flex flex-col items-center p-6 rounded-xl text-center transition-all duration-500 bg-white border border-gray-100 hover:shadow-xl transform hover:-translate-y-2"
          >
            <div class="p-4 mb-4 bg-green-100 rounded-full text-green-600">
              <i class="fas fa-dollar-sign text-2xl"></i>
            </div>
            <h3 class="font-semibold text-lg text-gray-800 mb-3">Tối ưu chi phí mặt bằng</h3>
            <p class="text-gray-600 text-sm">So sánh giá thuê mặt bằng và lưu lượng khách hàng để đảm bảo ROI tốt nhất.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Features Section -->
    <section ref="featuresSection" class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 ref="featuresTitle" class="!text-gray-800 text-3xl font-bold text-center mb-12">Tính năng chính</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <!-- Card 1 -->
          <div
            ref="featureImage1"
            class="feature-image relative h-80 overflow-hidden rounded-lg flex items-center justify-center text-center text-white p-6 group transform transition-all duration-500 hover:scale-98 cursor-pointer"
            :style="{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${feature1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            @mouseenter="animateFeatureIn($event.currentTarget)"
            @mouseleave="animateFeatureOut($event.currentTarget)"
          >
            <div class="absolute inset-0 bg-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="mb-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <i class="fas fa-map-marker-alt text-4xl text-yellow-400"></i>
              </div>
              <h3 class="text-2xl font-bold max-w-sm mb-3">
                BẢN ĐỒ ĐỐI THỦ & TRAFFIC THEO GIỜ
              </h3>
              <p class="text-sm opacity-0 max-w-xs mx-auto transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                Xem chi tiết lưu lượng người qua lại theo từng giờ và vị trí của đối thủ cạnh tranh trên bản đồ tương tác.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            ref="featureImage2"
            class="feature-image relative h-80 overflow-hidden rounded-lg flex items-center justify-center text-center text-white p-6 group transform transition-all duration-500 hover:scale-98 cursor-pointer"
            :style="{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${feature2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            @mouseenter="animateFeatureIn($event.currentTarget)"
            @mouseleave="animateFeatureOut($event.currentTarget)"
          >
            <div class="absolute inset-0 bg-green-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="mb-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <i class="fas fa-dollar-sign text-4xl text-yellow-400"></i>
              </div>
              <h3 class="text-2xl font-bold max-w-sm mb-3">
                PHÂN TÍCH CHI PHÍ THUÊ & LỢI NHUẬN TIỀM NĂNG
              </h3>
              <p class="text-sm opacity-0 max-w-xs mx-auto transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                So sánh chi phí thuê mặt bằng với lợi nhuận tiềm năng để đưa ra quyết định kinh doanh thông minh nhất.
              </p>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            ref="featureImage3"
            class="feature-image relative h-80 overflow-hidden rounded-lg flex items-center justify-center text-center text-white p-6 group transform transition-all duration-500 hover:scale-98 cursor-pointer"
            :style="{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${feature3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            @mouseenter="animateFeatureIn($event.currentTarget)"
            @mouseleave="animateFeatureOut($event.currentTarget)"
          >
            <div class="absolute inset-0 bg-yellow-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="mb-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <i class="fas fa-chart-line text-4xl text-yellow-400"></i>
              </div>
              <h3 class="text-2xl font-bold max-w-sm mb-3">
                DỰ BÁO XU HƯỚNG TIÊU DÙNG F&B THEO KHU VỰC
              </h3>
              <p class="text-sm opacity-0 max-w-xs mx-auto transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                Dự báo xu hướng tiêu dùng F&B trong khu vực để đón đầu thị trường và tối ưu hóa chiến lược kinh doanh.
              </p>
            </div>
          </div>

          <!-- Card 4 -->
          <div
            ref="featureImage4"
            class="feature-image relative h-80 overflow-hidden rounded-lg flex items-center justify-center text-center text-white p-6 group transform transition-all duration-500 hover:scale-98 cursor-pointer"
            :style="{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${feature4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
            @mouseenter="animateFeatureIn($event.currentTarget)"
            @mouseleave="animateFeatureOut($event.currentTarget)"
          >
            <div class="absolute inset-0 bg-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="relative z-10">
              <div class="mb-4 opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <i class="fas fa-tachometer-alt text-4xl text-yellow-400"></i>
              </div>
              <h3 class="text-2xl font-bold max-w-sm mb-3">
                DASHBOARD TỐI ƯU VẬN HÀNH (VỚI GÓI PREMIUM)
              </h3>
              <p class="text-sm opacity-0 max-w-xs mx-auto transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                Truy cập dashboard phân tích nâng cao để tối ưu hoạt động kinh doanh và tăng cường hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Audience Section -->
    <section ref="audienceSection" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 ref="audienceTitle" class="text-3xl font-bold text-center text-gray-900 mb-12">
          DÀNH CHO AI?
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div ref="audienceCard1" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="relative overflow-hidden h-64">
              <img :src="audience1" class="w-full h-64 object-cover transition-all duration-700 hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span class="bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">Người thuê</span>
              </div>
            </div>
            <div class="p-8 text-center">
              <h3 class="text-lg text-gray-800 font-bold mb-2">
                DOANH NGHIỆP F&B / NGƯỜI THUÊ MẶT BẰNG
              </h3>
              <p class="text-gray-600 mb-6">
                Tìm vị trí mở quán phù hợp, giảm rủi ro, tối ưu chi phí.
              </p>
              <AppButton
                color="secondary"
                class="!bg-yellow-400 w-full font-semibold"
                animate
              >
                "Tôi là người thuê"
              </AppButton>
            </div>
          </div>
          <div ref="audienceCard2" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div class="relative overflow-hidden h-64">
              <img :src="audience2" class="w-full h-64 object-cover transition-all duration-700 hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span class="bg-blue-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">Chủ sở hữu</span>
              </div>
            </div>
            <div class="p-8 text-center">
              <h3 class="text-lg text-gray-800 font-bold mb-2">
                CHỦ MẶT BẰNG / MẶT BẰNG CHO THUÊ, BÁN
              </h3>
              <p class="text-gray-600 mb-6">
                Tăng độ tin cậy, tìm khách thuê đúng nhu cầu.
              </p>
              <AppButton
                color="primary"
                class="!bg-yellow-400 w-full font-semibold"
                animate
              >
                "Tôi là chủ mặt bằng"
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section ref="ctaSection" class="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 ref="ctaTitle" class="text-3xl font-bold mb-6">
          SẴN SÀNG CHỌN ĐỊA ĐIỂM KINH DOANH THÔNG MINH HƠN?
        </h2>
        <p ref="ctaText" class="text-lg mb-8 max-w-2xl mx-auto">
          Đừng để địa điểm kinh doanh được chọn theo cảm tính. Sử dụng dữ liệu thực tế để đưa ra quyết định có tính toán.
        </p>
        
        <div class="flex flex-wrap justify-center gap-6">
          <AppButton 
            ref="ctaPrimaryBtn"
            size="lg"
            color="secondary"
            animate
            class="!bg-black font-bold px-10 rounded-md"
            icon="fas fa-rocket"
          >
            ĐĂNG KÝ MIỄN PHÍ
          </AppButton>
          
          <AppButton 
            ref="ctaSecondaryBtn"
            size="lg"
            color="secondary"
            animate
            class="!bg-black font-bold px-10 rounded-md"
            icon="fas fa-play-circle"
          >
            XEM DEMO
          </AppButton>
        </div>
        
        <!-- Trust badges -->
        <div ref="trustBadges" class="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-75">
          <div class="flex items-center">
            <i class="fas fa-shield-alt text-2xl mr-2"></i>
            <span class="text-sm">Bảo mật dữ liệu</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-sync text-2xl mr-2"></i>
            <span class="text-sm">Cập nhật liên tục</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-headset text-2xl mr-2"></i>
            <span class="text-sm">Hỗ trợ 24/7</span>
          </div>
          <div class="flex items-center">
            <i class="fas fa-users text-2xl mr-2"></i>
            <span class="text-sm">5000+ khách hàng</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import AppButton from '../components/ui/AppButton.vue';
import heroImage from "../assets/hero.jpg";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";
import feature3 from "../assets/feature3.jpg";
import feature4 from "../assets/feature4.jpg";
import audience1 from "../assets/audience1.jpg";
import audience2 from "../assets/audience2.jpg";

// Simple animation approach without ScrollTrigger
const router = useRouter();

// Refs for animation elements
const heroSection = ref(null);
const heroTitle = ref(null);
const ctaButton = ref(null);
const valueSection = ref(null);
const featureCard1 = ref(null);
const featureCard2 = ref(null);
const featureCard3 = ref(null);
const howItWorksTitle = ref(null);
const step1 = ref(null);
const step2 = ref(null);
const step3 = ref(null);
const step4 = ref(null);
const featuresSection = ref(null);
const featuresTitle = ref(null);
const featureImage1 = ref(null);
const featureImage2 = ref(null);
const featureImage3 = ref(null);
const featureImage4 = ref(null);
const ctaSection = ref(null);
const ctaTitle = ref(null);
const ctaText = ref(null);
const ctaPrimaryBtn = ref(null);
const ctaSecondaryBtn = ref(null);
const trustBadges = ref(null);
const audienceSection = ref(null);
const audienceTitle = ref(null);
const audienceCard1 = ref(null);
const audienceCard2 = ref(null);

// Navigation function
const navigateToSelection = () => {
  router.push('/select-location');
};

// Simple feature card hover animations
const animateFeatureIn = (element) => {
  gsap.to(element, {
    scale: 1.03,
    duration: 0.3,
    ease: 'power2.out'
  });
};

const animateFeatureOut = (element) => {
  gsap.to(element, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out'
  });
};

// Random particle positioning for hero section
const getRandomParticleStyle = () => {
  const size = Math.random() * 6 + 2; // Between 2-8px
  const animDuration = Math.random() * 15 + 10; // Between 10-25s
  const startPosition = Math.random() * 100; // Starting position 0-100%
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${animDuration}s`,
    animationDelay: `${Math.random() * 5}s`,
    transform: `translateY(${startPosition}%)`,
  };
};

// Initialize animations - simplified approach
onMounted(() => {
  // Make sure body overflow is enabled for scrolling
  document.body.style.overflow = '';
  
  // Simple fade-in animation for the hero section elements
  if (heroTitle.value) {
    gsap.from(heroTitle.value, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: 'power3.out' 
    });
  }
  
  if (ctaButton.value?.$el) {
    gsap.from(ctaButton.value.$el, { 
      y: 20, 
      opacity: 0, 
      duration: 0.6,
      delay: 0.3,
      ease: 'power3.out' 
    });
  }
  
  // Make all content visible immediately without scroll-triggered animations
  // This ensures users can see and scroll through content without waiting for animations
  
  // Apply simple hover animations to feature cards instead of entrance animations
  const featureCards = [featureCard1.value, featureCard2.value, featureCard3.value].filter(Boolean);
  featureCards.forEach(card => {
    if (card) {
      // No entrance animation needed - already visible in DOM
      gsap.set(card, { clearProps: 'all' }); // Clear any GSAP-applied properties
    }
  });
  
  // Make the feature cards immediately visible
  if (document.querySelector('.value-quote')) {
    gsap.set('.value-quote', { clearProps: 'all' });
  }
});
</script>

<style scoped>
/* Particle animation */
@keyframes float-up {
  0% {
    transform: translateY(100%);
    opacity: 0.2;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

.particle {
  animation: float-up linear infinite;
}

/* Gradient animation */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}

/* Text shadow for better readability */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Process step animation on hover */
.process-step:hover {
  transform: translateY(-10px);
  transition: transform 0.5s ease;
}

/* Fix for hover:scale-98 (TailwindCSS doesn't have this by default) */
.hover\:scale-98:hover {
  transform: scale(0.98);
}

/* Simpler bounce animation for scroll indicator */
.simple-bounce {
  animation: simple-bounce 2s ease-in-out infinite;
}

@keyframes simple-bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-10px) translateX(-50%);
  }
}
</style>
