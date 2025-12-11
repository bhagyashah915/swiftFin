"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, PieChart, Wallet, FileText, Calculator } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Expense Tracking",
            description: "Track expenses with manual entry, receipt scanning, and automatic categorization.",
            color: "bg-teal-50",
            iconColor: "text-teal-600",
            image: "/images/expenses.png.jpg"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Financial Reports",
            description: "Interactive dashboards with charts and easy PDF/CSV export.",
            color: "bg-blue-50",
            iconColor: "text-blue-600",
            image: "/images/reports.jpg"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Tracking",
            description: "Manage loans, get reminders, and visualize EMI progress.",
            color: "bg-purple-50",
            iconColor: "text-purple-600",
            image: "/images/investments.jpg"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Tracking",
            description: "Track investments, including stocks, bonds, and funds.",
            color: "bg-emerald-50",
            iconColor: "text-emerald-600",
            image: "/images/investments.jpg"
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Budgeting",
            description: "Track budgets for different categories.",
            color: "bg-indigo-50",
            iconColor: "text-indigo-600",
            image: "/images/smart tips.jpg"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100" id="features">
            {/* Animated Background Text */}
            <div className="absolute inset-0 z-0 opacity-[0.03] overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 whitespace-nowrap text-[180px] font-black text-slate-900"
                >
                    SWIFTFIN • SWIFTFIN • SWIFTFIN • SWIFTFIN •
                </motion.div>
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-80 whitespace-nowrap text-[200px] font-black text-slate-900"
                >
                    FEATURES • FEATURES • FEATURES • FEATURES •
                </motion.div>
                <motion.div
                    animate={{ x: ["-100%", "0%"] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 whitespace-nowrap text-[160px] font-black text-slate-900"
                >
                    FINANCE • FINANCE • FINANCE • FINANCE • FINANCE •
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-teal-600 font-bold text-sm uppercase tracking-widest font-poppins bg-teal-50 px-5 py-2 rounded-full mb-6 inline-block border border-teal-100 shadow-sm">
                        Features
                    </span>
                    <h2 className="font-poppins text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Everything You Need <br />in One App
                    </h2>
                    <p className="font-lato text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto">
                        Powerful finance tools designed for simplicity and clarity.
                    </p>
                </div>

                {/* Features Grid - Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl mb-20">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onClick={() => setActiveIndex(idx)}
                            className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 ${activeIndex === idx
                                ? 'bg-gray-100 shadow-2xl'
                                : 'bg-gray-50'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 ${feature.iconColor} transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="font-poppins text-base font-bold text-slate-900 mb-1.5">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-xs leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Phone Mockup - Bottom Section */}
                <div className="relative w-full max-w-[400px] h-[500px] flex justify-center items-start overflow-visible">
                    {/* Teal Background Blob - Enhanced */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-teal-500/50 blur-[120px] rounded-full -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[90%] bg-cyan-400/30 blur-[80px] rounded-full -z-10"></div>

                    {/* iPhone Frame Container */}
                    <div className="relative w-full h-[800px] flex justify-center items-start overflow-visible">
                        {/* Feature Screenshots Carousel - Behind the frame - Wider to show sliding effect */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 h-[760px] flex justify-center items-start overflow-visible" style={{ width: '1400px' }}>
                            {/* Horizontal sliding carousel */}
                            <motion.div
                                className="flex h-full items-start"
                                animate={{ x: `calc(50% - ${activeIndex * 400}px - 190px)` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="relative shrink-0 rounded-[3rem] overflow-hidden"
                                        style={{
                                            width: '380px',
                                            height: '760px',
                                            filter: idx === activeIndex ? 'blur(0px)' : 'blur(6px)',
                                            opacity: idx === activeIndex ? 1 : 0.4,
                                            transform: idx === activeIndex ? 'scale(1)' : 'scale(0.9)',
                                            transition: 'all 0.4s ease',
                                            marginRight: '20px'
                                        }}
                                    >
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover object-top"
                                            priority={idx === 0}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* iPhone Frame Image - On top */}
                        <div className="relative w-full h-full z-10 pointer-events-none">
                            <Image
                                src="/featuresphone.png"
                                alt="iPhone Frame"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Centered bottom white fade/blur effect for phone frame */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-48 pointer-events-none z-20">
                            <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent blur-sm"></div>
                            <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom white fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </section>
    );
}