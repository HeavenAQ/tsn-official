import React from 'react'
import Carousel from '../components/Carousel'
import { carouselImages } from '../data/images'
import { Lang } from '../types'

interface Props {
    lang: Lang
}

const RecentEvents: React.FC<Props> = ({ lang }) => {
    return (
        <section className="mx-auto w-11/12 -z-10">
            <h1 className="mb-10 text-2xl font-black text-center lg:mb-20 lg:text-3xl tracking-[20px]">
                {lang === Lang.CN ? '最近活動' : '最近の活動'}
            </h1>
            <Carousel images={carouselImages} />
        </section>
    )
}

export default RecentEvents
