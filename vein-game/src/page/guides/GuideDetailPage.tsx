import Link from 'next/link'
import { MarkdownArticle } from '@/components/content/MarkdownArticle'
import { PageShell } from '@/components/layout/PageShell'
import { ArticleJsonLd } from '@/components/seo/JsonLd'
import { getGuide, getGuides } from '@/lib/data/content'
import { localizePath } from '@/lib/locale'
import { translate } from '@/lib/translations'
import { absoluteUrl } from '@/seo/metadata'
import type { ContentEntry, Locale } from '@/types/content'

function dateLabel(date?: string) { return date ? new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '' }
function ClockIcon() { return <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg> }
function BreadcrumbHomeIcon() { return <svg className="breadcrumb-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg> }
function BreadcrumbArrow() { return <svg className="breadcrumb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="9,18 15,12 9,6" /></svg> }

function NavigationCard({ entry, direction, locale }: { entry: ContentEntry; direction: string; locale: Locale }) {
  return <Link href={localizePath(locale, `/vein-guides${entry.addressBar}`)} className="nav-card"><div className="nav-card-direction">{direction}</div><div className="nav-card-title">{entry.title}</div><div className="nav-card-meta"><span>{entry.category}</span><span>{dateLabel(entry.publishDate)}</span></div></Link>
}

export function GuideDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const guide = getGuide(locale, slug)
  if (!guide) return <PageShell locale={locale}><section className="guide-content"><div className="container"><div className="not-found"><h2>Guide Not Found</h2><p>The guide you&apos;re looking for doesn&apos;t exist.</p><Link href={localizePath(locale, '/vein-guides')} className="btn-hero btn-secondary">Back to Guides</Link></div></div></section></PageShell>
  const allGuides = getGuides(locale)
  const index = allGuides.findIndex((entry) => entry.id === guide.id)
  const previous = index > 0 ? allGuides[index - 1] : undefined
  const next = index >= 0 && index < allGuides.length - 1 ? allGuides[index + 1] : undefined
  const pathname = `/vein-guides/${slug}`
  const heading = typeof guide.h1 === 'string' ? guide.h1 : guide.title
  return <PageShell locale={locale}><ArticleJsonLd entry={guide} url={absoluteUrl(localizePath(locale, pathname))} /><div className="guide-detail-view"><section className="guide-detail-header"><div className="container"><div className="breadcrumb"><Link href={localizePath(locale, '/vein-guides')} className="breadcrumb-link"><BreadcrumbHomeIcon />{translate(locale, 'guideDetailPage.breadcrumb.guides')}</Link><BreadcrumbArrow /><span className="breadcrumb-current">{guide.title}</span></div><div className="guide-detail-content"><div className="guide-detail-text"><h1 className="guide-title">{heading}</h1><div className="guide-detail-meta"><div className="meta-item"><ClockIcon /><span className="meta-text">{dateLabel(guide.publishDate)}</span></div></div>{guide.tags?.length ? <div className="guide-tags">{guide.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div> : null}</div></div></div></section><section className="guide-content"><div className="container"><div className="content-layout"><div className="left-content"><div className="detail-article"><MarkdownArticle markdown={guide.body || ''} /></div></div><aside className="right-sidebar"><div className="guide-info-box"><div className="info-box-header"><h3 className="info-box-title">{guide.title}</h3></div><div className="guide-meta"><div className="meta-item"><ClockIcon /><span className="meta-text">{dateLabel(guide.publishDate)}</span></div></div>{guide.tags?.length ? <div className="guide-tags">{guide.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div> : null}</div>{(previous || next) && <div className="guide-navigation"><h4 className="nav-title">{translate(locale, 'guideDetailPage.navigation.title')}</h4><div className="nav-grid">{previous && <NavigationCard entry={previous} direction={translate(locale, 'guideDetailPage.navigation.previous')} locale={locale} />}{next && <NavigationCard entry={next} direction={translate(locale, 'guideDetailPage.navigation.next')} locale={locale} />}</div></div>}</aside></div></div></section></div></PageShell>
}
