import React from 'react'
import CompanyInfo from './layout/CompanyInfo'
import CompanyPhilosophy from './layout/CompanyPhilosophy'
import ContactUs from './layout/ContactUs'
import Hero from './layout/Hero'
import Services from './layout/Services'
import { Lang } from './types'

function App() {
    const [lang, setLang] = React.useState<Lang>(Lang.CN)
    return (
        <>
            <Hero lang={lang} setLang={setLang} />
            <CompanyInfo lang={lang} />
            <CompanyPhilosophy />
            <Services lang={lang} />
            <ContactUs lang={lang} />
        </>
    )
}

export default App
