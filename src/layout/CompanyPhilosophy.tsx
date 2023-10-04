import React from 'react'
import { Lang } from '../types'

interface Props {
    lang: Lang
}

const CompanyPhilosophy: React.FC<Props> = ({ lang }) => {
    const content = {
        jp: '自分自身の未来を見掘え、楽しく仕事をし、「知恵と情熱」で難題に打勝つ組織 そのために 挑戦をしていく覚悟を持つ 気持ちにゆとりを持ち笑顔を忘れない 行動的に一日を過ごす 真心と熱意を持って接する',
        chn: '探索自己的未來，愉快地工作，並以「智慧和熱情」克服困難的組織。 為此， 持有面對挑戰的決心，保持心情舒暢，永遠不忘記微笑， 積極度過每一天， 用真心和熱情與人接觸。'
    }

    return (
        <section className="w-full h-96 bg-gray-100" id="company_philosophy">
            <div className="flex justify-between items-center mx-auto space-x-8 w-2/3 h-full">
                <div className="w-1/2 text-2xl font-black text-center md:inline-flex lg:text-3xl tracking-[20px]">
                    <h1>{lang === Lang.CN ? '公司' : '会社'}</h1>
                    <h1>理念</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <p className="md:text-lg text-md">{content[lang]}</p>
                </div>
            </div>
        </section>
    )
}

export default CompanyPhilosophy
