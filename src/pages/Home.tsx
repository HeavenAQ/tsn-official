import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroV2 from '../components/HeroV2'
import ServicesV2 from '../components/ServicesV2'
import Why from '../components/Why'
import CompanyTable from '../components/CompanyTable'
import ContactUs from '../components/ContactUs'
import { Lang } from '../types'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const Home: React.FC<Props> = ({ lang, setLang }) => {
    return (
        <div className="w-full h-full font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <Header lang={lang} setLang={setLang} />
            <div key={lang} className="animate-fade">
                <HeroV2 lang={lang} />
                <ServicesV2 lang={lang} />
                <Why lang={lang} />
                <CompanyTable lang={lang} />
                <ContactUs lang={lang} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
