"use client";
import { useEffect, useState } from "react";
import { Footer, Navbar } from "./_components";
import { LoadingPage } from "./_components";
import { ToastContainer , toast} from 'react-toastify';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      {!show ? (
        <LoadingPage />
      ) : (
        <div className="relative w-full md:max-w-[78rem] mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       />
    </div>
  );
}
