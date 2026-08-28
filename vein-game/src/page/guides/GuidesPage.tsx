import { PageShell } from '@/components/layout/PageShell'
import { GuidesContent } from '@/page/guides/GuidesContent'
import { getGuides } from '@/lib/data/content'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

export function GuidesPage({ locale }: { locale: Locale }) {
  const guides = getGuides(locale)
  return <PageShell locale={locale}><div className="guides-view"><section className="page-header"><div className="container"><div className="page-header-content"><h1 className="page-title">{translate(locale, 'guidesPage.header.title')}</h1><p className="page-subtitle">{translate(locale, 'guidesPage.header.subtitle')}</p></div></div></section><section className="guide-categories"><div className="container"><GuidesContent guides={guides} locale={locale} /></div></section></div></PageShell>
}
