import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { localizePath } from '@/lib/locale'
import type { ContentEntry, Locale } from '@/types/content'

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, siteConfig.domain).toString()
}

export function buildMetadata(locale: Locale, pathname: string, seo?: ContentEntry['seo'], fallback?: Partial<ContentEntry>): Metadata {
  const title = seo?.title || fallback?.title || siteConfig.name
  const description = seo?.description || fallback?.description || siteConfig.description
  const image = fallback?.imageUrl || siteConfig.defaultImage
  const canonical = absoluteUrl(localizePath(locale, pathname))

  return {
    // Page titles in the legacy site are complete TDK values (many already
    // include the domain), so they must not inherit the layout title template.
    title: { absolute: title },
    description,
    keywords: seo?.keywords,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(localizePath('en', pathname)),
        de: absoluteUrl(localizePath('de', pathname)),
      },
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      images: [{ url: absoluteUrl(image) }],
      publishedTime: fallback?.publishDate,
      modifiedTime: fallback?.publishDate,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  }
}
