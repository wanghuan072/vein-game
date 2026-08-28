import { siteConfig } from '@/config/site'
import type { ContentEntry } from '@/types/content'

export function ArticleJsonLd({ entry, url }: { entry: ContentEntry; url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    description: entry.description,
    image: entry.imageUrl ? new URL(entry.imageUrl, siteConfig.domain).toString() : undefined,
    datePublished: entry.publishDate,
    dateModified: entry.publishDate,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: { '@type': 'ImageObject', url: new URL(siteConfig.defaultImage, siteConfig.domain).toString() },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
