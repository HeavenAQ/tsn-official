import React from 'react'
import { Lang } from './types'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PastEvents from './pages/PastEvents'
import Page404 from './pages/404'

export default function App() {
    const [lang, setLang] = React.useState<Lang>(Lang.CN)
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home lang={lang} setLang={setLang} />} />
                <Route
                    path="/past_events"
                    element={<PastEvents lang={lang} setLang={setLang} />}
                    key="past_events"
                />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}
