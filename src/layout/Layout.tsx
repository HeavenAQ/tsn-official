import React from 'react'
import { Lang } from '../types'
import DropDownMenu from '../components/DropDownMenu'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
    children: React.ReactNode
}

export default function Layout({ lang, setLang, children }: Props) {
    const [loaded, setLoaded] = React.useState<boolean>(false)
    return (
        <div className="overflow-x-hidden w-full h-full font-noto-serif animate-fade-down">
            <div className="flex relative items-baseline w-full h-96 bg-black text-md">
                <a href="/">
                    <img
                        src="/logo.png"
                        className="absolute top-1/2 left-1/2 h-28 -translate-x-1/2 -translate-y-1/2"
                    />
                </a>
                <img
                    className={`object-cover w-full h-full ${
                        loaded ? 'opacity-50' : 'opacity-0'
                    }`}
                    src="/images/和歌山/LINE_ALBUM_829和歌山_231003_1.webp"
                    alt="Hero"
                    loading="lazy"
                    onLoad={_ => setLoaded(true)}
                />
                <img
                    className={`absolute left-0 top-0 object-cover w-full h-full ${
                        loaded
                            ? 'opacity-0 transition-opacity ease-in-out duration-300'
                            : 'opacity-100'
                    }`}
                    src="/images/和歌山/LINE_ALBUM_829和歌山_231003_1_small.webp"
                    alt="Hero"
                />
            </div>
            <div className="my-3 mx-auto ml-4 w-full h-16">
                <DropDownMenu lang={lang} setLang={setLang} />
            </div>
            {children}
        </div>
    )
}
