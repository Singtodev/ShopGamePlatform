import { Navbar } from "./_components"
export default function RootLayout({ children } : {
    children: React.ReactNode
}) { 
    return (
        <div className="w-full md:max-w-[78rem] mx-auto">
            <Navbar />
            {children}
        </div>
    )
}