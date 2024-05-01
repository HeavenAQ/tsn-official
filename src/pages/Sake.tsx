import React, { useState, useContext, FC } from 'react'
import { Lang } from '../types'

const services = {
    chn: ['展覽規劃', '場地租借', '演講翻譯', '樂器租借'],
    jp: ['展覧会の計画', '会場の貸し出し', '講演の翻訳', '楽器の貸し出し'],
    getService(lang: Lang): string[] {
        return this[lang]
    },
    getServiceInfoList(lang: Lang) {
        const serviceTitles = this.getService(lang)
        const serviceDescriptions = Array(4).fill(
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
        )
        const serviceImages = Array(4).fill(
            '/images/鳥取/LINE_ALBUM_2023日本鳥取県-台湾学校作品合同展_231210_4.webp'
        )
        return serviceTitles.map((title, idx) => ({
            title,
            description: serviceDescriptions[idx],
            images: [serviceImages[idx]]
        }))
    }
}

interface ServiceInfo {
    title: string
    description: string
    images: string[]
}

interface ServiceCardProps {
    id: number
    service: ServiceInfo
}

const SakeCard: FC<ServiceCardProps> = ({ id, service }) => {
    const isImgLeft = id % 2 === 0

    return (
        <div id={id.toString()}>
            <div className="inline-grid grid-cols-1 gap-10 lg:grid-cols-2">
                {isImgLeft && (
                    <div className="hidden lg:grid">
                        <p>{service.description}</p>
                    </div>
                )}
                <div className="relative w-auto text-center">
                    <h1 className="absolute -top-14 left-1/2 text-3xl font-bold -translate-x-1/2 break-keep">
                        {service.title}
                    </h1>
                    <img
                        className="w-full h-full rounded-lg"
                        src={service.images[0]}
                        alt="service image"
                    />
                </div>
                {!isImgLeft && (
                    <div className="hidden lg:grid">
                        <p>{service.description}</p>
                    </div>
                )}
                <div className="grid lg:hidden">
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    )
}

interface SakeProps {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

const Sake: FC<SakeProps> = ({ lang, setLang }) => {
    const servicesInfo = services.getServiceInfoList(lang)

    return (
        <div className="relative mx-auto mb-24 w-4/5 snap-y snap-mandatory scroll-smooth">
            {servicesInfo.map((service, i) => (
                <div
                    key={service.title}
                    id={service.title}
                    className="flex justify-center items-center h-[100vh] snap-start"
                >
                    <SakeCard id={i} service={service} />
                </div>
            ))}
        </div>
    )
}

export default Sake
