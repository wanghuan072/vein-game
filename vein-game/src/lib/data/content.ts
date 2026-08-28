import guidesEn from '@/data/guide/en.json'
import guidesDe from '@/data/guide/de.json'
import wikiEn from '@/data/wiki/en.json'
import wikiDe from '@/data/wiki/de.json'
import ammoEn from '@/data/items/ammo/en.json'
import ammoDe from '@/data/items/ammo/de.json'
import armorEn from '@/data/items/armor/en.json'
import armorDe from '@/data/items/armor/de.json'
import clothingEn from '@/data/items/clothing/en.json'
import clothingDe from '@/data/items/clothing/de.json'
import consumablesEn from '@/data/items/consumables/en.json'
import consumablesDe from '@/data/items/consumables/de.json'
import materialsEn from '@/data/items/materials/en.json'
import materialsDe from '@/data/items/materials/de.json'
import medicalEn from '@/data/items/medical/en.json'
import medicalDe from '@/data/items/medical/de.json'
import miscEn from '@/data/items/misc/en.json'
import miscDe from '@/data/items/misc/de.json'
import specialEn from '@/data/items/special/en.json'
import specialDe from '@/data/items/special/de.json'
import toolsEn from '@/data/items/tools/en.json'
import toolsDe from '@/data/items/tools/de.json'
import weaponsEn from '@/data/items/weapons/en.json'
import weaponsDe from '@/data/items/weapons/de.json'
import type { ContentEntry, ItemEntry, Locale } from '@/types/content'

export const itemCategories = ['weapons', 'armor', 'clothing', 'consumables', 'special', 'materials', 'ammo', 'medical', 'tools', 'misc'] as const
export type ItemCategory = (typeof itemCategories)[number]

const guides = { en: guidesEn, de: guidesDe } as unknown as Record<Locale, ContentEntry[]>
const wiki = { en: wikiEn, de: wikiDe } as unknown as Record<Locale, ContentEntry[]>
const items: Record<ItemCategory, Record<Locale, ItemEntry[]>> = {
  weapons: { en: weaponsEn, de: weaponsDe },
  armor: { en: armorEn, de: armorDe },
  clothing: { en: clothingEn, de: clothingDe },
  consumables: { en: consumablesEn, de: consumablesDe },
  special: { en: specialEn, de: specialDe },
  materials: { en: materialsEn, de: materialsDe },
  ammo: { en: ammoEn, de: ammoDe },
  medical: { en: medicalEn, de: medicalDe },
  tools: { en: toolsEn, de: toolsDe },
  misc: { en: miscEn, de: miscDe },
}

export function getGuides(locale: Locale): ContentEntry[] {
  return guides[locale]
}

export function getGuide(locale: Locale, slug: string): ContentEntry | undefined {
  return getGuides(locale).find((guide) => guide.addressBar.replace(/^\//, '') === slug)
}

export function getWiki(locale: Locale): ContentEntry[] {
  return wiki[locale]
}

export function getWikiEntry(locale: Locale, slug: string): ContentEntry | undefined {
  return getWiki(locale).find((entry) => entry.addressBar.replace(/^\//, '') === slug)
}

export function getItems(locale: Locale, category: ItemCategory): ItemEntry[] {
  return items[category][locale]
}

export function getItem(locale: Locale, category: ItemCategory, slug: string): ItemEntry | undefined {
  return getItems(locale, category).find((item) => item.addressBar.replace(/^\//, '') === slug)
}

export function getSearchEntries(locale: Locale) {
  return [
    ...getGuides(locale).map((entry) => ({ ...entry, contentType: 'guide' as const })),
    ...getWiki(locale).map((entry) => ({ ...entry, contentType: 'wiki' as const })),
    ...itemCategories.flatMap((category) => getItems(locale, category).map((entry) => ({ ...entry, category, contentType: 'item' as const }))),
  ]
}
