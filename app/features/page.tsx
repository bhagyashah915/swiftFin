"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, PieChart, Wallet, Camera, Calculator, ArrowLeft, CheckCircle2, Shield, Clock, Target, Zap, LineChart, Smartphone, Download, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function FeaturesPage() {
    const [activeStep, setActiveStep] = useState(0);
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);

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

    // Feature bubbles that pop out from phone in More Features section
    const phoneFeatureBubbles = [
        {
            id: 1,
            title: "Expense Tracking",
            icon: <Receipt className="w-6 h-6" />,
            description: "Track every rupee with intelligent expense tracking",
            position: { top: "10%", left: "75%" },
            delay: 0.2,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 2,
            title: "Smart Budgeting",
            icon: <PieChart className="w-6 h-6" />,
            description: "Manage budgets across all categories effortlessly",
            position: { top: "25%", left: "85%" },
            delay: 0.4,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 3,
            title: "EMI Management",
            icon: <CreditCard className="w-6 h-6" />,
            description: "Track loans with automated payment reminders",
            position: { top: "50%", left: "90%" },
            delay: 0.6,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 4,
            title: "Financial Reports",
            icon: <BarChart3 className="w-6 h-6" />,
            description: "Interactive dashboards & comprehensive reports",
            position: { top: "75%", left: "85%" },
            delay: 0.8,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 5,
            title: "Investment Tracking",
            icon: <TrendingUp className="w-6 h-6" />,
            description: "Monitor portfolio growth with real-time updates",
            position: { top: "90%", left: "75%" },
            delay: 1.0,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 6,
            title: "Savings Goals",
            icon: <Target className="w-6 h-6" />,
            description: "Set and track progress towards financial targets",
            position: { top: "90%", left: "25%" },
            delay: 1.0,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 7,
            title: "Tax Planning",
            icon: <Calculator className="w-6 h-6" />,
            description: "Identify tax-saving opportunities automatically",
            position: { top: "75%", left: "15%" },
            delay: 0.8,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 8,
            title: "Bill Payments",
            icon: <Shield className="w-6 h-6" />,
            description: "Pay and schedule bills in one place",
            position: { top: "50%", left: "10%" },
            delay: 0.6,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 9,
            title: "Multiple Accounts",
            icon: <Wallet className="w-6 h-6" />,
            description: "Manage all bank accounts in unified dashboard",
            position: { top: "25%", left: "15%" },
            delay: 0.4,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        },
        {
            id: 10,
            title: "AI Insights",
            icon: <Zap className="w-6 h-6" />,
            description: "Personalized financial recommendations",
            position: { top: "10%", left: "25%" },
            delay: 0.2,
            color: "bg-gradient-to-br from-teal-500 to-teal-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - KEPT EXACTLY AS IT WAS */}
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

            {/* More Features Section - WITH ANIMATED PHONE AND FEATURE BUBBLES */}
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
                                All Features At Your Fingertips
                            </h2>
                            <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                                Discover how every feature emerges from within SwiftFin to transform your financial management
                            </p>
                        </motion.div>
                    </div>

                    {/* Animated Phone with Feature Bubbles Container */}
                    <div className="relative min-h-[800px] flex items-center justify-center">
                        {/* Phone Mockup in Center */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20"
                        >
                            <div className="relative w-[280px] md:w-[320px] lg:w-[360px]">
                                {/* Phone Mockup Image */}
                                <img
                                    src="/featuresphone.png"
                                    alt="SwiftFin App Interface"
                                    className="w-full h-auto drop-shadow-2xl"
                                />

                                {/* Animated App Screen Inside Phone */}
                                <div className="absolute top-[4%] left-[5%] right-[5%] bottom-[4%] overflow-hidden rounded-[40px] bg-gradient-to-b from-white to-teal-50">
                                    {/* Animated App Content */}
                                    <div className="p-6 h-full flex flex-col">
                                        {/* App Header */}
                                        <div className="flex items-center justify-between mb-8">
                                            <div className="w-8 h-8 rounded-full bg-teal-100"></div>
                                            <div className="text-2xl font-bold text-teal-600">SwiftFin</div>
                                            <div className="w-8 h-8 rounded-full bg-teal-100"></div>
                                        </div>

                                        {/* Animated Dashboard Elements */}
                                        <div className="flex-1 space-y-4">
                                            {/* Balance Card */}
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                                className="h-24 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 p-4"
                                            >
                                                <div className="text-white/80 text-sm">Total Balance</div>
                                                <div className="text-2xl font-bold text-white mt-2">₹85,430</div>
                                                <div className="text-white/60 text-xs mt-1">+12% this month</div>
                                            </motion.div>

                                            {/* Quick Stats */}
                                            <div className="grid grid-cols-2 gap-3">
                                                {[1, 2].map((i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.2 }}
                                                        className="aspect-video rounded-xl bg-white border border-teal-100 p-3"
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-teal-100 mb-2"></div>
                                                        <div className="h-2 bg-teal-200 rounded-full mb-1"></div>
                                                        <div className="h-2 bg-teal-100 rounded-full w-2/3"></div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Recent Transactions */}
                                            <div className="space-y-2">
                                                <div className="h-2 bg-teal-200/50 rounded-full"></div>
                                                <div className="h-2 bg-teal-200/30 rounded-full w-3/4"></div>
                                                <div className="h-2 bg-teal-200/20 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Animated Feature Bubbles */}
                        <AnimatePresence>
                            {phoneFeatureBubbles.map((bubble) => (
                                <motion.div
                                    key={bubble.id}
                                    initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                                    whileInView={{
                                        scale: [0, 1.2, 1],
                                        opacity: [0, 1, 1],
                                        x: bubble.position.left.includes("75") || bubble.position.left.includes("85") || bubble.position.left.includes("90")
                                            ? [0, 50, 0]
                                            : [0, -50, 0],
                                        y: bubble.position.top.includes("10") || bubble.position.top.includes("25")
                                            ? [0, -30, 0]
                                            : bubble.position.top.includes("75") || bubble.position.top.includes("90")
                                                ? [0, 30, 0]
                                                : [0, 0, 0]
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: bubble.delay,
                                        scale: {
                                            duration: 0.8,
                                            times: [0, 0.7, 1]
                                        },
                                        opacity: {
                                            duration: 0.8
                                        },
                                        x: {
                                            duration: 1.5,
                                            times: [0, 0.5, 1]
                                        },
                                        y: {
                                            duration: 1.5,
                                            times: [0, 0.5, 1]
                                        }
                                    }}
                                    whileHover={{
                                        scale: 1.3,
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        ...bubble.position,
                                        zIndex: 10
                                    }}
                                    className="cursor-pointer group"
                                >
                                    {/* Bubble Container */}
                                    <div className="relative">
                                        {/* Feature Bubble */}
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-teal-200 shadow-2xl flex flex-col items-center justify-center p-3 hover:shadow-3xl transition-all duration-300 group-hover:border-teal-400">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-full ${bubble.color} flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-300`}>
                                                <div className="text-white">
                                                    {bubble.icon}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <span className="text-xs md:text-sm font-bold text-teal-900 text-center leading-tight">
                                                {bubble.title}
                                            </span>
                                        </div>

                                        {/* Description Tooltip */}
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 -bottom-20 left-1/2 transform -translate-x-1/2 w-48 bg-white border border-teal-200 rounded-lg p-3 shadow-xl z-20">
                                            <p className="text-xs text-slate-700 text-center">{bubble.description}</p>
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
                                        </div>

                                        {/* Animated Connecting Line */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: bubble.delay + 0.3,
                                                ease: "easeOut"
                                            }}
                                            className="absolute top-1/2 left-1/2 w-32 h-[2px] bg-gradient-to-r from-teal-300 to-teal-100 origin-center"
                                            style={{
                                                transform: 'translate(-50%, -50%) rotate(0deg)',
                                                transformOrigin: 'center'
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Decorative Background Elements */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl -z-10"
                        />

                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.05, 0.15, 0.05]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-3xl -z-10"
                        />
                    </div>

                    {/* Feature Summary Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5 }}
                        className="text-center mt-20 max-w-3xl mx-auto"
                    >
                        <p className="text-lg text-slate-600">
                            Each feature seamlessly integrates within SwiftFin, working together to provide you with a complete financial management solution.
                            From tracking daily expenses to planning long-term investments, everything is designed to work in harmony.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Download CTA Section - UPDATED WITH INTERACTIVE BUTTON */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                Ready to Transform Your Finances?
                            </h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                Join thousands who have taken control with SwiftFin
                            </p>
                        </div>

                        {/* Interactive Download Button */}
                        <motion.button
                            onMouseEnter={() => setIsDownloadHovered(true)}
                            onMouseLeave={() => setIsDownloadHovered(false)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                backgroundColor: isDownloadHovered ? "#0d9488" : "#ffffff",
                                color: isDownloadHovered ? "#ffffff" : "#0d9488",
                                boxShadow: isDownloadHovered
                                    ? "0 20px 60px rgba(13, 148, 136, 0.3)"
                                    : "0 10px 40px rgba(13, 148, 136, 0.2)"
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            className="relative px-12 py-5 rounded-full font-bold text-xl border-2 border-teal-600 flex items-center justify-center gap-4 overflow-hidden group"
                        >
                            {/* Background Shine Effect */}
                            <motion.div
                                animate={{
                                    x: isDownloadHovered ? "100%" : "-100%"
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            />

                            {/* Animated Download Icon */}
                            <motion.div
                                animate={{
                                    y: isDownloadHovered ? [0, -5, 0] : 0
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    times: [0, 0.5, 1]
                                }}
                                className="relative z-10"
                            >
                                <Download className="w-7 h-7" />
                            </motion.div>

                            {/* Button Text */}
                            <span className="relative z-10">Download SwiftFin</span>

                            {/* Animated Arrow */}
                            <motion.div
                                animate={{
                                    x: isDownloadHovered ? 8 : 0,
                                    opacity: isDownloadHovered ? 1 : 0.7
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                className="relative z-10"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.div>

                            {/* Pulsing Effect */}
                            <motion.div
                                animate={{
                                    scale: isDownloadHovered ? [1, 1.2, 1] : 1,
                                    opacity: isDownloadHovered ? [0.5, 0, 0.5] : 0
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 border-2 border-teal-400 rounded-full"
                            />
                        </motion.button>

                        {/* App Store Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 flex flex-wrap justify-center gap-8"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="w-56 h-16 bg-slate-900 rounded-xl flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="text-white font-semibold text-lg">Download on the App Store</div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="w-56 h-16 bg-slate-900 rounded-xl flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="text-white font-semibold text-lg">Get it on Google Play</div>
                            </motion.div>
                        </motion.div>

                        {/* Version Info */}
                        <div className="mt-8 text-center">
                            <p className="text-slate-500 text-sm">
                                Available on iOS 14.0+ and Android 8.0+
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}