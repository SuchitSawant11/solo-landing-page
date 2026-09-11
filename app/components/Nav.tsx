"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
    Home,
    Compass,
    GraduationCap,
    Trophy,
    UserRound,
    ArrowRight,
    Menu,
    X,
} from "lucide-react";

const NAV_ITEMS = [
    {
        label: "Home",
        href: "#hero",
        id: "hero",
        icon: Home,
    },
    {
        label: "Discover",
        href: "#discover",
        id: "discover",
        icon: Compass,
    },
    {
        label: "Learn & Build",
        href: "#learn",
        id: "learn",
        icon: GraduationCap,
    },
    {
        label: "Prove Skills",
        href: "#prove",
        id: "prove",
        icon: Trophy,
    },
    {
        label: "Profile",
        href: "#profile",
        id: "profile",
        icon: UserRound,
    },
];

export default function Nav() {
    const [activeSection, setActiveSection] = useState("hero");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 160;

            let currentSection = "hero";

            for (const item of NAV_ITEMS) {
                const section = document.getElementById(item.id);

                if (section) {
                    const sectionTop = section.offsetTop;

                    if (scrollPosition >= sectionTop) {
                        currentSection = item.id;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (id: string) => {
        setActiveSection(id);
        setMobileOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
            <nav
                className="
          mx-auto flex max-w-[1530px] items-center
          rounded-full
          border border-white/80
          bg-white/85
          px-3 py-2
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          backdrop-blur-xl
          sm:px-4
        "
            >
                {/* ================= LOGO + TAGLINE ================= */}
                <div className="flex shrink-0 items-center">
                    <a
                        href="#hero"
                        onClick={() => handleNavClick("hero")}
                        className="flex items-center"
                    >
                        <Image
                            src="/solo-logo.png"
                            alt="SOLO"
                            width={115}
                            height={46}
                            className="h-8 w-auto object-contain sm:h-9 transition-transform duration-300 group-hover:scale-[1.03]"
                            priority
                        />
                    </a>

                    {/* Divider */}
                    <div className="mx-3 hidden h-8 w-px bg-black/10 lg:block" />

                    {/* Tagline */}
                    <span className="hidden whitespace-nowrap text-sm text-gray-500 lg:block">
                        The{" "}
                        <span className="font-medium text-solo-orange">
                            Career Connect
                        </span>{" "}
                        Platform
                    </span>
                </div>

                {/* ================= DESKTOP NAV ================= */}
                <div className="ml-auto hidden items-center gap-1 lg:flex">
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => handleNavClick(item.id)}
                                className={`
                  group flex items-center gap-2
                  rounded-full
                  px-4 py-2.5
                  text-sm font-medium
                  transition-all duration-200
                  ${isActive
                                        ? "bg-solo-orange/10 text-solo-orange"
                                        : "text-gray-600 hover:bg-black/[0.04] hover:text-gray-900"
                                    }
                `}
                            >
                                <Icon
                                    size={17}
                                    strokeWidth={isActive ? 2.3 : 1.8}
                                    className="transition-transform duration-200 group-hover:scale-105"
                                />

                                <span>{item.label}</span>

                                {/* Active underline */}
                                {isActive && (
                                    <span className="absolute mt-8 h-[2px] w-5 rounded-full bg-solo-orange" />
                                )}
                            </a>
                        );
                    })}
                </div>

                {/* ================= JOIN SOLO ================= */}
                <a
                    href="https://app.thesolo.network/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            group ml-3 hidden
            items-center gap-2
            rounded-full
            bg-solo-orange
            px-5 py-3
            text-sm font-bold text-white
            shadow-[0_8px_20px_rgba(253,67,34,0.22)]
            transition-all duration-200
            hover:-translate-y-0.5
            hover:shadow-[0_10px_25px_rgba(253,67,34,0.3)]
            lg:flex
          "
                >
                    <span>Join SOLO</span>

                    <ArrowRight
                        size={17}
                        className="
              transition-transform duration-200
              group-hover:translate-x-1
            "
                    />
                </a>

                {/* ================= MOBILE MENU BUTTON ================= */}
                <button
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="
            ml-auto
            flex h-10 w-10
            items-center justify-center
            rounded-full
            text-gray-700
            transition
            hover:bg-black/5
            lg:hidden
          "
                >
                    {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </nav>

            {/* ================= MOBILE MENU ================= */}
            {mobileOpen && (
                <div
                    className="
            mx-3 mt-2
            rounded-3xl
            border border-white/80
            bg-white/95
            p-3
            shadow-[0_15px_40px_rgba(0,0,0,0.1)]
            backdrop-blur-xl
            sm:mx-5
            lg:hidden
          "
                >
                    <div className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`
                    flex items-center gap-3
                    rounded-2xl
                    px-4 py-3
                    text-sm font-medium
                    transition
                    ${isActive
                                            ? "bg-solo-orange/10 text-solo-orange"
                                            : "text-gray-600 hover:bg-black/[0.04]"
                                        }
                  `}
                                >
                                    <Icon size={18} />

                                    <span>{item.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    <a
                        href="https://app.thesolo.network/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              mt-2 flex items-center justify-center gap-2
              rounded-2xl
              bg-solo-orange
              px-4 py-3
              text-sm font-bold text-white
              shadow-[0_8px_20px_rgba(253,67,34,0.2)]
            "
                    >
                        Join SOLO
                        <ArrowRight size={17} />
                    </a>
                </div>
            )}
        </header>
    );
}