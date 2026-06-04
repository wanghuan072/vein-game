<script setup>
import { onMounted, ref } from 'vue'
import { getSidebarUnit, loadHighPerformanceAd } from '@/ads/loadAd'

defineProps({
  tag: {
    type: String,
    default: 'aside',
  },
})

const hostRef = ref(null)

onMounted(() => {
  loadHighPerformanceAd(hostRef.value, getSidebarUnit())
})
</script>

<template>
  <!-- 广告：侧边（160x600） -->
  <component :is="tag" class="ad-slot ad-slot--sidebar">
    <div ref="hostRef" class="ad-slot__inner" />
  </component>
</template>
