import { ref } from 'vue'

// Items 数据配置映射
const ITEMS_DATA_CONFIG = {
  weapons: { routePath: '/items/weapons' },
  armor: { routePath: '/items/armor' },
  clothing: { routePath: '/items/clothing' },
  consumables: { routePath: '/items/consumables' },
  special: { routePath: '/items/special' },
  materials: { routePath: '/items/materials' },
  ammo: { routePath: '/items/ammo' },
  medical: { routePath: '/items/medical' },
  tools: { routePath: '/items/tools' },
  misc: { routePath: '/items/misc' },
}

// 数据文件映射
const categoryPathMap = {
  weapons: () => import('../data/items/weapons.js'),
  armor: () => import('../data/items/armor.js'),
  clothing: () => import('../data/items/clothing.js'),
  consumables: () => import('../data/items/consumables.js'),
  special: () => import('../data/items/special.js'),
  materials: () => import('../data/items/materials.js'),
  ammo: () => import('../data/items/ammo.js'),
  medical: () => import('../data/items/medical.js'),
  tools: () => import('../data/items/tools.js'),
  misc: () => import('../data/items/misc.js'),
}

/**
 * 加载指定类别的 items 数据
 */
const loadItemsData = async (category) => {
  try {
    const loader = categoryPathMap[category]
    if (!loader) {
      throw new Error(`Unknown items category: ${category}`)
    }
    
    const module = await loader()
    const data = module.default || module.items || []
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error(`Failed to load items data for category: ${category}`, error)
    return []
  }
}

/**
 * Items 数据 composable
 */
export function useItemsData(initialCategory) {
  const data = ref([])
  const loading = ref(false)
  const error = ref(null)
  const categoryRef = ref(initialCategory || '')

  const loadData = async (category = categoryRef.value) => {
    categoryRef.value = category
    loading.value = true
    error.value = null
    try {
      data.value = await loadItemsData(category)
    } catch (e) {
      error.value = e.message || 'Failed to load items data'
      data.value = []
    } finally {
      loading.value = false
    }
  }

  const findByAddress = (category, idSlug) => {
    const list = data.value || []
    return list.find((item) => {
      if (!item || !item.addressBar) return false
      const slug = String(item.addressBar).replace(/^\//, '')
      return slug === idSlug
    })
  }

  const findById = (id) => {
    return data.value.find(item => item.id === id) || null
  }

  const getOtherItems = (currentId) => {
    return data.value.filter(item => item.id !== currentId && item.showDetail !== false).slice(0, 10)
  }

  return {
    data,
    loading,
    error,
    config: ITEMS_DATA_CONFIG,
    loadData,
    findByAddress,
    findById,
    getOtherItems
  }
}

