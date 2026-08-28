import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PageDispatcher, getRouteEntry, getStaticRouteParams, isKnownRoute, resolveLocalePath } from '@/page/PageDispatcher'
import { buildMetadata } from '@/seo/metadata'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

type PageProps = { params: Promise<{ path?: string[] }> }

// Site route entry: this is the Next.js equivalent of the Vue router.
// It serves the existing URLs from local JSON data and sends unknown URLs to 404.
export const dynamicParams = false

export function generateStaticParams() {
  return getStaticRouteParams()
}

function staticTdk(locale: Locale, segments: string[]) {
  const path = segments.join('/')
  const itemTdk: Record<string, string> = { weapons: 'itemsWeapons', armor: 'itemsArmor', clothing: 'itemsClothing', consumables: 'itemsConsumables', special: 'itemsSpecial', materials: 'itemsMaterials', ammo: 'itemsAmmo', medical: 'itemsMedical', tools: 'itemsTools', misc: 'itemsMisc' }
  const key = path === '' ? 'home' : path === 'vein-guides' ? 'guides' : path === 'vein-wiki' ? 'wiki' : path === 'vein-items' ? 'items' : segments[0] === 'vein-items' ? itemTdk[segments[1]] : path === 'vein-map' ? 'map' : path === 'vein-map-detail' ? 'mapDetail' : path === 'search' ? 'search' : path === 'privacy-policy' ? 'privacyPolicy' : path === 'terms-of-service' ? 'termsOfService' : path === 'about-us' ? 'aboutUs' : path === 'contact-us' ? 'contactUs' : path === 'copyright' ? 'copyright' : undefined
  if (!key) return undefined
  return { title: translate(locale, `tdk.${key}.title`), description: translate(locale, `tdk.${key}.description`), keywords: translate(locale, `tdk.${key}.keywords`) }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = resolveLocalePath((await params).path)
  if (!isKnownRoute(resolved.locale, resolved.segments)) return { title: 'Page Not Found', robots: { index: false, follow: false } }
  const pathname = `/${resolved.segments.join('/')}`.replace(/\/$/, '') || '/'
  const entry = getRouteEntry(resolved.locale, resolved.segments)
  return buildMetadata(resolved.locale, pathname, entry?.seo || staticTdk(resolved.locale, resolved.segments), entry)
}

export default async function RoutePage({ params }: PageProps) {
  const resolved = resolveLocalePath((await params).path)
  if (!isKnownRoute(resolved.locale, resolved.segments)) notFound()
  return <PageDispatcher {...resolved} />
}
