import Link from 'next/link'
import { MarkdownArticle } from '@/components/content/MarkdownArticle'
import { PageShell } from '@/components/layout/PageShell'
import { ArticleJsonLd } from '@/components/seo/JsonLd'
import { getWiki, getWikiEntry } from '@/lib/data/content'
import { localizePath } from '@/lib/locale'
import { translate } from '@/lib/translations'
import { absoluteUrl } from '@/seo/metadata'
import type { Locale } from '@/types/content'

function dateLabel(date?: string) { return date ? `Updated ${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : '' }
function ClockIcon() { return <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg> }

export function WikiDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const entry = getWikiEntry(locale, slug)
  if (!entry) return <PageShell locale={locale}><section className="wiki-content"><div className="container"><div className="not-found"><h1>{translate(locale, 'wikiDetailPage.notFound.title')}</h1><p>{translate(locale, 'wikiDetailPage.notFound.description')}</p><Link href={localizePath(locale, '/vein-wiki')} className="btn-hero btn-secondary">{translate(locale, 'wikiDetailPage.notFound.back')}</Link></div></div></section></PageShell>
  const otherEntries = getWiki(locale).filter((item) => item.id !== entry.id)
  return <PageShell locale={locale}><ArticleJsonLd entry={entry} url={absoluteUrl(localizePath(locale, `/vein-wiki/${slug}`))} /><div className="wiki-detail-view"><section className="wiki-detail-header"><div className="container"><div className="breadcrumb"><Link href={localizePath(locale, '/vein-wiki')} className="breadcrumb-link">{translate(locale, 'wikiDetailPage.breadcrumb.wiki')}</Link><span className="breadcrumb-current">{entry.title}</span></div><div className="wiki-detail-content"><div className="wiki-detail-text"><h1 className="wiki-title">{entry.title}</h1><div className="wiki-detail-meta"><div className="meta-item"><ClockIcon /><span className="meta-text">{dateLabel(entry.publishDate)}</span></div></div></div></div></div></section><section className="wiki-content"><div className="container"><div className="content-layout"><div className="left-content"><div className="detail-article"><MarkdownArticle markdown={entry.body || ''} /></div></div><aside className="right-sidebar"><div className="wiki-info-box"><div className="info-box-header"><h2 className="info-box-title">{entry.title}</h2></div><div className="wiki-meta"><div className="meta-item"><ClockIcon /><span className="meta-text">{dateLabel(entry.publishDate)}</span></div></div></div>{otherEntries.length ? <div className="wiki-navigation"><h2 className="nav-title">{translate(locale, 'wikiDetailPage.navigation.title')}</h2><div className="nav-grid">{otherEntries.map((item) => <Link key={item.id} href={localizePath(locale, `/vein-wiki${item.addressBar}`)} className="nav-card"><div className="nav-card-title">{item.title}</div><div className="nav-card-meta"><span>{dateLabel(item.publishDate)}</span></div></Link>)}</div></div> : null}</aside></div></div></section></div></PageShell>
}
