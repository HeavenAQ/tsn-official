import React from 'react'
import { Lang } from '../types'
import { content, t } from '../data/siteContent'

interface Props {
  lang: Lang
}

const HeroV2: React.FC<Props> = ({ lang }) => {
  return (
    <section className="relative w-full h-[88vh] min-h-[540px] bg-black text-white">
      <img
        src="/images/和歌山/LINE_ALBUM_829和歌山_231003_1.webp"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative mx-auto px-6 h-full max-w-6xl flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {t(content.hero.title, lang)}
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-200">
            {t(content.hero.subtitle, lang)}
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/80 text-white font-medium hover:bg-white hover:text-black transition-colors"
            >
              {t(content.hero.cta, lang)}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroV2
