import Image from "next/image";

interface CardPortalProps {
    image: String
    height?: String
}

export function CardPortal({image , height}: CardPortalProps){
    return (
        <div className={`
            ${height ?? 'h-[12rem]'}
             hover:scale-105 transition-all object-cover  bg-cover
            duration-300 bg-gray-300 rounded-md cursor-pointer`}>
                <Image
                    width={0}
                    height={0}
                    src={image as string}
                    alt=""
                    className="w-full h-full">
                </Image>
        </div>
    );
}