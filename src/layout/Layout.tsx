import React from 'react'
import Hero from '../components/Hero'
import { Lang } from '../types'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

export default function Layout({ lang, setLang }: Props) {
    return (
        <div className="w-full h-full font-noto-serif animate-fade-down">
            <Hero lang={lang} setLang={setLang} />
        </div>
    )
}
