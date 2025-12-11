"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, PieChart, Wallet, FileText, Calculator } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Expense Tracking",
            description: "Track expenses with manual entry, receipt scanning, and automatic categorization.",
            color: "bg-teal-50",
            iconColor: "text-teal-600",
            screen: "expense"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Financial Reports",
            description: "Interactive dashboards with charts and easy PDF/CSV export.",
            color: "bg-blue-50",
            iconColor: "text-blue-600",
            screen: "reports"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Tracking",
            description: "Manage loans, get reminders, and visualize EMI progress.",
            color: "bg-purple-50",
            iconColor: "text-purple-600",
            screen: "emi"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Tracking",
            description: "Track investments, including stocks, bonds, and funds.",
            color: "bg-emerald-50",
            iconColor: "text-emerald-600",
            screen: "investment"
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Budgeting",
            description: "Track budgets for different categories.",
            color: "bg-indigo-50",
            iconColor: "text-indigo-600",
            screen: "budgeting"
        },
        {
            icon: <Wallet className="w-6 h-6" />,
            title: "Debt Management",
            description: "Track debt balances, interest rates, and create plans.",
            color: "bg-cyan-50",
            iconColor: "text-cyan-600",
            screen: "debt"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Bill Payment",
            description: "Pay bills directly through the app. One stop for all.",
            color: "bg-pink-50",
            iconColor: "text-pink-600",
            screen: "bills"
        },
        {
            icon: <Calculator className="w-6 h-6" />,
            title: "Tax Preparation",
            description: "Get assistance with tax preparation and filing.",
            color: "bg-green-50",
            iconColor: "text-green-600",
            screen: "tax"
        }
    ];

    // Feature screen components
    const renderFeatureScreen = (featureType: string) => {
        switch (featureType) {
            case "expense":
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-slate-900">Expenses & EMI</h1>
                        </div>

                        <div className="bg-white rounded-full p-1.5 mb-6 shadow-sm">
                            <div className="grid grid-cols-2 gap-1">
                                <button className="px-6 py-2.5 rounded-full bg-teal-500 text-white font-semibold text-sm">
                                    Expenses
                                </button>
                                <button className="px-6 py-2.5 rounded-full text-slate-600 font-medium text-sm">
                                    EMI
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl p-6 mb-6 shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-white/80 text-sm mb-1">This Month</p>
                                    <p className="text-white text-4xl font-bold">₹500.00</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white text-3xl font-bold">1</p>
                                    <p className="text-white/80 text-xs">Transactions</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <span className="text-orange-600 text-sm">⚡</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 text-sm">Monthly Limit</span>
                                </div>
                                <span className="text-teal-500 font-semibold text-sm">Set Limit</span>
                            </div>
                            <p className="text-slate-500 text-xs">Control your expenses by setting a monthly cap.</p>
                        </div>
                    </div>
                );

            case "investment":
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-slate-900">Investment Portfolio</h1>
                        </div>

                        <div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-slate-600 text-sm">Total Value</p>
                                    <p className="text-slate-900 text-3xl font-bold">$2,736.15</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-emerald-600 text-sm font-semibold">+$518</p>
                                    <p className="text-slate-500 text-xs">Today's Gain</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                            <TrendingUp className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 text-sm">Stocks</p>
                                            <p className="text-slate-500 text-xs">AAPL, GOOGL, TSLA</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-900 font-bold">$1,845.50</p>
                                        <p className="text-emerald-600 text-xs font-semibold">+2.4%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "budgeting":
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-slate-900">Budget Categories</h1>
                        </div>

                        <div className="space-y-4">
                            {["Food & Dining", "Transportation", "Entertainment", "Shopping"].map((category, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold text-slate-900 text-sm">{category}</span>
                                        <span className="text-slate-600 text-sm">$250 / $500</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2">
                                        <div className="bg-indigo-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case "debt":
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-slate-900">Debt Management</h1>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl p-6 mb-6 shadow-lg">
                            <div className="text-center text-white">
                                <p className="text-sm opacity-80 mb-1">Total Debt</p>
                                <p className="text-4xl font-bold mb-2">$15,250</p>
                                <p className="text-xs opacity-80">3 active loans</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-slate-900 text-sm">Car Loan</p>
                                        <p className="text-slate-500 text-xs">4.5% APR • 24 months left</p>
                                    </div>
                                    <p className="text-slate-900 font-bold text-lg">$8,500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <h1 className="text-xl font-bold text-slate-900">{features[activeIndex].title}</h1>
                        </div>

                        <div className="flex items-center justify-center h-48">
                            <div className={`w-20 h-20 rounded-2xl ${features[activeIndex].color} flex items-center justify-center ${features[activeIndex].iconColor} mb-4`}>
                                {features[activeIndex].icon}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5 shadow-sm">
                            <p className="text-slate-600 text-center">
                                {features[activeIndex].description}
                            </p>
                        </div>
                    </div>
                );
        }
    };

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

            <div className="relative z-10 container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
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

                {/* Feature Cards Grid Above Phone */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => setActiveIndex(idx)}
                                className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border ${activeIndex === idx
                                    ? 'bg-white shadow-lg border-teal-200 transform -translate-y-1'
                                    : 'bg-white/70 border-slate-100 hover:shadow-md hover:border-teal-100'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-3 ${feature.iconColor}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="font-poppins text-base font-bold text-slate-900 mb-1">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-xs leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Phone Mockup Section with Teal Background */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Teal background behind phone */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 blur-3xl rounded-full w-[500px] h-[500px]"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 blur-2xl rounded-full w-[600px] h-[600px]"></div>
                        </div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="relative flex justify-center z-10">
                        <div className="relative">
                            {/* Phone Frame */}
                            <div className="relative w-[340px] h-[700px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-20"></div>

                                {/* Side Buttons */}
                                <div className="absolute -right-2 top-32 w-1 h-12 bg-slate-800 rounded-r-md"></div>
                                <div className="absolute -left-2 top-32 w-1 h-14 bg-slate-800 rounded-l-md"></div>
                                <div className="absolute -left-2 top-52 w-1 h-14 bg-slate-800 rounded-l-md"></div>

                                {/* Screen Content */}
                                <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-50 rounded-[3rem] overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0"
                                        >
                                            {/* Status Bar */}
                                            <div className="px-8 pt-3 flex justify-between items-center text-xs font-semibold text-slate-900">
                                                <span>9:41</span>
                                                <div className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>
                                                </div>
                                            </div>

                                            {/* Feature-specific screen content */}
                                            {renderFeatureScreen(features[activeIndex].screen)}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone shadow */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-8 bg-black/20 blur-xl rounded-full z-0"></div>
                </div>
            </div>
        </section>
    );
}