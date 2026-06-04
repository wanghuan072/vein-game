<script setup>
import { onMounted, ref } from 'vue'
import { loadNativeAd } from '@/ads/loadAd'

defineProps({
  tag: {
    type: String,
    default: 'aside',
  },
})

const hostRef = ref(null)

onMounted(() => {
  loadNativeAd(hostRef.value)
})
</script>

<template>
  <!-- 广告：原生横幅 -->
  <component :is="tag" class="ad-slot ad-slot--native">
    <div ref="hostRef" class="ad-slot__inner" />
  </component>
</template>
