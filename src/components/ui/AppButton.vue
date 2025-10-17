<template>
  <button 
    ref="buttonRef"
    :class="[
      'transition-all duration-300 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50',
      sizeClasses, 
      colorClasses,
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <!-- Icon (if provided) -->
    <i v-if="icon" :class="[icon, 'mr-2']"></i>
    
    <!-- Button content -->
    <slot></slot>
    
    <!-- Loading spinner -->
    <span v-if="loading" class="ml-2 inline-block">
      <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { animations } from '../../utils/animations';
import { onMounted } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'outline-light'].includes(value)
  },
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline', 'ghost'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  animate: {
    type: Boolean,
    default: false
  }
});

// Emit click event
defineEmits(['click']);

// Compute size classes based on size prop
const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'py-1.5 px-3 text-xs';
    case 'lg':
      return 'py-3 px-6 text-lg';
    case 'md':
    default:
      return 'py-2 px-4 text-sm';
  }
});

// Compute color classes based on color and variant props
const colorClasses = computed(() => {
  // Color mapping for different variants
  const colorMap = {
    primary: {
      solid: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
      ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-200'
    },
    secondary: {
      solid: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-300',
      outline: 'border border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-200',
      ghost: 'text-gray-600 hover:bg-gray-50 focus:ring-gray-200'
    },
    success: {
      solid: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-300',
      outline: 'border border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-200',
      ghost: 'text-green-600 hover:bg-green-50 focus:ring-green-200'
    },
    danger: {
      solid: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-300',
      outline: 'border border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-200',
      ghost: 'text-red-600 hover:bg-red-50 focus:ring-red-200'
    },
    warning: {
      solid: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-300',
      outline: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-200',
      ghost: 'text-yellow-500 hover:bg-yellow-50 focus:ring-yellow-200'
    },
    info: {
      solid: 'bg-blue-400 hover:bg-blue-500 text-white focus:ring-blue-300',
      outline: 'border border-blue-400 text-blue-400 hover:bg-blue-50 focus:ring-blue-200',
      ghost: 'text-blue-400 hover:bg-blue-50 focus:ring-blue-200'
    },
    light: {
      solid: 'bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-200',
      outline: 'border border-gray-200 text-gray-800 hover:bg-gray-50 focus:ring-gray-200',
      ghost: 'text-gray-800 hover:bg-gray-50 focus:ring-gray-200'
    },
    dark: {
      solid: 'bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-600',
      outline: 'border border-gray-800 text-gray-800 hover:bg-gray-50 focus:ring-gray-200',
      ghost: 'text-gray-800 hover:bg-gray-50 focus:ring-gray-200'
    },
  };
  
  // Special case for 'outline-light' which is a combination of variant and color
  if (props.color === 'outline-light') {
    return 'border border-white text-white hover:bg-white/10 focus:ring-white/20';
  }
  
  return colorMap[props.color][props.variant];
});

// Use a template ref instead of querySelector
import { ref } from 'vue';
const buttonRef = ref(null);

onMounted(() => {
  if (props.animate && buttonRef.value) {
    // Apply button hover effect using our animation utility
    animations.buttonHover(buttonRef.value);
  }
});
</script>

<style scoped>
button {
  position: relative;
  overflow: hidden;
}

/* Ripple effect */
button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: inherit;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  pointer-events: none;
}

button:active::after {
  transform: scale(2);
  opacity: 0;
  transition: 0s;
}
</style>