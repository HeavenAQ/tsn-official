import React from 'react'
import { FaPhoneSquare, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const Footer: React.FC = () => {
    const icons = [
        {
            info: '072-284-9617',
            icon: <FaPhoneSquare size={24} />,
            link: 'tel:072-284-9617'
        },
        {
            info: '〒593-8316 大阪府堺市西区山田 4-2056-1',
            icon: <FaMapMarkerAlt size={24} />,
            link: 'https://maps.app.goo.gl/8Xw2yCVDRxNYDZFC7'
        },
        { info: 'info@twtsn.co.jp', icon: <FaEnvelope size={24} />, link: '' }
    ]

    return (
        <footer className="flex overflow-hidden left-1/2 z-30 flex-col gap-6 justify-center items-center p-6 mx-auto w-full h-80 text-center text-white bg-zinc-500">
            <a className="cursor-pointer" href="/">
                <img
                    src="/images/logo.webp"
                    alt="Logo"
                    className="w-24 h-24 lg:w-32 lg:h-32 xl:w-44 xl:h-44 lg-w:32"
                />
            </a>
            <div className="inline-flex justify-center items-center mx-auto space-x-10 w-full">
                {icons.map((icon, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-start items-center cursor-pointer"
                    >
                        <a href={icon.link}>
                            <div className="tooltip" data-tip={icon.info}>
                                <button className="btn-sm">{icon.icon}</button>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
