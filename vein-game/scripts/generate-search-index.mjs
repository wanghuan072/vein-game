import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const categories = ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc']

async function readJson(relativePath) {
  return JSON.parse(await fs.readFile(path.join(root, 'src', 'data', relativePath), 'utf8'))
}

for (const locale of ['en', 'de']) {
  const guides = (await readJson(`guide/${locale}.json`)).map((entry) => ({ ...entry, contentType: 'guide' }))
  const wiki = (await readJson(`wiki/${locale}.json`)).map((entry) => ({ ...entry, contentType: 'wiki' }))
  const items = (await Promise.all(categories.map(async (category) => (await readJson(`items/${category}/${locale}.json`)).map((entry) => ({ ...entry, category, contentType: 'item' }))))).flat()
  const index = [...guides, ...wiki, ...items].map(({ id, title, description, tags, type, category, addressBar, imageUrl, imageAlt, contentType }) => ({ id, title, description, tags, type, category, addressBar, imageUrl, imageAlt, contentType }))
  await fs.writeFile(path.join(root, 'public', `search-index-${locale}.json`), `${JSON.stringify(index)}\n`, 'utf8')
}
