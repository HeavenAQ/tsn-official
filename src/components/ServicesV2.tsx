import React from 'react'
import { Lang } from '../types'
import { content, t } from '../data/siteContent'
import { BsCalendar2Event } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { BsHouseDoorFill } from 'react-icons/bs'
import { PiTranslateBold } from 'react-icons/pi'

interface Props { lang: Lang }

const icons = [
  <BsCalendar2Event className="w-6 h-6" />, // event
  <FaPaintBrush className="w-6 h-6" />,     // brand
  <BsHouseDoorFill className="w-6 h-6" />,   // trade (repurpose)
  <PiTranslateBold className="w-6 h-6" />,  // interpret
]

const ServicesV2: React.FC<Props> = ({ lang }) => {
  const items = content.services.items
  return (
    <section id="services" className="py-16 bg-zinc-50 dark:bg-zinc-950 animate-fade-up">
      <div className="mx-auto px-6 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {t(content.services.title, lang)}
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <div key={it.key} className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
                <span className="text-zinc-600">{icons[idx]}</span>
                <h3 className="text-lg font-medium">{t(it.label, lang)}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                {t(it.desc, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesV2
