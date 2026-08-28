'use client'

import { useMemo, useState } from 'react'
import { GuideCards } from '@/page/guides/GuideCards'
import { translate } from '@/lib/translations'
import type { ContentEntry, Locale } from '@/types/content'

export function GuidesContent({ guides, locale }: { guides: ContentEntry[]; locale: Locale }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = useMemo(() => [...new Set(guides.map((guide) => guide.category).filter((category): category is string => Boolean(category)))].sort((a, b) => a.localeCompare(b)), [guides])
  const filtered = selectedCategory ? guides.filter((guide) => guide.category === selectedCategory) : guides
  return <><div className="category-filters"><button type="button" className={`category-filter${selectedCategory === null ? ' active' : ''}`} onClick={() => setSelectedCategory(null)}>{translate(locale, 'guidesPage.allGuides')}</button>{categories.map((category) => <button type="button" key={category} className={`category-filter${selectedCategory === category ? ' active' : ''}`} onClick={() => setSelectedCategory(category)}>{category}</button>)}</div><div className="category-section"><h2 className="section-title">{selectedCategory || translate(locale, 'guidesPage.allGuides')}</h2>{filtered.length ? <GuideCards guides={filtered} locale={locale} /> : <div className="empty-state"><p>{translate(locale, 'guidesPage.emptyCategory')}</p></div>}</div></>
}
