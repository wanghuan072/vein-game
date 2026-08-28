import { PageShell } from '@/components/layout/PageShell'
import { getItems, type ItemCategory } from '@/lib/data/content'
import type { Locale } from '@/types/content'

const subtitles: Record<ItemCategory, string> = {
  weapons: 'Complete weapons database for VEIN game. Browse all melee and ranged weapons available in VEIN survival game.', armor: 'Protective armor sets that help VEIN survivors withstand raids, firefights, and seasonal hazards.', clothing: 'Outfits and tactical apparel that provide comfort and concealment in VEIN.', consumables: 'Food, drinks, and temporary buffs that keep you moving through VEIN.', special: 'Unique items, limited drops, and rare rewards from VEIN events.', materials: 'Crafting components used to build, upgrade, and repair equipment in VEIN.', ammo: 'Ammunition types for every weapon platform in VEIN game.', medical: 'Medkits, bandages, and pharmaceuticals to keep survivors alive.', tools: 'Utility tools for construction, exploration, and survival tasks.', misc: 'Everything else: quest items, trade goods, and collectibles.',
}

function label(value: string) { return value.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ') }

const weaponSectionLabels: Record<string, string> = {
  bladed: 'Bladed Weapons',
  blunt: 'Ranged Weapons',
  firearms: 'Firearms Weapons',
  'firearms-attachments': 'Firearms Attachments',
  explosive: 'Explosive Weapons',
}

export function ItemsCategoryPage({ locale, category }: { locale: Locale; category: ItemCategory }) {
  const items = getItems(locale, category)
  const title = label(category)
  const groups = [...new Set(items.map((item) => item.type || 'other'))].map((type) => ({ type, items: items.filter((item) => (item.type || 'other') === type) }))
  const rootClass = category === 'weapons' ? 'weapons-view' : 'items-category-view'
  const sectionLabel = (type: string) => category === 'weapons' ? (weaponSectionLabels[type] || label(type)) : label(type)
  return <PageShell locale={locale}><div className={rootClass}><div className="container"><div className="page-header"><h1 className="page-title">{title}</h1><p className="page-subtitle">{subtitles[category]}</p></div>{groups.map(({ type, items: groupItems }) => <section className="table-section" key={type}><div className="section-header"><h2 className="section-title">{sectionLabel(type)}</h2><span className="section-count">{groupItems.length} items</span></div><div className="table-container"><table className={category === 'weapons' ? 'weapons-table' : 'items-table'}><thead><tr><th className="preview-col">Preview</th><th className="name-col">Name</th><th className="desc-col">Description</th><th className="type-col">Type</th></tr></thead><tbody>{groupItems.map((item) => <tr key={`${type}-${item.id}`} className={`table-row${item.showDetail === false ? ' disabled' : ''}`}><td className="preview-cell">{item.imageUrl ? <img src={item.imageUrl} alt={item.imageAlt || item.title} className="preview-thumb" loading="lazy" /> : <span>—</span>}</td><td className="name-cell"><div className="name-primary">{item.title}</div></td><td className="desc-cell">{item.description || 'No description available.'}</td><td className="type-cell"><span className="type-pill">{item.type || '—'}</span></td></tr>)}</tbody></table></div></section>)}</div></div></PageShell>
}
