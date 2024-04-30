import React from 'react'
import { Lang } from '../types'
import { services } from '../data/service'
import emailjs from '@emailjs/browser'

interface Props {
    lang: Lang
}

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const apiKey = process.env.REACT_APP_EMAILJS_API_KEY

const nowLoading = () => (
    <>
        <svg
            aria-hidden="true"
            className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
            />
        </svg>
        <span className="sr-only">Loading...</span>
    </>
)

const ContactUs: React.FC<Props> = ({ lang }: Props) => {
    const [name, setName] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [serviceType, setServiceType] = React.useState<string>(
        lang === Lang.JP ? services[0].jp : services[0].chn
    )
    const [title, setTitle] = React.useState<string>('')
    const [body, setBody] = React.useState<string>('')
    const [spinner, setSpinner] = React.useState<boolean>(false)
    const onSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        setSpinner(true)

        if (!(name && email && serviceType && title && body)) {
            setSpinner(false)
            lang === Lang.JP
                ? alert('全ての項目を入力してください')
                : alert('請輸入所有項目')
            return
        }

        const templateParams = {
            name: name,
            from_email: email,
            service_type: serviceType,
            title: title,
            body: body
        }

        if (!serviceID || !templateID || !apiKey) {
            lang === Lang.JP ? alert('送信に失敗しました') : alert('送出失敗')
            setSpinner(false)
            return
        }

        emailjs
            .send(serviceID, templateID, templateParams, apiKey)
            .then(_ => {
                setSpinner(false)
                setName('')
                setEmail('')
                setServiceType('')
                setTitle('')
                setBody('')
                lang === Lang.JP ? alert('送信しました') : alert('已送出')
            })
            .catch(_ => {
                setSpinner(false)
                lang === Lang.JP
                    ? alert('送信に失敗しました')
                    : alert('送出失敗')
            })
    }

    const renderInputField = (jp: string, chn: string) => {
        return lang === Lang.JP ? jp : chn
    }

    return (
        <section
            className="pt-8 mt-20 w-full h-auto bg-gray-100"
            id="contact_us"
        >
            <div className="pt-10 mx-auto w-4/5 lg:w-2/3 max-w-[1000px] h-[850px] md:h-[700px]">
                <h1 className="mb-8 text-2xl font-black text-center lg:mb-12 lg:text-3xl tracking-[20px]">
                    {renderInputField('お問い合わせ', '聯絡我們')}
                </h1>
                {spinner && (
                    <div className="flex justify-center items-center mx-auto mt-20 w-32 h-32">
                        {nowLoading()}
                    </div>
                )}
                <form
                    className={`${
                        spinner ? 'hidden' : ''
                    }  p-6 w-full rounded-xl`}
                    onSubmit={onSubmit}
                >
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3 mb-6 w-full md:mb-0 md:w-1/2">
                            <input
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="grid-first-name"
                                type="text"
                                placeholder={renderInputField('お名前', '姓名')}
                                onChange={ev => setName(ev.target.value)}
                                value={name}
                                required
                            />
                        </div>
                        <div className="px-3 w-full md:w-1/2">
                            <input
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="email"
                                type="email"
                                placeholder="example@mail.com"
                                onChange={ev => setEmail(ev.target.value)}
                                value={email}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3 mb-6 w-full md:mb-0 md:w-1/2">
                            <select
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                onChange={ev => setServiceType(ev.target.value)}
                                value={serviceType}
                                id="service-type"
                            >
                                {services.map(service => (
                                    <option
                                        key={service.jp}
                                        value={renderInputField(
                                            service.jp,
                                            service.chn
                                        )}
                                    >
                                        {renderInputField(
                                            service.jp,
                                            service.chn
                                        )}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="px-3 w-full md:w-1/2">
                            <input
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="title"
                                type="text"
                                placeholder={renderInputField('件名', '主旨')}
                                onChange={ev => setTitle(ev.target.value)}
                                value={title}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="px-3 mb-6 w-full md:mb-0">
                            <textarea
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border appearance-none"
                                id="body"
                                rows={10}
                                onChange={ev => setBody(ev.target.value)}
                                value={body}
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
