"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
interface BuildButtonMenuProps {
    text: String,
    pathName: String,
    icon?: React.ReactNode
}

export function BuildButtonMenu({
    text,
    pathName,
    icon
}: BuildButtonMenuProps){
    const path = usePathname();
    return (
        <Link href={pathName.toString()}>
            <div
                className={`${path == pathName ? 'bg-main-cc-1 text-white ' : 'text-main-cc-1'} 
                px-4  cursor-pointer rounded-md transition-all duration-300
                font-semibold flex flex-row items-center gap-x-1`}>
                {icon}
                {text}
            </div>
        </Link>
    )
}