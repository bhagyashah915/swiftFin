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
            {/* Footer Section */}
            <footer className="relative bg-white font-['Montserrat'] py-0 overflow-hidden">
                <div className=" px-4 md:px-8 lg:px-12">
                    <div className="relative rounded-4xl mb-10 overflow-hidden">
                        {/* Curved Background Effect */}
                        <div className="absolute inset-0 bg-teal-700">
                            {/* Semi-circle curve at top - darker teal curves down further */}
                            <div className="absolute top-0 left-0 right-0 h-2/3 bg-teal-600 rounded-b-[100%]"></div>
                        </div>

                        <div className="relative z-10 p-10 md:p-16">

                        {/* SwiftFin Ticker - Inside Footer */}
                        <div className="py-6 overflow-hidden mb-12">
                            <div className="ticker-wrapper">
                                <div className="ticker-content flex items-center">
                                    {[...Array(20)].map((_, i) => (
                                        <span key={i} className="ticker-item text-white text-4xl md:text-6xl font-bold font-['Montserrat'] inline-flex items-center justify-center">
                                            <span className="flex items-center mx-8">Swift<span className="text-teal-900">Fin</span></span>
                                            <span className="text-white/40 text-4xl md:text-5xl flex items-center justify-center mx-8 rotate-45">✦</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">
                            {/* Left Side - Logo, Description, Social Icons */}
                            <div className="flex flex-col items-start gap-6">
                                {/* Logo and Title */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src="/images/logo.png"
                                        alt="SwiftFin Logo"
                                        className="w-16 h-16 object-contain"
                                    />
                                    <h2 className="text-2xl md:text-3xl font-bold font-['Montserrat']">
                                        <span className="text-white">Swift</span>
                                        <span className="text-[#20C997]">Fin</span>
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="text-white/80 text-sm leading-relaxed max-w-sm font-semibold">
                                    Smart money management made simple. Track expenses, manage EMIs, and achieve your financial goals with ease.
                                </p>

                                {/* Social Icons */}
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Instagram className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Linkedin className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Twitter className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                        <Facebook className="w-5 h-5 text-white" />
                                    </a>
                                </div>

                                {/* Download Button */}
                                <Link
                                    href="/download"
                                    className="px-6 py-3 bg-[#20C997] hover:bg-teal-500 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Download Now
                                </Link>
                            </div>

                            {/* Center - Quick Links */}
                            <div className="flex flex-col items-center justify-start gap-8">
                                {/* Links Grid - Centered */}
                                <div className="grid grid-cols-2 gap-10 lg:gap-12">
                                    {/* Important Column */}
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-lg mb-4 font-['Montserrat']">
                                            Important
                                        </h3>
                                        <ul className="space-y-6">
                                            <li>
                                                <Link href="/about" className="text-white/80 hover:text-white transition-colors font-['Montserrat'] font-semibold text-sm">
                                                    About
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/features" className="text-white/80 hover:text-white transition-colors font-['Montserrat'] font-semibold text-sm">
                                                    Features
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog" className="text-white/80 hover:text-white transition-colors font-['Montserrat'] font-semibold text-sm">
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Support Column */}
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-lg mb-4 font-['Montserrat']">
                                            Support
                                        </h3>
                                        <ul className="space-y-6">
                                            <li>
                                                <Link href="/contact" className="text-white/80 hover:text-white transition-colors font-['Montserrat'] font-semibold text-sm">
                                                    Contact
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/terms" className="text-white/80 hover:text-white transition-colors font-['Montserrat'] font-semibold text-sm">
                                                    Terms of Service
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors font-['Montserrat'] font-semibold text-sm">
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="max-w-md w-full">
                                    <div className="mb-6">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-['Montserrat']">
                                            Get In Touch
                                        </h3>
                                        <p className="text-white/80 text-sm font-['Montserrat']">
                                            Have questions? We'd love to hear from you.
                                        </p>
                                    </div>
                                    <ContactForm collectionName="contacts" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-white/20 mt-16 pt-8">
                            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
                                <p className="text-white/80 text-sm font-['Montserrat'] text-center md:text-left font-semibold">
                                    Copyright © SwiftFin
                                </p>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-['Montserrat'] cursor-pointer font-semibold"
                                >
                                    Back to top <ArrowUp className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Ticker Animation Styles */}
            <style jsx>{`
                .ticker-wrapper {
                    overflow: hidden;
                    white-space: nowrap;
                }
                .ticker-content {
                    display: inline-flex;
                    animation: ticker 70s linear infinite;
                }
                @keyframes ticker {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </>

    );
}