import en from '@/data/locales/en.json'
import de from '@/data/locales/de.json'
import type { Locale } from '@/types/content'

const messages = { en, de } as const

export function translate(locale: Locale, key: string, fallback = key): string {
  const value = key.split('.').reduce<unknown>((current, segment) => {
    if (!current || typeof current !== 'object') return undefined
    return (current as Record<string, unknown>)[segment]
  }, messages[locale])

  return typeof value === 'string' ? value : fallback
}

export function translationObject<T>(locale: Locale, key: string): T | undefined {
  const value = key.split('.').reduce<unknown>((current, segment) => {
    if (!current || typeof current !== 'object') return undefined
    return (current as Record<string, unknown>)[segment]
  }, messages[locale])
  return value as T | undefined
}
