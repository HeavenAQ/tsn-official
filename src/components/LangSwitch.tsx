import React from 'react'
import { Lang } from '../types'
interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const LangSwitch: React.FC<Props> = ({ lang, setLang }) => {
    return (
        <label className="swap">
            <input
                type="checkbox"
                className="w-8 h-8 text-gray-700 bg-gray-100 rounded-md transition-all duration-100 hover:bg-gray-300"
                onClick={() => setLang(lang === Lang.CN ? Lang.JP : Lang.CN)}
            />
            <div className="flex justify-center items-center w-full h-full font-bold text-center swap-on">
                中
            </div>
            <div className="flex justify-center items-center w-full h-full font-bold text-center swap-off">
                日
            </div>
        </label>
    )
}

export default LangSwitch
