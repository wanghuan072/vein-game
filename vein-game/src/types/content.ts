export type Locale = 'en' | 'de'

export type SeoFields = {
  title?: string
  description?: string
  keywords?: string
}

export type ContentEntry = {
  id: number | string
  title: string
  description?: string
  addressBar: string
  imageUrl?: string
  imageAlt?: string
  publishDate?: string
  category?: string
  tags?: string[]
  body?: string
  seo?: SeoFields
  [key: string]: unknown
}

export type ItemEntry = ContentEntry & {
  type?: string
  showDetail?: boolean
}
