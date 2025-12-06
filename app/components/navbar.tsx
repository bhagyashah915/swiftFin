"use client";

import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
            <Link href="/" className="flex items-center gap-2">
                {/* Logo placeholder - replacing text with logo later if needed */}
                <Image
                    src="/images/logo.png"
                    alt="SwiftFin Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                />
                <h1 className="font-bold text-2xl text-neutral-slate">SwiftFin</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-neutral-slate font-medium">
                <Link href="/#features" className="hover:text-primary-teal transition-colors">Features</Link>
                <Link href="/#how-it-works" className="hover:text-primary-teal transition-colors">How it Works</Link>
                <Link href="/who-is-it-for" className="hover:text-primary-teal transition-colors">Who Is It For</Link>
                <Link href="/about" className="hover:text-primary-teal transition-colors">About Us</Link>
            </div>

            {/* Desktop Download Button */}
            <div className="hidden md:flex gap-4">
                <AnimatedDownloadButton className="px-6 py-3 text-base shadow-lg" text="Download" />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-neutral-slate hover:text-primary-teal transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-x-0 top-[72px] bottom-0 bg-white z-40 md:hidden overflow-y-auto animate-fade-in-up">
                    <div className="flex flex-col p-6 gap-4 min-h-full">
                        <Link
                            href="/#features"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/who-is-it-for"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Who Is It For
                        </Link>
                        <Link
                            href="/about"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <div className="mt-4">
                            <AnimatedDownloadButton className="w-full py-4 text-lg shadow-lg" text="Download" />
                        </div>

                        {/* Extra padding at bottom for safe area */}
                        <div className="h-10"></div>
                    </div>
                </div>
            )}
        </nav>
    );
}
