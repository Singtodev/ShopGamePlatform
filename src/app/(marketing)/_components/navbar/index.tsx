"use client"
import { useSession } from "next-auth/react";
import { BuildMenu } from "./module/build_menu";

export const Navbar = () => {
  const {data: session} = useSession();
  return (
    <div className="flex flex-row justify-between py-3 mt-2 mb-2 lg:px-0 px-4 transition-all duration-300">
      <div className="logo uppercase font-bold">MYRANGERSHOP</div>
      <div className="menu hidden md:flex">
        <BuildMenu session={session} />
      </div>
    </div>
  );
};
