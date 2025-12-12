"use client";

import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowRight, Send, Heart, Zap } from "lucide-react";
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
        ],
        legal: [
            { label: "Privacy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Security", href: "/security" },
        ],
    };

    // Animation variants for staggered reveals
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/20 overflow-hidden">
            {/* Enhanced Decorative Elements - Inspired by Dribbble's artistic footers */}
            <div className="absolute inset-0">
                {/* Floating geometric shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200/30 to-emerald-300/30 rounded-full blur-xl"
                />
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-lg rotate-45 blur-lg"
                />
                {/* Subtle particle-like dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400/40 rounded-full animate-pulse" />
                <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-pulse delay-1000" />
                <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse delay-2000" />
            </div>

            {/* Main Container with Glassmorphism Effect */}
            <div className="relative container mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-teal-100/50 -mt-16 mb-12 overflow-hidden"
                >
                    {/* Main Footer Content */}
                    <div className="py-20 md:py-24 px-8 md:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Brand Column - Supercharged with Artistry */}
                            <motion.div variants={itemVariants} className="lg:col-span-5">
                                <div className="mb-10">
                                    <div className="inline-flex items-center gap-4 p-4 bg-gradient-to-r from-white/90 to-teal-50/70 rounded-2xl border border-teal-100/50 shadow-lg shadow-teal-100/30">
                                        {/* Logo with Glow Effect */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl blur-lg opacity-50 animate-pulse"></div>
                                            <div className="relative w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-xl shadow-teal-500/30 overflow-hidden">
                                                <Image
                                                    src="/images/logo.png"
                                                    alt="SwiftFin Logo"
                                                    width={64}
                                                    height={64}
                                                    className="object-contain p-1"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-3xl bg-gradient-to-r from-gray-900 via-teal-700 to-emerald-600 bg-clip-text text-transparent">
                                                SwiftFin
                                            </span>
                                            <div className="h-1.5 w-20 bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-500 rounded-full mt-2 shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-12 leading-relaxed max-w-sm text-lg font-medium">
                                    Your smart financial companion. Track, manage, and grow your wealth with ease. <Zap className="inline w-5 h-5 text-teal-500 ml-1" />
                                </p>

                                {/* Social Media - Interactive and Cool */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                        Follow Us <Heart className="w-4 h-4 text-red-400" />
                                    </h4>
                                    <div className="flex gap-3">
                                        {[
                                            { icon: Twitter, href: "#", color: "hover:bg-blue-50 hover:text-blue-600 hover:shadow-blue-200/50" },
                                            { icon: Instagram, href: "#", color: "hover:bg-pink-50 hover:text-pink-600 hover:shadow-pink-200/50" },
                                            { icon: Linkedin, href: "#", color: "hover:bg-blue-50 hover:text-blue-700 hover:shadow-blue-200/50" },
                                            { icon: Facebook, href: "#", color: "hover:bg-blue-50 hover:text-blue-600 hover:shadow-blue-200/50" }
                                        ].map((social, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{ y: -4, scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                variants={itemVariants}
                                            >
                                                <Link
                                                    href={social.href}
                                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-gray-500 border border-gray-200 ${social.color} transition-all duration-300 hover:border-current/30 shadow-md hover:shadow-xl`}
                                                >
                                                    <social.icon className="w-6 h-6" />
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Links Columns - Artistic Layout */}
                            <motion.div variants={itemVariants} className="lg:col-span-7">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
                                    {Object.entries(footerLinks).map(([category, links], catIndex) => (
                                        <motion.div
                                            key={category}
                                            variants={itemVariants}
                                            className="relative group"
                                        >
                                            <div className="absolute -left-4 top-0 w-1.5 h-10 bg-gradient-to-b from-teal-400 via-emerald-500 to-cyan-500 rounded-full shadow-sm group-hover:h-12 transition-all duration-300"></div>
                                            <h3 className="font-bold text-gray-900 mb-8 text-xl capitalize flex items-center gap-2">
                                                {category}
                                                <div className="w-2 h-2 bg-teal-400 rounded-full opacity-60"></div>
                                            </h3>
                                            <ul className="space-y-5">
                                                {links.map((link, index) => (
                                                    <motion.li
                                                        key={index}
                                                        whileHover={{ x: 6, scale: 1.02 }}
                                                        variants={itemVariants}
                                                    >
                                                        <Link
                                                            href={link.href}
                                                            className="text-gray-600 hover:text-teal-600 transition-all duration-300 text-base flex items-center gap-3 group relative"
                                                        >
                                                            <div className="w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100"></div>
                                                            {link.label}
                                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                        </Link>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>


                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar - Sleek and Minimalist */}
            <div className="border-t border-gray-100/50 bg-gradient-to-r from-white/90 to-gray-50/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-6">
                                <p className="text-gray-500 text-sm font-medium">
                                    © {new Date().getFullYear()} SwiftFin. All rights reserved.
                                </p>
                                <div className="hidden md:flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                    <Link href="/privacy" className="text-gray-500 hover:text-teal-600 text-sm transition-colors font-medium">
                                        Privacy Policy
                                    </Link>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                    <Link href="/terms" className="text-gray-500 hover:text-teal-600 text-sm transition-colors font-medium">
                                        Terms of Service
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse mr-2 shadow-sm shadow-emerald-400/50"></div>
                                        <span className="text-gray-500 font-medium">All systems operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Back to Top Button - More Dynamic */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-teal-500 via-emerald-600 to-cyan-600 text-white rounded-2xl shadow-2xl shadow-teal-500/40 flex items-center justify-center hover:shadow-3xl hover:shadow-teal-500/50 transition-all duration-300 z-50 group overflow-hidden"
                aria-label="Back to top"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <ArrowRight className="w-7 h-7 -rotate-90 group-hover:-translate-y-2 transition-transform relative z-10" />
                {/* Subtle inner glow */}
                <div className="absolute inset-2 bg-white/10 rounded-xl blur-sm"></div>
            </motion.button>
        </footer>
    );
}
