import type { MetadataRoute } from 'next'
import { getGuides, getWiki, itemCategories } from '@/lib/data/content'
import { localizePath } from '@/lib/locale'
import { siteConfig } from '@/config/site'
import type { Locale } from '@/types/content'

const staticPaths = ['/', '/vein-guides', '/vein-wiki', '/vein-items', ...itemCategories.map((category) => `/vein-items/${category}`), '/vein-map', '/vein-map-detail', '/privacy-policy', '/terms-of-service', '/copyright', '/about-us', '/contact-us']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  for (const locale of ['en', 'de'] as Locale[]) {
    for (const pathname of staticPaths) {
      const localizedPath = locale === 'de' && pathname === '/' ? '/de/' : localizePath(locale, pathname)
      entries.push({ url: new URL(localizedPath, siteConfig.domain).toString(), lastModified: new Date('2026-08-06'), changeFrequency: 'weekly', priority: pathname === '/' ? 1 : 0.7 })
    }
    for (const guide of getGuides(locale)) entries.push({ url: new URL(localizePath(locale, `/vein-guides${guide.addressBar}`), siteConfig.domain).toString(), lastModified: guide.publishDate ? new Date(guide.publishDate) : undefined, changeFrequency: 'monthly', priority: 0.8 })
    for (const wiki of getWiki(locale)) entries.push({ url: new URL(localizePath(locale, `/vein-wiki${wiki.addressBar}`), siteConfig.domain).toString(), lastModified: wiki.publishDate ? new Date(wiki.publishDate) : undefined, changeFrequency: 'monthly', priority: 0.7 })
  }
  return entries
}
