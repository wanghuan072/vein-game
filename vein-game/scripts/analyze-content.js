import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 统计函数
async function analyzeContent() {
  const results = {
    guides: {},
    wiki: {},
    items: {},
    totals: {}
  }

  // 1. 统计 Guides
  console.log('\n📚 === 指南 (Guides) 内容分析 ===\n')
  
  const guideEn = await import('../src/data/guide/en.js')
  const guideDe = await import('../src/data/guide/de.js')
  
  results.guides.en = {
    total: guideEn.guides?.length || 0,
    home: Math.min(9, guideEn.guides?.length || 0),
    items: guideEn.guides || []
  }
  
  results.guides.de = {
    total: guideDe.guides?.length || 0,
    home: Math.min(9, guideDe.guides?.length || 0),
    items: guideDe.guides || []
  }

  console.log(`英文指南: ${results.guides.en.total} 篇`)
  console.log(`  - 首页显示: ${results.guides.en.home} 篇（列表最前 9 篇）`)
  console.log(`德语指南: ${results.guides.de.total} 篇`)
  console.log(`  - 首页显示: ${results.guides.de.home} 篇（列表最前 9 篇）`)

  const guideCategoryStats = {}
  results.guides.en.items.forEach(guide => {
    if (guide.category) {
      guideCategoryStats[guide.category] = (guideCategoryStats[guide.category] || 0) + 1
    }
  })
  console.log('\n指南分类分布:')
  Object.entries(guideCategoryStats).sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
    console.log(`  - ${category}: ${count} 篇`)
  })

  // 2. 统计 Wiki
  console.log('\n\n📖 === 百科 (Wiki) 内容分析 ===\n')
  
  const wikiEn = await import('../src/data/wiki/en.js')
  const wikiDe = await import('../src/data/wiki/de.js')
  
  results.wiki.en = {
    total: wikiEn.wiki?.length || 0,
    items: wikiEn.wiki || []
  }
  
  results.wiki.de = {
    total: wikiDe.wiki?.length || 0,
    items: wikiDe.wiki || []
  }

  console.log(`英文Wiki: ${results.wiki.en.total} 篇`)
  console.log(`德语Wiki: ${results.wiki.de.total} 篇`)

  if (results.wiki.en.items.length > 0) {
    console.log('\nWiki文章列表:')
    results.wiki.en.items.forEach(wiki => {
      console.log(`  - ${wiki.title}`)
    })
  }

  // 3. 统计 Items
  console.log('\n\n🎒 === 物品 (Items) 内容分析 ===\n')
  
  const categories = ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc']
  
  for (const category of categories) {
    try {
      const enModule = await import(`../src/data/items/${category}/en.js`)
      const deModule = await import(`../src/data/items/${category}/de.js`)
      
      const enData = enModule.default || enModule.items || []
      const deData = deModule.default || deModule.items || []
      
      results.items[category] = {
        en: Array.isArray(enData) ? enData.length : 0,
        de: Array.isArray(deData) ? deData.length : 0
      }
      
      console.log(`${category.padEnd(15)}: EN=${String(results.items[category].en).padStart(3)} | DE=${String(results.items[category].de).padStart(3)}`)
    } catch (error) {
      console.log(`${category.padEnd(15)}: 加载失败 - ${error.message}`)
      results.items[category] = { en: 0, de: 0 }
    }
  }

  // 4. 计算总数
  results.totals = {
    guides: {
      en: results.guides.en.total,
      de: results.guides.de.total,
      total: results.guides.en.total + results.guides.de.total
    },
    wiki: {
      en: results.wiki.en.total,
      de: results.wiki.de.total,
      total: results.wiki.en.total + results.wiki.de.total
    },
    items: {
      en: Object.values(results.items).reduce((sum, cat) => sum + (cat.en || 0), 0),
      de: Object.values(results.items).reduce((sum, cat) => sum + (cat.de || 0), 0),
      total: 0
    }
  }
  results.totals.items.total = results.totals.items.en + results.totals.items.de

  // 5. 输出总结
  console.log('\n\n📊 === 全站内容统计总结 ===\n')
  console.log('指南 (Guides):')
  console.log(`  英文: ${results.totals.guides.en} 篇`)
  console.log(`  德语: ${results.totals.guides.de} 篇`)
  console.log(`  总计: ${results.totals.guides.total} 篇`)
  
  console.log('\n百科 (Wiki):')
  console.log(`  英文: ${results.totals.wiki.en} 篇`)
  console.log(`  德语: ${results.totals.wiki.de} 篇`)
  console.log(`  总计: ${results.totals.wiki.total} 篇`)
  
  console.log('\n物品 (Items):')
  console.log(`  英文: ${results.totals.items.en} 个`)
  console.log(`  德语: ${results.totals.items.de} 个`)
  console.log(`  总计: ${results.totals.items.total} 个`)
  
  console.log('\n全站总计:')
  console.log(`  英文内容: ${results.totals.guides.en + results.totals.wiki.en + results.totals.items.en} 项`)
  console.log(`  德语内容: ${results.totals.guides.de + results.totals.wiki.de + results.totals.items.de} 项`)
  console.log(`  全部内容: ${results.totals.guides.total + results.totals.wiki.total + results.totals.items.total} 项`)

  // 6. Guide详细分析
  console.log('\n\n📝 === Guide 详细分析 ===\n')
  
  console.log('英文指南列表:')
  results.guides.en.items.forEach((guide, index) => {
    console.log(`\n${index + 1}. [ID: ${guide.id}] ${guide.title}`)
    console.log(`   - 发布日期: ${guide.publishDate}`)
    console.log(`   - 分类: ${guide.category || '未分类'}`)
    console.log(`   - 标签: ${(guide.tags || []).join(', ')}`)
    console.log(`   - URL: /vein-guides${guide.addressBar}`)
    if (guide.detailsHtml) {
      const htmlLength = guide.detailsHtml.length
      console.log(`   - 内容长度: ${htmlLength} 字符`)
      const imageCount = (guide.detailsHtml.match(/<img/g) || []).length
      if (imageCount > 0) {
        console.log(`   - 包含图片: ${imageCount} 张`)
      }
    }
  })

  return results
}

// 执行分析
analyzeContent().catch(console.error)

