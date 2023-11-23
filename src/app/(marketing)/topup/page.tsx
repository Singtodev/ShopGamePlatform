"use client"

import { useSession} from "next-auth/react";
import { NotLoginPage } from "../_components/screen/not_login";


const TopUpPage = () => {
  const { data: session} = useSession();

  if(session){
    return (<div>เติมเงิิน</div>)
  }

  return <NotLoginPage />;
};

export default TopUpPage;
