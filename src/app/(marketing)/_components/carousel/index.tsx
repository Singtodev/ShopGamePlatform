"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
interface CarouselCustomProps {
    images: Array<String>
    className: String
    autoPlay?: boolean
    loop?: boolean
}

export const CarouselCustom = (
    {
        images,
        className,
        autoPlay,
        loop
    }: CarouselCustomProps
) => {
    return (
        <div>
            <Carousel
                loop={loop}
                autoplay={autoPlay}
                className={`${className}`}>
                {images != null && images.length > 0 && images.map((item,index) => {
                    return( 
                        <Image
                            key={index}
                            width={0}
                            height={0}
                            src={item as string}
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                    )
                })}
            </Carousel>
        </div>
    )
}