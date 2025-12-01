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
          <h2 class="section-title">All Guides</h2>
          <div class="guides-grid">
            <div 
              v-for="guide in allGuides" 
              :key="guide.id" 
              class="guide-card"
              @click="goToGuide(guide.addressBar)"
            >
              <div class="guide-image-container" v-if="guide.imageUrl">
                <img 
                  :src="guide.imageUrl" 
                  :alt="guide.imageAlt || guide.title" 
                  class="guide-image"
                  loading="lazy"
                />
              </div>
              <div class="guide-card-content">
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
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <div class="container">
        <h2 class="section-title">Why Choose Our VEIN Guides?</h2>
        <p class="section-subtitle">
          We provide the most comprehensive and up-to-date guides to help you master VEIN survival game.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Comprehensive Coverage</h3>
            <p>
              Our guides cover everything from Day 1 survival basics to advanced strategies for base building, looting, and character progression. Whether you're a complete beginner or an experienced player, we have guides tailored to your needs. Start with our <router-link to="/vein-guides/ultimate-world-settings-guide" class="inline-link">new player guide series</router-link> to master the fundamentals.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Expert Strategies</h3>
            <p>
              Each guide is crafted by experienced VEIN players who understand the game's mechanics deeply. We provide actionable tips, priority lists, and proven strategies that actually work in-game.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Regularly Updated</h3>
            <p>
              As VEIN evolves through Early Access, we continuously update our guides to reflect the latest game changes, new features, and community discoveries. Stay ahead with current information.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📍</div>
            <h3>Detailed Location Guides</h3>
            <p>
              Our location guides include step-by-step routes, exact coordinates, and detailed loot information. Find the <router-link to="/vein-guides/vein-best-base-location-survival-guide" class="inline-link">best base locations</router-link> and <router-link to="/vein-guides/vein-best-loot-locations" class="inline-link">optimal loot spots</router-link> with our comprehensive maps and directions.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3>Settings & Configuration</h3>
            <p>
              Learn how to optimize your world settings for your playstyle. Our <router-link to="/vein-guides/ultimate-world-settings-guide" class="inline-link">world settings guide</router-link> explains every setting option, helping you create the perfect survival experience whether you prefer hardcore or casual gameplay.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Community-Driven</h3>
            <p>
              Our guides are built on community feedback and player experiences. We incorporate tips from the VEIN community to ensure our guides reflect real-world survival strategies that work.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions About VEIN Guides</h2>
        <div class="faq-grid">
          <article class="faq-item">
            <h3>What topics do your guides cover?</h3>
            <p>
              Our guides cover a wide range of topics essential for VEIN survival. We have comprehensive guides on world settings and configuration, character creation (skills, occupations, traits), Day 1 survival priorities, best loot locations, optimal base locations, and specific location walkthroughs like the prison armory.
            </p>
            <p>
              Each guide is designed to help you progress from beginner to advanced player, with detailed explanations and step-by-step instructions.
            </p>
          </article>
          <article class="faq-item">
            <h3>Are the guides suitable for beginners?</h3>
            <p>
              Absolutely! We have a complete <router-link to="/vein-guides/ultimate-world-settings-guide" class="inline-link">new player guide series</router-link> that starts from the very beginning. Our guides explain world settings, help you choose the right skills and occupation, and provide Day 1 priority lists to get you started on the right foot.
            </p>
            <p>
              Even if you've never played a survival game before, our guides will help you understand VEIN's mechanics and survive your first days in the apocalypse.
            </p>
          </article>
          <article class="faq-item">
            <h3>How often are the guides updated?</h3>
            <p>
              We update our guides regularly to reflect game changes, new features, and community discoveries. As VEIN is in Early Access and receives frequent updates, we make sure our guides stay current with the latest version of the game.
            </p>
            <p>
              Each guide includes a publish date, and we update guides when significant game changes occur that affect the strategies or information provided.
            </p>
          </article>
          <article class="faq-item">
            <h3>Do you have guides for specific locations?</h3>
            <p>
              Yes! We have detailed location guides for important areas in VEIN. Our guides include step-by-step routes, exact locations, required items or skills, and what loot you can expect to find. For example, we have a comprehensive <router-link to="/vein-guides/how-to-find-clinton-correctional-facility-armory" class="inline-link">guide for finding the Clinton Correctional Facility Armory</router-link>.
            </p>
            <p>
              Location guides help you navigate dangerous areas safely and efficiently, maximizing your loot while minimizing risk.
            </p>
          </article>
          <article class="faq-item">
            <h3>Can I use these guides for multiplayer co-op?</h3>
            <p>
              Most of our guides are applicable to both solo and co-op gameplay. However, some strategies may need adjustment for multiplayer. For example, base building guides work for both, but you might want to coordinate with teammates on skill selection to cover different roles.
            </p>
            <p>
              Our guides provide tips that work in both solo and multiplayer scenarios, helping you succeed regardless of your preferred playstyle.
            </p>
          </article>
          <article class="faq-item">
            <h3>Do the guides include spoilers?</h3>
            <p>
              Our guides focus on gameplay mechanics, strategies, and locations rather than story elements. We provide information about game systems, optimal strategies, and where to find resources, but we avoid spoiling narrative content or story surprises.
            </p>
            <p>
              If you're concerned about spoilers, you can focus on our mechanics and settings guides, which don't reveal story content.
            </p>
          </article>
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
  padding: 0 0 40px 0;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 30px 0;
  text-align: center;
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
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.guide-image-container {
  width: 100%;
  overflow: hidden;
  font-size: 0;
  background-color: rgba(26, 0, 0, 0.8);
  position: relative;
}

.guide-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.guide-card:hover .guide-image {
  transform: scale(1.05);
}

.guide-card-content {
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
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
  font-size: 18px;
  font-weight: 700;
  color: #ffd8d8;
  margin-bottom: 5px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-description {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.4;
  margin-bottom: 10px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.guide-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
}

.tag {
  background: transparent;
  border: 1px solid rgba(255, 54, 54, 0.3);
  color: rgba(255, 210, 210, 0.7);
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.7rem;
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
  padding-top: 10px;
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
    padding: 0 0 20px 0;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .guide-card {
    padding: 0;
  }

  .guide-title {
    font-size: 16px;
  }

  .guide-description {
    font-size: 12px;
    margin-bottom: 5px;
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
    padding-top: 5px;
  }

  .loading-state,
  .error-state {
    padding: 20px;
    font-size: 12px;
  }
}

/* Why Choose Us Section */
.why-choose-us-section {
  padding: 60px 0;
  background: linear-gradient(180deg, rgba(18, 0, 0, 0.4), rgba(30, 0, 0, 0.6));
  border-top: 1px solid rgba(255, 54, 54, 0.1);
  border-bottom: 1px solid rgba(255, 54, 54, 0.1);
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 215, 215, 0.7);
  margin: 0 auto 40px;
  max-width: 800px;
  font-size: 1rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.feature-card {
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 54, 54, 0.2);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.4);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: block;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0 0 12px 0;
}

.feature-card p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
}

/* FAQ Section */
.faq-section {
  padding: 60px 0;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.faq-item {
  background: rgba(30, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(255, 54, 54, 0.3);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.faq-item h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffd8d8;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.faq-item p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.6;
  margin: 0 0 12px 0;
  font-size: 0.9rem;
}

  .faq-item p:last-child {
    margin-bottom: 0;
  }

  .inline-link {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 54, 54, 0.3);
    transition: all 0.3s ease;
    position: relative;
  }

  .inline-link:hover {
    color: #fff;
    border-bottom-color: var(--accent);
    text-shadow: 0 0 8px rgba(255, 54, 54, 0.5);
  }

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .faq-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .why-choose-us-section,
  .faq-section {
    padding: 40px 0;
  }

  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 30px;
    padding: 0 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }

  .feature-card {
    padding: 24px 20px;
  }

  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
  }

  .feature-card h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .feature-card p {
    font-size: 0.85rem;
  }

  .faq-grid {
    margin-top: 30px;
    gap: 16px;
  }

  .faq-item {
    padding: 20px;
  }

  .faq-item h3 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  .faq-item p {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }

  .inline-link {
    font-size: 0.85rem;
    border-bottom-width: 1px;
  }
}
</style>
