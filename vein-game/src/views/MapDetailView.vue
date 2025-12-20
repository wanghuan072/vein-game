<template>
  <div class="map-detail-view">
    <!-- Detail Header / Breadcrumb -->
    <section class="detail-header-section">
      <div class="container">
        <div class="breadcrumb">
          <a :href="getLocalizedPath('/vein-map')" class="breadcrumb-link">
            <svg
              class="breadcrumb-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            {{ $t('mapDetailPage.breadcrumb.map') }}
          </a>
          <svg
            class="breadcrumb-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">{{ $t('mapDetailPage.breadcrumb.interactive') }}</span>
        </div>

        <div class="map-detail-content">
          <div class="map-detail-text">
            <h1 class="map-title">{{ $t('mapDetailPage.header.title') }}</h1>
            <p class="map-description">
              {{ $t('mapDetailPage.header.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Content -->
    <section class="map-content">
      <div class="container">
        <h2 class="section-title">{{ $t('mapDetailPage.content.title') }}</h2>
        <div class="map-container">
          <div class="map-iframe-wrapper" :class="{ 'web-fullscreen': isWebFullscreen }" ref="mapWrapperRef">
            <button 
              class="fullscreen-btn" 
              @click="toggleWebFullscreen"
              :aria-label="$t('mapDetailPage.content.fullscreen') || 'Toggle Web Fullscreen'"
            >
              <svg v-if="!isWebFullscreen" class="fullscreen-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
              <svg v-else class="fullscreen-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            </button>
            <iframe
              src="https://maps-nu-steel.vercel.app/map_list/VEIN-map.html"
              class="map-iframe"
              :title="$t('mapDetailPage.header.title')"
              frameborder="0"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          <div v-if="isWebFullscreen" class="web-fullscreen-overlay" @click="exitWebFullscreen"></div>

          <div class="map-info">
            <div class="info-card">
              <h3>{{ $t('mapDetailPage.content.features.title') }}</h3>
              <ul>
                <li>
                  <strong>{{ $t('mapDetailPage.content.features.zoom') }}</strong>
                  {{ $t('mapDetailPage.content.features.zoomValue') }}
                </li>
                <li>
                  <strong>{{ $t('mapDetailPage.content.features.pan') }}</strong>
                  {{ $t('mapDetailPage.content.features.panValue') }}
                </li>
                <li>
                  <strong>{{ $t('mapDetailPage.content.features.tooltips') }}</strong>
                  {{ $t('mapDetailPage.content.features.tooltipsValue') }}
                </li>
                <li>
                  <strong>{{ $t('mapDetailPage.content.features.images') }}</strong>
                  {{ $t('mapDetailPage.content.features.imagesValue') }}
                </li>
              </ul>
            </div>

            <div class="info-card">
              <h3>{{ $t('mapDetailPage.content.navigation.title') }}</h3>
              <ul>
                <li>{{ $t('mapDetailPage.content.navigation.tip1') }}</li>
                <li>{{ $t('mapDetailPage.content.navigation.tip2') }}</li>
                <li>{{ $t('mapDetailPage.content.navigation.tip3') }}</li>
                <li>{{ $t('mapDetailPage.content.navigation.tip4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick, watch, ref } from 'vue'
import { useSEO } from '../seo/composables.js'
import { useI18n } from 'vue-i18n'
import { seoConfig } from '../seo/config.js'
import { useLocalizedPath } from '../composables/useLocalizedPath'

import { useDeviceDetection } from '../utils/useDeviceDetection'

const { isMobile } = useDeviceDetection()

const { setSEO } = useSEO()
const { t, te, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()

const mapWrapperRef = ref(null)
const isWebFullscreen = ref(false)

// 切换网页全屏
const toggleWebFullscreen = () => {
  isWebFullscreen.value = !isWebFullscreen.value
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  
  if (isWebFullscreen.value) {
    document.body.style.overflow = 'hidden'
    // 隐藏头部和底部
    if (header) header.style.display = 'none'
    if (footer) footer.style.display = 'none'
  } else {
    document.body.style.overflow = ''
    // 恢复头部和底部
    if (header) header.style.display = ''
    if (footer) footer.style.display = ''
  }
}

// 退出网页全屏
const exitWebFullscreen = () => {
  isWebFullscreen.value = false
  document.body.style.overflow = ''
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  if (header) header.style.display = ''
  if (footer) footer.style.display = ''
}

// 监听 ESC 键退出全屏
const handleKeyDown = (e) => {
  if (e.key === 'Escape' && isWebFullscreen.value) {
    exitWebFullscreen()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
  document.body.style.overflow = ''
})

// 更新SEO
const updateSEO = () => {
  let tdk = null
  if (te('tdk.mapDetail')) {
    tdk = t('tdk.mapDetail', {}, { returnObjects: true })
  }
  setSEO({
    title: tdk?.title || 'VEIN Interactive Map - Complete VEIN Game Map Explorer',
    description: tdk?.description || 'Our VEIN interactive map is the most comprehensive and accurate map available online. Explore the complete VEIN game map with detailed locations, routes, and points of interest for the entire Champlain Valley region.',
    keywords: tdk?.keywords || 'VEIN interactive map, VEIN game map, VEIN roadmap, VEIN mapping, VEIN game full map, VEIN dannemora map, VEIN prison map, VEIN saranac map',
    author: seoConfig.defaults.author,
    image: seoConfig.defaults.image,
    type: 'website',
  })
}

onMounted(async () => {
  await nextTick()
  updateSEO()
})

// 监听语言变化，更新 SEO
watch(
  () => locale.value,
  () => {
    updateSEO()
  }
)
</script>

<style scoped>
.map-detail-view {
  min-height: 100vh;
}

.detail-header-section {
  padding: 60px 0 40px;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), transparent);
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  color: rgba(255, 210, 210, 0.7);
}

.breadcrumb-arrow {
  width: 16px;
  height: 16px;
  color: rgba(255, 210, 210, 0.5);
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 210, 210, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--accent);
}

.breadcrumb-current {
  color: rgba(255, 210, 210, 0.6);
}

.map-detail-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.map-title {
  font-size: 3rem;
  margin: 0 0 16px;
  color: var(--text);
  font-weight: 700;
  background: linear-gradient(135deg, rgba(255, 230, 230, 0.95), rgba(255, 200, 200, 0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.map-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.8;
  font-size: 1.05rem;
  margin: 0;
}

.map-content {
  padding: 0 0 60px 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.map-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.map-iframe-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  position: relative;
  background: rgba(20, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.map-iframe-wrapper.web-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-bottom: 0;
  border-radius: 0;
  z-index: 9999;
  border: none;
  box-shadow: none;
}

.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.fullscreen-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: rgba(18, 0, 0, 0.85);
  border: 1px solid rgba(255, 54, 54, 0.4);
  border-radius: 8px;
  padding: 10px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.fullscreen-btn:hover {
  background: rgba(255, 54, 54, 0.15);
  border-color: rgba(255, 54, 54, 0.6);
  box-shadow: 0 0 16px rgba(255, 54, 54, 0.4);
  transform: scale(1.05);
}

.fullscreen-btn:active {
  transform: scale(0.95);
}

.fullscreen-icon {
  width: 20px;
  height: 20px;
  color: rgba(255, 230, 230, 0.9);
  transition: color 0.3s ease;
}

.fullscreen-btn:hover .fullscreen-icon {
  color: var(--accent);
}

.web-fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9998;
  cursor: pointer;
}

.map-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.info-card {
  background: linear-gradient(135deg, rgba(20, 0, 0, 0.7), rgba(25, 0, 0, 0.5));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
}

.info-card h3 {
  margin: 0 0 16px;
  font-size: 1.3rem;
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

.info-card ul {
  margin: 0;
  padding-left: 20px;
  list-style: none;
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.8;
}

.info-card ul li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

.info-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.9rem;
}

.info-card ul li strong {
  color: rgba(255, 230, 230, 0.95);
  font-weight: 600;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .detail-header-section {
    padding: 50px 0 30px;
  }

  .map-title {
    font-size: 2.5rem;
  }

  .map-iframe-wrapper {
    padding-bottom: 80%;
  }

  .map-info {
    grid-template-columns: 1fr;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .detail-header-section {
    padding: 40px 0 20px;
  }

  .breadcrumb {
    font-size: 0.8rem;
    margin-bottom: 16px;
  }

  .map-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .map-description {
    font-size: 12px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .map-content {
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .map-iframe-wrapper {
    padding-bottom: 100%;
    border-radius: 12px;
  }

  .map-info {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-card {
    padding: 20px;
  }

  .info-card h3 {
    font-size: 20px;
    margin-bottom: 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .info-card ul {
    font-size: 12px;
    line-height: 1.6;
  }

  .info-card ul li {
    margin-bottom: 8px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>

