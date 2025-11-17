import React from 'react'
import { Lang } from '../types'
import { content, t } from '../data/siteContent'

interface Props { lang: Lang }

const CompanyTable: React.FC<Props> = ({ lang }) => {
  return (
    <section id="company" className="py-16 bg-zinc-50 dark:bg-zinc-950 animate-fade-up">
      <div className="mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {t(content.company.title, lang)}
        </h2>
        <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          {content.company.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 p-4 md:p-5">
              <div className="col-span-1 font-medium text-zinc-700 dark:text-zinc-200">
                {t(row.label, lang)}
              </div>
              <div className="col-span-2 text-zinc-800 dark:text-zinc-300 break-words">
                {t(row.value, lang)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyTable
