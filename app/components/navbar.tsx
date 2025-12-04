"use client";

import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
            <Link href="/" className="flex items-center gap-2">
                {/* Logo placeholder - replacing text with logo later if needed */}
                <div className="w-8 h-8 bg-primary-teal rounded-lg flex items-center justify-center text-white font-bold">
                    S
                </div>
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
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t border-gray-100">
                    <div className="flex flex-col p-6 gap-4">
                        <Link
                            href="/#features"
                            className="py-3 px-4 text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="py-3 px-4 text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/who-is-it-for"
                            className="py-3 px-4 text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Who Is It For
                        </Link>
                        <Link
                            href="/about"
                            className="py-3 px-4 text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <AnimatedDownloadButton className="w-full py-3 text-base shadow-lg mt-2" text="Download" />
                    </div>
                </div>
            )}
        </nav>
    );
}
