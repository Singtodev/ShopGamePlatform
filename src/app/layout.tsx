import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { CustomProviders } from "./provider";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "MyRangerShop",
  description: `website games and game shops utilized advanced AI and machine learning algorithms to offer personalized game recommendations based on users' preferences,`,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomProviders>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </CustomProviders>
  );
}
