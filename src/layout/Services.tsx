import React from 'react'
import { FaPaintBrush } from 'react-icons/fa'
import { BsCalendar2Event } from 'react-icons/bs'
import { BsHouseDoorFill } from 'react-icons/bs'
import { PiTranslateBold } from 'react-icons/pi'

const Services: React.FC = () => {
    return (
        <section
            className="mx-auto mt-10 w-4/5 h-auto text-center"
            id="services"
        >
            <h1 className="mb-20 text-3xl font-black">服務</h1>
            <div className="grid grid-cols-2 grid-rows-2 place-content-center lg:grid-cols-4 lg:grid-rows-1">
                <div className="w-96 shadow-xl card bg-base-100">
                    <figure className="px-10 pt-10">
                        <FaPaintBrush className="w-20 h-20 text-center text-slate-300" />
                    </figure>
                    <div className="items-center text-center card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="w-96 shadow-xl card bg-base-100">
                    <figure className="px-10 pt-10">
                        <BsCalendar2Event className="w-20 h-20 text-center text-slate-300" />
                    </figure>
                    <div className="items-center text-center card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="w-96 shadow-xl card bg-base-100">
                    <figure className="px-10 pt-10">
                        <BsHouseDoorFill className="w-20 h-20 text-center text-slate-300" />
                    </figure>
                    <div className="items-center text-center card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="w-96 shadow-xl card bg-base-100">
                    <figure className="px-10 pt-10">
                        <PiTranslateBold className="w-20 h-20 text-center text-slate-300" />
                    </figure>
                    <div className="items-center text-center card-body">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
