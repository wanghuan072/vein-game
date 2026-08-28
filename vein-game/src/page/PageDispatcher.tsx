import { GuideDetailPage } from '@/page/guides/GuideDetailPage'
import { GuidesPage } from '@/page/guides/GuidesPage'
import { HomePage } from '@/page/home/HomePage'
import { ItemsCategoryPage } from '@/page/items/ItemsCategoryPage'
import { ItemsPage } from '@/page/items/ItemsPage'
import { isLegalSlug, LegalPage } from '@/page/legal/LegalPage'
import { MapDetailPage } from '@/page/map/MapDetailPage'
import { MapPage } from '@/page/map/MapPage'
import { SearchPage } from '@/page/search/SearchPage'
import { WikiDetailPage } from '@/page/wiki/WikiDetailPage'
import { WikiPage } from '@/page/wiki/WikiPage'
import { getGuide, getGuides, getWiki, getWikiEntry, itemCategories, type ItemCategory } from '@/lib/data/content'
import type { Locale } from '@/types/content'

type ResolvedRoute = { locale: Locale; segments: string[] }

const staticPaths = [
  [], ['vein-guides'], ['vein-wiki'], ['vein-items'], ...itemCategories.map((category) => ['vein-items', category]), ['vein-map'], ['vein-map-detail'], ['privacy-policy'], ['terms-of-service'], ['copyright'], ['about-us'], ['contact-us'], ['search'],
]

export function resolveLocalePath(path: string[] | undefined): ResolvedRoute {
  const segments = path || []
  return segments[0] === 'de' ? { locale: 'de', segments: segments.slice(1) } : { locale: 'en', segments }
}

export function getStaticRouteParams() {
  const paths = [
    ...staticPaths,
    ['de'],
    ...getGuides('en').map((entry) => ['vein-guides', entry.addressBar.replace(/^\//, '')]),
    ...getGuides('de').map((entry) => ['de', 'vein-guides', entry.addressBar.replace(/^\//, '')]),
    ...getWiki('en').map((entry) => ['vein-wiki', entry.addressBar.replace(/^\//, '')]),
    ...getWiki('de').map((entry) => ['de', 'vein-wiki', entry.addressBar.replace(/^\//, '')]),
    ...staticPaths.filter((path) => path.length > 0).map((path) => ['de', ...path]),
  ]
  return paths.map((path) => ({ path }))
}

export function getRouteEntry(locale: Locale, segments: string[]) {
  if (segments[0] === 'vein-guides' && segments[1]) return getGuide(locale, segments[1])
  if (segments[0] === 'vein-wiki' && segments[1]) return getWikiEntry(locale, segments[1])
  return undefined
}

export function isKnownRoute(locale: Locale, segments: string[]) {
  if (staticPaths.some((path) => path.length === segments.length && path.every((segment, index) => segment === segments[index]))) return true
  if (segments.length === 2 && segments[0] === 'vein-guides') return Boolean(getGuide(locale, segments[1]))
  if (segments.length === 2 && segments[0] === 'vein-wiki') return Boolean(getWikiEntry(locale, segments[1]))
  return false
}

export function PageDispatcher({ locale, segments }: ResolvedRoute) {
  if (segments.length === 0) return <HomePage locale={locale} />
  if (segments.length === 1 && segments[0] === 'vein-guides') return <GuidesPage locale={locale} />
  if (segments[0] === 'vein-guides' && segments.length === 2) return <GuideDetailPage locale={locale} slug={segments[1]} />
  if (segments.length === 1 && segments[0] === 'vein-wiki') return <WikiPage locale={locale} />
  if (segments[0] === 'vein-wiki' && segments.length === 2) return <WikiDetailPage locale={locale} slug={segments[1]} />
  if (segments.length === 1 && segments[0] === 'vein-items') return <ItemsPage locale={locale} />
  if (segments[0] === 'vein-items' && segments.length === 2 && itemCategories.includes(segments[1] as ItemCategory)) return <ItemsCategoryPage locale={locale} category={segments[1] as ItemCategory} />
  if (segments.length === 1 && segments[0] === 'vein-map') return <MapPage locale={locale} />
  if (segments.length === 1 && segments[0] === 'vein-map-detail') return <MapDetailPage locale={locale} />
  if (segments.length === 1 && segments[0] === 'search') return <SearchPage locale={locale} />
  if (segments.length === 1 && isLegalSlug(segments[0])) return <LegalPage locale={locale} slug={segments[0]} />
  return null
}
