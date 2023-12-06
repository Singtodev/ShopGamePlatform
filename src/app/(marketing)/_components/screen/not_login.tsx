import {signIn} from "next-auth/react";
export const NotLoginPage = () => {
    return (
      <div className="relative w-full min-h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4">
                 <span className="text-slate-500 text-2xl">เอ๊ะ... ! ดูเหมือนว่าคุณยังไม่ได้เข้าสู่ระบบ</span>
                 <span className="text-slate-500 text-md">โปรดเข้าสู่ระบบเพื่อดำเนินการต่อ</span>
                 <button
                    className="bg-main-cc-2 border border-main-cc-1 px-6 rounded-md w-[20rem]"
                    onClick={() => signIn()}>เข้าสู่ระบบ
                 </button>
            </div>
      </div>
    );
  };
  