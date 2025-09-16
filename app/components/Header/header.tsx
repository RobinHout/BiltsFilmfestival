"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
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

// Small classnames helper
// function cn(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const navItems = [
    { href: "/", label: "Home" },
    { href: "/over", label: "Over BFF" },
    { href: "/vorige", label: "Vorige festivals" },
    {
        href: "https://www.google.com/url?q=https%3A%2F%2F1drv.ms%2Ff%2Fs!As8ChS6Tponvi6h45tQDS586xlEDLw%3Fe%3Dgfk9md&sa=D&sntz=1&usg=AOvVaw14hbv5a_AegOsRYcx3vaGC",
        label: "OneDrive",
        external: true,
    },
];

function DesktopNav() {
    const pathname = usePathname();
    return (
        <nav className="hidden md:flex items-center gap-1">
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
                            "group relative rounded-xl px-5 py-3 text-base font-medium transition-colors",
                            isActive
                                ? "text-white"
                                : "text-white/90 hover:text-white"
                        )}
                        aria-current={isActive ? "page" : undefined}
                    >
                        <span>{label}</span>
                        <span
                            className={cn(
                                "pointer-events-none absolute inset-x-3 -bottom-0.5 h-1 rounded-full transition-all",
                                isActive
                                    ? "bg-white"
                                    : "bg-transparent group-hover:bg-white/70"
                            )}
                        />
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
                    <SheetTitle>Bilts Filmfestival</SheetTitle>
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
                                        "rounded-xl px-4 py-3 text-lg transition-colors",
                                        isActive
                                            ? "bg-white/15 text-white"
                                            : "text-white/95 hover:bg-white/10 hover:text-white"
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "sticky top-0 z-50 w-full border-b bg-black text-white",
                scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.18)]" : ""
            )}
            role="banner"
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Site title */}
                <Link href="/" className="flex items-center gap-3">
                    <span className="text-xl font-bold tracking-tight">
                        Bilts Filmfestival
                    </span>
                </Link>

                {/* Desktop Nav */}
                <DesktopNav />

                {/* Mobile Nav */}
                <MobileNav />
            </div>
        </motion.header>
    );
};

export default Header;
