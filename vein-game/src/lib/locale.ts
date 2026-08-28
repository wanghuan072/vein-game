import type { Locale } from '@/types/content'

export const locales: readonly Locale[] = ['en', 'de']

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localizePath(locale: Locale, pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
  return locale === 'en' ? normalized : `/de${normalized === '/' ? '' : normalized}`
}

export function alternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'de' : 'en'
}
