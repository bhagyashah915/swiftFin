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
        <footer className="relative bg-white font-['Montserrat']">
            {/* Big Outer Rounded Box */}
            <div className="container mx-auto px-6 md:px-12 py-12">
                <div className="relative bg-gradient-to-br from-white via-teal-50 to-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-teal-100 overflow-hidden">

                    {/* SwiftFin Background Text */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                        <h2 className="text-[15vw] md:text-[180px] lg:text-[220px] font-black text-teal-600/5 select-none font-['Montserrat'] tracking-tighter">
                            SwiftFin
                        </h2>
                    </div>

                    {/* Decorative Image Between Boxes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none z-0 mix-blend-multiply opacity-20">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                            alt="Financial decoration"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Inner Rounded Box with Content */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-white z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Brand Column */}
                            <div className="lg:col-span-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-teal-200 shadow-sm">
                                        <Image
                                            src="/images/logo.png"
                                            alt="SwiftFin Logo"
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-bold text-2xl text-gray-900 font-['Montserrat']">SwiftFin</span>
                                </div>

                                <p className="text-gray-600 mb-8 max-w-sm font-['Montserrat']">
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
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-teal-600 hover:bg-teal-50 border border-teal-200 transition-all duration-200"
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
                                            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider font-['Montserrat']">
                                                {category}
                                            </h3>
                                            <ul className="space-y-3">
                                                {links.map((link, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={link.href}
                                                            className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-['Montserrat']"
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

                        {/* Bottom Bar Inside Inner Box */}
                        <div className="border-t border-gray-200 mt-12 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-['Montserrat']">
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
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-teal-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-teal-700 transition-all duration-200 z-50 font-['Montserrat']"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </motion.button>
        </footer>
    );
}
