"use client";

import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState } from "react";
import { Menu, X, ChevronDown, Receipt, BarChart3, CreditCard, TrendingUp, Download, UserPlus, Rocket, CheckCircle2, GraduationCap, Briefcase, Laptop, Building2 } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Preview data for each section
const sectionPreviews: Record<string, { title: string; items: { icon: React.ReactNode; text: string; color?: string }[] }> = {
    features: {
        title: "Features",
        items: [
            { icon: <Receipt className="w-4 h-4" />, text: "Expense Tracking" },
            { icon: <BarChart3 className="w-4 h-4" />, text: "Financial Reports" },
            { icon: <CreditCard className="w-4 h-4" />, text: "EMI Tracking" },
            { icon: <TrendingUp className="w-4 h-4" />, text: "Investments" }
        ]
    },
    howItWorks: {
        title: "How It Works",
        items: [
            { icon: <Download className="w-4 h-4" />, text: "Download App" },
            { icon: <UserPlus className="w-4 h-4" />, text: "Create Profile" },
            { icon: <Rocket className="w-4 h-4" />, text: "Start Managing" },
            { icon: <CheckCircle2 className="w-4 h-4" />, text: "Achieve Goals" }
        ]
    },
    whoIsItFor: {
        title: "Who Is It For",
        items: [
            { icon: <GraduationCap className="w-4 h-4" />, text: "Students", color: "#8b5cf6" },
            { icon: <Briefcase className="w-4 h-4" />, text: "Professionals", color: "#ec4899" },
            { icon: <Laptop className="w-4 h-4" />, text: "Freelancers", color: "#20C997" },
            { icon: <Building2 className="w-4 h-4" />, text: "Business Owners", color: "#FD7E14" }
        ]
    }
};

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    return (
        <nav className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/images/logo.png"
                    alt="SwiftFin Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                />
                <h1 className="font-bold text-2xl text-neutral-slate">SwiftFin</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-neutral-slate font-medium">
                {/* Features with hover preview */}
                <div
                    className="relative"
                    onMouseEnter={() => setHoveredItem("features")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link
                        href="/#features"
                        className="hover:text-primary-teal transition-colors flex items-center gap-1"
                    >
                        Features
                        <ChevronDown className={`w-4 h-4 transition-transform ${hoveredItem === "features" ? "rotate-180" : ""}`} />
                    </Link>

                    <AnimatePresence>
                        {hoveredItem === "features" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50"
                            >
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Quick Preview</p>
                                <div className="space-y-2">
                                    {sectionPreviews.features.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="w-8 h-8 bg-[#20C997]/10 rounded-lg flex items-center justify-center text-[#20C997]">
                                                {item.icon}
                                            </div>
                                            <span className="text-sm text-[#495057]">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* How It Works with hover preview */}
                <div
                    className="relative"
                    onMouseEnter={() => setHoveredItem("howItWorks")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link
                        href="/#how-it-works"
                        className="hover:text-primary-teal transition-colors flex items-center gap-1"
                    >
                        How it Works
                        <ChevronDown className={`w-4 h-4 transition-transform ${hoveredItem === "howItWorks" ? "rotate-180" : ""}`} />
                    </Link>

                    <AnimatePresence>
                        {hoveredItem === "howItWorks" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50"
                            >
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Steps</p>
                                <div className="space-y-2">
                                    {sectionPreviews.howItWorks.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="w-6 h-6 bg-[#20C997] rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm text-[#495057]">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Who Is It For with hover preview */}
                <div
                    className="relative"
                    onMouseEnter={() => setHoveredItem("whoIsItFor")}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link
                        href="/who-is-it-for"
                        className="hover:text-primary-teal transition-colors flex items-center gap-1"
                    >
                        Who Is It For
                        <ChevronDown className={`w-4 h-4 transition-transform ${hoveredItem === "whoIsItFor" ? "rotate-180" : ""}`} />
                    </Link>

                    <AnimatePresence>
                        {hoveredItem === "whoIsItFor" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50"
                            >
                                <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">User Types</p>
                                <div className="space-y-2">
                                    {sectionPreviews.whoIsItFor.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div
                                                className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                {item.icon}
                                            </div>
                                            <span className="text-sm text-neutral-slate">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Link href="/about" className="hover:text-primary-teal transition-colors">About Us</Link>
            </div>

            {/* Desktop Download Button */}
            <div className="hidden md:flex gap-4">
                <AnimatedDownloadButton className="px-6 py-3 text-base shadow-lg" text="Download" />
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-neutral-slate hover:text-primary-teal transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-x-0 top-[72px] bottom-0 bg-white z-40 md:hidden overflow-y-auto animate-fade-in-up">
                    <div className="flex flex-col p-6 gap-4 min-h-full">
                        <Link
                            href="/#features"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/#how-it-works"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it Works
                        </Link>
                        <Link
                            href="/who-is-it-for"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Who Is It For
                        </Link>
                        <Link
                            href="/about"
                            className="py-4 px-4 text-lg text-neutral-slate hover:text-primary-teal hover:bg-teal-50 rounded-lg transition-colors font-medium border-b border-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <div className="mt-4">
                            <AnimatedDownloadButton className="w-full py-4 text-lg shadow-lg" text="Download" />
                        </div>

                        <div className="h-10"></div>
                    </div>
                </div>
            )}
        </nav>
    );
}
