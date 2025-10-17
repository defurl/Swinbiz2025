<template>
    <div class="relative w-full h-full">
      <!-- Loading Overlay -->
      <transition
        enter-active-class="transition-opacity duration-500"
        leave-active-class="transition-opacity duration-500"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div v-if="isLoading" class="absolute inset-0 bg-white flex flex-col items-center justify-center z-20">
          <div class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p class="mt-4 text-gray-600 font-medium">Đang tải bản đồ...</p>
        </div>
      </transition>

      <!-- Map Controls -->
      <div class="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <button 
          @click="zoomIn"
          class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          v-button-hover
        >
          <i class="fas fa-plus text-gray-700"></i>
        </button>
        <button 
          @click="zoomOut"
          class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          v-button-hover
        >
          <i class="fas fa-minus text-gray-700"></i>
        </button>
        <button 
          @click="toggleMapView"
          class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          v-button-hover
        >
          <i class="fas fa-layer-group text-gray-700"></i>
        </button>
        <button 
          @click="toggleHeatmap"
          class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'bg-red-100': isHeatmapVisible }"
          v-button-hover
        >
          <i class="fas fa-fire text-gray-700" :class="{ 'text-red-500': isHeatmapVisible }"></i>
        </button>
        <button 
          @click="toggleTraffic"
          class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          :class="{ 'bg-blue-100': isTrafficVisible }"
          v-button-hover
        >
          <i class="fas fa-car text-gray-700" :class="{ 'text-blue-500': isTrafficVisible }"></i>
        </button>
        <button 
          @click="toggleDrawing"
          class="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
          v-button-hover
        >
          <i class="fas fa-draw-polygon text-gray-700"></i>
        </button>
      </div>
      
      <!-- Search Filter
      <div class="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 w-72 transform origin-top-left" 
           :class="isFilterOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'">
        <div class="p-4 bg-blue-600 text-white">
          <div class="flex justify-between items-center">
            <h3 class="font-semibold">Lọc địa điểm</h3>
            <button @click="toggleFilter" class="text-white hover:text-gray-200 transition-colors">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="p-4 space-y-4">
          <div class="space-y-1">
            <label class="text-sm text-gray-600">Loại hình kinh doanh</label>
            <select v-model="selectedBusinessType" @change="applyFilters" class="w-full p-2 border rounded">
              <option value="">Tất cả</option>
              <option value="Cà phê">Café</option>
              <option value="Nhà hàng">Nhà hàng</option>
              <option value="Món ăn">Quán ăn</option>
              <option value="Tiệm bánh">Tiệm bánh</option>
            </select>
          </div>
          <div class="mt-4">
            <button @click="applyFilters" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
              Áp dụng bộ lọc
            </button>
          </div>
        </div>
      </div>

\\
      <button 
        @click="toggleFilter" 
        class="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2 hover:bg-gray-50 transition-colors duration-300"
        :class="{ 'hidden': isFilterOpen }"
      >
        <i class="fas fa-filter text-blue-600"></i>
        <span class="text-gray-700">Bộ lọc</span>
      </button>-->

      <!-- Features Legend -->
      <div class="absolute bottom-4 right-4 z-10 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h4 class="font-medium text-sm mb-2 text-gray-700">Tính năng bản đồ</h4>
        <div class="space-y-1 text-xs">
          <div class="flex items-center">
            <div class="w-6 h-6 flex items-center justify-center mr-2">
              <i class="fas fa-fire text-red-500"></i>
            </div>
            <span class="text-gray-600">Mật độ khách hàng tiềm năng (màu vàng → đỏ: thấp → cao)</span>
          </div>
          <div class="flex items-center">
            <div class="w-6 h-6 flex items-center justify-center mr-2">
              <i class="fas fa-car text-blue-500"></i>
            </div>
            <span class="text-gray-600">Hiển thị lưu lượng giao thông</span>
          </div>
          <div class="flex items-center">
            <div class="w-6 h-6 flex items-center justify-center mr-2">
              <i class="fas fa-draw-polygon text-green-500"></i>
            </div>
            <span class="text-gray-600">Phân tích khu vực kinh doanh</span>
          </div>
        </div>
      </div>
      
      <!-- Map Container -->
      <div ref="mapContainer" class="w-full h-full map-container transition-opacity duration-500" :class="{ 'opacity-50': isFilterOpen }"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { animations } from '../utils/animations';
  
  const mapContainer = ref(null);
  const isLoading = ref(true);
  const isFilterOpen = ref(false);
  const map = ref(null);
  const mapType = ref('roadmap');
  
  // Advanced map features
  const heatmap = ref(null);
  const isHeatmapVisible = ref(false);
  const trafficLayer = ref(null);
  const isTrafficVisible = ref(false);
  const drawingManager = ref(null);
  
  // Filter and markers data
  const selectedBusinessType = ref('');
  const markers = ref([]);
  
  const toggleFilter = () => {
    isFilterOpen.value = !isFilterOpen.value;
  };
  
  const applyFilters = () => {
    if (!markers.value || markers.value.length === 0) {
      console.warn('No markers to filter');
      return;
    }
    
    console.log('Applying filter:', selectedBusinessType.value);
    
    // Apply filters to all markers
    markers.value.forEach(markerInfo => {
      // If no filter or the type includes our filter keyword, show the marker
      if (!selectedBusinessType.value || 
          markerInfo.type.toLowerCase().includes(selectedBusinessType.value.toLowerCase())) {
        markerInfo.marker.setVisible(true);
      } else {
        markerInfo.marker.setVisible(false);
      }
    });
    
    // Auto-close filter panel after applying
    isFilterOpen.value = false;
  };
  
  const loadGoogleMapsAPI = () => {
    return new Promise((resolve, reject) => {
      if (typeof window.google?.maps !== 'undefined') {
        resolve();
        return;
      }
      
      const script = document.createElement('script');
      // Load Maps with additional libraries for enhanced functionality
      // Use a hardcoded API key for testing if environment variable is not available
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE';
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,visualization,drawing,geometry&v=weekly&map_ids=FNB_SPOT_MAP_PROTOTYPE`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('Google Maps API loaded successfully with additional libraries');
        resolve();
      };
      
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        reject(new Error('Failed to load Google Maps API'));
      };
      
      document.head.appendChild(script);
    });
  };
  
  const zoomIn = () => {
    if (map.value) {
      map.value.setZoom(map.value.getZoom() + 1);
    }
  };
  
  const zoomOut = () => {
    if (map.value) {
      map.value.setZoom(map.value.getZoom() - 1);
    }
  };
  
  const toggleMapView = () => {
    if (map.value) {
      mapType.value = mapType.value === 'roadmap' ? 'satellite' : 'roadmap';
      map.value.setMapTypeId(mapType.value);
    }
  };
  
  // Traffic layer toggle
  const toggleTraffic = () => {
    if (map.value) {
      if (isTrafficVisible.value) {
        // Hide traffic
        if (trafficLayer.value) {
          trafficLayer.value.setMap(null);
        }
      } else {
        // Show traffic
        if (!trafficLayer.value) {
          trafficLayer.value = new google.maps.TrafficLayer();
        }
        trafficLayer.value.setMap(map.value);
      }
      isTrafficVisible.value = !isTrafficVisible.value;
    }
  };
  
  // Toggle heatmap visualization
  const toggleHeatmap = () => {
    if (map.value) {
      try {
        if (!heatmap.value && !isHeatmapVisible.value) {
          // Generate heatmap data based on foot traffic data
          initHeatmap();
          
          // Show a brief explanation tooltip when first enabled
          const infoTooltip = document.createElement('div');
          infoTooltip.className = 'heatmap-tooltip';
          infoTooltip.innerHTML = `
            <div class="p-4 bg-white rounded-lg shadow-lg max-w-xs">
              <h4 class="font-bold text-sm mb-2">Về Bản Đồ Nhiệt</h4>
              <p class="text-xs text-gray-600">Hiển thị mật độ khách hàng tiềm năng dựa trên lưu lượng người đi bộ và các hoạt động.</p>
              <div class="flex items-center mt-2">
                <div class="h-2 flex-1 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 rounded"></div>
              </div>
              <div class="flex justify-between text-xs mt-1">
                <span>Thấp</span>
                <span>Cao</span>
              </div>
            </div>
          `;
          infoTooltip.style.position = 'absolute';
          infoTooltip.style.bottom = '80px';
          infoTooltip.style.right = '20px';
          infoTooltip.style.zIndex = '1000';
          document.body.appendChild(infoTooltip);
          
          // Remove tooltip after 5 seconds
          setTimeout(() => {
            if (infoTooltip.parentNode) {
              document.body.removeChild(infoTooltip);
            }
          }, 5000);
        } else if (heatmap.value) {
          heatmap.value.setMap(isHeatmapVisible.value ? null : map.value);
        }
        isHeatmapVisible.value = !isHeatmapVisible.value;
      } catch (error) {
        console.error('Error toggling heatmap:', error);
        alert('Không thể hiển thị heatmap. Vui lòng thử lại sau.');
      }
    }
  };
  
  // Initialize heatmap with simulated foot traffic data
  const initHeatmap = () => {
    try {
      // Sample foot traffic data around Hanoi
      // In a real app, this would come from an API
      const trafficData = generateFootTrafficData();
      
      // Check if the visualization library is available
      if (!window.google?.maps?.visualization) {
        console.error('Google Maps Visualization library not loaded');
        alert('Không thể tải thư viện visualization. Heatmap không khả dụng.');
        return;
      }
      
      // Create heatmap layer with enhanced visibility
      heatmap.value = new google.maps.visualization.HeatmapLayer({
        data: trafficData,
        map: map.value,
        radius: 25, // Slightly larger radius for better visibility
        opacity: 0.8, // Higher opacity for better visibility
        dissipating: true,
        maxIntensity: 10, // Set maximum intensity to make differences more visible
        gradient: [
          'rgba(0, 255, 255, 0)',  // Transparent cyan (coldest)
          'rgba(0, 255, 255, 1)',  // Cyan
          'rgba(0, 191, 255, 1)',  // Light blue
          'rgba(0, 127, 255, 1)',  // Medium blue
          'rgba(0, 63, 255, 1)',   // Darker blue
          'rgba(0, 0, 255, 1)',    // Blue
          'rgba(63, 0, 255, 1)',   // Blue-purple
          'rgba(127, 0, 255, 1)',  // Purple
          'rgba(191, 0, 255, 1)',  // Purple-magenta
          'rgba(255, 0, 255, 1)',  // Magenta
          'rgba(255, 0, 191, 1)',  // Magenta-red
          'rgba(255, 0, 127, 1)',  // Pink-red
          'rgba(255, 0, 63, 1)',   // Bright red
          'rgba(255, 0, 0, 1)'     // Pure red (hottest)
        ]
      });
      
      // Add a legend somewhere on the map to explain the colors
      console.log('Heatmap initialized successfully');
      
      // Create a tooltip to explain what the heatmap represents
      if (map.value && !document.getElementById('heatmap-info')) {
        const infoDiv = document.createElement('div');
        infoDiv.id = 'heatmap-info';
        infoDiv.innerHTML = '<strong>Hiển thị mật độ khách hàng tiềm năng</strong>';
        infoDiv.style.backgroundColor = 'white';
        infoDiv.style.padding = '5px';
        infoDiv.style.borderRadius = '3px';
        infoDiv.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
        infoDiv.style.fontSize = '12px';
        map.value.controls[google.maps.ControlPosition.TOP_CENTER].push(infoDiv);
        
        // Auto hide after 4 seconds
        setTimeout(() => {
          if (infoDiv.parentNode) {
            infoDiv.parentNode.removeChild(infoDiv);
          }
        }, 4000);
      }
    } catch (error) {
      console.error('Error initializing heatmap:', error);
      alert('Không thể khởi tạo heatmap. Vui lòng thử lại sau.');
    }
  };
  
  // Generate simulated foot traffic data
  const generateFootTrafficData = () => {
    const hanoiCenter = { lat: 21.0313, lng: 105.7828 };
    const points = [];
    
    try {
      // Create high traffic areas around key points
      const highTrafficLocations = [
        { lat: 21.030874, lng: 105.782806, weight: 9 }, // Main market
        { lat: 21.031919, lng: 105.783056, weight: 8 }, // Shopping area
        { lat: 21.031213, lng: 105.781789, weight: 7 }, // Restaurant row
        { lat: 21.029615, lng: 105.782346, weight: 6 }  // Café district
      ];
      
      // Add high traffic points
      highTrafficLocations.forEach(location => {
        points.push({
          location: new google.maps.LatLng(location.lat, location.lng),
          weight: location.weight
        });
        
        // Add surrounding area with various weights
        for (let i = 0; i < 40; i++) {
          const latOffset = (Math.random() - 0.5) * 0.003;
          const lngOffset = (Math.random() - 0.5) * 0.003;
          
          // Decrease weight as we move away from center
          const distance = Math.sqrt(latOffset * latOffset + lngOffset * lngOffset);
          const weight = Math.max(0.5, location.weight * (1 - distance * 50));
          
          points.push({
            location: new google.maps.LatLng(
              location.lat + latOffset,
              location.lng + lngOffset
            ),
            weight: weight
          });
        }
      });
      
      // Add general background traffic
      for (let i = 0; i < 100; i++) {
        const latOffset = (Math.random() - 0.5) * 0.008;
        const lngOffset = (Math.random() - 0.5) * 0.008;
        
        points.push({
          location: new google.maps.LatLng(
            hanoiCenter.lat + latOffset,
            hanoiCenter.lng + lngOffset
          ),
          weight: Math.random() * 3
        });
      }
    } catch (error) {
      console.error('Error generating foot traffic data:', error);
      // Add fallback points if the above fails
      points.push({
        location: new google.maps.LatLng(hanoiCenter.lat, hanoiCenter.lng),
        weight: 9
      });
    }
    
    console.log('Generated heat map points:', points.length);
    return points;
  };
  
  // Toggle drawing tools
  const toggleDrawing = () => {
    if (map.value) {
      if (!drawingManager.value) {
        drawingManager.value = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.POLYGON,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              google.maps.drawing.OverlayType.MARKER,
              google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              google.maps.drawing.OverlayType.RECTANGLE
            ]
          },
          circleOptions: {
            fillColor: '#ffbb33',
            fillOpacity: 0.3,
            strokeWeight: 2,
            clickable: true,
            editable: true,
            draggable: true
          },
          polygonOptions: {
            fillColor: '#3388ff',
            fillOpacity: 0.3,
            strokeWeight: 2,
            clickable: true,
            editable: true,
            draggable: true
          }
        });
        
        // Listen for polygon completion to analyze area
        google.maps.event.addListener(drawingManager.value, 'overlaycomplete', (event) => {
          if (event.type === google.maps.drawing.OverlayType.POLYGON) {
            const area = google.maps.geometry.spherical.computeArea(event.overlay.getPath());
            console.log(`Selected area size: ${(area/1000).toFixed(2)} sq km`);
            
            // In a real app, we would analyze this area for business potential
            // For now, just show a message
            alert(`Đã phân tích khu vực: ${(area/1000).toFixed(2)} km²`);
          }
        });
        
        drawingManager.value.setMap(map.value);
      } else {
        drawingManager.value.setMap(drawingManager.value.getMap() ? null : map.value);
      }
    }
  };
  
  const initMap = () => {
    const hanoiLocation = { lat: 21.0313, lng: 105.7828 };
  
    map.value = new google.maps.Map(mapContainer.value, {
      center: hanoiLocation,
      zoom: 17, // Slightly more zoomed in for precision
      mapId: 'FNB_SPOT_MAP_PROTOTYPE',
      disableDefaultUI: true,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [{ visibility: "on" }]
        },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "on" }]
        }
      ]
    });
  
    const infowindow = new google.maps.InfoWindow({
      maxWidth: 320,
      pixelOffset: new google.maps.Size(0, -5)
    });
    
    // Add close button and click outside functionality to infowindow
    map.value.addListener('click', () => {
      infowindow.close();
    });
    
    // Override the default InfoWindow content setter to add a close button
    const originalSetContent = infowindow.setContent;
    infowindow.setContent = function(content) {
      const contentWithCloseButton = `
        <div class="info-window-wrapper">
          <div class="info-window-close-button">
            <button type="button" class="close-btn" onclick="closeInfoWindow()">×</button>
          </div>
          ${content}
        </div>
      `;
      
      // Expose the close function to the global scope
      window.closeInfoWindow = () => {
        infowindow.close();
      };
      
      // Call the original setContent method
      originalSetContent.call(this, contentWithCloseButton);
    };

    // Enhanced location data with more details
    const mainLocationData = {
        name: "Toà nhà 80 Duy Tân",
        image: "https://images.unsplash.com/photo-1563298723-dcfdfaa39233?q=80&w=1200&auto=format&fit=crop",
        price: "Khoảng giá: 60 triệu / tháng",
        area: "Diện tích: 160 m²",
        amenities: "Tiện ích: Camera, Bảo vệ, PCCC",
        interior: "Nội thất: Đầy đủ",
        rating: 4.7,
        reviews: 28,
        type: "Văn phòng kết hợp thương mại",
        contact: "0912 345 678"
    };

    // Animate marker when it's added to the map
    const animateMarker = (marker) => {
      marker.setAnimation(google.maps.Animation.DROP);
      
      // Pulse effect for the marker
      setTimeout(() => {
        const startingScale = 8;
        let currentScale = startingScale;
        let growing = false;
        let pulseCount = 0;
        
        const pulseInterval = setInterval(() => {
          if (growing) {
            currentScale += 0.3;
            if (currentScale >= startingScale + 2) {
              growing = false;
            }
          } else {
            currentScale -= 0.3;
            if (currentScale <= startingScale) {
              growing = true;
              pulseCount++;
              
              if (pulseCount >= 3) {
                clearInterval(pulseInterval);
                currentScale = startingScale;
              }
            }
          }
          
          marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: currentScale,
            fillColor: "#4285F4",
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: "#ffffff"
          });
        }, 50);
      }, 800);
    };

    // Create an enhanced custom marker
    const mainMarker = new google.maps.Marker({
      position: hanoiLocation,
      map: map.value,
      title: mainLocationData.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: "#4285F4",
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#ffffff"
      },
      zIndex: 10
    });

    // Animate the marker
    animateMarker(mainMarker);

    // Enhanced info window with better styling
    mainMarker.addListener('click', () => {
        const contentString = `
            <div class="info-window-container">
                <div class="info-window-header">
                    <h3>${mainLocationData.name}</h3>
                    <div class="rating">
                        <span class="stars">
                            ${'★'.repeat(Math.floor(mainLocationData.rating))}${mainLocationData.rating % 1 >= 0.5 ? '½' : ''}
                        </span>
                        <span class="review-count">(${mainLocationData.reviews} đánh giá)</span>
                    </div>
                </div>
                <div class="info-window-image">
                    <img src="${mainLocationData.image}" alt="${mainLocationData.name}">
                </div>
                <div class="info-window-details">
                    <p class="price"><strong>${mainLocationData.price}</strong></p>
                    <p class="area"><i class="fas fa-expand"></i> ${mainLocationData.area}</p>
                    <p class="amenities"><i class="fas fa-check-circle"></i> ${mainLocationData.amenities}</p>
                    <p class="interior"><i class="fas fa-home"></i> ${mainLocationData.interior}</p>
                    <p class="type"><i class="fas fa-building"></i> ${mainLocationData.type}</p>
                    <p class="contact"><i class="fas fa-phone"></i> ${mainLocationData.contact}</p>
                </div>
                <div class="info-window-actions">
                    <button class="view-details" onclick="window.alert('Chức năng này đang được phát triển')">Xem chi tiết</button>
                    <button class="contact-owner" onclick="window.alert('Đang kết nối với chủ sở hữu...')">Liên hệ</button>
                </div>
            </div>`;
            
        // Apply custom styling to infowindow
        infowindow.setContent(contentString);
        infowindow.open(map.value, mainMarker);
    });
  
    // Updated data with accurate coordinates for locations around Duy Tan street in Hanoi
    const competitors = [
      { 
        lat: 21.03099, lng: 105.7844,
        name: 'DONSAIYA',
        type: 'Cơm mì Nhật Bản',
        address: '70 Duy Tân, Dịch Vọng Hậu, Cầu Giấy',
        competition: 'Trung bình'
      },
      { 
        lat: 21.03099, lng: 105.7853,
        name: 'Starbucks Duy Tân',
        type: 'Chuỗi cà phê quốc tế',
        address: '34 Duy Tân, Dịch Vọng Hậu, Cầu Giấy',
        competition: 'Cao'
      },
      { 
        lat: 21.0360801, lng: 105.6415906,
        name: 'LAIKA CAFE - 15 DUY TÂN',
        type: 'Cà phê',
        address: '15 Duy Tân, Dịch Vọng Hậu, Cầu Giấy',
        competition: 'Cao'
      },
      { 
        lat: 21.0310, lng: 105.7823,
        name: 'TOUS les JOURS - Duy Tân',
        type: 'Tiệm bánh & Cà phê',
        address: 'Tòa nhà TTC Tower, 19 Duy Tân, Cầu Giấy',
        competition: 'Trung bình'
      },
      { 
        lat: 21.03099, lng: 105.7847,
        name: 'Chả cá Lã Vọng',
        type: 'Món ăn địa phương',
        address: '40 Duy Tân, Dịch Vọng Hậu, Cầu Giấy',
        competition: 'Trung bình'
      },
      { 
        lat: 21.0306877, lng: 105.784555,
        name: 'Nhà hàng Nam Hương',
        type: 'Nhà hàng',
        address: '14 Duy Tân, Dịch Vọng Hậu, Cầu Giấy',
        competition: 'Trung bình'
      },
    ];
  
    // Color competitors by competition level
    const getCompetitionColor = (level) => {
      switch(level) {
        case 'Cao': return "#FF5252"; // Red for high competition
        case 'Trung bình': return "#FBBC05"; // Yellow for medium competition
        case 'Thấp': return "#4CAF50"; // Green for low competition
        default: return "#FBBC05";
      }
    };

    // Clear existing markers array
    markers.value = [];
    
    competitors.forEach(competitor => {
      const marker = new google.maps.Marker({
        position: { lat: competitor.lat, lng: competitor.lng },
        map: map.value, // Use map.value from ref
        title: competitor.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          fillColor: getCompetitionColor(competitor.competition),
          fillOpacity: 0.9,
          strokeWeight: 1,
          strokeColor: "#ffffff"
        },
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
          const contentString = `
            <div class="info-window-competitor">
                <h3 class="font-bold text-base mb-1">${competitor.name}</h3>
                <p class="text-sm"><strong>Loại hình:</strong> ${competitor.type}</p>
                <p class="text-sm"><strong>Địa chỉ:</strong> ${competitor.address}</p>
                <p class="text-sm"><strong>Cạnh tranh:</strong> <span class="font-semibold" style="color: ${getCompetitionColor(competitor.competition)}">${competitor.competition}</span></p>
            </div>`;
          infowindow.setContent(contentString);
          infowindow.open(map.value, marker);
      });
      
      // Store marker reference for filtering
      markers.value.push({
        marker: marker,
        type: competitor.type,
        name: competitor.name,
        competition: competitor.competition
      });
    });

    return map;
  };
  
  onMounted(async () => {
    try {
      await loadGoogleMapsAPI();
      const mapInstance = initMap();
      
      // Hide loading overlay with delay for smoother transition
      setTimeout(() => {
        isLoading.value = false;
        
        // Animate map container when loaded
        const mapElement = mapContainer.value;
        animations.fadeIn(mapElement, 0.8);
      }, 800);
      
      window.addEventListener('resize', () => {
        if (mapInstance && typeof google !== 'undefined') {
            const center = mapInstance.getCenter();
            google.maps.event.trigger(mapInstance, 'resize');
            if (center) mapInstance.setCenter(center);
        }
      });
    } catch (error) {
      console.error('Error loading Google Maps:', error);
      isLoading.value = false;
      if (mapContainer.value) {
          mapContainer.value.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 text-red-600 p-4 text-center"><strong>Lỗi:</strong> Không thể tải bản đồ.</div>`;
      }
    }
  });
  
  onUnmounted(() => {
    // Clean up any event listeners or timers
    window.removeEventListener('resize', () => {});
  });
  </script>
  
  <style>
  /* Enhanced map styling with animations */
  .map-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  /* Loading animation */
  @keyframes pulse {
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1); opacity: 1; }
    100% { transform: scale(0.8); opacity: 0.5; }
  }

  .animate-pulse {
    animation: pulse 1.5s infinite ease-in-out;
  }

  /* Custom InfoWindow styling */
  .info-window-container {
    max-width: 320px;
    font-family: 'Inter', sans-serif;
  }

  .info-window-header {
    padding: 12px;
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }

  .info-window-header h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
  }

  .rating {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  .stars {
    color: #FBBC05;
    font-size: 14px;
    margin-right: 4px;
  }

  .review-count {
    font-size: 12px;
    color: #6b7280;
  }

  .info-window-image img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  .info-window-details {
    padding: 12px;
  }

  .info-window-details p {
    margin: 6px 0;
    font-size: 13px;
    color: #4b5563;
  }

  .info-window-details p i {
    margin-right: 8px;
    color: #2563eb;
    font-size: 12px;
    width: 16px;
    text-align: center;
  }

  .info-window-details .price {
    font-size: 14px;
    color: #1f2937;
    margin-bottom: 10px;
  }

  .info-window-actions {
    display: flex;
    padding: 0 12px 12px;
    gap: 8px;
  }

  .info-window-actions button {
    flex: 1;
    padding: 8px 0;
    font-size: 13px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .view-details {
    background-color: #2563eb;
    color: white;
    border: none;
  }

  .contact-owner {
    background-color: white;
    color: #2563eb;
    border: 1px solid #2563eb;
  }

  /* Competitor marker styling */
  .info-window-competitor {
    padding: 12px;
    max-width: 280px;
    font-family: 'Inter', sans-serif;
  }

  .info-window-competitor h3 {
    margin: 0 0 8px;
    font-size: 15px;
    font-weight: 600;
    color: #1f2937;
  }

  .info-window-competitor p {
    margin: 4px 0;
    font-size: 13px;
    color: #4b5563;
  }

  /* Google Maps InfoWindow style overrides */
  .gm-ui-hover-effect { 
    display: none !important; 
  }
  
  .gmnoprint .gm-style-iw-c {
    padding: 0 !important;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
  }
  
  .gmnoprint .gm-style-iw-d {
    overflow: hidden !important;
  }
  
  /* InfoWindow close button */
  .info-window-wrapper {
    position: relative;
  }
  
  .info-window-close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
  }
  
  .close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid #e0e0e0;
    color: #666;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .close-btn:hover {
    background: #f1f1f1;
    color: #333;
  }
  
  /* Button animations */
  button:active {
    transform: translateY(1px);
  }
  
  /* Heatmap tooltip */
  .heatmap-tooltip {
    animation: fadeInOut 5s forwards;
    opacity: 0;
  }
  
  @keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
  </style>

