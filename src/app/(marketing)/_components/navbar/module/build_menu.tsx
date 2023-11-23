import { BuildButtonMenu } from "./build_button_menu";
import { FaHome } from "react-icons/fa";
export function BuildMenu(){
    return (
        <ul className="flex flex-row gap-x-2">
                <BuildButtonMenu 
                    icon={<FaHome />}
                    pathName="/"
                    text="หน้าแรก" />
                <BuildButtonMenu 
                    pathName="/topup"
                    text="เติมเงิน" />
                <BuildButtonMenu 
                    pathName="/shop"
                    text="สินค้าทั่วไป" />
                <BuildButtonMenu 
                    pathName="/redeem"
                    text="แลกไอเทมโค้ด" />
                <BuildButtonMenu 
                    pathName="/contact"
                    text="ติดต่อเรา" />
                <BuildButtonAction />
        </ul>
    )
}

function BuildButtonAction(){
    return (
        <div className="
        flex items-center font-semibold border cursor-pointer
        border-main-cc-1 px-3 rounded-lg bg-main-cc-2 hover:bg-main-cc-3 transition-all duration-300
        ">ล็อกอิน / สมัครสมาชิค</div>
    )
}