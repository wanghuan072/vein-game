import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const readJson = (file) => JSON.parse(readFileSync(resolve(root, file), 'utf8'))
const failures = []
const legacyPathReplacements = new Map([
  ['/images/guide/guide19-02.webp', '/images/guide/guide01.webp'],
  ['/images/guide/guide20-02.webp', '/images/guide/guide20.webp'],
  ['/vein-guides/vein-game-mining-guide-where-to-get-graphite-hematite', '/vein-guides/vein-game-mining-guide-graphite-hematite'],
  ['/ein-game-improved-pickaxe-ultimate-mining-guide', '/vein-guides/vein-game-improved-pickaxe-ultimate-mining-guide'],
  ['/vein-guides/here-is-the-plain-text-markdown-version-of-the-guide', '/vein-guides/vein-water-power-wells-solar-winter-guide'],
])
const verifyAsset = (assetPath, label) => {
  const resolvedPath = legacyPathReplacements.get(assetPath) ?? assetPath
  if (!existsSync(resolve(root, 'public', resolvedPath.replace(/^\//, '')))) failures.push(`${label}: missing image ${assetPath}`)
}

for (const locale of ['en', 'de']) {
  for (const type of ['guide', 'wiki']) {
    const entries = readJson(`src/data/${type}/${locale}.json`)
    for (const entry of entries) {
      if (!entry.title || !entry.addressBar || !entry.seo?.title || !entry.seo?.description) failures.push(`${type}/${locale}: invalid SEO or addressBar for id ${entry.id}`)
      if (entry.imageUrl) verifyAsset(entry.imageUrl, `${type}/${locale} (id ${entry.id})`)
      for (const match of (entry.body ?? '').matchAll(/!\[[^\]]*\]\((\/[^)\s]+)(?:\s+[^)]*)?\)/g)) verifyAsset(match[1], `${type}/${locale} inline image (id ${entry.id})`)
      for (const match of (entry.body ?? '').matchAll(/(?<!!)\[[^\]]+\]\((\/[^)\s?#]+)[^)]*\)/g)) {
        if (match[1].startsWith('/images/')) continue
        if (match[1].startsWith('/ein-game-') || match[1].includes('mining-guide-where-to-get-graphite-hematite')) {
          const replacement = legacyPathReplacements.get(match[1])
          if (!replacement) failures.push(`${type}/${locale} inline link (id ${entry.id}): unresolved legacy path ${match[1]}`)
        }
      }
    }
  }
  for (const category of ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc']) {
    if (!Array.isArray(readJson(`src/data/items/${category}/${locale}.json`))) failures.push(`items/${category}/${locale}: expected array`)
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exitCode = 1
} else {
  console.log('Content audit passed: routes, TDK fields, data shape, and referenced images are present.')
}
