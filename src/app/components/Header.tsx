import { Menu } from "lucide-react";
import Link from "next/link";
import { VscRobot } from "react-icons/vsc";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Technology from "./Technology";

const links = [
  { name: "Features", path: "#features" },
  { name: "Technology", path: "#technology" },
  { name: "Agents", path: "#agent" },
  { name: "Pricing", path: "#pricing" },
  { name: "Contact", path: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black py-4 px-4 sm:px-6 font-[sans-serif] min-h-[75px] tracking-wide z-50 shadow shadow-purple-500 flex justify-center">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <VscRobot className="text-3xl sm:text-4xl font-bold text-purple-600" />
          <h1 className="text-lg sm:text-xl font-bold text-white">Agentia World</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-4">
            {links.map((link, index) => (
              <li key={index} className="px-3">
                <Link href={link.path}>
                  <span className="hover:text-[#FFF8DC] text-[#e0d8d8]">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Launch Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button className="px-5 py-2 sm:px-6 sm:py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-sm sm:text-base lg:text-lg">
            Launch Console
          </button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="text-2xl text-white" />
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <ul className="mt-4 space-y-4">
                {links.map((list, index) => (
                  <li key={index} className="mx-5 text-xl font-bold">
                    <Link href={list.path}>
                      <span>{list.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className=" sm:flex items-center gap-2">
                <button className="px-5 py-2 sm:px-6 sm:py-3 w-full text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-purple-500">
                  Launch Console
                </button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

