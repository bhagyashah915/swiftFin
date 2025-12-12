"use client";

import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Floating Navbar Container */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="pointer-events-auto w-full max-w-[1400px] flex items-center justify-between px-8 py-4"
                >
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-between w-full">
                        {/* Left - Logo */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                                <Image
                                    src="/images/logo.png"
                                    alt="SwiftFin Logo"
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                        </Link>

                        {/* Right - Nav Links + Download Button in Capsule */}
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-3 py-2 shadow-sm">
                            <Link
                                href="/features"
                                className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-full transition-all"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-full transition-all"
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/blog"
                                className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-full transition-all"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about"
                                className="px-5 py-2 text-sm font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-full transition-all"
                            >
                                About Us
                            </Link>
                            <AnimatedDownloadButton
                                className="h-10 px-6 rounded-full text-sm font-bold transition-all flex items-center justify-center ml-2"
                                text="Download"
                            />
                        </div>
                    </div>

                    {/* Mobile Logo (centered when menu is closed) */}
                    <Link href="/" className="md:hidden absolute left-1/2 -translate-x-1/2">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <Image
                                src="/images/swiftfin-logo.png"
                                alt="SwiftFin Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                        </div>
                    </Link>

                    {/* Mobile empty div for layout balance */}
                    <div className="md:hidden w-10"></div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-60 bg-white/95 backdrop-blur-xl md:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <Image src="/images/swiftfin-logo.png" alt="Logo" width={40} height={40} />
                                <span className="font-sora font-bold text-xl">SwiftFin</span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <nav className="space-y-2">
                                <Link
                                    href="/#features"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 text-lg font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-xl transition-all"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="/#how-it-works"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 text-lg font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-xl transition-all"
                                >
                                    How It Works
                                </Link>
                                <Link
                                    href="/who-is-it-for"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 text-lg font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-xl transition-all"
                                >
                                    Who Is It For
                                </Link>
                                <Link
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 text-lg font-semibold text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-xl transition-all"
                                >
                                    About Us
                                </Link>
                            </nav>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 border-t border-gray-100 bg-white">
                            <AnimatedDownloadButton className="w-full py-4 text-lg" text="Download App" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
