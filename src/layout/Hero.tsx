import React from 'react'
import HeroImg from '../images/website/和歌山/LINE_ALBUM_829和歌山_231003_1.jpg'
import Logo from '../images/website/logo.png'
import { Lang } from '../types'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

export default function Hero({ lang, setLang }: Props): JSX.Element {
    const chnNavContent = ['公司概要', '公司理念', '服務', '聯絡我們']
    const jpnNavContent = ['会社概要', '会社理念', 'サービス', 'お問い合わせ']
    const navLink = [
        'company_info',
        'company_philosophy',
        'services',
        'contact_us'
    ]
    const navContent = lang === Lang.JP ? jpnNavContent : chnNavContent

    return (
        <div className="flex overflow-hidden relative items-baseline w-full h-auto bg-black max-h-[800px]">
            <img
                className="w-full h-full opacity-50"
                src={HeroImg}
                alt="Hero"
            />
            <div className="flex absolute flex-col items-center space-y-2 w-full h-full">
                <a className="cursor-pointer" href="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-44 xl:h-44 lg-w:32"
                    />
                </a>
                <div className="inline-flex justify-evenly items-center w-96">
                    {navContent.map((item, i) => (
                        <a
                            key={i}
                            className="transition-all duration-100 cursor-pointer hover:border-b-2 text-[#D4D6D6] hover:border-slate-300 hover:text-slate-300"
                            href={`#${navLink[i]}`}
                        >
                            {item}
                        </a>
                    ))}
                    <label className="swap">
                        <input
                            type="checkbox"
                            className="transition-all duration-100 hover:border-b-2 hover:border-slate-300 hover:text-slate-300"
                            onClick={() =>
                                setLang(lang === Lang.CN ? Lang.JP : Lang.CN)
                            }
                        />
                        <div className="swap-on text-[#D4D6D6]">中</div>
                        <div className="swap-off text-[#D4D6D6]">日</div>
                    </label>
                </div>
            </div>
        </div>
    )
}
