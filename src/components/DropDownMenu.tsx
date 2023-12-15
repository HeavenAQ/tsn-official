import React from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import { Lang } from '../types'
import { navContent } from '../info'

interface Props {
    lang: Lang
}

const DropDownMenu: React.FC<Props> = ({ lang }) => {
    return (
        <div className="z-10 dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="m-1 btn">
                <FiAlignLeft className="text-xl" />
            </div>
            <ul
                tabIndex={0}
                className="z-50 p-2 w-52 shadow dropdown-content menu bg-base-100 rounded-box"
            >
                {navContent.map(({ chn, jp, link }, i) => (
                    <li key={i}>
                        <a href={`#${link}`}>{lang === Lang.CN ? chn : jp}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DropDownMenu
