import React from 'react'
import { FaPaintBrush } from 'react-icons/fa'
import { BsCalendar2Event } from 'react-icons/bs'
import { BsHouseDoorFill } from 'react-icons/bs'
import { PiTranslateBold } from 'react-icons/pi'
import SlideShow from '../components/Carousel'
import img1 from '../images/website/和歌山/LINE_ALBUM_829和歌山_231003_2.jpg'
import img2 from '../images/website/和歌山/LINE_ALBUM_831和歌山_231003_1.jpg'
import img3 from '../images/website/鳥取/LINE_ALBUM_鳥取展場佈照片_231003_1.jpg'
import img4 from '../images/website/鳥取/LINE_ALBUM_鳥取展場佈照片_231003_2.jpg'
import img5 from '../images/website/鳥取/LINE_ALBUM_鳥取展場佈照片_231003_3.jpg'
import { Lang } from '../types'

interface Props {
    lang: Lang
}

const Services = ({ lang }: Props): JSX.Element => {
    const images = [
        {
            src: img1,
            alt: 'img1'
        },
        {
            src: img2,
            alt: 'img2'
        },
        {
            src: img3,
            alt: 'img3'
        },
        {
            src: img4,
            alt: 'img4'
        },
        {
            src: img5,
            alt: 'img5'
        }
    ]

    const services = [
        {
            icon: (
                <BsCalendar2Event className="w-12 h-20 text-center md:w-20 text-slate-300" />
            ),
            chnTitle: '活動規劃',
            jpnTitle: 'イベント企画'
        },
        {
            icon: (
                <FaPaintBrush className="w-12 h-20 text-center md:w-20 text-slate-300" />
            ),
            chnTitle: '藝術家經紀',
            jpnTitle: '音楽家、文化人等のマネジメント、プロモート'
        },
        {
            icon: (
                <BsHouseDoorFill className="w-12 h-20 text-center md:w-20 text-slate-300" />
            ),
            chnTitle: '不動產相關諮詢',
            jpnTitle: '不動産取引コンサルティング'
        },
        {
            icon: (
                <PiTranslateBold className="w-14 h-20 text-center md:w-20 text-slate-300" />
            ),
            chnTitle: '翻譯',
            jpnTitle: '翻訳/通訳'
        }
    ]

    return (
        <section
            className="mx-auto mt-10 w-2/3 h-auto text-center"
            id="services"
        >
            <h1 className="mb-20 text-3xl font-black">服務</h1>
            <div className="grid overflow-hidden grid-cols-2 grid-rows-2 place-content-center mb-20 w-full lg:flex lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
                {services.map((service, i) => (
                    <div
                        className="flex flex-col justify-center justify-self-center items-center self-center text-sm bg-base-100 md:text-md"
                        key={i}
                    >
                        <figure className="px-10 pt-10">{service.icon}</figure>
                        <div className="mt-5 text-center">
                            <p>
                                {lang === Lang.CN
                                    ? service.chnTitle
                                    : service.jpnTitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <SlideShow images={images} />
        </section>
    )
}

export default Services
