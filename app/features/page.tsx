"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, PieChart, Wallet, Camera, Calculator, ArrowLeft, CheckCircle2, Shield, Clock, Target, Zap, LineChart, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FeaturesPage() {
    const [activeStep, setActiveStep] = useState(0);

    // Updated mobile screens data array with features from the app
    const mobileScreens = [
        {
            id: 1,
            title: "Expense Tracking",
            color: "bg-gradient-to-br from-white to-teal-50",
            content: "Track and categorize expenses automatically with AI",
            zIndex: 20,
            translateX: 0
        },
        {
            id: 2,
            title: "Smart Budgeting",
            color: "bg-gradient-to-br from-white to-teal-50",
            content: "Manage budgets across all categories effortlessly",
            zIndex: 10,
            translateX: 40
        },
        {
            id: 3,
            title: "EMI Management",
            color: "bg-gradient-to-br from-white to-teal-50",
            content: "Track loans with automated payment reminders",
            zIndex: 5,
            translateX: 80
        },
        {
            id: 4,
            title: "Financial Reports",
            color: "bg-gradient-to-br from-white to-teal-50",
            content: "Generate insights with interactive dashboards",
            zIndex: 1,
            translateX: 120
        }
    ];

    const keyFeatures = [
        {
            icon: <Receipt className="w-8 h-8" />,
            title: "Expense Tracking",
            subtitle: "Record and categorize expenses automatically or manually",
            description: "Track every rupee with intelligent expense tracking. Scan receipts using your camera, manually enter transactions, or let SwiftFin automatically categorize your spending. Get real-time insights into where your money goes with detailed breakdowns by category, merchant, and time period.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80",
            benefits: [
                "Automatic categorization with AI",
                "Receipt scanning with OCR technology",
                "Real-time expense notifications",
                "Multi-currency support"
            ]
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Financial Reports",
            subtitle: "Generate reports and visualizations to analyze spending habits",
            description: "Transform your financial data into actionable insights with interactive dashboards and comprehensive reports. Visualize spending trends, compare periods, and identify opportunities to save. Export reports in PDF or CSV format for tax purposes or financial planning.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
            benefits: [
                "Interactive charts and graphs",
                "Customizable date ranges",
                "Export to PDF/CSV",
                "Spending trend analysis"
            ]
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "EMI Management",
            subtitle: "Track and manage all loans with clear payment schedules",
            description: "Never miss an EMI payment again. Track all your loans in one place with automated payment reminders. Visualize your loan progress, understand interest breakdowns, and plan prepayments to reduce your debt burden faster.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
            benefits: [
                "Payment reminders and alerts",
                "Interest calculation breakdown",
                "Prepayment impact analysis",
                "Loan payoff timeline"
            ]
        }
    ];

    const moreFeatures = [
        {
            icon: <PieChart className="w-8 h-8" />,
            title: "Smart Budgeting",
            description: "Manage detailed budgets across categories like housing, transportation, food, and entertainment to stay on top of your finances.",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
            size: "col-span-2"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Investment Tracking",
            description: "Monitor and analyze your investment portfolio, including stocks, mutual funds, and bonds, to maximize growth potential.",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
            size: "col-span-1"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Savings Goals",
            description: "Set specific savings goals for vacations, emergencies, or big purchases and track your progress toward achieving them.",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
            size: "col-span-1"
        },
        {
            icon: <Calculator className="w-8 h-8" />,
            title: "Tax Planning",
            description: "Identify tax-saving opportunities, organize documents, and simplify your preparation for filing season with smart suggestions.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
            size: "col-span-1"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Bill Payments",
            description: "Pay and schedule bills directly within the app, giving you a single place to manage all recurring expenses efficiently.",
            color: "from-violet-500 to-purple-500",
            bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
            size: "col-span-1"
        },
        {
            icon: <Wallet className="w-8 h-8" />,
            title: "Multiple Accounts",
            description: "Manage multiple bank accounts, credit cards, and wallets in one unified dashboard for complete financial visibility.",
            color: "from-rose-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
            size: "col-span-2"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "AI Insights",
            description: "Get personalized financial recommendations powered by artificial intelligence.",
            color: "from-teal-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
            size: "col-span-1"
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "Trend Analysis",
            description: "Analyze spending patterns over time with advanced forecasting tools.",
            color: "from-indigo-500 to-blue-500",
            bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
            size: "col-span-1"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Updated with single phone image and feature cards */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-teal-50/20 to-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/20 via-transparent to-transparent"></div>

                <div className="container mx-auto px-6 pt-20 pb-20 md:pt-32 relative z-10">
                    <a
                        href="/"
                        className="inline-flex items-center text-slate-600 hover:text-teal-600 transition-all duration-300 group mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                                Your Finance <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Solutions</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 mb-10">
                                Experience the peace of mind that comes with having your finances under complete control
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                    <span className="text-slate-700">Real-time tracking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                    <span className="text-slate-700">Smart AI insights</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                    <span className="text-slate-700">Bank-level security</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile Devices Section - 3 Overlapping Phones */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
                        >
                            {/* Container for overlapping phones */}
                            <div className="relative w-full h-full flex items-center justify-center">

                                {/* Phone 1 - Expenses (Left) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -100, rotate: -5 }}
                                    animate={{ opacity: 1, x: 0, rotate: -8 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.3,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: -5,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="absolute left-0 md:left-10 lg:left-16"
                                    style={{ zIndex: 3 }}
                                >
                                    <div className="relative w-[180px] md:w-[220px] lg:w-[260px]">
                                        <img
                                            src="/featuresphone.png"
                                            alt="Phone Mockup"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                        {/* Screenshot overlay */}
                                        <div className="absolute top-[3%] left-[5%] right-[5%] bottom-[3%]">
                                            <img
                                                src="/hero.jpg"
                                                alt="Expenses Screen"
                                                className="w-full h-full object-cover object-top rounded-[28px] md:rounded-[32px]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone 2 - Home (Center, Front) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 80, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="absolute"
                                    style={{ zIndex: 5 }}
                                >
                                    <div className="relative w-[200px] md:w-[250px] lg:w-[290px]">
                                        <img
                                            src="/featuresphone.png"
                                            alt="Phone Mockup"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                        {/* Screenshot overlay */}
                                        <div className="absolute top-[3%] left-[5%] right-[5%] bottom-[3%]">
                                            <img
                                                src="/expenses-emi.jpg"
                                                alt="Home Screen"
                                                className="w-full h-full object-cover object-top rounded-[30px] md:rounded-[35px]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Phone 3 - Portfolio (Right) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 100, rotate: 5 }}
                                    animate={{ opacity: 1, x: 0, rotate: 8 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.4,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: 5,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="absolute right-0 md:right-10 lg:right-16"
                                    style={{ zIndex: 2 }}
                                >
                                    <div className="relative w-[180px] md:w-[220px] lg:w-[260px]">
                                        <img
                                            src="/featuresphone.png"
                                            alt="Phone Mockup"
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                        {/* Screenshot overlay */}
                                        <div className="absolute top-[3%] left-[5%] right-[5%] bottom-[3%]">
                                            <img
                                                src="/investments.jpg"
                                                alt="Portfolio Screen"
                                                className="w-full h-full object-cover object-top rounded-[28px] md:rounded-[32px]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                            </div>

                            {/* Animated Floating Elements */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-10 left-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl"
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute top-20 -right-10 w-60 h-60 bg-teal-300/20 rounded-full blur-3xl"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Key Features</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">
                                Explore Our Standout Features
                            </h2>
                        </motion.div>
                    </div>

                    <div className="space-y-32">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-lg text-slate-500 mb-6">{feature.subtitle}</p>
                                    <p className="text-slate-600 leading-relaxed mb-8">{feature.description}</p>
                                    <div className="space-y-3">
                                        {feature.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                                <span className="text-slate-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-[500px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                    </div>
                                    {/* Decorative blob */}
                                    <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Features Grid - Updated with Bento Style */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">More Features</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                                Complete Financial Toolkit
                            </h2>
                            <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                                Everything you need to master your finances in one beautiful, organized interface
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {moreFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`${feature.size} ${feature.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-white/50`}
                            >
                                {/* Gradient Background Effect */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}></div>

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} p-[2px]`}>
                                        <div className="h-full w-full bg-white rounded-[22px]"></div>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-slate-700 leading-relaxed">{feature.description}</p>

                                    {/* Hover Indicator */}
                                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md">
                                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${feature.color}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bento Grid Decorative Elements */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute left-1/4 top-1/3 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl -z-10"
                    />
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="absolute right-1/4 bottom-1/4 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl -z-10"
                    />
                </div>
            </section>

            {/* Download CTA Section - Mobile Responsive */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center"
                    >
                        {/* Mobile Responsive Button Container */}
                        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                            <a
                                href="/download"
                                className="w-full inline-block"
                            >
                                <button className="w-full px-6 py-4 md:px-8 md:py-5 bg-gradient-to-r from-white to-white/90 text-slate-900 rounded-xl md:rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10 text-lg md:text-xl flex items-center justify-center gap-3">
                                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 16L16 10H8L12 16Z" />
                                        <path d="M4 20H20V18H4V20Z" />
                                    </svg>
                                    Download SwiftFin
                                </button>
                            </a>

                            {/* Mobile specific spacing */}
                            <div className="mt-8 md:mt-10 text-center">
                                <p className="text-white/70 text-sm md:text-base px-4">
                                    Available on iOS and Android
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}