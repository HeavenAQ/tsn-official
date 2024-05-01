import React from 'react'
import DropDownMenu from '../components/DropDownMenu'
import CompanyInfo from '../components/CompanyInfo'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import RecentEvents from '../components/RecentEvents'
import EventGallery from '../components/EventGallery'
import Services from '../components/Services'
import { Lang } from '../types'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const Home: React.FC<Props> = ({ lang, setLang }) => {
    return (
        <div className="w-full h-full font-noto-serif animate-fade-down">
            <Hero lang={lang} setLang={setLang} />
            <div className="relative w-full h-full" id="recent_events">
                <div id="dropdown" className="sticky top-4 m-4">
                    <DropDownMenu lang={lang} setLang={setLang} />
                </div>
                <RecentEvents lang={lang} />
                <CompanyInfo lang={lang} />
                <Services lang={lang} />
                <EventGallery lang={lang} />
                <ContactUs lang={lang} />
                <Footer />
            </div>
        </div>
    )
}

export default Home
