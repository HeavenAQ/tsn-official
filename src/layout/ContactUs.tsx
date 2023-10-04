import React from 'react'
import { Lang } from '../types'

interface Props {
    lang: Lang
}
const ContactUs: React.FC<Props> = ({ lang }: Props) => {
    const nameRef = React.useRef<HTMLInputElement>(null)
    const emailRef = React.useRef<HTMLInputElement>(null)
    const serviceTypeRef = React.useRef<HTMLSelectElement>(null)
    const titleRef = React.useRef<HTMLInputElement>(null)
    const bodyRef = React.useRef<HTMLTextAreaElement>(null)
    const services = [
        {
            chnTitle: '活動規劃',
            jpnTitle: 'イベント企画'
        },
        {
            chnTitle: '藝術家經紀',
            jpnTitle: '音楽家、文化人等のマネジメント、プロモート'
        },
        {
            chnTitle: '不動產相關諮詢',
            jpnTitle: '不動産取引コンサルティング'
        },
        {
            chnTitle: '翻譯',
            jpnTitle: '翻訳/通訳'
        }
    ]

    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        if (
            nameRef.current &&
            emailRef.current &&
            serviceTypeRef.current &&
            titleRef.current &&
            bodyRef.current
        ) {
            const rawParam = `subject=${serviceTypeRef.current.value}-${titleRef.current.value}&body=Name: ${nameRef.current.value}%0AEmail: ${emailRef.current.value}%0AContent:%0A${bodyRef.current.value}`
            const mailtoUrl = `mailto:info@twtsn.co.jp?${rawParam}`
            window.location.href = mailtoUrl
        }
    }

    const renderInputField = (jp: string, chn: string) => {
        return lang === Lang.JP ? jp : chn
    }

    return (
        <section className="mt-20 w-full h-auto bg-gray-100">
            <div className="pt-10 mx-auto w-4/5 lg:w-2/3 max-w-[1000px]">
                <h1
                    className="mb-8 text-xl font-black text-center md:text-2xl lg:mb-12 lg:text-3xl tracking-[20px]"
                    id="contact_us"
                >
                    {renderInputField('お問い合わせ', '聯絡我們')}
                </h1>
                <form className="p-6 w-full rounded-xl" onSubmit={onSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3 mb-6 w-full md:mb-0 md:w-1/2">
                            <input
                                ref={nameRef}
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="grid-first-name"
                                type="text"
                                placeholder={renderInputField('お名前', '姓名')}
                                required
                            />
                        </div>
                        <div className="px-3 w-full md:w-1/2">
                            <input
                                ref={emailRef}
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="email"
                                type="email"
                                placeholder="example@mail.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3 mb-6 w-full md:mb-0 md:w-1/2">
                            <select
                                ref={serviceTypeRef}
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="service-type"
                            >
                                {services.map(service => (
                                    <option
                                        key={service.jpnTitle}
                                        value={renderInputField(
                                            service.jpnTitle,
                                            service.chnTitle
                                        )}
                                    >
                                        {renderInputField(
                                            service.jpnTitle,
                                            service.chnTitle
                                        )}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="px-3 w-full md:w-1/2">
                            <input
                                ref={titleRef}
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="title"
                                type="text"
                                placeholder={renderInputField('件名', '主旨')}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3 mb-6 w-full md:mb-0">
                            <textarea
                                ref={bodyRef}
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="body"
                                rows={10}
                                placeholder={renderInputField(
                                    'メッセージをご入力ください',
                                    '請輸入內文'
                                )}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="flex justify-center items-end w-full h-auto text-white">
                            <button
                                type="submit"
                                className="inline-flex overflow-hidden relative justify-start items-center py-3 px-6 font-medium rounded-xl transition-all bg-zinc-500 group"
                            >
                                <span className="inline-block absolute top-0 right-0 w-4 h-4 rounded transition-all duration-500 ease-in-out group-hover:-mt-4 group-hover:-mr-4 bg-zinc-700">
                                    <span className="absolute top-0 right-0 w-5 h-5 bg-white rotate-45 translate-x-1/2 -translate-y-1/2"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full rounded-2xl transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full group-hover:mb-12 group-hover:translate-x-0 bg-zinc-600"></span>
                                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                                    {renderInputField('送信', '送出')}
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactUs
