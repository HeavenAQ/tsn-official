import React from 'react'
import { Lang } from '../types'
import LangSwitch from './LangSwitch'
import ThemeSwitch from './ThemeSwitch'
import { content, t } from '../data/siteContent'

interface Props {
  lang: Lang
  setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const Header: React.FC<Props> = ({ lang, setLang }) => {
  const items = [
    { href: '#services', label: t(content.nav.services, lang) },
    { href: '#why', label: t(content.nav.why, lang) },
    { href: '#company', label: t(content.nav.company, lang) },
    { href: '#contact', label: t(content.nav.contact, lang) },
  ]

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b dark:bg-zinc-950/60 dark:border-zinc-800">
      <div className="flex items-center justify-between mx-auto px-4 py-3 max-w-6xl">
        <a href="/" className="flex items-center gap-3">
          <img src="/images/logo.webp" alt="tsn" className="w-10 h-10" />
          <span className="sr-only">tsn</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white">
              {it.label}
            </a>
          ))}
          <ThemeSwitch />
          <LangSwitch lang={lang} setLang={setLang} />
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <ThemeSwitch />
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  )
}

export default Header
