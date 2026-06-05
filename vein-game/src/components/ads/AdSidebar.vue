<script setup>
import { onMounted, ref } from 'vue'
import { getSidebarUnit, loadHighPerformanceAd } from '@/ads/loadAd'
import { useDeviceDetection } from '@/utils/useDeviceDetection'

defineProps({
  tag: {
    type: String,
    default: 'aside',
  },
})

const hostRef = ref(null)
const { isMobile } = useDeviceDetection()

onMounted(() => {
  if (isMobile.value) return
  loadHighPerformanceAd(hostRef.value, getSidebarUnit())
})
</script>

<template>
  <!-- 广告：侧边（160x600，仅桌面端） -->
  <component v-if="!isMobile" :is="tag" class="ad-slot ad-slot--sidebar">
    <div ref="hostRef" class="ad-slot__inner" />
  </component>
</template>
