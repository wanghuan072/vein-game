import { Suspense } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { SearchClient } from '@/page/search/SearchClient'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

export function SearchPage({ locale }: { locale: Locale }) {
  const t = (key: string, fallback?: string) => translate(locale, key, fallback)
  const fallback = <><section className="page-header"><div className="container"><div className="page-header-content"><h1 className="page-title">{t('searchPage.header.title', 'Search')}</h1><p className="page-subtitle">{t('searchPage.header.subtitle2')}</p></div></div></section><section className="search-results-section"><div className="container"><p>Loading search…</p></div></section></>
  return <PageShell locale={locale}><div className="search-view"><Suspense fallback={fallback}><SearchClient locale={locale} /></Suspense></div></PageShell>
}
