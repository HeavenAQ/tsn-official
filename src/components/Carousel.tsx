import { useState, useEffect, useRef } from 'react'

interface image {
    title: string
    src: string
    alt: string
}

interface Props {
    images: image[]
}

const delay = 4000

const Carousel = ({ images }: Props): JSX.Element => {
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
        <div className="relative -z-10">
            <div className="overflow-hidden my-20 mx-auto">
                <div
                    className="whitespace-nowrap duration-1000 ease-in"
                    style={{
                        transform: `translateX(${-index * 100}%)`
                    }}
                >
                    {images.map((image, i) => (
                        <div className="inline-block w-full h-[60vh]" key={i}>
                            <img
                                className="object-cover w-full h-full rounded-xl"
                                key={i}
                                src={image.src}
                                alt={image.alt}
                            />
                            <p className="my-4 text-center text-gray-500">
                                <span>
                                    {image.title.slice(
                                        0,
                                        image.title.length / 2 + 1
                                    )}
                                </span>
                                <br />
                                <span>
                                    {image.title.slice(
                                        image.title.length / 2 + 1
                                    )}
                                </span>
                            </p>
                        </div>
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
        </div>
    )
}

export default Carousel
