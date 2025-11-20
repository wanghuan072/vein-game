<template>
  <div class="wiki-view">
    <!-- Header Section -->
    <section class="page-header">
      <div class="container">
        <div class="page-header-content">
          <h1 class="page-title">Wiki</h1>
          <p class="page-subtitle">
            Complete knowledge base for VEIN game. Explore detailed information about gameplay mechanics, features, and everything you need to know about VEIN survival game.
          </p>
        </div>
      </div>
    </section>

    <!-- Wiki Articles -->
    <section class="articles-section">
      <div class="container">
        <!-- Loading State -->
        <div v-if="loading" class="loading-state">
          <p>Loading wiki...</p>
        </div>
        
        <!-- Error State -->
        <div v-if="error" class="error-state">
          <p>Error loading wiki: {{ error }}</p>
        </div>
        
        <!-- Section Title -->
        <h2 class="section-title" v-if="!loading && !error">All Articles</h2>
        
        <!-- Articles Grid -->
        <div class="articles-grid" v-if="!loading && !error">
          <div
            v-for="item in allWikis"
            :key="item.id"
            class="article-card"
            @click="goToWiki(item.addressBar)"
          >
            <div class="card-image-container">
              <img :src="item.imageUrl" :alt="item.imageAlt" class="card-image">
            </div>
            <h3 class="card-title">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWikiData } from '../../composables/useWikiData'

const router = useRouter()
const { wiki, loading, error, loadData } = useWikiData()

// 初始化加载数据
onMounted(() => {
  loadData()
})

// 所有 wiki 条目
const allWikis = computed(() => {
  return wiki.value || []
})

const goToWiki = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(`/vein-wiki${path}`)
}
</script>

<style scoped>
.wiki-view {
  min-height: 100vh;
}

.articles-section {
  padding: 0 0 40px 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.article-card {
  background-color: rgba(30, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 54, 54, 0.2);
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.article-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.card-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(26, 0, 0, 0.8);
}

.card-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-image {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffd8d8;
  text-align: center;
  padding: 16px;
  margin: 0;
  line-height: 1.4;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 210, 210, 0.7);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .articles-section {
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .article-card {
    padding: 0;
  }

  .card-title {
    font-size: 12px;
    padding: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .loading-state,
  .error-state {
    padding: 20px;
    font-size: 12px;
  }
}

</style>
