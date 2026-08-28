import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <PageShell locale="en"><section className="not-found-section"><div className="container"><div className="not-found"><p className="not-found-code">404</p><h1>Page Not Found</h1><p>The page you&apos;re looking for has moved or no longer exists.</p><Link href="/" className="btn-hero btn-secondary">Back to Home</Link></div></div></section></PageShell>
}
