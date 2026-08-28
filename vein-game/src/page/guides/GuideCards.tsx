import Link from 'next/link'
import { localizePath } from '@/lib/locale'
import type { ContentEntry, Locale } from '@/types/content'

export function GuideCards({ guides, locale, showCategory = true, viewLink = 'Read Guide' }: { guides: ContentEntry[]; locale: Locale; showCategory?: boolean; viewLink?: string }) {
  const formatDate = (date?: string) => date ? `Updated ${new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` : ''
  return <div className="guides-grid">{guides.map((guide) => <Link key={guide.id} href={localizePath(locale, `/vein-guides${guide.addressBar}`)} className="guide-card"><div className="guide-image-container">{guide.imageUrl && <img src={guide.imageUrl} alt={guide.imageAlt || guide.title} className="guide-image" loading="lazy" />}</div><div className="guide-card-content">{showCategory && guide.category && <span className="category-tag">{guide.category}</span>}<h3 className="guide-title">{guide.title}</h3>{guide.description && <p className="guide-description">{guide.description}</p>}{guide.tags && <div className="guide-tags">{guide.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>}<div className="guide-footer"><span className="update-date">{formatDate(guide.publishDate)}</span><span className="view-link">{viewLink}</span></div></div></Link>)}</div>
}
