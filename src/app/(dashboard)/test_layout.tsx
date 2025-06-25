import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* LEFT - Fixed sidebar with better responsive widths */}
            <div className="w-[60px] sm:w-[70px] md:w-[80px] lg:w-[220px] xl:w-[260px] 2xl:w-[300px] p-2 sm:p-3 lg:p-4 flex flex-col h-screen bg-white border-r border-gray-200">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-2 mb-4 min-h-[40px]"
                >
                    <Image src="/logo.png" alt="logo" width={32} height={32} className="flex-shrink-0" />
                    <span className="hidden lg:block font-bold text-nowrap">JB Girls</span>
                </Link>
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <Menu />
                </div>
            </div>
            
            {/* RIGHT - Content area with calculated width */}
            <div className="flex-1 bg-[#F7F8FA] flex flex-col h-screen min-w-0">
                {/* Fixed Navbar */}
                <div className="flex-shrink-0 border-b border-gray-200">
                    <Navbar />
                </div>
                
                {/* Scrollable content with better padding */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-3 sm:p-4 lg:p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}