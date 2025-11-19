<template>
  <div class="guides-view">
    <!-- Guide Header -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">Guides</h1>
          <p class="page-subtitle">
            Comprehensive guides to help you survive and thrive in VEIN game. Learn essential strategies, tips, and techniques for mastering VEIN survival game.
          </p>
        </div>
      </div>
    </section>

    <!-- Guide Categories -->
    <section class="guide-categories">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading guides...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading guides: {{ error }}</p>
        </div>
        
        <!-- All Guides -->
        <div class="category-section" v-if="!loading && !error">
          <div class="guides-grid">
            <div 
              v-for="guide in allGuides" 
              :key="guide.id" 
              class="guide-card"
              @click="goToGuide(guide.addressBar)"
            >
              <div class="guide-card-header">
                <span class="category-tag" v-if="guide.category">{{ getCategoryName(guide.category) }}</span>
              </div>
              <h3 class="guide-title">{{ guide.title }}</h3>
              <p class="guide-description">{{ guide.description }}</p>
              <div class="guide-tags" v-if="guide.tags && guide.tags.length > 0">
                <span v-for="tag in guide.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="guide-footer">
                <span class="update-date">{{ formatDate(guide.publishDate) }}</span>
                <span class="view-link">VIEW GUIDE →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'

const router = useRouter()
const { guides, loading, error, loadData } = useGuideData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 所有指南
const allGuides = computed(() => {
  return guides.value || []
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(`/vein-guides${path}`)
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return `Updated ${date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })}`
}

const getCategoryName = (category) => {
  const categoryMap = {
    'getting-started': 'GETTING STARTED',
    'walkthroughs': 'WALKTHROUGHS',
    'advanced': 'ADVANCED'
  }
  return categoryMap[category] || 'GUIDE'
}
</script>

<style scoped>
.guides-view {
  min-height: 100vh;
  position: relative;
}

.guide-categories {
  padding: 40px 0;
  position: relative;
  z-index: 1;
}

.category-section {
  margin-bottom: 40px;
}

.category-section:last-child {
  margin-bottom: 0;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.guide-card {
  background: rgba(30, 0, 0, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(255, 54, 54, 0.2);
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.guide-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.guide-card:hover::before {
  opacity: 1;
}

.guide-card-header {
  margin-bottom: 16px;
}

.category-tag {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.guide-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffd8d8;
  margin-bottom: 12px;
  line-height: 1.3;
}

.guide-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tag {
  background: transparent;
  border: 1px solid rgba(255, 54, 54, 0.3);
  color: rgba(255, 210, 210, 0.7);
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.guide-card:hover .tag {
  border-color: rgba(255, 54, 54, 0.6);
  color: var(--accent);
}

.guide-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 54, 54, 0.1);
}

.update-date {
  color: rgba(255, 210, 210, 0.6);
  font-size: 0.85rem;
}

.view-link {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.guide-card:hover .view-link {
  color: #fff;
  text-shadow: 0 0 8px rgba(255, 54, 54, 0.6);
}

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 210, 210, 0.7);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .guide-categories {
    padding: 20px 0;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-card {
    padding: 10px;
  }

  .guide-title {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guide-description {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .category-tag {
    font-size: 0.6rem;
    padding: 3px 8px;
  }

  .tag {
    font-size: 12px;
    padding: 3px 8px;
  }

  .update-date {
    font-size: 12px;
  }

  .view-link {
    font-size: 12px;
  }

  .guide-footer {
    padding-top: 10px;
  }

  .loading-state,
  .error-state {
    padding: 20px;
    font-size: 12px;
  }
}
</style>
