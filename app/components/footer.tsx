"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative bg-white text-neutral-slate pt-20 md:pt-28 pb-10 md:pb-14 overflow-hidden">
            {/* Background Pattern & Gradients */}
            {/* Background Pattern & Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Network Background Image */}
                <div
                    className="absolute inset-0 opacity-10 mix-blend-multiply"
                    style={{
                        backgroundImage: "url('/images/footer-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

                {/* Subtle gradient mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/80 to-[#f0fdf9]/80" />

                {/* Dot pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(#20C997 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />

                {/* Gradient orbs */}
                <motion.div
                    className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#20C997]/10 to-transparent blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-[#20C997]/15 to-transparent blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />

                {/* Floating shapes */}
                <motion.div
                    className="absolute top-20 right-[20%] w-16 h-16 rounded-full border-2 border-[#20C997]/10"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-32 left-[15%] w-12 h-12 bg-[#20C997]/5 rounded-lg"
                    animate={{
                        y: [0, 15, 0],
                        rotate: [0, -90, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">

                    {/* Logo + Description */}
                    <motion.div
                        className="col-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4 md:mb-6">
                            <Image
                                src="/images/swiftfin-logo.png"
                                alt="SwiftFin Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 object-contain"
                            />
                            <h2 className="font-sora font-bold text-2xl text-[#495057]">SwiftFin</h2>
                        </div>

                        <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base font-inter">
                            Empowering millions with smart digital financial tools for a better tomorrow.
                        </p>

                        <div className="flex gap-3 md:gap-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Linkedin, href: "#" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#20C997",
                                        color: "#ffffff"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="font-sora font-bold text-base md:text-lg mb-4 md:mb-6 text-[#495057]">Company</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base font-inter">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Careers", href: "/careers" },
                                { label: "Blog", href: "/blog" },
                                { label: "Contact", href: "/contact" }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="hover:text-[#20C997] transition-colors inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Product */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="font-sora font-bold text-base md:text-lg mb-4 md:mb-6 text-[#495057]">Product</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base font-inter">
                            {[
                                { label: "Features", href: "/#features" },
                                { label: "Who Is It For", href: "/who-is-it-for" },
                                { label: "Security", href: "/security" },
                                { label: "FAQ", href: "/faq-page" }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="hover:text-[#20C997] transition-colors inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="font-sora font-bold text-base md:text-lg mb-4 md:mb-6 text-[#495057]">Contact</h3>
                        <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base font-inter">
                            <motion.li
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-[#20C997]">✉</span>
                                support@swiftfin.com
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2"
                            >
                                <span className="text-[#20C997]">📞</span>
                                +91 98765 43210
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-gray-200 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <p className="font-inter">© {new Date().getFullYear()} SwiftFin. All rights reserved.</p>

                    <div className="flex gap-4 md:gap-6 font-inter">
                        <Link href="/privacy" className="hover:text-[#20C997] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#20C997] transition-colors">Terms of Service</Link>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
