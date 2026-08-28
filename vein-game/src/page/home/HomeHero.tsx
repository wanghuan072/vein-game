'use client'

import { useState } from 'react'
import Link from 'next/link'
import { localizePath } from '@/lib/locale'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

export function HomeHero({ locale }: { locale: Locale }) {
  const [videoPlaying, setVideoPlaying] = useState(false)
  return <section className="hero hero-background"><div className="container"><div className="hero-content"><div className="hero-text"><p className="badge">{translate(locale, 'homePage.hero.badge')}</p><h1 className="hero-title">{translate(locale, 'homePage.hero.title')}</h1><p className="hero-subtitle">{translate(locale, 'homePage.hero.subtitle')}</p><div className="hero-actions"><Link href={localizePath(locale, '/vein-map')} className="btn-hero btn-steam"><span>{translate(locale, 'homePage.hero.button1')}</span></Link><Link href={localizePath(locale, '/vein-guides')} className="btn-hero btn-secondary">{translate(locale, 'homePage.hero.button2')}</Link></div><div className="hero-stats">{(['releaseDate', 'genre', 'platform'] as const).map((key) => <div className="stat" key={key}><p className="label">{translate(locale, `homePage.hero.stats.${key}`)}</p><p className="value">{translate(locale, `homePage.hero.stats.${key}Value`)}</p></div>)}</div></div><div className="hero-video"><div className="video-player">{videoPlaying ? <div className="video-iframe"><iframe src="https://www.youtube.com/embed/qjLDbxB-Xt4" title="VEIN World Briefing" allowFullScreen className="video-frame" /><button type="button" className="close-video" onClick={() => setVideoPlaying(false)} aria-label="Close video">×</button></div> : <div className="video-thumbnail"><div className="video-mask"><span>{translate(locale, 'homePage.hero.video.title')}</span></div><button type="button" className="play-button" onClick={() => setVideoPlaying(true)} aria-label="Play VEIN video">▶</button></div>}<div className="video-info"><div className="video-header"><span>{translate(locale, 'homePage.hero.video.developer')}</span><span className="dot" /><span>{translate(locale, 'homePage.hero.video.briefing')}</span></div><p>{translate(locale, 'homePage.hero.video.description')}</p></div></div></div></div></div></section>
}
