"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, PieChart, Wallet, Camera, Calculator, ArrowLeft, CheckCircle2, Shield, Clock, Target, Zap, LineChart, Smartphone, Download, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
            {/* Hero Section - V3 Centered Content with 3 Phones Below */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-teal-50/90 to-white/95"></div>
                </div>

                <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
                    <a
                        href="/"
                        className="inline-flex items-center text-slate-600 hover:text-teal-600 transition-all duration-300 group mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-16"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                                Your Finance <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Solutions</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                                Experience the peace of mind that comes with having your finances under complete control. Track expenses effortlessly, manage EMIs smartly, and get AI-powered insights to grow your wealth.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center mb-10">
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                    <span className="text-slate-700 font-medium">Real-time tracking</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                    <span className="text-slate-700 font-medium">Smart AI insights</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-sm border border-teal-100">
                                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                    <span className="text-slate-700 font-medium">Bank-level security</span>
                                </div>
                            </div>

                        </motion.div>

                        {/* Three Phones Layout - Below Content with Shadow Fade */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative h-[450px] md:h-[550px] w-full max-w-4xl flex items-center justify-center"
                        >
                            {/* Container for overlapping phones */}
                            <div className="relative w-full h-full flex items-center justify-center">

                                {/* Phone 1 - Expenses (Left) */}
                                <motion.div
                                    initial={{ opacity: 0, x: -100, rotate: -5 }}
                                    animate={{ opacity: 1, x: 0, rotate: -8 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.4,
                                        type: "spring",
                                        stiffness: 100
                                    }}

                                    className="absolute left-0 md:left-10 lg:left-16"
                                    style={{ zIndex: 3 }}
                                >
                                    <div className="relative w-[160px] md:w-[200px] lg:w-[240px]">
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
                                        {/* Shadow fade on bottom half */}
                                        <div className="absolute left-[5%] right-[5%] bottom-[3%] h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-[28px] md:rounded-b-[32px] pointer-events-none"></div>
                                    </div>
                                </motion.div>

                                {/* Phone 2 - Home (Center, Front) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 80, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.6,
                                        type: "spring",
                                        stiffness: 100
                                    }}

                                    className="absolute"
                                    style={{ zIndex: 5 }}
                                >
                                    <div className="relative w-[180px] md:w-[230px] lg:w-[270px]">
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
                                        {/* Shadow fade on bottom half */}
                                        <div className="absolute left-[5%] right-[5%] bottom-[3%] h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-[30px] md:rounded-b-[35px] pointer-events-none"></div>
                                    </div>
                                </motion.div>

                                {/* Phone 3 - Portfolio (Right) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 100, rotate: 5 }}
                                    animate={{ opacity: 1, x: 0, rotate: 8 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 100
                                    }}

                                    className="absolute right-0 md:right-10 lg:right-16"
                                    style={{ zIndex: 2 }}
                                >
                                    <div className="relative w-[160px] md:w-[200px] lg:w-[240px]">
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
                                        {/* Shadow fade on bottom half */}
                                        <div className="absolute left-[5%] right-[5%] bottom-[3%] h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-[28px] md:rounded-b-[32px] pointer-events-none"></div>
                                    </div>
                                </motion.div>

                            </div>
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

            {/* More Features Section - REFINED BENTO GRID */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">More Features</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                                Explore Our <br /> Standout Features
                            </h2>
                            <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
                                Everything you need to master your finances, elegantly arranged for your convenience
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid Container */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto"
                    >
                        {/* Grid Layout - 2x2 with varying widths */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                            {/* Top Left Card - Expense Tracking (Spans 7 columns) */}
                            <motion.div
                                whileHover={{ scale: 1.01, y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="lg:col-span-7 bg-gradient-to-br from-teal-200 to-teal-100 rounded-3xl p-8 md:p-10 border border-teal-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                {/* Content */}
                                <div className="relative z-10 flex-grow flex flex-col">
                                    {/* Image Container with Hovering Icons - Centered and Larger */}
                                    <div className="flex-grow flex items-center justify-center mb-6">
                                        <motion.div
                                            initial="rest"
                                            whileHover="hover"
                                            className="relative w-full max-w-lg"
                                        >
                                            {/* Hovering Icons - Behind Image */}
                                            {/* Top Left Icon */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: 60, y: 60, opacity: 0, scale: 0.5 },
                                                    hover: { x: -30, y: -30, opacity: 1, scale: 1 }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                                className="absolute top-8 left-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-teal-600"
                                                style={{ zIndex: 1 }}
                                            >
                                                <Receipt className="w-8 h-8" />
                                            </motion.div>

                                            {/* Top Right Icon */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: -60, y: 60, opacity: 0, scale: 0.5 },
                                                    hover: { x: 30, y: -30, opacity: 1, scale: 1 }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                                                className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-teal-600"
                                                style={{ zIndex: 1 }}
                                            >
                                                <TrendingUp className="w-8 h-8" />
                                            </motion.div>

                                            {/* Bottom Left Icon */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: 60, y: -60, opacity: 0, scale: 0.5 },
                                                    hover: { x: -30, y: 30, opacity: 1, scale: 1 }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                                className="absolute bottom-8 left-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-teal-600"
                                                style={{ zIndex: 1 }}
                                            >
                                                <PieChart className="w-8 h-8" />
                                            </motion.div>

                                            {/* Bottom Right Icon */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: -60, y: -60, opacity: 0, scale: 0.5 },
                                                    hover: { x: 30, y: 30, opacity: 1, scale: 1 }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                                                className="absolute bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-teal-600"
                                                style={{ zIndex: 1 }}
                                            >
                                                <Wallet className="w-8 h-8" />
                                            </motion.div>

                                            {/* Middle Left Icon */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: 70, y: 0, opacity: 0, scale: 0.5 },
                                                    hover: { x: -40, y: 0, opacity: 1, scale: 1 }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
                                                className="absolute top-1/2 -translate-y-1/2 left-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-teal-600"
                                                style={{ zIndex: 1 }}
                                            >
                                                <BarChart3 className="w-8 h-8" />
                                            </motion.div>

                                            {/* Middle Right Icon */}
                                            <motion.div
                                                variants={{
                                                    rest: { x: -70, y: 0, opacity: 0, scale: 0.5 },
                                                    hover: { x: 40, y: 0, opacity: 1, scale: 1 }
                                                }}
                                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
                                                className="absolute top-1/2 -translate-y-1/2 right-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center text-teal-600"
                                                style={{ zIndex: 1 }}
                                            >
                                                <CreditCard className="w-8 h-8" />
                                            </motion.div>

                                            {/* Main Image - On Top with Rotation */}
                                            <motion.div
                                                className="relative rounded-xl overflow-hidden shadow-lg"
                                                style={{ zIndex: 10 }}
                                                variants={{
                                                    rest: { rotate: 0, scale: 1 },
                                                    hover: { rotate: 2, scale: 1.02 }
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                            >
                                                <img
                                                    src="/images/featuresGraph.avif"
                                                    alt="Smart Expense Tracking Dashboard"
                                                    className="w-full h-auto object-cover"
                                                />
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* Text Content at Bottom */}
                                    <div className="text-left mt-auto">
                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                            Smart Expense Tracking
                                        </h3>
                                        <p className="text-slate-600 text-lg">
                                            Automatically track and categorize every expense with AI-powered insights. Get real-time notifications and detailed breakdowns of your spending habits across all your accounts.
                                        </p>
                                    </div>
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl"></div>
                                <div className="absolute -left-10 -top-10 w-48 h-48 bg-teal-100/40 rounded-full blur-3xl"></div>
                            </motion.div>

                            {/* Top Right Card - Financial Reports (Spans 5 columns) */}
                            <motion.div
                                whileHover={{ scale: 1.01, y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="lg:col-span-5 bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                {/* Content */}
                                <div className="mb-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 text-teal-700 mb-6">
                                        <BarChart3 className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        Interactive Reports
                                    </h3>
                                    <p className="text-slate-600">
                                        Transform your data into beautiful, interactive dashboards and comprehensive reports for better financial decisions.
                                    </p>
                                </div>

                                {/* Report Image - With Fade Out Bottom - Takes remaining space */}
                                <div className="relative rounded-2xl overflow-hidden flex-grow">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full h-full"
                                    >
                                        <img
                                            src="/images/featuresreport.png"
                                            alt="Interactive Reports Dashboard"
                                            className="w-full h-full object-cover object-top"
                                        />
                                        {/* Gradient fade from bottom to transparent */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
                                    </motion.div>
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-100/20 rounded-full blur-3xl"></div>
                            </motion.div>

                            {/* Bottom Left Card - EMI Management (Spans 5 columns) */}
                            <motion.div
                                whileHover={{ scale: 1.01, y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="lg:col-span-5 bg-gradient-to-br from-white to-teal-50 rounded-3xl p-8 border border-teal-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                <div className="flex-grow">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 text-teal-700 mb-6">
                                        <CreditCard className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                        EMI & Loan Management
                                    </h3>
                                    <p className="text-slate-600 mb-6">
                                        Track all your loans in one place with automated payment reminders and interest breakdowns.
                                    </p>

                                    {/* Stacked Loan Cards */}
                                    <div className="relative h-40 mb-6">
                                        {/* Card 3 - Back */}
                                        <motion.div
                                            className="absolute top-8 left-4 right-4 h-24 bg-white/30 rounded-xl border border-teal-100 backdrop-blur-sm"
                                            style={{ zIndex: 1 }}
                                        />

                                        {/* Card 2 - Middle */}
                                        <motion.div
                                            className="absolute top-4 left-2 right-2 h-24 bg-white/50 rounded-xl border border-teal-100 backdrop-blur-sm"
                                            style={{ zIndex: 2 }}
                                        />

                                        {/* Card 1 - Front (Main Card) */}
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="absolute top-0 left-0 right-0 h-24 p-4 bg-white rounded-xl border border-teal-100 shadow-lg"
                                            style={{ zIndex: 3 }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="text-sm text-slate-600">Next Payment</div>
                                                <div className="font-bold text-slate-900 text-lg">₹15,299</div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm text-slate-600">Due Date</div>
                                                <div className="font-medium text-teal-700 flex items-center gap-2 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span>May 15, 2024</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="pt-6 border-t border-teal-100">
                                        <div className="flex items-center gap-3 text-teal-700">
                                            <Shield className="w-5 h-5" />
                                            <div>
                                                <div className="font-medium">Automated reminders</div>
                                                <div className="text-sm text-slate-600">Never miss a payment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Background Decoration */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-100/20 rounded-full blur-3xl"></div>
                            </motion.div>

                            {/* Bottom Right Card - Download CTA (Spans 7 columns) */}
                            <motion.div
                                whileHover={{ scale: 1.01, y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="lg:col-span-7 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 md:p-10 border border-teal-500 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col"
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/90 via-teal-600/90 to-teal-700/90"></div>
                                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-40 translate-x-40"></div>
                                <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full -translate-x-32 translate-y-32"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Top Section - Logo and Text */}
                                    <div className="flex-grow">
                                        {/* App Logo */}
                                        <div className="mb-6">
                                            <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                                                {/* SwiftFin Logo */}
                                                <img src="/images/logo.png" className="w-16 h-16 object-contain" alt="SwiftFin Logo" />
                                            </div>
                                        </div>

                                        {/* Heading and Description */}
                                        <div className="mb-8">
                                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                                Start Your Financial Journey
                                            </h3>
                                            <p className="text-teal-100 text-lg mb-6">
                                                Join thousands mastering their finances with SwiftFin
                                            </p>

                                            {/* Benefits */}
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3 text-white">
                                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                                    <span>Free to download • No credit card required</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white">
                                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                                    <span>Bank-level security & encryption</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-white">
                                                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                                    <span>Sync across all your devices</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Section - Store Buttons - REDUCED SIZE */}
                                    <div className="mt-auto">
                                        {/* Platform Badge Buttons - Reduced max-w */}
                                        <div className="flex gap-4 justify-center">
                                            <Link href="/download" className="flex-1 max-w-[75px]">
                                                <motion.div
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="cursor-pointer"
                                                >
                                                    <img
                                                        src="/app store badge.png"
                                                        alt="Download on App Store"
                                                        className="w-full h-auto"
                                                    />
                                                </motion.div>


                                            </Link>
                                            <Link href="/download" className="flex-1 max-w-[75px]">
                                                <motion.div
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="cursor-pointer"
                                                >
                                                    <img
                                                        src="/google-play.png"
                                                        alt="Get it on Play Store"
                                                        className="w-full h-auto"
                                                    />
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Elements */}
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{
                                        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                                        opacity: { duration: 3, repeat: Infinity }
                                    }}
                                    className="absolute top-8 right-8 w-10 h-10"
                                >
                                    <Sparkles className="w-10 h-10 text-white/30" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Additional Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 max-w-4xl mx-auto"
                    >
                    </motion.div>
                </div>
            </section>
        </div>
    );
}