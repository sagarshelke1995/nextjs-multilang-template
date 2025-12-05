import React from 'react'
import Navbar from "./navbar"
import { ModeToggle } from "./ModeToggle";

import { PartyPopper, ChevronRight } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from './languageSwitcher';  
import {Button } from "@/components/ui/button"


const Header = () => {
  return (
    <>
     <header className= "w-full mx-auto transition-all duration-300 flex justify-between items-center py-5 px-6 sm:px-8 lg:px-20 lg:px-24 mt-1">
      <Link  href="/" className="select-none hover:bg-secondary py-1 px-3 rounded-md flex items-center gap-1.5">
        <h1 className="text-lg font-bold">RobloxPlayer.exe</h1>
        <PartyPopper className="!h-4 !w-4" />
      </Link>

      <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
        <Navbar />
     </nav>

      <div className="flex items-center space-x-2 lg:space-x-3">
             <ModeToggle />
      <LanguageSwitcher/>
               <Button asChild>
                <Link href="/download" className="items-center gap-1 lg:flex"> Download
                    <ChevronRight  className="!h-4 !w-4" />
                </Link>
          </Button>
           {/* Mobile Menu Button */}
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button> */}
          </div>

    </header>
    </>
  )
}

export default Header