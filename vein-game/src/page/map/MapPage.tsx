import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'
import { localizePath } from '@/lib/locale'
import { translationObject } from '@/lib/translations'
import type { Locale } from '@/types/content'

type TextRecord = Record<string, string>
type PoiCategory = { title: string; [key: string]: string }
type PoiGroup = { title: string; description: string; categories: Record<string, PoiCategory> }
type MapContent = { hero: { eyebrow: string; title: string; description: string; button: string }; overview: { title: string; snapshot: Record<string, string>; roadmap: { title: string; description: string } }; towns: { title: string; subtitle: string; [key: string]: string | TextRecord }; poi: { title: string; description: string; groups: Record<string, PoiGroup> } }

function itemsOf(category: PoiCategory) { return Object.entries(category).filter(([key]) => key.startsWith('item')).map(([, value]) => value) }

export function MapPage({ locale }: { locale: Locale }) {
  const content = translationObject<MapContent>(locale, 'mapPage')
  if (!content) return null
  const townKeys = ['dannemora', 'prison', 'saranac', 'fullMap']
  return <PageShell locale={locale}><div className="map-view"><section className="page-hero"><div className="container"><div className="page-hero-content"><p className="eyebrow">{content.hero.eyebrow}</p><h1 className="hero-title">{content.hero.title}</h1><p className="hero-description">{content.hero.description}</p><div className="hero-actions"><Link href={localizePath(locale, '/vein-map-detail')} className="btn-interactive-map">{content.hero.button}</Link></div></div></div></section><section className="region-overview"><div className="container"><h2 className="section-title">{content.overview.title}</h2><div className="region-grid"><article className="region-card"><h3>{content.overview.snapshot.title}</h3><ul>{['setting', 'biome', 'settlements', 'version'].map((key) => <li key={key}><strong>{content.overview.snapshot[key]}</strong> {content.overview.snapshot[`${key}Value`]}</li>)}</ul></article><article className="region-card"><h3>{content.overview.roadmap.title}</h3><p>{content.overview.roadmap.description}</p></article></div></div></section><section className="town-section"><div className="container"><div className="section-header"><h2>{content.towns.title}</h2><p>{content.towns.subtitle}</p></div><div className="town-grid">{townKeys.map((key) => { const town = content.towns[key] as TextRecord; return <article className="town-card" key={key}><h3>{town.title as string}</h3><p>{town.description as string}</p><ul>{['highlight1', 'highlight2', 'highlight3'].map((highlight) => <li key={highlight}>{town[highlight] as string}</li>)}</ul></article> })}</div></div></section><section className="poi-section"><div className="container"><div className="section-header"><h2>{content.poi.title}</h2><p>{content.poi.description}</p></div>{Object.entries(content.poi.groups).map(([groupKey, group]) => <div className="poi-group" key={groupKey}><div className="poi-group-header"><h3>{group.title}</h3><p>{group.description}</p></div><div className="poi-layout"><div className="poi-category-list">{Object.entries(group.categories).map(([categoryKey, category]) => <div className="poi-category-item" key={categoryKey}><h4 className="category-title">{category.title}</h4><div className="poi-items">{itemsOf(category).map((item, index) => <span className="poi-item" key={`${categoryKey}-${item}`}>{item}{index < itemsOf(category).length - 1 && <span className="item-separator"> · </span>}</span>)}</div></div>)}</div></div></div>)}</div></section></div></PageShell>
}
