'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PageShell } from '@/components/layout/PageShell'
import { localizePath } from '@/lib/locale'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

function FullscreenIcon({ expanded }: { expanded: boolean }) {
  return <svg className="fullscreen-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">{expanded ? <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 0-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /> : <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />}</svg>
}

function BreadcrumbHomeIcon() {
  return <svg className="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>
}

function BreadcrumbArrow() {
  return <svg className="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9,18 15,12 9,6" /></svg>
}

export function MapDetailPage({ locale }: { locale: Locale }) {
  const [fullscreen, setFullscreen] = useState(false)
  const t = (key: string, fallback?: string) => translate(locale, key, fallback)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setFullscreen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement | null
    const footer = document.querySelector('footer') as HTMLElement | null
    document.body.style.overflow = fullscreen ? 'hidden' : ''
    if (header) header.style.display = fullscreen ? 'none' : ''
    if (footer) footer.style.display = fullscreen ? 'none' : ''
    return () => {
      document.body.style.overflow = ''
      if (header) header.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [fullscreen])

  return <PageShell locale={locale}><div className="map-detail-view"><section className="detail-header-section"><div className="container"><div className="breadcrumb"><Link href={localizePath(locale, '/vein-map')} className="breadcrumb-link"><BreadcrumbHomeIcon />{t('mapDetailPage.breadcrumb.map', 'Map')}</Link><BreadcrumbArrow /><span className="breadcrumb-current">{t('mapDetailPage.breadcrumb.interactive', 'Interactive Map')}</span></div><div className="map-detail-content"><div className="map-detail-text"><h1 className="map-title">{t('mapDetailPage.header.title', 'VEIN Interactive Map')}</h1><p className="map-description">{t('mapDetailPage.header.description')}</p></div></div></div></section><section className="map-content"><div className="container"><h2 className="section-title">{t('mapDetailPage.content.title')}</h2><div className="map-container"><div className={`map-iframe-wrapper${fullscreen ? ' web-fullscreen' : ''}`}><button type="button" className="fullscreen-btn" onClick={() => setFullscreen((value) => !value)} aria-label="Toggle Web Fullscreen"><FullscreenIcon expanded={fullscreen} /></button><iframe src="https://maps-nu-steel.vercel.app/map_list/VEIN-map.html" className="map-iframe" title={t('mapDetailPage.header.title')} allowFullScreen loading="lazy" /></div>{fullscreen && <div className="web-fullscreen-overlay" onClick={() => setFullscreen(false)} />}<div className="map-info"><article className="info-card"><h3>{t('mapDetailPage.content.features.title')}</h3><ul>{['zoom', 'pan', 'tooltips', 'images'].map((feature) => <li key={feature}><strong>{t(`mapDetailPage.content.features.${feature}`)}</strong> {t(`mapDetailPage.content.features.${feature}Value`)}</li>)}</ul></article><article className="info-card"><h3>{t('mapDetailPage.content.navigation.title')}</h3><ul>{['tip1', 'tip2', 'tip3', 'tip4'].map((tip) => <li key={tip}>{t(`mapDetailPage.content.navigation.${tip}`)}</li>)}</ul></article></div></div></div></section></div></PageShell>
}
