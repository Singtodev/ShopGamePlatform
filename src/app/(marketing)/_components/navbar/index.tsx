import { BuildMenu } from "./module/build_menu"

export const Navbar = () => {
    return (
        <div className="flex flex-row justify-between py-3 mt-2 mb-2">
                <div className="logo uppercase font-bold">
                    MYRANGERSHOP
                </div>
                <div className="menu hidden md:flex">
                    <BuildMenu />
                </div>
        </div>
    )
}




