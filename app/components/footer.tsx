"use client";

import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const footerLinks = {
        product: [
            { label: "Features", href: "/#features" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Pricing", href: "/pricing" },
        ],
        company: [
            { label: "About", href: "/about" },
            { label: "Blog", href: "/blog" },
            { label: "Careers", href: "/careers" },
        ],
        legal: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Security", href: "/security" },
        ],
    };

    return (
        <footer className="relative bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                {/* Main Footer Content */}
                <div className="py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                        {/* Brand Column */}
                        <div className="lg:col-span-5">
                            <Link href="/" className="inline-block mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">SF</span>
                                    </div>
                                    <span className="font-bold text-2xl text-gray-900">SwiftFin</span>
                                </div>
                            </Link>

                            <p className="text-gray-600 mb-8 leading-relaxed max-w-sm">
                                Your smart financial companion. Track, manage, and grow your wealth with ease.
                            </p>

                            {/* Social Media - Minimal */}
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
                                        className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-500 hover:text-teal-600 hover:bg-gray-50 transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                                {Object.entries(footerLinks).map(([category, links]) => (
                                    <div key={category}>
                                        <h3 className="font-semibold text-gray-900 mb-4 capitalize">
                                            {category}
                                        </h3>
                                        <ul className="space-y-3">
                                            {links.map((link, index) => (
                                                <li key={index}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-sm"
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
                <div className="py-6 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} SwiftFin. All rights reserved.
                        </p>

                        <div className="flex items-center gap-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-500">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:support@swiftfin.com" className="hover:text-teal-600 transition-colors">
                                    support@swiftfin.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300 z-50"
                aria-label="Back to top"
            >
                <ArrowRight className="w-5 h-5 -rotate-90" />
            </motion.button>
        </footer>
    );
}
