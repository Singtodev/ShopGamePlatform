import { FaRegCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
interface BuildBoardItemProps{
    title: String,
    date: String,
    time: String
}

export function BuildBoardItem({
    title,
    date,
    time
}:BuildBoardItemProps){
    return (
        <div className="border border-gray-200 p-2 rounded-md">
            <div className="text-slate-400 opacity-80 mb-2">{title}</div>
            <div className="flex justify-between text-white">
                <div className="flex flex-row gap-x-2 items-center justify-center text-sm">
                    <FaRegCalendarAlt /> 
                    <span>{date}</span>
                </div>
                <div className="flex flex-row gap-x-2 items-center justify-center text-sm">
                    <IoTimeOutline />
                    <span>{time}</span>
                </div>
  
            </div>
        </div>
    )
}