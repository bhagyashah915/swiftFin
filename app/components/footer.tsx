"use client";

import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import ContactForm from "./contact-form";
import Link from "next/link";

export default function Footer() {
    const footerLinks = {
        product: [
            { label: "Features", href: "/features" },
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
        <>
            {/* Contact Form Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl p-8 md:p-16 border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Text */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-['Montserrat']">
                                    Ready To Take Control Of Your Finances?
                                </h2>
                                <p className="text-slate-600 text-lg leading-relaxed font-['Montserrat']">
                                    Our service is for people who believe in smart money management and financial freedom. We promise that engaging with what we make will help you achieve your financial goals.
                                </p>
                            </div>

                            {/* Right Side - Form */}
                            <div className="space-y-4">
                                <ContactForm collectionName="contacts" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="relative bg-teal-400 font-['Montserrat'] border-8 border-white">
                <div className="container mx-auto px-6 md:px-12 py-10 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
                        {/* Left Side - Logo ONLY */}
                        <div className="relative">
                            <div className="relative z-10 mt-6 md:mt-12 flex items-center justify-start">
                                <img
                                    src="/images/logo.png"
                                    alt="SwiftFin Logo"
                                    className="w-40 h-40 object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Side - Title and Links */}
                        <div className="flex flex-col gap-8 md:gap-12">
                            {/* Title - Centered above links/contents */}
                            <div className="text-center md:text-left">
                                <h2 className="text-6xl md:text-6xl font-bold text-white font-['Montserrat'] opacity-90">
                                    SwiftFin
                                </h2>
                            </div>

                            {/* Links Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                                {/* About Us Column */}
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-6 font-['Montserrat']">
                                        Important
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/about" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/features" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Features
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Support Column */}
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-6 font-['Montserrat']">
                                        Support
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link href="/contact" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/terms" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Terms of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/privacy" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Social Column */}
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-6 font-['Montserrat']">
                                        Social
                                    </h3>
                                    <ul className="space-y-4">
                                        <li>
                                            <a href="#" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                LinkedIn
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="text-white/90 hover:text-white transition-colors font-['Montserrat']">
                                                Twitter
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/20 mt-16 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-white/90 text-sm font-['Montserrat']">
                                Copyright © SwiftFin
                            </p>
                            <Link href="/terms" className="text-white/90 hover:text-white transition-colors text-sm font-['Montserrat']">
                                Terms of Service
                            </Link>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-['Montserrat'] cursor-pointer"
                            >
                                Back to top <ArrowUp className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}