import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'
import { getWiki } from '@/lib/data/content'
import { localizePath } from '@/lib/locale'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

export function WikiPage({ locale }: { locale: Locale }) {
  const entries = getWiki(locale)
  const t = (key: string) => translate(locale, key)
  const features = [['📖', 'knowledge'], ['🎮', 'mechanics'], ['⚔️', 'skills'], ['🏗️', 'building'], ['🚗', 'vehicles'], ['🍳', 'recipes']] as const
  const faqItems = ['information', 'controls', 'skills', 'recipes', 'building', 'updated']
  return <PageShell locale={locale}><div className="wiki-view"><section className="page-header"><div className="container"><div className="page-header-content"><h1 className="page-title">{t('wikiPage.header.title')}</h1><p className="page-subtitle">{t('wikiPage.header.subtitle')}</p></div></div></section><section className="articles-section"><div className="container"><h2 className="section-title">{t('wikiPage.allArticles')}</h2><p className="section-note">{t('wikiPage.sectionNote')}</p><div className="articles-grid">{entries.map((entry) => <Link className="article-card" key={entry.id} href={localizePath(locale, `/vein-wiki${entry.addressBar}`)}><div className="card-image-container">{entry.imageUrl && <img src={entry.imageUrl} alt={entry.imageAlt || entry.title} className="card-image" loading="lazy" />}</div><h3 className="card-title">{entry.title}</h3></Link>)}</div></div></section><section className="why-choose-us-section"><div className="container"><h2 className="section-title">{t('wikiPage.whyChoose.title')}</h2><p className="section-subtitle">{t('wikiPage.whyChoose.subtitle')}</p><div className="features-grid">{features.map(([icon, key]) => <article className="feature-card" key={key}><span className="feature-icon">{icon}</span><h3>{t(`wikiPage.whyChoose.features.${key}.title`)}</h3><p>{t(`wikiPage.whyChoose.features.${key}.content`)} {key !== 'recipes' && <Link href={localizePath(locale, `/vein-wiki/${key === 'knowledge' || key === 'mechanics' ? 'mechanics' : key}`)} className="inline-link">{t(`wikiPage.whyChoose.features.${key}.link`)}</Link>} {key !== 'recipes' && t(`wikiPage.whyChoose.features.${key}.content2`)}</p></article>)}</div></div></section><section className="faq-section"><div className="container"><h2 className="section-title">{t('wikiPage.faq.title')}</h2><div className="faq-grid">{faqItems.map((item) => <article className="faq-item" key={item}><h3>{t(`wikiPage.faq.items.${item}.question`)}</h3><p>{t(`wikiPage.faq.items.${item}.answer1`)}</p><p>{t(`wikiPage.faq.items.${item}.answer2`)}</p></article>)}</div></div></section></div></PageShell>
}
