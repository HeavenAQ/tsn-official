import { FaPaintBrush } from 'react-icons/fa'
import { BsCalendar2Event } from 'react-icons/bs'
import { BsHouseDoorFill } from 'react-icons/bs'
import { PiTranslateBold } from 'react-icons/pi'
import { Lang } from '../types'
import { services } from '../data/service'

interface Props {
    lang: Lang
}

const Services = ({ lang }: Props): JSX.Element => {
    const icons = [
        <BsCalendar2Event className="w-12 h-20 text-center md:w-20 text-slate-500" />,
        <FaPaintBrush className="w-12 h-20 text-center md:w-20 text-slate-500" />,
        <BsHouseDoorFill className="w-14 h-20 text-center md:w-20 text-slate-500" />,
        <PiTranslateBold className="w-14 h-20 text-center md:w-20 text-slate-500" />
    ]

    return (
        <>
            <section
                className="p-10 mx-auto w-full h-auto text-center bg-gray-100"
                id="services"
            >
                <div className="mx-auto w-11/12">
                    <h1 className="text-2xl font-black text-center lg:mb-20 lg:text-3xl tracking-[20px]">
                        {lang === Lang.CN ? '服務' : '事業案内'}
                    </h1>
                    <div className="grid overflow-hidden grid-cols-2 grid-rows-2 place-content-center mb-14 w-full md:flex md:flex-row md:justify-center md:items-start md:space-x-6">
                        {services.map((service, i) => (
                            <div
                                className="flex flex-col justify-center justify-self-center items-center self-center text-sm bg-gray-100 md:text-md"
                                key={i}
                            >
                                <figure className="px-10 pt-10">
                                    {icons[i]}
                                </figure>
                                <div className="mt-8 text-center">
                                    <div
                                        className={`mx-auto w-full text-center ${
                                            lang === Lang.JP
                                                ? 'lg:w-3/4'
                                                : 'lg:w-full'
                                        }`}
                                    >
                                        <h3 className="md:text-lg md:text-md">
                                            {lang === Lang.CN
                                                ? service.chn
                                                : service.jp}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
