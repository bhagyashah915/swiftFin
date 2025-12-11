"use client";

import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight, Sparkles, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    const footerLinks = {
        mainPages: [
            { label: "Home", href: "/" },
            { label: "Features", href: "/#features" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Pricing", href: "/pricing" },
            { label: "Contact", href: "/contact" },
        ],
        other: [
            { label: "About", href: "/about" },
            { label: "Team", href: "/team" },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
            { label: "Case Studies", href: "/case-studies" },
        ],
        legal: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Cookie Policy", href: "/cookies" },
            { label: "GDPR", href: "/gdpr" },
            { label: "Security", href: "/security" },
        ],
        resources: [
            { label: "Documentation", href: "/docs" },
            { label: "API", href: "/api" },
            { label: "Integrations", href: "/integrations" },
            { label: "Help Center", href: "/help" },
            { label: "Community", href: "/community" },
        ]
    };

    return (
        <footer className="relative bg-gradient-to-b from-white via-teal-50/20 to-slate-50 pt-32 pb-16 overflow-hidden border-t border-teal-100">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Gradient Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent"></div>

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Geometric Shapes */}
                <motion.div
                    className="absolute top-40 right-10 w-64 h-64 border-4 border-teal-200/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-40 left-10 w-48 h-48 border-2 border-emerald-200/15 rounded-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                {/* Wave Pattern */}
                <div className="absolute -top-32 left-0 right-0 h-32">
                    <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25"
                            className="fill-teal-100"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,119.13-4.36,33-9.36,56.48-25.45,76.14-46.7,23.43-25.38,39.3-57,59.15-84.34,18-25.44,41.14-56,68.54-80.49C1051.79,9.87,1126.83,7.69,1200,17.22V0Z"
                            opacity=".5"
                            className="fill-teal-50"
                        />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Newsletter Section - Premium Style */}


                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16 mb-16">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">SF</span>
                                </div>
                                <div className="absolute -inset-2 bg-teal-500/20 rounded-3xl blur-xl -z-10"></div>
                            </div>
                            <div>
                                <h2 className="font-bold text-3xl text-slate-900 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                    SwiftFin
                                </h2>
                                <p className="text-slate-500 text-sm">Financial Intelligence, Simplified</p>
                            </div>
                        </div>

                        <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
                            Empowering millions with smart digital financial tools for a better tomorrow.
                            Join the revolution of intelligent financial management.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-3 mb-8">
                            {[
                                { icon: Facebook, color: "hover:bg-blue-600", label: "Facebook" },
                                { icon: Twitter, color: "hover:bg-sky-500", label: "Twitter" },
                                { icon: Instagram, color: "hover:bg-pink-600", label: "Instagram" },
                                { icon: Linkedin, color: "hover:bg-blue-700", label: "LinkedIn" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-600 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200">
                                <Shield className="w-4 h-4 text-teal-500" />
                                <span className="text-sm text-slate-700">Bank-level Security</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200">
                                <Zap className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm text-slate-700">Lightning Fast</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links], colIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + colIndex * 0.1 }}
                        >
                            <h3 className="font-bold text-slate-900 mb-6 text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                                {category.split(/(?=[A-Z])/).join(" ")}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-slate-600 hover:text-teal-600 transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Info Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-white to-teal-50/50 rounded-2xl p-6 mb-10 border border-teal-100 shadow-sm"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Email</p>
                                <p className="text-slate-900 font-medium">support@swiftfin.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Phone</p>
                                <p className="text-slate-900 font-medium">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-teal-600" />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Global</p>
                                <p className="text-slate-900 font-medium">Available Worldwide</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar - Premium */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-slate-200"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-slate-600 text-sm">
                            <p className="flex items-center gap-2">
                                <span>© {new Date().getFullYear()} SwiftFin.</span>
                                <span className="hidden md:inline">•</span>
                                <span>All rights reserved.</span>
                                <span className="hidden md:inline">•</span>
                                <span>Made with ❤️ for better finance</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex gap-6 text-sm text-slate-600">
                                <Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy</Link>
                                <Link href="/terms" className="hover:text-teal-600 transition-colors">Terms</Link>
                                <Link href="/cookies" className="hover:text-teal-600 transition-colors">Cookies</Link>
                                <Link href="/security" className="hover:text-teal-600 transition-colors">Security</Link>
                            </div>

                            <div className="flex items-center gap-2 text-slate-500 text-sm">
                                <span>v2.1.4</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span>Updated just now</span>
                            </div>
                        </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-slate-700">Trusted by 250,000+ users worldwide</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2">
                                <span className="text-slate-300">|</span>
                                <span className="text-sm text-slate-500">4.9/5 rating</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Back to Top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-xl shadow-lg shadow-teal-500/30 flex items-center justify-center z-50"
                aria-label="Back to top"
            >
                <ArrowRight className="w-5 h-5 rotate-90" />
            </motion.button>
        </footer>
    );
}