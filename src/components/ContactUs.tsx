import React from 'react'
import { Lang } from '../types'
import { content, t } from '../data/siteContent'
import { FiChevronDown } from 'react-icons/fi'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

interface Props {
    lang: Lang
}

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
    const [serviceType, setServiceType] = React.useState<string>('')
    const [title, setTitle] = React.useState<string>('')
    const [body, setBody] = React.useState<string>('')
    const [spinner, setSpinner] = React.useState<boolean>(false)
    const onSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault()
        setSpinner(true)

        if (!(name && email && serviceType && title && body)) {
            setSpinner(false)
            lang === Lang.JP
                ? alert('全ての項目を入力してください')
                : alert('請輸入所有項目')
            return
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    serviceType,
                    title,
                    body,
                }),
            })

            if (response.ok) {
                setSpinner(false)
                setName('')
                setEmail('')
                setServiceType('')
                setTitle('')
                setBody('')
                lang === Lang.JP ? alert('送信しました') : alert('已送出')
            } else {
                setSpinner(false)
                lang === Lang.JP
                    ? alert('送信に失敗しました')
                    : alert('送出失敗')
            }
        } catch {
            setSpinner(false)
            lang === Lang.JP
                ? alert('送信に失敗しました')
                : alert('送出失敗')
        }
    }

    const renderInputField = (jp: string, chn: string) => {
        return lang === Lang.JP ? jp : chn
    }

    return (
        <section
            className="py-16 w-full bg-zinc-50 dark:bg-zinc-950 animate-fade-up"
            id="contact"
        >
            <div className="mx-auto px-6 max-w-6xl">
                <h1 className="mb-8 text-2xl font-semibold text-center lg:mb-12 lg:text-3xl tracking-wide">
                    {renderInputField('お問い合わせ', '聯絡我們')}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Contact info column */}
                    <div className="space-y-4">
                        <a href={`mailto:${content.contact.email}`} className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-sm transition flex items-center gap-3 bg-white dark:bg-zinc-900">
                            <FaEnvelope className="text-zinc-700 dark:text-zinc-200" />
                            <div>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400">{t(content.contact.emailLabel, lang)}</div>
                                <div className="font-medium text-zinc-800 dark:text-zinc-200">{content.contact.email}</div>
                            </div>
                        </a>
                        <a href={`tel:${content.contact.phone}`} className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:shadow-sm transition flex items-center gap-3 bg-white dark:bg-zinc-900">
                            <FaPhone className="text-zinc-700 dark:text-zinc-200" />
                            <div>
                                <div className="text-sm text-zinc-500 dark:text-zinc-400">{t(content.contact.phoneLabel, lang)}</div>
                                <div className="font-medium text-zinc-800 dark:text-zinc-200">{content.contact.phone}</div>
                            </div>
                        </a>
                        <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-base">
                            {t(content.contact.text, lang)}
                        </p>
                    </div>
                    {/* Form column */}
                    <form
                        className={`${spinner ? 'hidden' : ''} p-6 w-full rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800`}
                        onSubmit={onSubmit}
                    >
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="px-3 mb-6 w-full md:mb-0 md:w-1/2">
                                <input
                                    className="block py-3 px-4 mb-3 w-full leading-tight rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600"
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
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600"
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
                            <div className="relative">
                                <select
                                    aria-label={renderInputField('サービスを選択', '選擇服務')}
                                    className="block py-3 pr-10 pl-4 mb-3 w-full leading-tight rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600"
                                    onChange={ev => setServiceType(ev.target.value)}
                                    value={serviceType}
                                    id="service-type"
                                >
                                    <option value="" disabled>
                                        {renderInputField('選択してください', '請選擇')}
                                    </option>
                                    {content.services.items.map(item => (
                                        <option key={item.key} value={t(item.label, lang)}>
                                            {t(item.label, lang)}
                                        </option>
                                    ))}
                                </select>
                                <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400" />
                            </div>
                        </div>
                        <div className="px-3 w-full md:w-1/2">
                            <input
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600"
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
                                className="block py-3 px-4 mb-3 w-full leading-tight rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-600"
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
                    <div className="flex flex-wrap -mx-3 mb-0">
                        <div className="flex justify-end w-full">
                            <button
                                type="submit"
                                className="inline-flex justify-center items-center py-3 px-6 font-medium rounded-md transition-colors bg-zinc-900 text-white hover:bg-zinc-800"
                            >
                                <span className="relative w-full text-center">
                                    {renderInputField('送信', '送出')}
                                </span>
                            </button>
                        </div>
                    </div>
                    </form>
                    {spinner && (
                        <div className="md:col-start-2 flex justify-center items-center mx-auto mt-10 w-32 h-32">
                            {nowLoading()}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ContactUs
