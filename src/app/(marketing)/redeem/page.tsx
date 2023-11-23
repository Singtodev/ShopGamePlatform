"use client"

import { useSession} from "next-auth/react";
import { NotLoginPage } from "../_components/screen/not_login";


const RedeemPage = () => {
  const { data: session} = useSession();

  if(session){
    return(<div>แลกไอเท็มโค้ด</div>)
  }

  return <NotLoginPage />;
};

export default RedeemPage;
