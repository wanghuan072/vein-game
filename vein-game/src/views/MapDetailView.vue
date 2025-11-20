<template>
  <div class="map-detail-view">
    <!-- Detail Header / Breadcrumb -->
    <section class="detail-header-section">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/vein-map" class="breadcrumb-link">
            <svg class="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
            Map
          </router-link>
          <svg class="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
          <span class="breadcrumb-current">Interactive Map</span>
        </div>

        <div class="map-detail-content">
          <div class="map-detail-text">
            <h1 class="map-title">Interactive Map</h1>
            <p class="map-description">
              Explore the full interactive map of VEIN game world. Navigate locations, discover points of interest, and plan your survival routes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Content -->
    <section class="map-content">
      <div class="container">
        <h2 class="section-title">Interactive Map</h2>
        <div class="map-container">
          <div class="map-iframe-wrapper">
            <iframe
              src="https://vein-germany.de/map"
              class="map-iframe"
              title="VEIN Interactive Map"
              frameborder="0"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
          
          <div class="map-info">
            <div class="info-card">
              <h3>Map Features</h3>
              <ul>
                <li><strong>Zoom:</strong> Use mouse wheel or pinch to zoom in/out</li>
                <li><strong>Pan:</strong> Click and drag to move around the map</li>
                <li><strong>Tooltips:</strong> Hover or tap locations to view details</li>
                <li><strong>Full Images:</strong> Click or tap locations to view full images</li>
              </ul>
            </div>
            
            <div class="info-card">
              <h3>Navigation Tips</h3>
              <ul>
                <li>Use the zoom controls (🔍+ / 🔍−) to adjust map scale</li>
                <li>Click the home icon (⌂) to return to default view</li>
                <li>Switch between Map and Satellite views for different perspectives</li>
                <li>All discovered locations are permanently marked on the map</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const { setSEO } = useSEO()

// 更新SEO
const updateSEO = () => {
  setSEO({
    title: 'VEIN Interactive Map - Full World Map Explorer',
    description: 'Explore the complete interactive map of VEIN game world. Navigate locations, discover points of interest, and plan your survival routes in Champlain Valley.',
    keywords: 'VEIN interactive map, VEIN game map, world map, locations, points of interest, navigation, VEIN survival game',
    author: seoConfig.defaults.author,
    image: seoConfig.defaults.image,
    type: 'website'
  })
}

onMounted(async () => {
  await nextTick()
  updateSEO()
})
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
}

.map-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
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

