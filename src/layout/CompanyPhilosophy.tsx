import React from 'react'

const CompanyPhilosophy: React.FC = () => {
    return (
        <section className="w-full h-96 bg-gray-100" id="company_philosophy">
            <div className="flex justify-between items-center mx-auto space-x-8 w-2/3 h-full">
                <div className="w-1/2 md:inline-flex">
                    <h1 className="text-3xl font-black">会社</h1>
                    <h1 className="text-3xl font-black">理念</h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    自分自身の未来を見掘え、楽しく仕事をし、「知恵と情熱」で難題に打勝つ組織
                    そのために 挑戦をしていく覚悟を持つ
                    気持ちにゆとりを持ち笑顔を忘れない 行動的に一日を過ごす
                    真心と熱意を持って接する{' '}
                </div>
            </div>
        </section>
    )
}

export default CompanyPhilosophy
