import React, { useRef } from 'react'
import { CompanyPastEvent, Lang, Year } from '../types'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { pastEvents } from '../data/pastEvents'
import Layout from '../layout/Layout'

interface Props {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
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
                    <div className="flex flex-row justify-start items-center space-y-0 space-x-3">
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
    const years = Array.from(pastEvents.keys())
    const pastEventsArray = Array.from(pastEvents.values())
    const yearRef = useRef<HTMLDivElement>(null)
    const onClick = (direction: 'left' | 'right') => {
        // ensure the container exists
        const container = yearRef.current as HTMLDivElement

        // calculate the new scroll position
        const containerWidth = container.clientWidth
        const newScrollPosition =
            direction === 'right'
                ? container.scrollLeft + containerWidth
                : container.scrollLeft - containerWidth

        // scroll to the new position
        container.scrollTo({
            top: 0,
            left: newScrollPosition,
            behavior: 'smooth'
        })
    }

    return (
        <Layout lang={lang} setLang={setLang}>
            <div
                className="flex overflow-y-hidden overflow-x-scroll flex-nowrap mx-auto snap-mandatory snap-x max-w-[1000px] min-h-[90vh] scroll-smooth"
                ref={yearRef}
            >
                {years.map((year, i) => {
                    return (
                        <div
                            className="flex-[0_0_100%] snap-start px-10 relative"
                            key={i}
                        >
                            <MdArrowBackIos
                                className="absolute top-3 left-20 text-xl cursor-pointer text-zinc-600"
                                onClick={() => onClick('left')}
                            />
                            <h1 className="text-3xl text-center">
                                {Year.toString(year)}年
                            </h1>
                            <MdArrowForwardIos
                                className="absolute top-3 right-20 text-xl cursor-pointer text-zinc-600"
                                onClick={() => onClick('right')}
                            />
                            <hr className="my-3 h-2" />
                            <div key={i} className="pl-5 h-full">
                                {pastEventsArray[i].map((monthEvent, j) => {
                                    return renderMonthEvent(
                                        lang,
                                        monthEvent.events,
                                        j
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default PastEvents
