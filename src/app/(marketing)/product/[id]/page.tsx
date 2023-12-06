"use client"
import { useSession} from "next-auth/react";
import { NotLoginPage } from "@/app/(marketing)/_components/screen/not_login";
const ProductView = ({
    params: { id },
  }: {
    params: { id: string }
  }) => {


    const { data: session} = useSession();

    if(session){
      return <div>{id}</div>
    }

    return <NotLoginPage />
  }


export default ProductView;
