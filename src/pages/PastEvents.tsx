import React from 'react'
import { CompanyPastEvent, Lang, Year } from '../types'
import { Chrono } from 'react-chrono'
import DropDownMenu from '../components/DropDownMenu'
import { pastEvents } from '../data/pastEvents'
import Layout from '../layout/Layout'

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
    baseIdx: number
) => {
    return (
        <ul key={baseIdx}>
            {events.map((event, i) => (
                <li key={1 + i + baseIdx} className="mb-4 list-disc">
                    <h4 className="mb-1">
                        {lang === Lang.JP ? event.jpTitle : event.chnTitle}
                    </h4>
                    <div className="flex flex-col justify-start items-start space-y-1 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-3">
                        {lang === Lang.JP
                            ? event.jpLocation.map((location, j) => (
                                  <div
                                      key={j}
                                      className="flex justify-center items-center px-3 text-white bg-gray-500 rounded-full"
                                  >
                                      <p>{location}</p>
                                  </div>
                              ))
                            : event.chnLocation.map((location, j) => (
                                  <div
                                      key={j}
                                      className="flex justify-center items-center px-3 text-white bg-gray-500 rounded-full"
                                  >
                                      <p>{location}</p>
                                  </div>
                              ))}
                    </div>
                </li>
            ))}
        </ul>
    )
}

const PastEvents: React.FC<Props> = ({ lang, setLang }) => {
    const data: Item[] = []
    const years = Array.from(pastEvents.keys())
    const pastEventsArray = Array.from(pastEvents.values())
    const [loaded, setLoaded] = React.useState<boolean>(false)

    return (
        <Layout lang={lang} setLang={setLang}>
            <div className="w-full h-[85vh] my-[2vh]">
                <Chrono
                    items={data}
                    mode="VERTICAL"
                    slideShow
                    cardWidth={900}
                    cardHeight=""
                    slideItemDuration={3000}
                    contentDetailsHeight={150}
                    useReadMore={false}
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
                    {years.map((year, i) => {
                        data.push({
                            title: Year.toString(year),
                            cardTitle: '',
                            cardSubtitle: ``,
                            cardDetailedText: ``
                        })
                        return (
                            <div
                                key={i}
                                className="overflow-auto pl-5 w-full h-full"
                            >
                                {pastEventsArray[i].map((monthEvent, j) => {
                                    return renderMonthEvent(
                                        lang,
                                        monthEvent.events,
                                        j
                                    )
                                })}
                            </div>
                        )
                    })}
                </Chrono>
            </div>
        </Layout>
    )
}

export default PastEvents
