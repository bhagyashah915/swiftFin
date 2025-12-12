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
        <footer className="relative bg-white">
            {/* Decorative Teal Shape at Top */}
            <div className="relative overflow-hidden">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-[100%] blur-3xl opacity-70"></div>

                {/* Main Container with Elevated Design */}
                <div className="relative container mx-auto px-6 md:px-12">
                    <div className="bg-gradient-to-b from-white to-gray-50/30 border border-gray-100 rounded-3xl shadow-lg shadow-teal-100/30 -mt-8 mb-8 overflow-hidden">

                        {/* Main Footer Content */}
                        <div className="py-16 md:py-20 px-8 md:px-12">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                                {/* Brand Column - Enhanced */}
                                <div className="lg:col-span-5">
                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-4 p-3 bg-gradient-to-r from-white to-teal-50/50 rounded-2xl border border-teal-100/50">
                                            {/* Logo Container with Unique Shape */}
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl blur-md opacity-40"></div>
                                                <div className="relative w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                                                    <span className="text-white font-bold text-xl">SF</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-teal-700 bg-clip-text text-transparent">
                                                    SwiftFin
                                                </span>
                                                <div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mt-1"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-10 leading-relaxed max-w-sm text-lg">
                                        Your smart financial companion. Track, manage, and grow your wealth with ease.
                                    </p>

                                    {/* Newsletter Subscription */}
                                    <div className="mb-10">
                                        <h4 className="font-semibold text-gray-900 mb-4">Stay Updated</h4>
                                        <div className="flex gap-2 max-w-md">
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                                            />
                                            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-2">
                                                Join
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Social Media - Enhanced */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                                        <div className="flex gap-2">
                                            {[
                                                { icon: Twitter, href: "#", color: "hover:bg-blue-50 hover:text-blue-600" },
                                                { icon: Instagram, href: "#", color: "hover:bg-pink-50 hover:text-pink-600" },
                                                { icon: Linkedin, href: "#", color: "hover:bg-blue-50 hover:text-blue-700" },
                                                { icon: Facebook, href: "#", color: "hover:bg-blue-50 hover:text-blue-600" }
                                            ].map((social, index) => (
                                                <motion.div
                                                    key={index}
                                                    whileHover={{ y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Link
                                                        href={social.href}
                                                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-gray-500 border border-gray-200 ${social.color} transition-all duration-300 hover:border-current/20`}
                                                    >
                                                        <social.icon className="w-5 h-5" />
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Links Columns - Enhanced */}
                                <div className="lg:col-span-7">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
                                        {Object.entries(footerLinks).map(([category, links]) => (
                                            <div key={category} className="relative">
                                                <div className="absolute -left-4 top-0 w-1 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></div>
                                                <h3 className="font-bold text-gray-900 mb-6 text-lg capitalize">
                                                    {category}
                                                </h3>
                                                <ul className="space-y-4">
                                                    {links.map((link, index) => (
                                                        <motion.li
                                                            key={index}
                                                            whileHover={{ x: 4 }}
                                                        >
                                                            <Link
                                                                href={link.href}
                                                                className="text-gray-600 hover:text-teal-600 transition-colors duration-300 text-base flex items-center gap-2 group"
                                                            >
                                                                <div className="w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                                {link.label}
                                                            </Link>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Contact Card */}
                                    <div className="mt-12 md:mt-16 p-6 bg-gradient-to-r from-teal-50 to-emerald-50/50 rounded-2xl border border-teal-100">
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>
                                                <p className="text-gray-600 text-sm">Our support team is here 24/7</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-teal-100">
                                                    <Mail className="w-5 h-5 text-teal-600" />
                                                </div>
                                                <div>
                                                    <p className="text-gray-500 text-sm">Email us at</p>
                                                    <a href="mailto:support@swiftfin.com" className="font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                                                        support@swiftfin.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Enhanced */}
            <div className="border-t border-gray-100 bg-gradient-to-r from-white to-gray-50/50">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="flex items-center gap-6">
                                <p className="text-gray-500 text-sm">
                                    © {new Date().getFullYear()} SwiftFin. All rights reserved.
                                </p>
                                <div className="hidden md:flex items-center gap-4">
                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                    <Link href="/privacy" className="text-gray-500 hover:text-teal-600 text-sm transition-colors">
                                        Privacy Policy
                                    </Link>
                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                    <Link href="/terms" className="text-gray-500 hover:text-teal-600 text-sm transition-colors">
                                        Terms of Service
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2"></div>
                                        <span className="text-gray-500">All systems operational</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Back to Top Button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 text-white rounded-2xl shadow-xl shadow-teal-500/30 flex items-center justify-center hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 z-50 group"
                aria-label="Back to top"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <ArrowRight className="w-6 h-6 -rotate-90 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
        </footer>
    );
}