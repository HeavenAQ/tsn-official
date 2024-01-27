import React from 'react'
import { CompanyPastEvent, Lang, Month } from '../types'
import { Chrono } from 'react-chrono'
import DropDownMenu from '../components/DropDownMenu'
import { pastEvents } from '../info'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

interface Item {
    title: string
    cardTitle: string
    cardSubtitle: string
    cardDetailedText: string
}

const renderMonthEvent = (
    lang: Lang,
    events: CompanyPastEvent[],
    idx: number
) => {
    return (
        <div key={idx} className="pl-5 w-full h-full">
            <ul>
                {events.map((event, i) => (
                    <li key={i} className="mb-4 list-disc">
                        <h4 className="mb-1">
                            {lang === Lang.JP ? event.jpTitle : event.chnTitle}
                        </h4>
                        <div className="flex justify-start items-center space-x-3">
                            {lang === Lang.JP
                                ? event.jpLocation.map((location, j) => (
                                      <div className="flex justify-center items-center px-3 h-5 text-white bg-black rounded-full">
                                          <p key={j}>{location}</p>
                                      </div>
                                  ))
                                : event.chnLocation.map((location, j) => (
                                      <div className="flex justify-center items-center px-3 h-5 text-white bg-black rounded-full">
                                          <p key={j}>{location}</p>
                                      </div>
                                  ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const PastEvents: React.FC<Props> = ({ lang, setLang }) => {
    const data: Item[] = []
    const years = Array.from(pastEvents.keys())
    const pastEventsArray = Array.from(pastEvents.values())

    return (
        <div className="mx-auto w-[95%] h-auto animate-fade-down">
            <div className="relative mx-auto mt-8 w-full h-16">
                <DropDownMenu lang={lang} setLang={setLang} />
                <a href="/">
                    <img
                        src="/logo.png"
                        className="absolute top-1/2 left-1/2 h-28 -translate-x-1/2 -translate-y-1/2"
                    />
                </a>
            </div>
            {years.map((year, i) => {
                return (
                    <div className="mx-auto w-full lg:text-center h-[80vh] my-[2vh]">
                        <h2
                            key={i}
                            className="mb-2 ml-3 text-3xl font-bold lg:ml-0"
                        >
                            {year} 年
                        </h2>
                        <Chrono
                            items={data}
                            mode="VERTICAL_ALTERNATING"
                            slideShow
                            cardWidth={900}
                            cardHeight={250}
                            slideItemDuration={3000}
                            contentDetailsHeight={150}
                            fontSizes={{
                                title: '1.1rem'
                            }}
                            theme={{
                                primary: 'black',
                                secondary: 'black',
                                titleColor: 'black',
                                cardBgColor: '#f5f5f5',
                                cardTitleColor: 'black',
                                titleColorActive: 'white'
                            }}
                        >
                            {pastEventsArray[i].map((monthEvent, j) => {
                                data.push({
                                    title: Month.toString(monthEvent.month),
                                    cardTitle: '',
                                    cardSubtitle: ``,
                                    cardDetailedText: ``
                                })
                                return renderMonthEvent(
                                    lang,
                                    monthEvent.events,
                                    j
                                )
                            })}
                        </Chrono>
                    </div>
                )
            })}
        </div>
    )
}

export default PastEvents
