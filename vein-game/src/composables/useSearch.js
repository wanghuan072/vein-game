import { ref, computed } from 'vue'
import { guides } from '../data/guide/guide.js'
import { wiki } from '../data/wiki/wiki.js'

// 动态导入所有物品数据
const itemsDataLoaders = {
  weapons: () => import('../data/items/weapons.js'),
  armor: () => import('../data/items/armor.js'),
  clothing: () => import('../data/items/clothing.js'),
  consumables: () => import('../data/items/consumables.js'),
  special: () => import('../data/items/special.js'),
  materials: () => import('../data/items/materials.js'),
  ammo: () => import('../data/items/ammo.js'),
  medical: () => import('../data/items/medical.js'),
  tools: () => import('../data/items/tools.js'),
  misc: () => import('../data/items/misc.js')
}

/**
 * 搜索功能 composable
 */
export function useSearch() {
  const searchQuery = ref('')
  const searchResults = ref({
    guides: [],
    wiki: [],
    items: []
  })
  const isSearching = ref(false)
  const allItems = ref([])

  // 加载所有物品数据
  const loadAllItems = async () => {
    if (allItems.value.length > 0) return allItems.value

    try {
      const itemsPromises = Object.values(itemsDataLoaders).map(loader => loader())
      const itemsModules = await Promise.all(itemsPromises)
      
      const items = []
      itemsModules.forEach((module, index) => {
        const category = Object.keys(itemsDataLoaders)[index]
        const categoryItems = module.default || []
        categoryItems.forEach(item => {
          items.push({
            ...item,
            category,
            type: 'item'
          })
        })
      })
      
      allItems.value = items
      return items
    } catch (error) {
      console.error('Failed to load items for search:', error)
      return []
    }
  }

  /**
   * 搜索函数
   */
  const search = async (query) => {
    if (!query || query.trim().length === 0) {
      searchResults.value = { guides: [], wiki: [], items: [] }
      return
    }

    isSearching.value = true
    const searchTerm = query.toLowerCase().trim()

    // 搜索指南
    const guidesResults = (guides || []).filter(guide => {
      const title = (guide.title || '').toLowerCase()
      const description = (guide.description || '').toLowerCase()
      const tags = (guide.tags || []).join(' ').toLowerCase()
      return title.includes(searchTerm) || 
             description.includes(searchTerm) || 
             tags.includes(searchTerm)
    }).map(guide => ({ ...guide, type: 'guide' }))

    // 搜索Wiki
    const wikiResults = (wiki || []).filter(w => {
      const title = (w.title || '').toLowerCase()
      const description = (w.description || '').toLowerCase()
      return title.includes(searchTerm) || description.includes(searchTerm)
    }).map(w => ({ ...w, type: 'wiki' }))

    // 搜索物品
    const items = await loadAllItems()
    const itemsResults = items.filter(item => {
      const title = (item.title || '').toLowerCase()
      const description = (item.description || '').toLowerCase()
      const type = (item.type || '').toLowerCase()
      return title.includes(searchTerm) || 
             description.includes(searchTerm) || 
             type.includes(searchTerm)
    }).map(item => ({ ...item, type: 'item' }))

    searchResults.value = {
      guides: guidesResults,
      wiki: wikiResults,
      items: itemsResults
    }

    isSearching.value = false
  }

  /**
   * 获取搜索结果总数
   */
  const totalResults = computed(() => {
    return searchResults.value.guides.length + 
           searchResults.value.wiki.length + 
           searchResults.value.items.length
  })

  /**
   * 清空搜索结果
   */
  const clearSearch = () => {
    searchQuery.value = ''
    searchResults.value = { guides: [], wiki: [], items: [] }
  }

  return {
    searchQuery,
    searchResults,
    isSearching,
    totalResults,
    search,
    clearSearch
  }
}


