"use client";
import {signIn} from "next-auth/react";
const LoginPage = () => {
    return (
        <div>
            หน้าเข้าสู่ระบบ 
            <button onClick={() => signIn(
                'credentials', 
                { 
                  username: 'karn.yong@melivecode.com', 
                  password: 'melivecode',
                  redirect: true,
                  callbackUrl: '/'
                }
                )}>เข้าเลย</button>
        </div>
    )
}

export default LoginPage;