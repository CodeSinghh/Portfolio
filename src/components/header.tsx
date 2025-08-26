'use client';

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Fireworks from "./ui/fireworks";

const Header = () => {
  return (
    <header className="flex flex-col items-center py-8 mb-8">
      <div className="text-center">
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter">
          Dhiraj Cloud Notes
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Learning in the cloud, one note a day.
        </p>
      </div>
      <div className="w-full my-4 flex items-center justify-center">
        <Separator className="w-1/4 opacity-30" />
        <div className="relative mx-4 h-10">
          <Link 
            href="/portfolio" 
            className="group relative inline-flex items-center justify-center px-8 py-2 
                     bg-foreground text-background font-headline text-sm font-bold 
                     rounded-[4px] overflow-hidden transition-all duration-300
                     hover:bg-foreground/90 hover:scale-105 hover:shadow-lg"
          >
            <div className="absolute inset-0 w-full h-full">
              <Fireworks />
            </div>
            <span className="relative z-20">PORTFOLIO</span>
          </Link>
        </div>
        <Separator className="w-1/4 opacity-30" />
      </div>
    </header>
  );
};

export default Header;
