"use client";

import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Receipt, BarChart3, CreditCard, TrendingUp, Download, UserPlus, Rocket, CheckCircle2, GraduationCap, Briefcase, Laptop, Building2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Preview data for each section
const sectionPreviews: Record<string, { title: string; description: string; items: { icon: React.ReactNode; text: string; subtext: string; color: string; gradient: string }[] }> = {
    features: {
        title: "Features",
        description: "Everything you need to manage your money.",
        items: [
            { icon: <Receipt className="w-6 h-6" />, text: "Expense Tracking", subtext: "Auto-categorize spends", color: "#20C997", gradient: "from-[#20C997] to-[#1cb588]" },
            { icon: <BarChart3 className="w-6 h-6" />, text: "Financial Reports", subtext: "Visualize your wealth", color: "#3B82F6", gradient: "from-[#3B82F6] to-[#2563EB]" },
            { icon: <CreditCard className="w-6 h-6" />, text: "EMI Tracking", subtext: "Never miss a payment", color: "#F59E0B", gradient: "from-[#F59E0B] to-[#D97706]" },
            { icon: <TrendingUp className="w-6 h-6" />, text: "Investments", subtext: "Track portfolio growth", color: "#8b5cf6", gradient: "from-[#8b5cf6] to-[#7c3aed]" }
        ]
    },
    howItWorks: {
        title: "How It Works",
        description: "Simple steps to financial freedom.",
        items: [
            { icon: <Download className="w-6 h-6" />, text: "Download App", subtext: "Get started in seconds", color: "#EF4444", gradient: "from-[#EF4444] to-[#DC2626]" },
            { icon: <UserPlus className="w-6 h-6" />, text: "Create Profile", subtext: "Personalize your experience", color: "#EC4899", gradient: "from-[#EC4899] to-[#DB2777]" },
            { icon: <Rocket className="w-6 h-6" />, text: "Start Managing", subtext: "Take control today", color: "#10B981", gradient: "from-[#10B981] to-[#059669]" },
            { icon: <CheckCircle2 className="w-6 h-6" />, text: "Achieve Goals", subtext: "Reach your targets", color: "#6366F1", gradient: "from-[#6366F1] to-[#4F46E5]" }
        ]
    },
    whoIsItFor: {
        title: "Who Is It For",
        description: "Tailored for every financial journey.",
        items: [
            { icon: <GraduationCap className="w-6 h-6" />, text: "Students", subtext: "Manage pocket money", color: "#8b5cf6", gradient: "from-[#8b5cf6] to-[#7c3aed]" },
            { icon: <Briefcase className="w-6 h-6" />, text: "Professionals", subtext: "Track salary & savings", color: "#ec4899", gradient: "from-[#ec4899] to-[#db2777]" },
            { icon: <Laptop className="w-6 h-6" />, text: "Freelancers", subtext: "Handle irregular income", color: "#20C997", gradient: "from-[#20C997] to-[#1cb588]" },
            { icon: <Building2 className="w-6 h-6" />, text: "Business Owners", subtext: "Monitor cash flow", color: "#FD7E14", gradient: "from-[#FD7E14] to-[#ca6510]" }
        ]
    }
};

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Floating Navbar Container */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none">
                <motion.nav
                    layout
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`pointer-events-auto w-full max-w-5xl rounded-full border transition-all duration-300 ${scrolled
                        ? "bg-white/80 backdrop-blur-xl border-white/20 shadow-lg shadow-black/5"
                        : "bg-white/60 backdrop-blur-md border-transparent shadow-sm"
                        } flex items-center justify-between pl-2 pr-2 py-2 md:pl-6 md:pr-2`}
                >
                    {/* Desktop Navigation Container */}
                    <div className="hidden md:flex items-center w-full justify-between">

                        {/* Left Side Links */}
                        <div className="flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50">
                            {["features", "howItWorks"].map((key) => {
                                const section = sectionPreviews[key];
                                return (
                                    <div
                                        key={key}
                                        className="relative px-5 py-2.5 cursor-pointer z-10"
                                        onMouseEnter={() => setHoveredItem(key)}
                                    >
                                        <Link
                                            href={`/#${key === "howItWorks" ? "how-it-works" : key}`}
                                            className={`relative z-10 text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${hoveredItem === key ? "text-neutral-slate" : "text-gray-600 hover:text-neutral-slate"}`}
                                        >
                                            {section.title}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredItem === key ? "rotate-180" : ""}`} />
                                        </Link>

                                        {hoveredItem === key && (
                                            <motion.div
                                                layoutId="navbar-pill-left"
                                                className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center Logo */}
                        <Link href="/" className="flex items-center justify-center group mx-6">
                            <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white shadow-lg shadow-teal-500/20 border border-teal-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-20">
                                <Image
                                    src="/images/swiftfin-logo.png"
                                    alt="SwiftFin Logo"
                                    width={48}
                                    height={48}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                        </Link>

                        {/* Right Side Links */}
                        <div className="flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50">
                            {["whoIsItFor"].map((key) => {
                                const section = sectionPreviews[key];
                                return (
                                    <div
                                        key={key}
                                        className="relative px-5 py-2.5 cursor-pointer z-10"
                                        onMouseEnter={() => setHoveredItem(key)}
                                    >
                                        <Link
                                            href="/who-is-it-for"
                                            className={`relative z-10 text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${hoveredItem === key ? "text-neutral-slate" : "text-gray-600 hover:text-neutral-slate"}`}
                                        >
                                            {section.title}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredItem === key ? "rotate-180" : ""}`} />
                                        </Link>

                                        {hoveredItem === key && (
                                            <motion.div
                                                layoutId="navbar-pill-right"
                                                className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </div>
                                );
                            })}

                            <Link href="/about" className="relative px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-neutral-slate transition-colors z-10">
                                About Us
                            </Link>

                            {/* Desktop Download Button inside Right Group */}
                            <div className="pl-2">
                                <AnimatedDownloadButton className="h-10 px-6 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all" text="Get App" />
                            </div>
                        </div>

                    </div>
                </motion.nav>

                {/* Dropdown Menu Container - Centered and detached */}
                <AnimatePresence>
                    {hoveredItem && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[80px] pointer-events-auto z-40"
                            onMouseEnter={() => setHoveredItem(hoveredItem)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-2 w-[600px] overflow-hidden">
                                {Object.entries(sectionPreviews).map(([key, section]) => (
                                    hoveredItem === key && (
                                        <div key={key} className="flex flex-col">
                                            {/* Header */}
                                            <div className="px-6 py-4 border-b border-gray-100/50 bg-gray-50/50 rounded-t-2xl">
                                                <h3 className="font-sora font-bold text-lg text-neutral-slate">{section.title}</h3>
                                                <p className="text-sm text-gray-500">{section.description}</p>
                                            </div>

                                            {/* Grid Items - "Shorts" Style Cards */}
                                            <div className="grid grid-cols-2 gap-2 p-2">
                                                {section.items.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="group relative overflow-hidden rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 p-4 flex items-center gap-4 cursor-pointer hover:shadow-md"
                                                    >
                                                        {/* Icon Box */}
                                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                            {item.icon}
                                                        </div>

                                                        {/* Text Content */}
                                                        <div className="flex-1">
                                                            <h4 className="font-bold text-neutral-slate text-sm group-hover:text-primary-teal transition-colors">
                                                                {item.text}
                                                            </h4>
                                                            <p className="text-xs text-gray-500 mt-0.5 font-medium">
                                                                {item.subtext}
                                                            </p>
                                                        </div>

                                                        {/* Arrow */}
                                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-teal -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl md:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <Image src="/images/swiftfin-logo.png" alt="Logo" width={32} height={32} />
                                <span className="font-sora font-bold text-lg">SwiftFin</span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {Object.entries(sectionPreviews).map(([key, section], idx) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <h3 className="font-sora font-bold text-gray-900 mb-4 text-lg">{section.title}</h3>
                                    <div className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <Link
                                                href={key === "whoIsItFor" ? "/who-is-it-for" : `/#${key === "howItWorks" ? "how-it-works" : key}`}
                                                key={i}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 border border-gray-100 active:scale-98 transition-transform"
                                            >
                                                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white`}>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800 text-sm">{item.text}</p>
                                                    <p className="text-xs text-gray-500">{item.subtext}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block p-4 text-center font-bold text-gray-600 hover:text-neutral-slate bg-gray-50 rounded-xl"
                                >
                                    About Us
                                </Link>
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-6 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                            <AnimatedDownloadButton className="w-full py-4 text-lg" text="Download App" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
