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

    <!-- Why Choose Us Section -->
    <section class="why-choose-us-section">
      <div class="container">
        <h2 class="section-title">Why Choose Our VEIN Wiki?</h2>
        <p class="section-subtitle">
          Your complete reference guide for mastering every aspect of VEIN survival game.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3>Complete Knowledge Base</h3>
            <p>
              Our Wiki covers all core systems in VEIN, from basic controls and keybindings to advanced mechanics like crafting, building, and vehicle systems. Every article is meticulously researched and regularly updated to ensure accuracy.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎮</div>
            <h3>Game Mechanics Explained</h3>
            <p>
              Understand how VEIN's systems work with our detailed <router-link to="/vein-wiki/mechanics" class="inline-link">mechanics guide</router-link>. Learn about crafting, building, item interactions, health systems, and world systems that affect your survival.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚔️</div>
            <h3>Skills & Perks Database</h3>
            <p>
              Master character progression with our comprehensive <router-link to="/vein-wiki/skills" class="inline-link">skills and perks guide</router-link>. Find every skill, understand their effects, and discover powerful perks that unlock at different levels.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏗️</div>
            <h3>Building & Crafting Guides</h3>
            <p>
              Learn to construct fortifications, workbenches, and utilities with our <router-link to="/vein-wiki/building" class="inline-link">building system guide</router-link>. Master the construction menu, understand fortification tiers, and build the perfect base.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🚗</div>
            <h3>Vehicle & Transport Info</h3>
            <p>
              Get detailed information about all vehicles in VEIN, from passenger cars to heavy-duty trucks. Our <router-link to="/vein-wiki/vehicles" class="inline-link">vehicles guide</router-link> covers every vehicle type, required materials, and how to use them effectively.
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🍳</div>
            <h3>Cooking & Recipes</h3>
            <p>
              Never go hungry with our complete cooking recipes database. Learn all brewing and slicing recipes, required ingredients, and cooking utensils needed to prepare meals that restore health and stamina.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions About VEIN Wiki</h2>
        <div class="faq-grid">
          <article class="faq-item">
            <h3>What information does the Wiki contain?</h3>
            <p>
              Our Wiki is a comprehensive knowledge base covering all aspects of VEIN game. It includes detailed information about controls and keybindings, all skills and their associated perks, core game mechanics, cooking recipes, the building system, vehicles, and a complete items database.
            </p>
            <p>
              Each article provides in-depth explanations, tables, lists, and step-by-step instructions to help you understand and master every system in VEIN.
            </p>
          </article>
          <article class="faq-item">
            <h3>How do I use the controls guide?</h3>
            <p>
              Our <router-link to="/vein-wiki/controls" class="inline-link">controls and keybindings guide</router-link> lists all default keybindings for movement, combat, vehicles, and miscellaneous actions. You can use this reference to learn the controls or customize them in the game's settings menu.
            </p>
            <p>
              The guide is organized by category (Movement, Combat, Vehicles, etc.) making it easy to find the specific control you're looking for.
            </p>
          </article>
          <article class="faq-item">
            <h3>Are the skill perks accurate?</h3>
            <p>
              Yes, our <router-link to="/vein-wiki/skills" class="inline-link">skills and perks guide</router-link> is regularly updated to reflect the current game version. We list every skill, explain their function, and provide complete perk lists with level requirements and effects.
            </p>
            <p>
              Each perk entry includes the level at which it unlocks (typically 25 or 50) and a detailed description of its benefits, helping you plan your character build effectively.
            </p>
          </article>
          <article class="faq-item">
            <h3>Does the Wiki include crafting recipes?</h3>
            <p>
              Yes! Our Wiki includes comprehensive cooking recipes for brewing and slicing. The <router-link to="/vein-wiki/cooking-recipes" class="inline-link">cooking recipes guide</router-link> lists all ingredients, required utensils, and the products you can create.
            </p>
            <p>
              Whether you need to brew coffee, make broth, or slice vegetables, our recipe database has everything you need to keep your character fed and healthy.
            </p>
          </article>
          <article class="faq-item">
            <h3>How detailed is the building guide?</h3>
            <p>
              Our building guide is extremely detailed, covering the entire construction system. It explains the Utility Cabinet system, fortification tiers (Wood, Fortified Wood, Limestone Brick), all workbenches, storage options, utilities for farming and electricity, and defensive structures.
            </p>
            <p>
              The guide includes skill requirements, material costs, and strategic advice for building an effective base that can withstand zombie hordes.
            </p>
          </article>
          <article class="faq-item">
            <h3>Is the Wiki updated with game patches?</h3>
            <p>
              We strive to keep the Wiki current with game updates. As VEIN is in Early Access and receives regular patches, we update our articles when significant changes occur to mechanics, skills, recipes, or other systems.
            </p>
            <p>
              If you notice outdated information, please let us know so we can update the relevant articles promptly.
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
