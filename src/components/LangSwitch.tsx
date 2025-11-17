import React from 'react'
import { Lang } from '../types'

interface Props {
  lang: Lang
  setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const LangSwitch: React.FC<Props> = ({ lang, setLang }) => {
  const isCN = lang === Lang.CN
  const next = isCN ? Lang.JP : Lang.CN
  const aria = isCN ? 'Switch to Japanese' : '中文に切り替え'

  return (
    <button
      type="button"
      aria-label={aria}
      title={isCN ? 'JP' : 'CN'}
      onClick={() => setLang(next)}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-600 transition-colors"
    >
      <span key={lang} className="animate-fade text-sm font-semibold">
        {isCN ? '中' : '日'}
      </span>
    </button>
  )
}

export default LangSwitch
