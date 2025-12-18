"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, ArrowRight, Check, Shield, Lock, Eye, FileCheck, Zap, Users, Target, Globe, HeartHandshake } from "lucide-react";
import { useState } from "react";

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const features = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Expense Tracking",
            description: "Track every rupee with smart categorization.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80",
            leftTitle: "Smart Expense Tracking",
            leftDescription: "Keep track of every transaction with intelligent categorization. SwiftFin automatically sorts your expenses, helping you understand where your money goes with minimal effort."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Financial Reports",
            description: "Beautiful charts and detailed analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
            leftTitle: "Powerful Analytics",
            leftDescription: "Gain deep insights into your financial health with beautiful visualizations and comprehensive reports. Make data-driven decisions with confidence."
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Management",
            description: "Never miss a payment with smart reminders.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80",
            leftTitle: "Never Miss a Payment",
            leftDescription: "Manage all your EMIs and recurring payments in one place. Get timely reminders and track payment history to maintain a perfect credit score."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Tracking",
            description: "Monitor your portfolio in real-time.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80",
            leftTitle: "Watch Your Wealth Grow",
            leftDescription: "Track your investments across multiple platforms in one dashboard. Monitor performance, analyze trends, and make informed decisions about your portfolio."
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Smart Insights",
            description: "AI-powered spending recommendations.",
            image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?w=1920&q=80",
            leftTitle: "AI-Powered Intelligence",
            leftDescription: "Get personalized financial recommendations based on your spending patterns. Our AI analyzes your habits and suggests smart ways to save and invest."
        },
        {
            icon: <Camera className="w-6 h-6" />,
            title: "Receipt Scanning",
            description: "Snap and auto-categorize expenses.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
            leftTitle: "Effortless Receipt Management",
            leftDescription: "Simply snap a photo of your receipt and let our OCR technology extract all the details. Automatic categorization saves you time and keeps your records organized."
        },
    ];

    const stats = [
        { number: "256-bit", label: "Bank-level Encryption", icon: <Lock className="w-8 h-8" /> },
        { number: "100%", label: "Data Privacy Guaranteed", icon: <Shield className="w-8 h-8" /> },
        { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-8 h-8" /> }
    ];

    const securityFeatures = [
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Bank-Grade Security",
            description: "Your data is protected with the same encryption standards used by leading financial institutions worldwide."
        },
        {
            icon: <Lock className="w-12 h-12" />,
            title: "End-to-End Encryption",
            description: "Every piece of your financial information is encrypted before it leaves your device and remains secure in transit and at rest."
        },
        {
            icon: <Eye className="w-12 h-12" />,
            title: "Zero Knowledge Architecture",
            description: "We can't access your sensitive data. Your financial information is encrypted with keys only you control."
        },
        {
            icon: <FileCheck className="w-12 h-12" />,
            title: "Regular Security Audits",
            description: "Independent security experts regularly audit our systems to ensure your data stays protected against emerging threats."
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Instant Breach Detection",
            description: "Advanced monitoring systems work around the clock to detect and prevent unauthorized access attempts in real-time."
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "You Own Your Data",
            description: "Your financial data belongs to you. Delete it anytime, export it anywhere. No hidden retention policies."
        }
    ];

    const values = [
        {
            icon: <Target className="w-10 h-10" />,
            title: "Business Growth and Efficiency",
            description: "Empowering businesses to achieve financial excellence through innovative software solutions."
        },
        {
            icon: <Globe className="w-10 h-10" />,
            title: "Technological Innovation",
            description: "Leading the way in financial technology innovation to empower businesses worldwide."
        },
        {
            icon: <HeartHandshake className="w-10 h-10" />,
            title: "Customer-Centric Approach",
            description: "Building solutions that truly understand and address the needs of modern businesses and individuals."
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Excellence in Execution",
            description: "Delivering reliable, high-performance solutions that businesses can depend on every day."
        }

    ];

    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Small Business Owner",
            content: "I love how it helps me stay organized with my spending. I've reached my financial goals faster than I ever thought possible.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
        },
        {
            name: "Mark Thompson",
            role: "Freelance Designer",
            content: "Skeptical at first, but it completely transformed my relationship with money. I'm finally in control of my finances.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director",
            content: "Intuitive and easy to navigate. A game-changer for my financial life. The insights are incredibly valuable.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
        },
        {
            name: "David Chen",
            role: "Software Engineer",
            content: "Helped me pay off debt and start investing. The automated tracking saves me hours every month.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
        },
        {
            name: "Jessica Miller",
            role: "Financial Analyst",
            content: "The best finance app I've used. Simple, powerful, and secure. It's exactly what I needed for my personal finances.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
        }
    ];

    return (
        <>
            {/* Ticker Animation Section - MOVED TO TOP */}
            <section className="relative bg-gradient-to-b from-white to-teal-50 py-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl text-black font-bold mb-6">
                            About <span className="text-[#20C997]">SwiftFin</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Your trusted companion for managing personal finances with ease and confidence.
                            We're on a mission to make financial management accessible to everyone.
                        </p>
                    </div>

                    {/* Zigzag Cards with Ticker Effect */}
                    <div className="relative">
                        {/* Left Fade - Fixed to viewport */}
                        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-teal-50 via-teal-50 to-transparent z-10 pointer-events-none" style={{ marginLeft: 'calc(-50vw + 50%)' }}></div>

                        {/* Right Fade - Fixed to viewport */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-teal-50 via-teal-50 to-transparent z-10 pointer-events-none" style={{ marginRight: 'calc(-50vw + 50%)' }}></div>

                        <div className="-mx-4 sm:-mx-6 md:-mx-12 overflow-hidden">
                            <motion.div
                                animate={{ x: [0, -2000] }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="flex gap-8 whitespace-nowrap py-8 px-4 sm:px-6 md:px-12"
                            >
                                {[...Array(3)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-8 items-center">
                                    {/* Large Card */}
                                    <div className="relative w-[400px] h-[280px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                            alt="Financial Charts"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                                    </div>

                                    {/* Small Card */}
                                    <div className="relative w-[280px] h-[200px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
                                            alt="Expense Tracking"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent"></div>
                                    </div>

                                    {/* Large Card */}
                                    <div className="relative w-[400px] h-[280px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1579621970590-9d624316904b?w=800&q=80"
                                            alt="Investment Growth"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                                    </div>

                                    {/* Small Card */}
                                    <div className="relative w-[280px] h-[200px] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80"
                                            alt="Financial Analytics"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent"></div>
                                    </div>

                                    {/* Large Card */}
                                    <div className="relative w-[400px] h-[280px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                        <img
                                            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                                            alt="Credit Management"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    </div>
                </div>
            </section>

            {/* Features Section - MOVED BELOW TICKER ANIMATION */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900">
                {/* Dynamic Background Images */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="popLayout">
                        {features.map((feature, index) => (
                            index === hoveredIndex && (
                                <motion.div
                                    key={index}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${feature.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
                                </motion.div>
                            )
                        ))}
                    </AnimatePresence>
                </div>

                <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                        {/* Left Content */}
                        <div className="flex-1 lg:sticky lg:top-32 h-fit">
                            <motion.div
                                className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/20 border border-[#20C997]/40 mb-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                    About SwiftFin
                                </span>
                            </motion.div>

                            {/* Dynamic Content based on hovered card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={hoveredIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                        {features[hoveredIndex].leftTitle.split(' ').slice(0, -1).join(' ')} <br />
                                        <span className="text-[#20C997]">
                                            {features[hoveredIndex].leftTitle.split(' ').slice(-1)}
                                        </span>
                                    </h2>

                                    <p className="font-inter text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                                        {features[hoveredIndex].leftDescription}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <a
                                href="/download"
                                className="inline-flex items-center gap-2 group px-8 py-3 rounded-full border border-[#20C997] text-[#20C997] font-semibold hover:bg-[#20C997] hover:text-white transition-all duration-300"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Right Content - Feature List */}
                        <div className="flex-1">
                            <div className="grid gap-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${hoveredIndex === index
                                            ? 'bg-white/10 border-[#20C997]/50 shadow-lg'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                                            }`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 rounded-xl transition-colors duration-300 ${hoveredIndex === index ? 'bg-[#20C997] text-white' : 'bg-white/10 text-gray-400'
                                                }`}>
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className={`font-sora text-xl font-bold mb-2 transition-colors duration-300 ${hoveredIndex === index ? 'text-white' : 'text-gray-300'
                                                    }`}>
                                                    {feature.title}
                                                </h3>
                                                <p className="font-inter text-gray-400 text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose SwiftFin - Bento Grid */}
            <section className="relative bg-white py-20 md:py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/20 mb-6"
                        >
                            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                Why Choose SwiftFin
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
                        >
                            Everything You Need in{" "}
                            <span className="text-[#20C997]">One App</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            Replace messy spreadsheets with one secure, easy-to-use tool for complete financial control
                        </motion.p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 max-w-7xl mx-auto">
                        {/* Large Card - Automated Tracking */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-[#20C997] to-teal-600 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative group cursor-pointer"
                        >
                            <div className="relative z-10">
                                <Receipt className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-90" />
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Automated Expense Tracking
                                </h3>
                                <p className="text-white/90 text-lg mb-6 max-w-xl">
                                    Snap receipts, auto-categorize expenses, and set recurring bills. Save in under 1 second.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                                        AI Receipt Scanning
                                    </div>
                                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                                        Smart Categories
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        </motion.div>

                        {/* Stat Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="md:col-span-3 lg:col-span-4 bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-8 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#20C997]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-7 h-7 text-[#20C997]" />
                            </div>
                            <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">30%</div>
                            <p className="text-slate-600 font-medium">Reduce Overspending</p>
                        </motion.div>

                        {/* Stat Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-3 lg:col-span-4 bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-8 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-xl group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#20C997]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <BarChart3 className="w-7 h-7 text-[#20C997]" />
                            </div>
                            <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">&lt;3s</div>
                            <p className="text-slate-600 font-medium">Report Load Time</p>
                        </motion.div>

                        {/* EMI Management Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-6 lg:col-span-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative group cursor-pointer"
                        >
                            <div className="relative z-10">
                                <CreditCard className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-90" />
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Never Miss EMI Payments
                                </h3>
                                <p className="text-white/80 text-lg mb-6 max-w-xl">
                                    Track all loans, get smart reminders, and watch your progress with visual indicators.
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "65%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="h-full bg-[#20C997] rounded-full"
                                        ></motion.div>
                                    </div>
                                    <span className="text-sm font-semibold">65% Paid</span>
                                </div>
                            </div>
                            <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#20C997]/20 rounded-full blur-3xl"></div>
                        </motion.div>

                        {/* Investment Tracking */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-6 lg:col-span-6 bg-gradient-to-br from-teal-50 to-white border-2 border-[#20C997]/20 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-[#20C997] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Portfolio Management
                            </h3>
                            <p className="text-slate-600 text-lg mb-6">
                                Track investments, monitor gains, and get alerts for price movements across platforms.
                            </p>
                            <div className="flex gap-2">
                                <div className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                                    +12.5%
                                </div>
                                <div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold">
                                    Real-time
                                </div>
                            </div>
                        </motion.div>

                        {/* Smart Insights */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="md:col-span-6 lg:col-span-6 bg-gradient-to-br from-white to-teal-50 border-2 border-[#20C997]/20 rounded-3xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            <Lightbulb className="w-12 h-12 md:w-16 md:h-16 text-[#20C997] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                AI-Powered Insights
                            </h3>
                            <p className="text-slate-600 text-lg mb-6">
                                Get personalized tips, monthly insights, and smart recommendations based on your patterns.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-slate-700">
                                    <div className="w-2 h-2 bg-[#20C997] rounded-full"></div>
                                    Save ₹2,500 on dining this month
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-700">
                                    <div className="w-2 h-2 bg-[#20C997] rounded-full"></div>
                                    Consider SIP in mutual funds
                                </div>
                            </div>
                        </motion.div>

                        {/* Security Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden group cursor-pointer"
                        >
                            <Lock className="w-12 h-12 mb-4 opacity-90" />
                            <h4 className="text-xl font-bold mb-2">256-bit Encryption</h4>
                            <p className="text-white/80 text-sm">Bank-level security for your data</p>
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#20C997]/20 rounded-full blur-2xl"></div>
                        </motion.div>

                        {/* Offline Mode */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-6 lg:col-span-4 bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-8 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                        >
                            <Zap className="w-12 h-12 text-[#20C997] mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Works Offline</h4>
                            <p className="text-slate-600 text-sm">Add entries anytime, syncs automatically</p>
                        </motion.div>

                        {/* Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="md:col-span-6 lg:col-span-4 bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-8 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-xl group cursor-pointer"
                        >
                            <Users className="w-12 h-12 text-[#20C997] mb-4 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-slate-900 mb-2">5,000+ Entries</h4>
                            <p className="text-slate-600 text-sm">Support for unlimited transactions</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Team Section - REPLACES SECURITY SECTION */}
            <section className="relative bg-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/20 mb-6"
                        >
                            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                Our Mission & Values
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Innovating Financial Solutions,<br />
                            <span className="text-[#20C997]">Empowering Businesses</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            As a leading provider of innovative finance software, we're dedicated to empowering
                            businesses like yours to achieve their financial goals through cutting-edge technology.
                        </motion.p>
                    </div>

                    {/* Team Meeting & Values Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
                        {/* Left Side - Team Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                                    alt="Team Meeting at SwiftFin"
                                    className="w-full h-[500px] object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#20C997]/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-400/10 rounded-full blur-3xl -z-10"></div>
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                                    Building the Future of Finance, Together
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    At SwiftFin, we believe that financial management should be accessible, intuitive,
                                    and empowering for everyone. Our team of finance experts and technology innovators
                                    work tirelessly to create solutions that transform how businesses manage their finances.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Every decision we make, every feature we build, is guided by our commitment to
                                    excellence and our passion for helping businesses succeed in an increasingly complex
                                    financial landscape.
                                </p>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 gap-6 pt-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#20C997] mb-2">5+</div>
                                    <div className="text-slate-600 font-medium">Years of Innovation</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#20C997] mb-2">10K+</div>
                                    <div className="text-slate-600 font-medium">Businesses Empowered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#20C997] mb-2">50+</div>
                                    <div className="text-slate-600 font-medium">Team Members</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-[#20C997] mb-2">24/7</div>
                                    <div className="text-slate-600 font-medium">Support Available</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values Section with Ticker Animation */}
                    <div className="relative">
                        {/* Left Fade - Fixed to viewport */}
                        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" style={{ marginLeft: 'calc(-50vw + 50%)' }}></div>

                        {/* Right Fade - Fixed to viewport */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" style={{ marginRight: 'calc(-50vw + 50%)' }}></div>

                        <div className="-mx-4 sm:-mx-6 md:-mx-12 overflow-hidden">
                            <motion.div
                                animate={{ x: ["0%", "-100%"] }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="flex gap-8 whitespace-nowrap py-8 px-4 sm:px-6 md:px-12"
                            >
                            {[...Array(3)].map((_, setIndex) => (
                                <div key={setIndex} className="flex gap-8">
                                    {values.map((value, index) => (
                                        <motion.div
                                            key={`${setIndex}-${index}`}
                                            whileHover={{ y: -8 }}
                                            className="relative min-w-[400px] h-[280px] bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
                                        >
                                            {/* Icon */}
                                            <div className="mb-6">
                                                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#20C997]/10 to-teal-500/10 text-[#20C997] group-hover:from-[#20C997] group-hover:to-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                                    {value.icon}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#20C997] transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {value.description}
                                            </p>

                                            {/* Decorative Element */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#20C997]/5 to-transparent rounded-full blur-3xl group-hover:from-[#20C997]/20 transition-all duration-300"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="relative py-20">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-6 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/20 mb-6"
                            >
                                <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                    Testimonials
                                </span>
                            </motion.div>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Loved by <span className="text-[#20C997]">Thousands</span>
                            </h3>
                        </div>

                        {/* Maxed Out Fade Ticker */}
                        <div className="relative">
                            {/* Left Fade - Fixed to viewport */}
                            <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none" style={{ marginLeft: 'calc(-50vw + 50%)' }}></div>

                            {/* Right Fade - Fixed to viewport */}
                            <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-white via-white to-transparent z-20 pointer-events-none" style={{ marginRight: 'calc(-50vw + 50%)' }}></div>

                            <div className="-mx-4 sm:-mx-6 md:-mx-12 overflow-hidden">
                                <motion.div
                                    animate={{ x: [0, -2000] }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                    className="flex gap-6 whitespace-nowrap py-4 px-4 sm:px-6 md:px-12"
                                >
                                {[...Array(3)].map((_, setIndex) => (
                                    <div key={setIndex} className="flex gap-6">
                                        {testimonials.map((testimonial, index) => (
                                            <div
                                                key={`${setIndex}-${index}`}
                                                className="w-[400px] bg-slate-50 rounded-2xl p-8 border border-slate-100 whitespace-normal flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="flex gap-1 mb-4 text-[#20C997]">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                                                        "{testimonial.content}"
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <div className="font-bold text-slate-900">{testimonial.name}</div>
                                                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <div className="inline-block bg-gradient-to-r from-slate-50 to-teal-50 rounded-3xl p-12 border-2 border-slate-100">
                            <Users className="w-16 h-16 text-[#20C997] mx-auto mb-6" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                Join the Financial Revolution
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                If still any doubts left we are here to help you out.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#20C997] text-white font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}