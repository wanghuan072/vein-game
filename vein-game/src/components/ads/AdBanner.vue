<script setup>
import { onMounted, ref, watch } from 'vue'
import { getBannerUnit, loadHighPerformanceAd } from '@/ads/loadAd'
import { useDeviceDetection } from '@/utils/useDeviceDetection'

defineProps({
  tag: {
    type: String,
    default: 'aside',
  },
})

const hostRef = ref(null)
const { isMobile } = useDeviceDetection()

function mountAd() {
  const unit = getBannerUnit(isMobile.value)
  loadHighPerformanceAd(hostRef.value, unit)
}

onMounted(() => mountAd())
watch(isMobile, () => mountAd())
</script>

<template>
  <!-- 广告：banner（728x90 / 移动端 320x50） -->
  <component :is="tag" class="ad-slot ad-slot--banner">
    <div ref="hostRef" class="ad-slot__inner" />
  </component>
</template>
