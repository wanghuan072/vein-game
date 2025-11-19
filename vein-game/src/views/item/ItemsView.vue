<template>
  <div class="items-view">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Items</h1>
        <p class="page-subtitle">
          Complete item database for VEIN game. Browse all weapons, tools, resources, and items available in VEIN survival game.
        </p>
      </div>

      <div class="category-grid">
        <router-link
          v-for="card in categoryCards"
          :key="card.title"
          :to="card.to"
          class="category-card"
        >
          <div class="card-top">
            <div class="card-title-wrap">
              <h3 class="card-title">{{ card.title }}</h3>
              <span class="item-count">{{ card.count }}</span>
            </div>
            <p class="card-desc">{{ card.description }}</p>
          </div>
          <div class="card-bottom">
            <span class="explore">Explore Category</span>
            <span class="arrow">›</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useItemsData } from '../../composables/useItemsData'

// 加载所有分类的数据
const { data: weapons, loadData: loadWeapons } = useItemsData('weapons')
const { data: armor, loadData: loadArmor } = useItemsData('armor')
const { data: clothing, loadData: loadClothing } = useItemsData('clothing')
const { data: consumables, loadData: loadConsumables } = useItemsData('consumables')
const { data: special, loadData: loadSpecial } = useItemsData('special')
const { data: materials, loadData: loadMaterials } = useItemsData('materials')
const { data: ammo, loadData: loadAmmo } = useItemsData('ammo')
const { data: medical, loadData: loadMedical } = useItemsData('medical')
const { data: tools, loadData: loadTools } = useItemsData('tools')
const { data: misc, loadData: loadMisc } = useItemsData('misc')

onMounted(async () => {
  try {
    await Promise.all([
      loadWeapons('weapons'),
      loadArmor('armor'),
      loadClothing('clothing'),
      loadConsumables('consumables'),
      loadSpecial('special'),
      loadMaterials('materials'),
      loadAmmo('ammo'),
      loadMedical('medical'),
      loadTools('tools'),
      loadMisc('misc')
    ])
  } catch (error) {
    console.error('Error loading items data:', error)
  }
})

// 计算每个分类的 item 数量
const weaponsCount = computed(() => (weapons.value || []).length)
const armorCount = computed(() => (armor.value || []).length)
const clothingCount = computed(() => (clothing.value || []).length)
const consumablesCount = computed(() => (consumables.value || []).length)
const specialCount = computed(() => (special.value || []).length)
const materialsCount = computed(() => (materials.value || []).length)
const ammoCount = computed(() => (ammo.value || []).length)
const medicalCount = computed(() => (medical.value || []).length)
const toolsCount = computed(() => (tools.value || []).length)
const miscCount = computed(() => (misc.value || []).length)

const categoryCards = computed(() => [
  {
    title: 'Weapons',
    description: 'All weapons available in VEIN game, including melee and ranged weapons.',
    to: '/vein-items/weapons',
    count: `${weaponsCount.value} items`,
  },
  {
    title: 'Armor',
    description: 'Protective gear that keeps survivors alive when raids turn deadly.',
    to: '/vein-items/armor',
    count: `${armorCount.value} items`,
  },
  {
    title: 'Clothing',
    description: 'Outfits and tactical apparel that provide comfort and concealment.',
    to: '/vein-items/clothing',
    count: `${clothingCount.value} items`,
  },
  {
    title: 'Consumables',
    description: 'Food, drinks, and temporary buffs that keep you moving.',
    to: '/vein-items/consumables',
    count: `${consumablesCount.value} items`,
  },
  {
    title: 'Special',
    description: 'Unique items, limited drops, and rare rewards from events.',
    to: '/vein-items/special',
    count: `${specialCount.value} items`,
  },
  {
    title: 'Materials',
    description: 'Crafting components used to build, upgrade, and repair equipment.',
    to: '/vein-items/materials',
    count: `${materialsCount.value} items`,
  },
  {
    title: 'Ammo',
    description: 'Ammunition types for every weapon platform in VEIN game.',
    to: '/vein-items/ammo',
    count: `${ammoCount.value} items`,
  },
  {
    title: 'Medical',
    description: 'Medkits, bandages, and pharmaceuticals to keep squads alive.',
    to: '/vein-items/medical',
    count: `${medicalCount.value} items`,
  },
  {
    title: 'Tools',
    description: 'Utility tools for construction, exploration, and survival tasks.',
    to: '/vein-items/tools',
    count: `${toolsCount.value} items`,
  },
  {
    title: 'Misc',
    description: 'Everything else: quest items, trade goods, and collectibles.',
    to: '/vein-items/misc',
    count: `${miscCount.value} items`,
  },
])
</script>

<style scoped>
.items-view {
  min-height: 100vh;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  padding: 60px 0;
}

.category-card {
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background: linear-gradient(135deg, rgba(30, 0, 0, 0.6) 0%, rgba(30, 0, 0, 0.4) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  transition: all 0.25s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(255, 54, 54, 0.2);
  border-color: rgba(255, 54, 54, 0.3);
  background: linear-gradient(135deg, rgba(30, 0, 0, 0.8) 0%, rgba(30, 0, 0, 0.6) 100%);
}

.card-title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffd8d8;
  margin: 0;
}

.item-count {
  padding: 4px 10px;
  font-size: 0.75rem;
  color: var(--accent);
  background: rgba(255, 54, 54, 0.15);
  border: 1px solid rgba(255, 54, 54, 0.35);
  border-radius: 999px;
}

.card-desc {
  color: rgba(255, 210, 210, 0.7);
  margin: 0 0 16px 0;
  line-height: 1.6;
  font-size: 0.95rem;
}

.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: rgba(255, 210, 210, 0.7);
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 12px;
}

.explore {
  font-weight: 700;
  color: var(--accent);
}

.arrow {
  font-size: 18px;
  line-height: 1;
  color: var(--accent);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 0;
  }

  .category-card {
    padding: 10px;
  }

  .card-title {
    font-size: 16px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .card-desc {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .item-count {
    font-size: 12px;
    padding: 3px 8px;
  }

  .explore {
    font-size: 12px;
  }

  .arrow {
    font-size: 14px;
  }

  .card-bottom {
    padding-top: 10px;
    margin-top: 10px;
  }
}
</style>
