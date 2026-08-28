import type { ReactNode } from 'react'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/navigation/SiteHeader'
import type { Locale } from '@/types/content'

export function PageShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <div className="app"><SiteHeader locale={locale} /><main className="main-content">{children}</main><SiteFooter locale={locale} /></div>
}
