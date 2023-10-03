import { useState, useEffect, FC, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface image {
    src: string
    alt: string
}

interface Props {
    images: image[]
}

const delay = 4000

const Slideshow = ({ images }: Props): JSX.Element => {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef<null | NodeJS.Timeout>(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setIndex(prevIndex =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )

        return () => {
            resetTimeout()
        }
    }, [index])

    return (
        <div className="overflow-hidden my-0 mx-auto max-w-[1000px]">
            <div
                className="whitespace-nowrap duration-1000 ease-in"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((image, i) => (
                    <img
                        className="inline-block w-full h-auto rounded-xl"
                        key={i}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>

            <div className="text-center">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`inline-block md:h-3 md:w-3 h-2 w-2 rounded-full cursor-pointer mt-4 mr-2 mb-0 ml-0 ${
                            index === i ? 'bg-zinc-900' : 'bg-gray-400'
                        }`}
                        onClick={() => {
                            setIndex(i)
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slideshow
