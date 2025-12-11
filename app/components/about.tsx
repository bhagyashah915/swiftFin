"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import Link from 'next/link';

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const features = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Expense Tracking",
            description: "Track every rupee with smart categorization.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Financial Reports",
            description: "Beautiful charts and detailed analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Management",
            description: "Never miss a payment with smart reminders.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Tracking",
            description: "Monitor your portfolio in real-time.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Smart Insights",
            description: "AI-powered spending recommendations.",
            image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?w=1920&q=80"
        },
        {
            icon: <Camera className="w-6 h-6" />,
            title: "Receipt Scanning",
            description: "Snap and auto-categorize expenses.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
        },
    ];

    return (
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
                    <motion.div
                        className="flex-1 lg:sticky lg:top-32 h-fit"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/20 border border-[#20C997]/40 mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                About SwiftFin
                            </span>
                        </motion.div>

                        <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Your Complete <br />
                            <span className="text-[#20C997]">Financial Ecosystem</span>
                        </h2>

                        <p className="font-inter text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                            SwiftFin isn't just an expense tracker. It's a comprehensive platform designed to bring clarity to your financial life. From daily spending to long-term wealth building, we provide the tools you need to succeed.
                        </p>

                        <Link
                            href="/download"
                            className="inline-flex items-center gap-2 group px-8 py-3 rounded-full border border-[#20C997] text-[#20C997] font-semibold hover:bg-[#20C997] hover:text-white transition-all duration-300"
                        >
                            Get Started Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

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

                                    {/* Arrow indicator for active state */}
                                    {hoveredIndex === index && (
                                        <motion.div
                                            layoutId="active-arrow"
                                            className="absolute right-6 top-1/2 -translate-y-1/2"
                                        >
                                            <ArrowRight className="w-5 h-5 text-[#20C997]" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
