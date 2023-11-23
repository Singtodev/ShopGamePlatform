import { BuildBoardItem } from "./module/board_item"

interface BuildBoardProps{
    title: String
}

export function BuildBoard({
    title
}: BuildBoardProps){
    return (
        <div className="relative border border-slate-100 rounded-md py-4">
            <div className="bg-main-cc-1 inline-block px-3 rounded-md absolute -top-8 right-0">{title}</div>
            <div className="relative max-w-[24rem] h-[18rem] overflow-y-scroll mx-auto p-3 flex flex-col gap-3">
                
                <BuildBoardItem 
                date="20/11/2023"
                time="21:12"
                title="วงล้อเติมสต็อกของแล้ว !!สุ่มเริ่มต้นที่ 99.- ได้รับไอดีแน่นอน " />

                <BuildBoardItem 
                date="15/11/2023"
                time="21:12"
                title="🚨 ตอนนี้วงล้อหมดแล้วนะครับทั้ง 80 ไอดี" />

                <BuildBoardItem 
                date="11/11/2023"
                time="21:12"
                title="วงล้อ 99 บาทที่ทุกคนรอคอย มาแล้ว !!
                ไอดียังไม่เชื่อมนะครับ เลือกเชื่อมได้ LINE / Email
                ลงไป 80 ไอดี รีบสุ่มก่อนหมดนะครับ 😋" />

                <BuildBoardItem 
                date="06/11/2023"
                time="21:12"
                title="ตอนนี้วงล้อ ออกหมดทุกไอดีแล้วนะครับ เจอกันล็อตหน้าคู่โหด ๆ มาแน่ 🙇‍♂️" />
                
                <div className="text-center cursor-pointer">ดูเพิ่มเติม</div>
            </div>
        </div>
    )
}