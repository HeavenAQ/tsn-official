import React from 'react'
import { Lang } from '../types'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { navContent } from '../info'
import LangSwitch from '../components/LangSwitch'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

interface NavProps extends Props {
    scrollYProgress: MotionValue<number>
}

function NavBar({ lang, setLang, scrollYProgress }: NavProps): JSX.Element {
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -800])
    return (
        <motion.div
            className="flex flex-row flex-wrap justify-evenly items-center p-2 space-x-4 h-28 w-[100vw] animate-fade-down"
            style={{ y }}
            id="nav"
        >
            {navContent.map(({ chn, jp, link }, i) => (
                <a
                    key={i}
                    className="transition-all duration-100 cursor-pointer hover:border-b-2 text-[#D4D6D6] hover:border-slate-300 hover:text-slate-300"
                    href={`#${link}`}
                >
                    {lang === Lang.CN ? chn : jp}
                </a>
            ))}
            <LangSwitch lang={lang} setLang={setLang} />
        </motion.div>
    )
}

export default function Hero({ lang, setLang }: Props): JSX.Element {
    const { scrollYProgress } = useScroll()
    const y = useTransform(scrollYProgress, [0, 0.2], [0, -800])
    const scale = useTransform(scrollYProgress, [0, 0.03], [0.3, 0.2])
    const sticky = useTransform(scrollYProgress, [0, 0.03], [0.5, 0.6])
    const [loaded, setLoaded] = React.useState<boolean>(false)

    return (
        <motion.div className="flex relative items-baseline bg-black text-md w-[100vw] h-[100vh]">
            <motion.img
                className={`absolute left-0 top-0 object-cover opacity-50 w-[100vw] h-[100vh] ${
                    loaded
                        ? 'opacity-0 transition-opacity ease-in-out duration-300'
                        : 'opacity-1'
                }`}
                src="/images/和歌山/LINE_ALBUM_829和歌山_231003_1_small.webp"
                alt="Hero"
                style={{ opacity: sticky }}
            />
            <motion.img
                className={`object-cover w-[100vw] h-[100vh] ${
                    loaded ? 'opacity-50' : 'opacity-0'
                }`}
                src="/images/和歌山/LINE_ALBUM_829和歌山_231003_1.webp"
                alt="Hero"
                style={{ opacity: sticky }}
                loading="lazy"
                onLoad={_ => setLoaded(true)}
            />
            <div className="flex absolute top-1/2 left-1/2 flex-col items-center translate-x-[-50%] translate-y-[-50%] min-w-[24rem] min-h-[24rem]">
                <motion.a className="cursor-pointer" href="/" style={{ y }}>
                    <motion.img
                        src="/images/logo.webp"
                        alt="Logo"
                        style={{ scale }}
                    />
                </motion.a>
            </div>
            <div className="absolute bottom-8 left-1/2 translate-x-[-50%]">
                <NavBar
                    lang={lang}
                    setLang={setLang}
                    scrollYProgress={scrollYProgress}
                />
            </div>
        </motion.div>
    )
}
