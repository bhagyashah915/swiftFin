"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Laptop,
    Store,
    Check,
    Sparkles,
} from "lucide-react";
import AnimatedDownloadButton from "../components/AnimatedDownloadButton";
import { useState } from "react";
import Image from "next/image";

export default function WhoIsItForPage() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const userTypes = [
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "Students",
            tagline: "Build Smart Money Habits",
            description: "Perfect for students managing allowances and learning financial responsibility.",
            features: [
                "Track daily expenses easily",
                "Set savings goals",
                "Budget your pocket money",
                "Learn finance basics",
            ],
            gradient: "from-blue-500 via-blue-600 to-cyan-600",
            image: "/images/student.jpg",
            stat: "10K+",
            statLabel: "Student Users",
        },
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: "Professionals",
            tagline: "Master Your Finances",
            description: "Ideal for working professionals managing salary, investments, and future goals.",
            features: [
                "Salary & income tracking",
                "Investment monitoring",
                "EMI & loan management",
                "Tax planning tools",
            ],
            gradient: "from-purple-500 via-purple-600 to-pink-600",
            image: "/images/professional.jpg",
            stat: "50K+",
            statLabel: "Professionals",
        },
        {
            icon: <Laptop className="w-10 h-10" />,
            title: "Freelancers",
            tagline: "Control Your Cash Flow",
            description: "Designed for freelancers tracking multiple income streams and business expenses.",
            features: [
                "Project-based tracking",
                "Invoice management",
                "Expense categorization",
                "Client payment tracking",
            ],
            gradient: "from-orange-500 via-orange-600 to-red-600",
            image: "/images/freelancer.jpg",
            stat: "25K+",
            statLabel: "Freelancers",
        },
        {
            icon: <Store className="w-10 h-10" />,
            title: "Business Owners",
            tagline: "Grow Your Business",
            description: "Built for entrepreneurs managing business finances and scaling operations.",
            features: [
                "Business revenue tracking",
                "Vendor payments",
                "Inventory monitoring",
                "P&L reports",
            ],
            gradient: "from-teal-500 via-teal-600 to-emerald-600",
            image: "/images/business.jpg",
            stat: "15K+",
            statLabel: "Business Owners",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-br from-slate-50 via-white to-slate-100">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #14B8A6 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }} />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-bold text-teal-700 uppercase tracking-wider">
                                Who Is It For?
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="font-sora text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
                            Built for{" "}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-600 to-emerald-600">
                                Everyone
                            </span>
                        </h1>

                        <p className="font-inter text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            From students to business owners, SwiftFin adapts to your unique financial journey. No matter where you are in life, we've got you covered.
                        </p>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                            {["100K+", "4.9★", "140+", "99.9%"].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                >
                                    <div className="text-3xl md:text-4xl font-black text-gray-900">
                                        {stat}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                        {["Users", "Rating", "Countries", "Uptime"][idx]}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Cards Grid Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {userTypes.map((user, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className="relative h-full bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-transparent transition-all duration-500 hover:shadow-2xl">
                                    {/* Gradient Border on Hover */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${user.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                                        <div className="absolute inset-[2px] bg-white rounded-3xl" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-8 md:p-10">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${user.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                            {user.icon}
                                        </div>

                                        {/* Title & Tagline */}
                                        <div className="mb-6">
                                            <h3 className="font-sora text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                                {user.title}
                                            </h3>
                                            <p className={`font-semibold text-lg bg-clip-text text-transparent bg-linear-to-r ${user.gradient}`}>
                                                {user.tagline}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-base leading-relaxed mb-8">
                                            {user.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                            {user.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-center gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.2 + idx * 0.05 }}
                                                >
                                                    <div className={`w-5 h-5 rounded-full bg-linear-to-br ${user.gradient} flex items-center justify-center shrink-0`}>
                                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                    </div>
                                                    <span className="text-gray-700 text-sm font-medium">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Stat */}
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${user.gradient} bg-opacity-10`}>
                                            <span className={`text-2xl font-black bg-clip-text text-transparent bg-linear-to-r ${user.gradient}`}>
                                                {user.stat}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {user.statLabel}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" style={{ background: `linear-gradient(135deg, ${user.gradient.split(' ')[1]}, ${user.gradient.split(' ')[3]})` }} />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr opacity-5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700" style={{ background: `linear-gradient(135deg, ${user.gradient.split(' ')[1]}, ${user.gradient.split(' ')[3]})` }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-teal-900/30" />

                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-teal-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-sora text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            Ready to Start Your{" "}
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-400 to-emerald-400">
                                Financial Journey?
                            </span>
                        </h2>
                        <p className="font-inter text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                            Join over 100,000 users who trust SwiftFin to manage their finances.
                            <br className="hidden md:block" />
                            Download now and take control of your money today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <AnimatedDownloadButton
                                className="px-10 py-5 text-lg shadow-2xl shadow-teal-500/30"
                                text="Download Free"
                            />
                            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                View Features
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center gap-8 mt-16 opacity-60">
                            <div className="text-sm">⭐ 4.9/5 Rating</div>
                            <div className="text-sm">🔒 Bank-Grade Security</div>
                            <div className="text-sm">🌍 140+ Countries</div>
                            <div className="text-sm">💯 100% Free Forever</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
