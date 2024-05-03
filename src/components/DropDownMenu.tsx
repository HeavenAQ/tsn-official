import React, { useEffect } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import { Lang } from '../types'
import { navContent } from '../data/navbar'
import { useLocation } from 'react-router-dom'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const DropDownMenu: React.FC<Props> = ({ lang, setLang }) => {
    const location = useLocation()
    useEffect(() => {
        if (location.hash) {
            document
                .getElementById(location.hash.slice(1))
                ?.scrollIntoView({ behavior: 'smooth' })
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
    }, [location])

    return (
        <div className="z-20 dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="m-1 btn">
                <FiAlignLeft className="text-xl" />
            </div>
            <ul
                tabIndex={0}
                className="z-50 p-2 w-52 shadow dropdown-content menu bg-base-100 rounded-box"
            >
                {navContent.map(({ chn, jp, link }, i) => (
                    <li key={i}>
                        <a href={`/${link}`}>{lang === Lang.CN ? chn : jp}</a>
                    </li>
                ))}
                <li>
                    {lang === Lang.CN ? (
                        <a onClick={() => setLang(Lang.JP)}>日本語</a>
                    ) : (
                        <a onClick={() => setLang(Lang.CN)}>中文</a>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default DropDownMenu
