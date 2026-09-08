
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

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-solo-bg/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-6 px-6">

                <a
                    href="#top"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2"
                >
                    <Image
                        src="/solo-logo.png"
                        alt="SOLO Logo"
                        width={70}
                        height={70}
                        className="h-10 w-auto object-contain"
                    />

                    <span className="hidden whitespace-nowrap font-heading text-sm text-solo-orange sm:inline">
                        The Career Connect Platform
                    </span>
                </a>

                <nav className="hidden flex-1 items-center justify-center gap-8 font-body text-sm text-neutral-700 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-solo-orange"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="ml-auto hidden shrink-0 items-center gap-4 lg:flex">
                    <a
                        href={SOLO_LOGIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium transition-colors hover:text-solo-orange"
                    >
                        Login
                    </a>

                    <a
                        href={SOLO_SIGNUP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-solo-orange px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                    >
                        Sign Up
                    </a>
                </div>

                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 transition-colors hover:bg-black/5 lg:hidden"
                >
                    <span className="sr-only">Menu</span>

                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block h-0.5 w-6 bg-current transition-transform ${
                                open ? "translate-y-2 rotate-45" : ""
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-6 bg-current transition-opacity ${
                                open ? "opacity-0" : "opacity-100"
                            }`}
                        />

                        <span
                            className={`block h-0.5 w-6 bg-current transition-transform ${
                                open ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        />
                    </div>
                </button>
            </div>

            {open && (
                <div className="border-t border-black/5 bg-solo-bg lg:hidden">
                    <nav className="mx-auto flex max-w-[1240px] flex-col px-6 py-4 font-body text-sm text-neutral-700">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="border-b border-black/5 py-3 transition-colors hover:text-solo-orange"
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 pt-4">
                            <a
                                href={SOLO_LOGIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="flex-1 rounded-full border border-solo-orange px-5 py-2.5 text-center text-sm font-medium text-solo-orange transition-colors hover:bg-solo-orange hover:text-white"
                            >
                                Login
                            </a>

                            <a
                                href={SOLO_SIGNUP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="flex-1 rounded-full bg-solo-orange px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-orange-600"
                            >
                                Sign Up
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

