import React, { useState, useRef } from 'react'
import { events, Event } from '../info'
import { Lang } from '../types'

const selectedEffect = [
    'before:pointer-events-none',
    'before:absolute',
    'before:top-1/2',
    'before:left:1/2',
    'before:-translate-y-1/2',
    'before:bg-gradient-to-br',
    'before:from-zinc-800',
    'before:to-gray-300',
    'before:w-full',
    'before:h-full',
    'before:z-9',
    "before:content-['']",
    'before:text-white',
    'before:font-black',
    'before:flex',
    'before:justify-center',
    'before:items-center',
    'before:opacity-70',
    'before:rounded-lg',
    'before:lg:text-lg',
    'before:sm:text-sm',
    'before:text-[9px]'
]
interface Props {
    lang: Lang
}

const Thumbnails = (
    currentEvent: EventElement,
    thumbnailInfo: ThumnailInfo
) => {
    return currentEvent.event.imgs.map((image, i) => {
        const defaultSelected = i === 0 ? selectedEffect.join(' ') : ''
        return (
            <div
                className={`relative cursor-pointer ${defaultSelected} w-36 h-24 inline-block`}
                key={i}
                ref={i === 0 ? thumbnailInfo.ref : null}
                onLoad={e => {
                    if (i === 0) {
                        thumbnailInfo.setThumnailIdx(i)
                        thumbnailInfo.setThumnail(e.currentTarget)
                        e.currentTarget.classList.add(...selectedEffect)
                        thumbnailInfo.ref.current = e.currentTarget
                    }
                }}
                onClick={e => {
                    thumbnailInfo.setThumnailIdx(i)
                    thumbnailInfo.ref.current?.classList.remove(
                        ...selectedEffect
                    )
                    e.currentTarget.classList.add(...selectedEffect)
                    thumbnailInfo.ref.current = e.currentTarget
                    thumbnailInfo.setThumnail(e.currentTarget)
                }}
            >
                <div className="w-full h-full bg-center bg-cover">
                    <img
                        src={image}
                        alt="event image1"
                        className="object-cover object-center w-full h-full rounded-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        )
    })
}

interface EventElement {
    event: Event
    update: React.Dispatch<React.SetStateAction<Event>>
    ref: React.MutableRefObject<HTMLButtonElement | null>
}

interface ThumnailInfo {
    setThumnailIdx: React.Dispatch<React.SetStateAction<number>>
    setThumnail: React.Dispatch<
        React.SetStateAction<HTMLDivElement | undefined>
    >
    thumbnail?: HTMLDivElement
    ref: React.MutableRefObject<HTMLDivElement | null>
}

const EventGallery: React.FC<Props> = ({ lang }) => {
    const [currentEvent, setCurrentEvent] = useState<Event>(events[0])
    const currentEventElement: EventElement = {
        event: currentEvent,
        update: setCurrentEvent,
        ref: useRef(null)
    }
    const [selectedThumbnailIdx, setSelectedThumbnailIdx] = useState<number>(0)
    const [selectedThumbnail, setSelectedThumbnail] = useState<HTMLDivElement>()
    const thumbnailInfo: ThumnailInfo = {
        setThumnailIdx: setSelectedThumbnailIdx,
        setThumnail: setSelectedThumbnail,
        thumbnail: selectedThumbnail,
        ref: useRef(null)
    }

    return (
        <section className="pt-16 mx-auto w-11/12 -z-10" id="event_gallery">
            <h1 className="mb-16 text-2xl font-black text-center lg:text-3xl tracking-[20px]">
                {lang === Lang.CN ? '活動回顧' : 'イベントの回顧'}
            </h1>
            <div className="flex flex-col gap-14 justify-center items-center mx-auto">
                <div className="flex overflow-hidden flex-col gap-6 justify-center items-center mx-auto w-11/12">
                    <div className="w-full h-[60vh]">
                        <img
                            src={
                                currentEventElement.event.imgs[
                                    selectedThumbnailIdx
                                ]
                            }
                            alt="episode image1"
                            className="object-cover w-full h-full rounded-lg"
                            loading="lazy"
                        />
                    </div>
                    <div className="inline-flex justify-center items-baseline">
                        <select
                            className="block overflow-x-hidden py-3 px-4 mb-3 leading-tight rounded border appearance-none cursor-pointer max-w-[60vw] text-ellipsis"
                            id="service-type"
                            onChange={e => {
                                setCurrentEvent(
                                    events[parseInt(e.target.value)]
                                )
                                thumbnailInfo.setThumnailIdx(0)
                                selectedThumbnail?.classList.remove(
                                    ...selectedEffect
                                )
                            }}
                        >
                            {events.map((service, i) => (
                                <option
                                    key={i}
                                    value={i}
                                    className="cursor-pointer"
                                >
                                    ⧨ {service.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div
                        className="overflow-x-scroll w-11/12"
                        onMouseEnter={_ =>
                            (document.body.style.overflow = 'hidden')
                        }
                        onMouseLeave={_ =>
                            (document.body.style.overflow = 'auto')
                        }
                        onWheel={e => {
                            const container = e.currentTarget
                            const scrollLeft = e.deltaY
                            container.scrollTo({
                                top: 0,
                                left: container.scrollLeft + scrollLeft,
                                behavior: 'smooth'
                            })
                        }}
                    >
                        <div className="inline-flex relative justify-start mx-auto space-x-6 h-auto whitespace-nowrap">
                            {Thumbnails(currentEventElement, thumbnailInfo)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventGallery
