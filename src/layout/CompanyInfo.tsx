import React from 'react'
import { Lang } from '../types'

interface Props {
    lang: Lang
}

const CompanyInfo: React.FC<Props> = ({ lang }) => {
    return (
        <section id="company_info" className="py-10 mx-auto mb-10 w-2/3 h-auto">
            <h1 className="mb-20 text-3xl font-black">会社請求書</h1>
            <div className="flex flex-col justify-center items-center space-y-6 w-full lg:flex-row lg:space-y-0">
                <div className="flex flex-col justify-end items-start pl-6 space-y-9 w-full h-full border-l-4 border-l-black">
                    <div className="inline-flex items-center space-x-3 w-full">
                        <p className="font-semibold">会社名</p>
                        <p>株式会社tsn</p>
                    </div>

                    <div className="inline-flex items-center space-x-3 w-full">
                        <p className="font-semibold">代表者</p>
                        <p>代表取締役 多賀広</p>
                    </div>

                    <div className="inline-flex items-center space-x-3 w-full">
                        <p className="font-semibold">所在地（住所）</p>
                        <p>大阪府南市西区山 4-2056-1</p>
                    </div>
                </div>
                <div className="flex flex-col justify-self-end items-start pl-6 space-y-9 w-full h-full border-l-4 border-l-black">
                    <div className="inline-flex items-center space-x-3 w-full">
                        <p className="font-semibold">会社名</p>
                        <p>株式会社tsn</p>
                    </div>

                    <div className="inline-flex items-center space-x-3 w-full">
                        <p className="font-semibold">代表者</p>
                        <p>代表取締役 多賀広</p>
                    </div>

                    <div className="inline-flex items-center space-x-3 w-full">
                        <p className="font-semibold">所在地（住所）</p>
                        <p>大阪府南市西区山 4-2056-1</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyInfo
