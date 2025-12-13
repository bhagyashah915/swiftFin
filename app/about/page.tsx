"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, ArrowRight, Check, Shield, Lock, Eye, FileCheck, Zap, Users } from "lucide-react";
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

    return (
        <>
            {/* Features Section */}
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

            {/* About SwiftFin Section */}
            <section className="relative bg-gradient-to-b from-white to-teal-50 py-20 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6">
                            About <span className="text-[#20C997]">SwiftFin</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Your trusted companion for managing personal finances with ease and confidence.
                            We're on a mission to make financial management accessible to everyone.
                        </p>
                    </div>

                    {/* Zigzag Cards with Ticker Effect */}
                    <div className="relative">
                        {/* Left Fade */}
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-teal-50 to-transparent z-10 pointer-events-none"></div>

                        {/* Right Fade */}
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal-50 to-transparent z-10 pointer-events-none"></div>

                        <motion.div
                            animate={{ x: [0, -2000] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="flex gap-8 whitespace-nowrap py-8"
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
            </section>

            {/* Stats Cards - Stacked */}
            <section className="relative bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-xl">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#20C997] to-teal-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                            {stat.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-4xl font-bold text-slate-900 mb-1">{stat.number}</div>
                                            <div className="text-lg text-slate-600 font-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section - Redesigned */}
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
                                Your Security, Our Priority
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Built with Trust,<br />
                            <span className="text-[#20C997]">Protected by Design</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            We've engineered every layer of SwiftFin with enterprise-grade security. Your financial data deserves nothing less than military-level protection.
                        </motion.p>
                    </div>

                    {/* Security Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="relative h-full bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-[#20C997]/30 transition-all duration-300 hover:shadow-2xl">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#20C997]/10 to-teal-500/10 text-[#20C997] group-hover:from-[#20C997] group-hover:to-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                            {feature.icon}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#20C997] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#20C997]/5 to-transparent rounded-full blur-3xl group-hover:from-[#20C997]/20 transition-all duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <div className="inline-block bg-gradient-to-r from-slate-50 to-teal-50 rounded-3xl p-12 border-2 border-slate-100">
                            <Shield className="w-16 h-16 text-[#20C997] mx-auto mb-6" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                Questions about our security?
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Our security team is always available to discuss how we protect your financial data. Transparency is part of our commitment to you.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#20C997] text-white font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105"
                            >
                                Contact Security Team
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}