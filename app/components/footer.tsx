"use client";

import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    const footerLinks = {
        product: [
            { label: "Features", href: "/#features" },
            { label: "How It Works", href: "/#how-it-works" },
        ],
        company: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Contact Us", href: "/contact" },
        ],
        legal: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Security", href: "/security" },
        ],
    };

    return (
        <footer className="relative bg-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                                <Image
                                    src="/images/logo.png"
                                    alt="SwiftFin Logo"
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-2xl text-gray-900">SwiftFin</span>
                        </div>

                        <p className="text-gray-600 mb-8 max-w-sm">
                            Your smart financial companion. Track, manage, and grow your wealth with ease.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-3">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Facebook, href: "#" }
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50 border border-gray-200 transition-all duration-200"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {links.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-600 hover:text-teal-600 transition-colors text-sm"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} SwiftFin. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="hover:text-teal-600 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-teal-600 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Ticker - Scrolling Text Animation */}
            <div className="relative bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 overflow-hidden">
                <div className="py-8 md:py-12">
                    {/* Scrolling ticker - duplicate content for seamless loop */}
                    <div className="flex whitespace-nowrap">
                        <motion.div
                            className="flex items-center gap-16"
                            animate={{ x: [0, -2400] }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            {/* Repeat the ticker text multiple times for seamless scrolling */}
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="flex items-center gap-16">
                                    <span className="text-6xl md:text-8xl font-bold text-white">
                                        DOWNLOAD NOW
                                    </span>
                                    <span className="text-6xl md:text-8xl text-white/60 font-bold">*</span>
                                    <span className="text-6xl md:text-8xl font-bold text-white">
                                        GET STARTED TODAY
                                    </span>
                                    <span className="text-6xl md:text-8xl text-white/60 font-bold">*</span>
                                    <span className="text-6xl md:text-8xl font-bold text-white">
                                        SWIFTFIN
                                    </span>
                                    <span className="text-6xl md:text-8xl text-white/60 font-bold">*</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button - Simplified */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-all duration-200 z-50"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </footer>
    );
}
