import legalPages from '@/data/legal/en.json'
import { MarkdownArticle } from '@/components/content/MarkdownArticle'
import { PageShell } from '@/components/layout/PageShell'
import type { Locale } from '@/types/content'

export type LegalSlug = keyof typeof legalPages

export function isLegalSlug(value: string): value is LegalSlug {
  return value in legalPages
}

export function LegalPage({ locale, slug }: { locale: Locale; slug: LegalSlug }) {
  const page = legalPages[slug]
  const body = page.body.replace('{{ currentYear }}', String(new Date().getFullYear()))
  return <PageShell locale={locale}><div className="legal-page"><section className="legal-header"><div className="container"><h1 className="page-title">{page.title}</h1><p className="page-date">Last Updated: January 2026</p></div></section><section className="legal-content"><div className="container"><div className="content-wrapper"><MarkdownArticle markdown={body} /></div></div></section></div></PageShell>
}
