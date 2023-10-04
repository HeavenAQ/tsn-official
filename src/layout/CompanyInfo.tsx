import React from 'react'
import { Lang } from '../types'

interface Props {
    lang: Lang
}

const CompanyInfo: React.FC<Props> = ({ lang }) => {
    return (
        <section
            id="company_info"
            className="py-10 mx-auto mb-10 w-4/5 h-auto lg:w-2/3"
        >
            <h1 className="mb-10 text-xl font-black md:text-2xl lg:mb-20 lg:text-3xl tracking-[20px]">
                {lang === Lang.CN ? '公司概要' : '企業情報'}
            </h1>
            <div className="flex flex-col justify-center items-start space-y-6 w-full lg:flex-row lg:space-y-0">
                <div className="flex flex-col justify-end items-start pl-4 space-y-6 w-full h-full border-l-4 lg:pl-6 lg:space-y-9 border-l-black">
                    <div className="inline-flex items-center space-x-8 w-full">
                        <p className="font-bold text-md">
                            {lang === Lang.CN ? '公司名' : '会社名'}
                        </p>
                        <p>株式会社tsn</p>
                    </div>

                    <div className="inline-flex items-center space-x-8 w-full">
                        <p className="font-bold text-md">
                            {lang === Lang.CN ? '代表者' : '代表者'}
                        </p>
                        <p>代表取締役 蔡欣珊</p>
                    </div>

                    <div className="inline-flex items-center space-x-8 w-full">
                        <p className="font-bold text-md break-keep">
                            {lang === Lang.CN ? '所在地' : '所在地'}
                        </p>
                        <p>〒593-8316 大阪府堺市西区山田 4-2056-1</p>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-start pl-4 space-y-6 w-full h-full border-l-4 lg:pl-6 lg:space-y-9 border-l-black">
                    <div className="inline-flex items-center space-x-8 w-full">
                        <p className="font-bold text-md">
                            {lang === Lang.CN ? '資本額' : '資本金'}
                        </p>
                        <p>500 万円</p>
                    </div>

                    <div className="inline-flex items-center space-x-8 w-full">
                        <p className="font-bold text-md break-keep min-w-[15px]">
                            {lang === Lang.CN ? '設立日' : '設立日'}
                        </p>
                        <p>2023年3月23日</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyInfo
