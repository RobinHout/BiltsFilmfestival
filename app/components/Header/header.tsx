"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logoBff from "../Img/LogoBFF.png";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetClose,
} from "@/components/ui/sheet";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/over", label: "Over BFF" },
    { href: "/vorige", label: "Vorige festivals" },
    {
        href: "https://www.google.com/url?q=https%3A%2F%2F1drv.ms%2Ff%2Fs!As8ChS6Tponvi6h45tQDS586xlEDLw%3Fe%3Dgfk9md&sa=D&sntz=1&usg=AOvVaw14hbv5a_AegOsRYcx3vaGC",
        label: "One Drive",
        external: true,
    },
];

function DesktopNav() {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex items-end gap-2 self-end">
            {navItems.map(({ href, label, external }) => {
                const isActive =
                    href !== "/"
                        ? pathname?.startsWith(href)
                        : pathname === "/";
                return (
                    <Link
                        key={href + label}
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className={cn(
                            "px-5 py-2.5 text-[17px] text-white border-b transition-colors",
                            isActive
                                ? "border-white"
                                : "border-transparent hover:border-white"
                        )}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}

function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden h-12 w-12 text-white"
                >
                    <Menu className="h-7 w-7" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className="bg-black text-white border-white/20"
            >
                <SheetHeader>
                    <SheetTitle className="text-white">
                        Bilts Filmfestival
                    </SheetTitle>
                </SheetHeader>
                <div className="mt-6 grid gap-2">
                    {navItems.map(({ href, label, external }) => {
                        const isActive =
                            href !== "/"
                                ? pathname?.startsWith(href)
                                : pathname === "/";
                        return (
                            <SheetClose asChild key={href + label}>
                                <Link
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={
                                        external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className={cn(
                                        "px-4 py-3 text-lg border-b transition-colors",
                                        isActive
                                            ? "border-white text-white"
                                            : "border-transparent text-white/90 hover:border-white/60 hover:text-white"
                                    )}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {label}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </div>
            </SheetContent>
        </Sheet>
    );
}

const Header = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full bg-black text-white px-4 py-2.5"
            role="banner"
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src={logoBff}
                        alt="Logo van het Bilts Filmfestival"
                        width={80}
                        height={80}
                        className="p-1 object-contain w-[80px] h-auto"
                        priority
                    />
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        Bilts Filmfestival
                    </h1>
                </Link>

                <DesktopNav />
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
