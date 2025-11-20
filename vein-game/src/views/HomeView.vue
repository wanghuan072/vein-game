<template>
  <div class="home-view">
    <main>
      <!-- Hero Section -->
      <section class="hero hero-background">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <p class="badge">VEIN Game · Post-Apocalyptic Survival Sandbox</p>
              <h1 class="hero-title">VEIN · Survive Beyond the Collapse</h1>
              <p class="hero-subtitle">
                VEIN game is a post-apocalyptic survival multiplayer sandbox game. Gather supplies,
                explore abandoned buildings, combat bandits, defend your home, and rebuild
                society—whether alone or with friends. As seasons change, VEIN game world evolves
                with persistent, long-scale random events.
              </p>
              <div class="hero-actions">
                <a
                  href="https://store.steampowered.com/app/1857950/VEIN/"
                  class="btn-hero btn-steam"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>View on Steam</span>
                </a>
                <a href="/vein-guides" class="btn-hero btn-secondary">Explore Guides</a>
              </div>
              <div class="hero-stats">
                <div class="stat">
                  <p class="label">Release Date</p>
                  <p class="value">24 Oct 2025 · Early Access</p>
                </div>
                <div class="stat">
                  <p class="label">Genre</p>
                  <p class="value">Survival</p>
                </div>
                <div class="stat">
                  <p class="label">Platform</p>
                  <p class="value">PC Steam</p>
                </div>
              </div>
            </div>
            <div class="hero-video">
              <div class="video-player">
                <div class="video-thumbnail" v-if="!isVideoPlaying">
                  <div class="video-mask">
                    <span>VEIN WORLD BRIEFING</span>
                  </div>
                  <div class="play-button" @click="playVideo">▶</div>
                </div>
                <div class="video-iframe" v-else>
                  <iframe
                    src="https://www.youtube.com/embed/qjLDbxB-Xt4"
                    frameborder="0"
                    allowfullscreen
                    class="video-frame"
                  ></iframe>
                  <button class="close-video" @click="closeVideo">×</button>
                </div>
                <div class="video-info">
                  <div class="video-header">
                    <span>Ramjet Studios</span>
                    <span class="dot"></span>
                    <span>Developer Briefing</span>
                  </div>
                  <p>
                    Captured from an in-development build of VEIN survival game, highlighting
                    scavenging loops, hideout upgrades, and the looming Storm events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What is Section -->
      <section class="what-is">
        <div class="container">
          <h2 class="section-title">What is VEIN?</h2>
          <p class="section-subtitle">
            A post-apocalyptic survival multiplayer sandbox game where you gather supplies, explore
            abandoned buildings, combat bandits, and rebuild society with friends.
          </p>
          <div class="what-is-content">
            <div class="what-is-image">
              <img src="/images/what-01.webp" alt="VEIN Game" />
            </div>
            <div class="what-is-text">
              <h3>Scavenging and Exploration</h3>
              <p>
                In VEIN game, gathering supplies is essential for survival. Explore abandoned
                buildings to find the resources you need to stay alive. VEIN survival game
                challenges you to scavenge effectively while navigating dangerous environments where
                hostile zombies and bandits pose constant threats. Every building you enter could
                contain valuable supplies or deadly encounters in this survival game.
              </p>
              <p>
                VEIN game demo provides a condensed experience, limiting you to a small region of
                the world. Your maximum skill level is capped at 50 instead of 100 in the demo, but
                there are no other restrictions. The demo receives regular feature updates and bug
                fixes alongside the main game, giving players a true taste of VEIN survival game
                experience. Whether you're new to VEIN game or a seasoned survivor, the demo offers
                a perfect introduction to the core mechanics of this survival game.
              </p>
            </div>
          </div>
          <div class="what-is-content reverse">
            <div class="what-is-image">
              <img src="/images/what-02.webp" alt="VEIN Game" />
            </div>
            <div class="what-is-text">
              <h3>Dynamic Environment</h3>
              <p>
                VEIN game world is constantly changing. As time passes and seasons change, VEIN
                survival game world transforms with them. Persistent, long-scale random events
                affect gameplay, ensuring that no two play sessions are exactly the same. These
                dynamic systems mean that the challenges you face and the opportunities available to
                you will vary based on the current state of the world in this survival game.
              </p>
              <p>
                The changing seasons and random events in VEIN game create a living, breathing world
                where adaptation is key to survival. Players must learn to work with these dynamic
                systems, planning their strategies around the current conditions and being ready to
                adjust when unexpected events occur in this VEIN survival game. The dynamic nature
                of VEIN game ensures that every session offers new challenges and opportunities.
              </p>
            </div>
          </div>
          <div class="what-is-content">
            <div class="what-is-image">
              <img src="/images/what-03.webp" alt="VEIN Game" />
            </div>
            <div class="what-is-text">
              <h3>Defending and Rebuilding</h3>
              <p>
                In VEIN game, survival means more than just staying alive—it means defending your
                home and rebuilding society. VEIN survival game challenges you to fortify your
                hideout against threats from zombies and bandits, creating a safe haven in the
                post-apocalyptic world. Whether playing solo or with friends, building and defending
                your base is a core part of VEIN game experience.
              </p>
              <p>
                Beyond defense, VEIN game offers opportunities to rebuild society. Assist friendly
                NPCs, work with other survivors to establish safe zones, trade resources, and create
                a network of support in the wasteland. The multiplayer sandbox nature of this VEIN
                survival game means that cooperation and community building are essential for
                long-term survival and progress in VEIN game.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Guides Section -->
      <section class="guides-section">
        <div class="container">
          <h2 class="section-title">VEIN Survival Guides</h2>
          <p class="section-subtitle">
            Essential guides covering scavenging strategies, base defense, and cooperative play to
            help you survive and thrive in VEIN game.
          </p>
          <div class="guides-grid">
            <article
              v-for="guide in homeGuides"
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
            </article>
          </div>
          <div class="guides-actions" v-if="homeGuides.length > 0">
            <router-link to="/vein-guides" class="btn-hero btn-secondary">View All Guides</router-link>
          </div>
        </div>
      </section>

      <!-- Game Information -->
      <section class="game-info">
        <div class="container">
          <h2 class="section-title">VEIN Game Information</h2>
          <p class="section-subtitle">
            Key facts about VEIN game, demo scope, and system requirements.
          </p>
          <div class="info-layout">
            <div class="info-card">
              <h3>VEIN Game Product Snapshot</h3>
              <ul>
                <li>
                  <span>Title</span>
                  <span>VEIN</span>
                </li>
                <li>
                  <span>Developer / Publisher</span>
                  <span>Ramjet Studios</span>
                </li>
                <li>
                  <span>Release</span>
                  <span>24 Oct 2025 · Early Access</span>
                </li>
                <li>
                  <span>Platform</span>
                  <span>PC Steam</span>
                </li>
                <li>
                  <span>Modes</span>
                  <span>Solo · Co-op</span>
                </li>
                <li>
                  <span>Content Advisory</span>
                  <span>Violence · Gore · Drug & Alcohol Use</span>
                </li>
              </ul>
            </div>
            <div class="info-card">
              <h3>VEIN Survival Game System Requirements</h3>
              <div class="requirements">
                <div>
                  <p class="req-label">Minimum</p>
                  <ul>
                    <li>OS: Windows 10</li>
                    <li>Memory: 8 GB RAM</li>
                    <li>DirectX: Version 12</li>
                    <li>Storage: 40 GB available space</li>
                  </ul>
                </div>
                <div>
                  <p class="req-label">Recommended</p>
                  <ul>
                    <li>OS: Windows 10</li>
                    <li>Memory: 16 GB RAM</li>
                    <li>DirectX: Version 12</li>
                    <li>Network: Broadband Internet connection</li>
                    <li>Storage: 80 GB available space</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="language-table">
            <table>
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Interface</th>
                  <th>Audio</th>
                  <th>Subtitles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>English</td>
                  <td>✓</td>
                  <td></td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Additional Languages</td>
                  <td colspan="3">
                    Planned for VEIN survival game based on wishlist milestones during Early Access
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Planned Features -->
      <section class="planned-section">
        <div class="container">
          <h2 class="section-title">VEIN Planned Features</h2>
          <p class="section-subtitle">
            Headline features actively being developed for VEIN game throughout Early Access.
          </p>
          <div class="planned-grid">
            <article class="planned-card">
              <h3>Full Multiplayer</h3>
              <p>
                Experience the world of VEIN with friends, with enemies, alone, or a combination of
                all three.
              </p>
            </article>
            <article class="planned-card">
              <h3>Dynamic Environment</h3>
              <p>
                As time passes and seasons change, the world of VEIN does too. Persistent,
                large-scale random events affect gameplay.
              </p>
            </article>
            <article class="planned-card">
              <h3>Intelligent AI</h3>
              <p>
                AI can see, hear, feel, and smell you. Terrifying zombie variants make survival that
                much more difficult.
              </p>
            </article>
            <article class="planned-card">
              <h3>Robust Inventory</h3>
              <p>
                The post-apocalyptic world has useful supplies and valuable tools. Every item has a
                use.
              </p>
            </article>
            <article class="planned-card">
              <h3>Wide World</h3>
              <p>Prepare for the freezing upstate New York winter.</p>
            </article>
            <article class="planned-card">
              <h3>Usable Everything</h3>
              <p>
                Open mailboxes, adjust faucets, and knock on doors. Throw a can of beans at a zombie
                if you like.
              </p>
            </article>
            <article class="planned-card">
              <h3>Fortification</h3>
              <p>
                Build over the destroyed world and establish safehouses. Defend yourself from
                raiders and invasions. Maintain your base by yourself or with friends.
              </p>
            </article>
            <article class="planned-card">
              <h3>Long-Term Survivalism</h3>
              <p>
                Hunt, fish, and trap. Till land and grow your own food. Chop your own wood. Once
                canned goods run out, you're on your own.
              </p>
            </article>
            <article class="planned-card">
              <h3>Cast of Characters</h3>
              <p>
                Meet unique, dynamic, changing characters and accept rewarding jobs. There's work to
                be done in the post-apocalypse.
              </p>
            </article>
            <article class="planned-card">
              <h3>Trade &amp; Barter</h3>
              <p>
                More risk, more reward. Discover rare loot and trade with survivors for food,
                weapons, and medicine.
              </p>
            </article>
            <article class="planned-card">
              <h3>Vehicles and Maintenance</h3>
              <p>
                Get around the world of VEIN with cars and trucks. Refuel, maintain, and upgrade
                your vehicle.
              </p>
            </article>
            <article class="planned-card">
              <h3>The Grid</h3>
              <p>
                Fully simulated electrical, plumbing, and natural gas systems. Surprise friends by
                shutting off their power.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Reviews -->
      <section class="reviews-section">
        <div class="container">
          <h2 class="section-title">VEIN Player Reviews</h2>
          <p class="section-subtitle">What Early Access survivors are saying about VEIN game.</p>
          <div class="reviews-grid">
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">X</span>
                <div>
                  <h4>XxBoyEatsGirlxX</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "This review is counted in the overall review score because this user purchased the game directly on Steam or got a free license of a free game
Recommended
71.4 hrs on record (55.2 hrs at review time)
Early Access Review
Posted: 15 November
I am a 7 Days to Die fanatic. Absolutely love that game but have watched as the game missed the mark with updates, patches and DLC.
Vein is THE BEST zombie survival game I have played. Period.
A cross of seven days and proj Z in first person. The jaw dropping amount of content these 2 developers have put into this game is astounding. And their road map and constant updates lets me know these devs love their baby!
I'm not sure I need to play any other game than this one.
Vein is a beautiful well crafted world that is only going to get better!"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">C</span>
                <div>
                  <h4>Cole</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "Ill start of by saying that this is going to be the next great zombie survival game. The realism is incredible. What you expect to happen in real life, happens in the game so it makes survival feel real. The fact you can search and demolish just about anything is a huge bright spot. I can already picture the multiplayer servers where a clan has control of the prison (like in the walking dead) while having parts of their team exploring and negotiating with other settlements that maybe control and entire town (yes its possible)"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">M</span>
                <div>
                  <h4>Mariner</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "World interactivity in VEIN game is wild—being able to open anything, move
                anything, and weaponize junk makes this survival game feel alive."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">R</span>
                <div>
                  <h4>Refgain</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "Great game. These devs kicks ass compared to sucky EA or any other multi million company!!!!"
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">R</span>
                <div>
                  <h4>reznov</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "absolute banger of a game. It's rusty, a bit buggy on the edges but it's new and being worked on; Even then, I love it, been playing for a while and I'm excited to keep doing so and see how the game grows. Keep it up, people."
              </p>
            </article>
            <article class="review-card">
              <div class="reviewer">
                <span class="avatar">A</span>
                <div>
                  <h4>Archive</h4>
                  <p>★★★★★</p>
                </div>
              </div>
              <p>
                "Excellent game. The POIs are very good. The ability to continually expand is excellent. However, killing animals does not yield enough. If the animal was infected or diseased, understandable. Looking forward to the next update."
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="faq-section">
        <div class="container">
          <h2 class="section-title">VEIN Frequently Asked Questions</h2>
          <div class="faq-grid">
            <article class="faq-item">
              <h3>How is VEIN different from other extraction shooters?</h3>
              <p>
                VEIN game is a post-apocalyptic survival multiplayer sandbox game that focuses on
                long-term survival and rebuilding society. Unlike many extraction shooters that
                feature seasonal wipes, VEIN survival game emphasizes persistent progression where
                your hideout, resources, and progress carry forward. VEIN game combines scavenging
                and combat with base building and community rebuilding, creating a unique experience
                in the genre.
              </p>
              <p>
                The dynamic environment and persistent world events in VEIN game mean that VEIN
                survival game world continues to evolve, creating ongoing challenges and
                opportunities that set it apart from more linear extraction experiences. VEIN game
                offers a truly persistent survival experience.
              </p>
            </article>
            <article class="faq-item">
              <h3>Does the demo support co-op?</h3>
              <p>
                Yes. The demo mirrors the Early Access feature set: full co-op support, shared
                progression, and synchronized updates. As a multiplayer sandbox survival game, VEIN
                game allows you to play with friends from the start, whether in the demo or full
                release. VEIN survival game's cooperative features let you work together to gather
                supplies, explore abandoned buildings, and defend your home.
              </p>
              <p>
                The demo provides the same multiplayer experience as the full game, giving you and
                your friends a chance to experience VEIN survival game together before Early Access
                launches. Try VEIN game with friends to see how cooperative play enhances the
                survival experience.
              </p>
            </article>
            <article class="faq-item">
              <h3>What languages are supported?</h3>
              <p>
                English UI + subtitles at launch. Additional languages will roll out once specific
                wishlist goals are met. VEIN survival game will expand language support based on
                community demand and wishlist milestones during Early Access. VEIN game aims to
                support multiple languages as the community grows.
              </p>
              <p>
                If you want to see your language supported in VEIN game, adding VEIN to your Steam
                wishlist helps signal demand to the developers. Your support helps VEIN survival
                game reach more players worldwide.
              </p>
            </article>
            <article class="faq-item">
              <h3>Which mature themes should I expect?</h3>
              <p>
                VEIN game contains depictions of violence, gore, and drug & alcohol use. VEIN
                survival game is set in a post-apocalyptic world where these themes are part of the
                setting. Please play responsibly and be aware of the mature content in this VEIN
                survival game.
              </p>
              <p>
                VEIN game is rated for mature audiences due to these themes. Players should consider
                their comfort level with violence, gore, and substance use before playing VEIN
                survival game.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Join VEIN survival game network today</h2>
            <p>
              Add VEIN game to your wishlist or download the free demo to learn VEIN survival game
              mechanics, stock your hideout, and rally friends before Early Access begins. The demo
              lets you experience the core gameplay of this post-apocalyptic survival multiplayer
              sandbox game, with access to a small region and skill progression up to level 50.
              Discover why VEIN game is one of the most anticipated survival games of 2025.
            </p>
            <p>
              Early Access launches October 24, 2025, bringing the full VEIN survival game
              experience. Join the community and help shape the future of VEIN game through your
              feedback during Early Access. VEIN survival game continues to evolve based on player
              input, making your voice important in the development of VEIN game.
            </p>
            <div class="cta-actions">
              <a
                href="https://store.steampowered.com/app/1857950/VEIN/"
                class="btn-hero btn-steam"
                target="_blank"
                rel="noreferrer"
              >
                Get Early Access
              </a>
              <a
                href="https://vein.gg/"
                class="btn-hero btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Follow Official Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useGuideData } from '../composables/useGuideData'

const router = useRouter()
const { guides, loadHomeGuidesOnly } = useGuideData()

const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}

// 初始化加载首页指南数据
onMounted(() => {
  loadHomeGuidesOnly()
})

// 首页显示的指南（isHome: true）
const homeGuides = computed(() => {
  return guides.value || []
})

const goToGuide = (addressBar) => {
  if (!addressBar) return
  const path = addressBar.startsWith('/') ? addressBar : `/${addressBar}`
  router.push(`/vein-guides${path}`)
}

const getCategoryName = (category) => {
  const categoryMap = {
    'getting-started': 'GETTING STARTED',
    'walkthroughs': 'WALKTHROUGHS',
    'advanced': 'ADVANCED'
  }
  return categoryMap[category] || 'GUIDE'
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
</script>

<style scoped>
section {
  padding: 50px 0;
  position: relative;
  z-index: 1;
}

.hero {
  padding: 50px 0;
}

.hero-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
  align-items: center;
}

.badge {
  display: inline-flex;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 10px 0;
}

.hero-title {
  font-size: 48px;
  color: #ffe8e8;
  line-height: 1.2;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-subtitle {
  color: rgba(255, 225, 225, 0.78);
  font-size: 14px;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.btn-hero {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.08em;
}

.btn-steam {
  background: linear-gradient(135deg, #ff3636 0%, #ff6b6b 100%);
  color: #1c0000;
  box-shadow: 0 8px 24px rgba(255, 54, 54, 0.35);
}

.btn-secondary {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}

.btn-hero:hover {
  transform: translateY(-2px);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.stat {
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.stat .label {
  font-size: 14px;
  color: rgba(255, 210, 210, 0.65);
}

.stat .value {
  font-size: 14px;
  font-weight: 600;
  color: #ffe1e1;
}

.hero-video .video-player {
  background: rgba(12, 0, 0, 0.88);
  border: 1px solid rgba(255, 54, 54, 0.25);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  background: url('/images/video-bg.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 0, 0, 0.6), rgba(15, 0, 0, 0.75));
  z-index: 1;
  pointer-events: none;
}

.video-mask {
  position: relative;
  z-index: 2;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 30px 40px;
  text-align: center;
  letter-spacing: 0.3em;
  color: rgba(255, 212, 212, 0.7);
}

.play-button {
  position: absolute;
  z-index: 2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 54, 54, 0.9);
  color: #1c0000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: scale(1.05);
}

.video-iframe {
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-frame {
  width: 100%;
  height: 100%;
}

.close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
}

.video-info {
  padding: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.video-header {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.7);
}

.video-header .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 130, 130, 0.5);
}

.section-title {
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 10px;
  color: #ffe3e3;
}

.section-subtitle {
  text-align: center;
  color: rgba(255, 215, 215, 0.7);
  margin: 0 auto 40px;
}

.what-is-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
}

.what-is-content.reverse {
  direction: rtl;
}

.what-is-content.reverse > * {
  direction: ltr;
}

.what-is-image {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.what-is-image img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
}

.what-is-text h3 {
  font-size: 24px;
  line-height: 1.2;
  color: #ffd2d2;
  margin-bottom: 15px;
}

.what-is-text p {
  color: rgba(255, 210, 210, 0.78);
  margin-bottom: 15px;
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

.guides-actions {
  margin-top: 32px;
  text-align: center;
}

.info-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.info-card {
  background: rgba(20, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
}

.info-card h3 {
  margin-bottom: 16px;
  color: #ffd8d8;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-card ul li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 220, 220, 0.78);
}

.info-card ul li:last-child {
  border-bottom: none;
}

.requirements {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.req-label {
  font-weight: 600;
  color: var(--accent);
}

.language-table table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.language-table th,
.language-table td {
  padding: 12px 16px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.language-table th {
  background: rgba(255, 54, 54, 0.12);
  color: #ffdcdc;
}

.language-table td {
  color: rgba(255, 215, 215, 0.75);
}

.planned-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.planned-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(25, 0, 0, 0.55);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, border 0.2s ease;
}

.planned-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 54, 54, 0.35);
}

.planned-card h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #ffd0d0;
}

.planned-card p {
  color: rgba(255, 210, 210, 0.78);
  line-height: 1.5;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.review-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(40, 0, 0, 0.45);
}

.reviewer {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 54, 54, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--accent);
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}

.faq-item {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(30, 0, 0, 0.4);
}

.faq-item h3 {
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 10px;
  color: #ffd6d6;
}

.cta-content {
  text-align: center;
  border-radius: 24px;
  padding: 20px;
  border: 1px solid rgba(255, 54, 54, 0.35);
  background: linear-gradient(135deg, rgba(120, 0, 0, 0.6), rgba(10, 0, 0, 0.9));
}

.cta-actions {
  margin-top: 24px;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .what-is-content {
    grid-template-columns: 1fr;
  }

  .planned-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .info-layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  section {
    padding: 20px 0;
  }

  .hero {
    padding: 20px 0;
  }

  .badge{
    font-size: 0.6rem;
  }

  .hero-content {
    gap: 10px;
  }

  .hero-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .video-info{
    padding: 10px;
  }

  .video-info p{
    font-size: 12px;
  }

  .section-title {
    font-size: 20px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .what-is-text h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guide-card {
    padding: 0;
  }

  .guide-card-content {
    padding: 10px;
  }

  .guide-title {
    font-size: 16px;
  }

  .guide-description {
    font-size: 12px;
    margin-bottom: 5px;
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

  .info-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .planned-card h3 {
    font-size: 16px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .faq-item h3 {
    font-size: 14px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .language-table th,
  .language-table td{
    padding: 5px 10px;
  }

  .language-table th{
    font-size: 12px;
  }

  .language-table td{
    font-size: 12px;
  }

  .what-is-text p,
  .guide-card p,
  .planned-card p,
  .info-card ul li,
  .faq-item p,
  .hero-subtitle,
  .section-subtitle {
    font-size: 12px;
    margin-bottom: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .guides-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .planned-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .info-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .what-is-content {
    gap: 20px;
    margin-bottom: 20px;
  }

  .hero-actions {
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .guides-actions {
    margin-top: 10px;
  }

  .cta-actions {
    margin-top: 20px;
    gap: 10px;
    flex-wrap: wrap;
  }

  .stat {
    padding: 5px 10px;
  }

  .stat .label{
    font-size: 12px;
  }

  .stat .value{
    font-size: 12px;
  }

  .guide-card {
    padding: 10px;
  }

  .info-card {
    padding: 10px;
  }

  .planned-card {
    padding: 10px;
  }

  .review-card {
    padding: 10px;
  }

  .review-card p{
    font-size: 12px;
  }

  .faq-item {
    padding: 10px;
  }

  .cta-content {
    padding: 10px;
  }

  .cta-content p{
    font-size: 12px;
  }

  .hero-video,
  .video-player,
  .video-thumbnail,
  .video-iframe,
  .video-frame {
    max-width: 100%;
    width: 100%;
  }

  .what-is-image img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  .btn-hero {
    font-size: 12px;
    padding: 10px 20px;
    white-space: nowrap;
  }

  .language-table {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .language-table table {
    min-width: 100%;
    width: max-content;
  }
}

</style>

