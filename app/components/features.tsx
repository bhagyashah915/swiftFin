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
        },
        {
            icon: <Wallet className="w-6 h-6" />,
            title: "Debt Management",
            description: "Track debt balances, interest rates, and create plans.",
            color: "bg-cyan-50",
            iconColor: "text-cyan-600",
            image: "/images/reports.jpg"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Bill Payment",
            description: "Pay bills directly through the app. One stop for all.",
            color: "bg-pink-50",
            iconColor: "text-pink-600",
            image: "/images/expenses.png.jpg"
        },
        {
            icon: <Calculator className="w-6 h-6" />,
            title: "Tax Preparation",
            description: "Get assistance with tax preparation and filing.",
            color: "bg-green-50",
            iconColor: "text-green-600",
            image: "/images/smart tips.jpg"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [features.length]);

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mb-20">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onClick={() => setActiveIndex(idx)}
                            className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 border-2 ${activeIndex === idx
                                ? 'bg-white shadow-xl border-teal-200 scale-105'
                                : 'bg-white/60 border-slate-100 hover:shadow-lg hover:border-slate-200'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 ${feature.iconColor} group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="font-poppins text-lg font-bold text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Phone Mockup - Bottom Section */}
                <div className="relative w-full max-w-[340px] h-[700px] flex justify-center">
                    {/* Teal Background Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-teal-500/20 blur-[100px] rounded-full -z-10"></div>

                    <div className="relative w-full h-full bg-black rounded-[3.5rem] p-3 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-20"></div>

                        {/* Side Buttons */}
                        <div className="absolute -right-2 top-32 w-1 h-12 bg-slate-800 rounded-r-md"></div>
                        <div className="absolute -left-2 top-32 w-1 h-14 bg-slate-800 rounded-l-md"></div>
                        <div className="absolute -left-2 top-52 w-1 h-14 bg-slate-800 rounded-l-md"></div>

                        {/* Screen Content */}
                        <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={features[activeIndex].image}
                                        alt={features[activeIndex].title}
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                    {/* Overlay Gradient to fade bottom if needed, or just let it cut off naturally as per request 'upper half' */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0"></div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Static Top Status Bar Elements if needed overlaying image */}
                            <div className="absolute top-0 left-0 right-0 px-8 pt-3 flex justify-between items-center text-xs font-semibold text-slate-900 z-10 mix-blend-difference text-white">
                                <span>9:41</span>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}