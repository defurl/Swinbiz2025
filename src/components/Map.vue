<template>
    <div ref="mapContainer" class="w-full h-full"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const mapContainer = ref(null);
  
  // Function to dynamically load Google Maps API
  const loadGoogleMapsAPI = () => {
    return new Promise((resolve, reject) => {
      // Check if Google Maps is already loaded
      if (typeof google !== 'undefined') {
        resolve();
        return;
      }
      
      // Create script element
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&map_ids=FNB_SPOT_MAP_PROTOTYPE`;
      script.async = true;
      script.defer = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Google Maps API'));
      
      document.head.appendChild(script);
    });
  };
  
  // Function to initialize the map
  const initMap = () => {
    const hanoiLocation = { lat: 21.0289, lng: 105.7836 };
  
    const map = new google.maps.Map(mapContainer.value, {
      center: hanoiLocation,
      zoom: 16,
      mapId: 'FNB_SPOT_MAP_PROTOTYPE',
      disableDefaultUI: true,
      zoomControl: true,
    });
  
    // Main location marker
    new google.maps.Marker({
      position: hanoiLocation,
      map: map,
      title: '80 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
      icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4285F4",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#ffffff"
      }
    });
  
    // Mock competitor data
    const competitors = [
      { lat: 21.0295, lng: 105.7845, name: 'Highlands Coffee' },
      { lat: 21.0280, lng: 105.7820, name: 'The Coffee House' },
      { lat: 21.0300, lng: 105.7825, name: 'Cộng Cà Phê' },
      { lat: 21.0275, lng: 105.7850, name: 'Aha Cafe' },
    ];
  
    competitors.forEach(competitor => {
      new google.maps.Marker({
        position: { lat: competitor.lat, lng: competitor.lng },
        map: map,
        title: competitor.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 7,
          fillColor: "#DB4437",
          fillOpacity: 0.9,
          strokeWeight: 1,
          strokeColor: "#ffffff"
        }
      });
    });
  };
  
  onMounted(async () => {
    try {
      await loadGoogleMapsAPI();
      initMap();
    } catch (error) {
      console.error('Error loading Google Maps:', error);
    }
  });
  </script>
