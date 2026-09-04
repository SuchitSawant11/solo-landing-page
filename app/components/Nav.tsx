"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "#top" },
    { label: "Discover", href: "#discover" },
    { label: "Learn & Grow", href: "#learn" },
    { label: "Prove Skills", href: "#prove" },
    { label: "Profile", href: "#profile" },
];

const SOLO_LOGIN_URL = "https://app.thesolo.network/signin";
const SOLO_SIGNUP_URL = "https://app.thesolo.network/signup";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-solo-bg/90 backdrop-blur border-b border-black/5">
            <div className="mx-auto max-w-[1240px] px-6 h-16 flex items-center gap-6">
                {/* Logo */}
                <a href="#top" className="flex items-center gap-2 shrink-0">
                    <Image src="/solo-logo.png" alt="Solo Logo" width={100} height={100}  />
                    <span className="hidden sm:inline font-heading text-sm text-solo-orange whitespace-nowrap">
                        The Career Connect Platform
                    </span>
                </a>

                {/* Desktop links — centered in remaining space */}
                <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 font-body text-sm text-neutral-700">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-solo-orange transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop actions */}
                <div className="hidden lg:flex items-center gap-4 shrink-0 ml-auto lg:ml-0">
                    <a
                        href={SOLO_LOGIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-solo-orange transition-colors"
                    >
                        Login
                    </a>

                    <a
                        href={SOLO_SIGNUP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium bg-solo-orange text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden ml-auto"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {open ? (
                            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <nav className="lg:hidden flex flex-col gap-1 px-6 pb-4 font-body text-sm">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="py-2 text-neutral-700 hover:text-solo-orange"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex gap-3 pt-2">
                        <a href={SOLO_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 border rounded-lg">
                            Login
                        </a>
                        <a href={SOLO_SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 bg-solo-orange text-white rounded-lg">
                            Sign Up
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}