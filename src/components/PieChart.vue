<template>
  <svg :viewBox="`0 0 ${size} ${size}`">
    <g :transform="`translate(${radius}, ${radius})`">
      <path v-for="(slice, index) in slices" :key="index" :d="slice.d" :fill="slice.color" />
    </g>
  </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
    validator: (data) => data.every(item => 'value' in item && 'color' in item),
  },
  size: {
    type: Number,
    default: 120,
  },
});

const radius = computed(() => props.size / 2);

const slices = computed(() => {
  const total = props.data.reduce((acc, item) => acc + item.value, 0);
  let startAngle = -90; // Start from the top

  return props.data.map(item => {
    const angle = (item.value / total) * 360;
    const endAngle = startAngle + angle;

    const start = polarToCartesian(radius.value, startAngle);
    const end = polarToCartesian(radius.value, endAngle);
    
    const largeArcFlag = angle > 180 ? 1 : 0;

    const d = [
      "M", start.x, start.y,
      "A", radius.value, radius.value, 0, largeArcFlag, 1, end.x, end.y,
      "L", 0, 0,
      "Z"
    ].join(" ");

    startAngle = endAngle;

    return {
      d,
      color: item.color,
    };
  });
});

function polarToCartesian(radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
  return {
    x: radius * Math.cos(angleInRadians),
    y: radius * Math.sin(angleInRadians),
  };
}
</script>
<style scoped>
</style>