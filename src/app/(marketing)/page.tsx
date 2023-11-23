import { BuildBoard, CardPortal, CarouselCustom } from "./_components";
import { FiBell } from "react-icons/fi";
const HomePage = () => {
    return (
        <div className="relative min-h-screen">
                <div className="relative flex flex-row items-center gap-x-3">
                    <div className="text-3xl">
                        <FiBell />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold">โปรโมชั่นและข่าวสาร</span>
                        <span className="text-xl text-main-cc-1">Promotion & News</span>
                    </div>
                </div>
                <div className="relative grid grid-cols-3 py-2 gap-3">
                    <BuildCarousel />
                    <BuildBoard
                        title="ประกาศจากทางร้าน"
                    />
                </div>
                <div className="relative grid grid-cols-4 py-2 gap-4">
                    {[1,2,3,4].map((item , index)=> {
                        return (
                            <CardPortal image="https://placehold.co/240x240" key={index} />
                        )
                    })}
                </div>
                <BuildCategory />
                <BuildProduct />
        </div>
    )
}


function BuildCarousel(){
    return (
        <div className="relative col-span-2">
            <CarouselCustom
                loop={true}
                autoPlay={true}
                images={[
                    'https://placehold.co/1200x400',
                    'https://placehold.co/1200x400',
                    'https://placehold.co/1200x400',
                    'https://placehold.co/1200x400'
                ]}
                className={"rounded-xl h-[20rem]"}
            />
        </div>
    )
}

function BuildCategory(){
    return(
        <div className="relative flex flex-col gap-x-3 py-4">
            <div className="flex flex-col">
                <span className="text-2xl font-semibold">หมวดหมู่แนะนำ</span>
                <span className="text-xl text-main-cc-1">Category Recommended</span>
            </div>
            <div className="relative grid grid-cols-2 py-2 gap-8">
                    {[1,2,3,4].map((item , index)=> {
                        return (
                            <CardPortal image="https://placehold.co/240x240" key={index} />
                        )
                    })}
                </div>
        </div>
    )
}


function BuildProduct(){
    return(
        <div className="relative flex flex-col gap-x-3 py-4">
            <div className="flex flex-col">
                <span className="text-2xl font-semibold">สินค้าแนะนำ</span>
                <span className="text-xl text-main-cc-1">Product Recommended</span>
            </div>
            <div className="relative grid grid-cols-4 py-2 gap-4">
                    {[1,2,3,4,5,6,7,8,9,10].map((item , index)=> {
                        return (
                            <CardPortal 
                            height="h-[25rem]"
                            image="https://placehold.co/240x450" 
                            key={index} />
                        )
                    })}
                </div>
        </div>
    )
}


export default HomePage;