import React from 'react'
import { Lang } from '../types'
import { content, t } from '../data/siteContent'

interface Props { lang: Lang }

const Why: React.FC<Props> = ({ lang }) => {
  return (
    <section id="why" className="py-16 animate-fade-up">
      <div className="mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {t(content.why.title, lang)}
        </h2>
        <ul className="mt-8 space-y-4 max-w-3xl mx-auto text-zinc-700 dark:text-zinc-300">
          {content.why.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-zinc-800 dark:bg-zinc-300" />
              <span>{t(b, lang)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Why
