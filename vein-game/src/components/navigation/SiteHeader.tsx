'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { primaryNavigation } from '@/config/navigation'
import { localizePath } from '@/lib/locale'
import { translate } from '@/lib/translations'
import type { Locale } from '@/types/content'

type SearchEntry = { id: number; title: string; description?: string; tags?: string[]; category?: string; addressBar: string; contentType: 'guide' | 'wiki' | 'item' }
const SearchIcon = () => <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
const LanguageArrow = ({ open }: { open: boolean }) => <svg className={`lang-arrow${open ? ' open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6,9 12,15 18,9" /></svg>

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<SearchEntry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const languageRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)
  const unprefixedPath = pathname.replace(/^\/de(?=\/|$)/, '') || '/'
  const closeMenu = () => { setMenuOpen(false); setLanguageOpen(false); setSearchOpen(false); setSuggestions([]) }
  const closeSearch = () => { setSearchOpen(false); setSuggestions([]) }
  const updateQuery = (value: string) => { setQuery(value); if (!value.trim()) setSuggestions([]) }

  useEffect(() => { if (searchOpen) inputRef.current?.focus() }, [searchOpen])
  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) setLanguageOpen(false)
      if (!searchRef.current?.contains(event.target as Node)) closeSearch()
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])
  useEffect(() => {
    const value = query.trim().toLocaleLowerCase()
    if (!value || !searchOpen) return
    const timeout = window.setTimeout(async () => {
      const response = await fetch(`/search-index-${locale}.json`)
      const entries: SearchEntry[] = await response.json()
      setSuggestions(entries.filter((entry) => [entry.title, entry.description, entry.tags?.join(' ')].filter(Boolean).join(' ').toLocaleLowerCase().includes(value)).slice(0, 5))
    }, 300)
    return () => window.clearTimeout(timeout)
  }, [locale, query, searchOpen])

  return <header className="site-header"><div className="container"><div className="header-content">
    <Link href={localizePath(locale, '/')} className="logo" onClick={closeMenu}><img className="logo-image" src="/images/logo.webp" alt="VEIN Logo" /><span className="logo-text">VEIN Game</span></Link>
    <nav className={`nav-links${menuOpen ? ' open' : ''}`}>{primaryNavigation.map((item) => <Link key={item.href} href={localizePath(locale, item.href)} onClick={closeMenu}>{translate(locale, item.labelKey)}</Link>)}</nav>
    <div className="header-end"><div className={`search-container${searchOpen ? ' open' : ''}`} ref={searchRef}><button type="button" className="search-toggle" onClick={() => { setSearchOpen((open) => !open); setLanguageOpen(false) }} aria-label={translate(locale, 'common.search.ariaLabel')} aria-expanded={searchOpen}><SearchIcon /></button><form action={localizePath(locale, '/search')} method="get" className="search-box" onSubmit={closeSearch}><input ref={inputRef} name="q" value={query} onChange={(event) => updateQuery(event.target.value)} placeholder={translate(locale, 'common.search.placeholder')} className="search-input" aria-label={translate(locale, 'common.search.ariaLabel')} /><button type="submit" className="search-button" aria-label={translate(locale, 'common.search.ariaLabel')}><SearchIcon /></button>{suggestions.length > 0 && <div className="search-suggestions">{suggestions.map((entry) => <a key={`${entry.contentType}-${entry.id}-${entry.addressBar}`} className="suggestion-item" href={localizePath(locale, entry.contentType === 'guide' ? `/vein-guides${entry.addressBar}` : entry.contentType === 'wiki' ? `/vein-wiki${entry.addressBar}` : `/vein-items/${entry.category || ''}`)} onClick={closeSearch}><span className="suggestion-type">{entry.contentType === 'guide' ? 'Guide' : entry.contentType === 'wiki' ? 'Wiki' : 'Item'}</span><span className="suggestion-title">{entry.title}</span></a>)}</div>}</form></div>
      <div className="language-switcher" ref={languageRef}><button className="lang-button" type="button" onClick={() => { setLanguageOpen((open) => !open); closeSearch() }} aria-label={translate(locale, 'common.languageSwitcher.label')} aria-expanded={languageOpen}><span className="lang-current">{locale.toUpperCase()}</span><LanguageArrow open={languageOpen} /></button>{languageOpen && <div className="lang-dropdown"><a className={`lang-option${locale === 'en' ? ' active' : ''}`} href={localizePath('en', unprefixedPath)} onClick={closeMenu}><span className="lang-code">EN</span></a><a className={`lang-option${locale === 'de' ? ' active' : ''}`} href={localizePath('de', unprefixedPath)} onClick={closeMenu}><span className="lang-code">DE</span></a></div>}</div><button className="menu-toggle" type="button" onClick={() => { setMenuOpen((open) => !open); setSuggestions([]); setLanguageOpen(false); setSearchOpen(false) }} aria-label="Toggle menu"><span className={`hamburger-line${menuOpen ? ' active' : ''}`} /><span className={`hamburger-line${menuOpen ? ' active' : ''}`} /><span className={`hamburger-line${menuOpen ? ' active' : ''}`} /></button></div><div className={`menu-overlay${menuOpen ? ' open' : ''}`} onClick={closeMenu} />
  </div></div></header>
}
