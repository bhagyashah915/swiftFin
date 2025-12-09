"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Laptop,
    Store,
    TrendingUp,
    Shield,
    Clock,
    Users,
    ChevronRight,
} from "lucide-react";
import AnimatedDownloadButton from "../components/AnimatedDownloadButton";
import Link from "next/link";
import { useState } from "react";

export default function WhoIsItForPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const userTypes = [
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Students",
            description: "Track expenses, manage pocket money, and build healthy financial habits early.",
            features: [
                "Track daily expenses and pocket money",
                "Set monthly budgets and savings goals",
                "Learn financial management early",
                "Monitor spending patterns",
            ],
            bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
            color: "#20C997",
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Working Professionals",
            description: "Manage salary, track investments, and plan for future financial goals.",
            features: [
                "Salary and income tracking",
                "Investment portfolio management",
                "EMI and loan tracking",
                "Tax planning and reports",
            ],
            bgImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80",
            color: "#20C997",
        },
        {
            icon: <Laptop className="w-8 h-8" />,
            title: "Freelancers",
            description: "Monitor project income, track business expenses, and manage irregular cash flow.",
            features: [
                "Project-based income tracking",
                "Business expense categorization",
                "Cash flow management",
                "Client payment reminders",
            ],
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
            color: "#20C997",
        },
        {
            icon: <Store className="w-8 h-8" />,
            title: "Small Business Owners",
            description: "Manage business finances, track EMIs, and monitor investment portfolios.",
            features: [
                "Business revenue tracking",
                "Vendor payment management",
                "Inventory cost monitoring",
                "Profit and loss reports",
            ],
            bgImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&q=80",
            color: "#20C997",
        },
    ];

    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8 text-[#20C997]" />,
            title: "Smart Insights",
            description: "Get personalized financial insights based on your spending patterns and goals",
        },
        {
            icon: <Shield className="w-8 h-8 text-[#20C997]" />,
            title: "Secure & Private",
            description: "Bank-grade encryption ensures your financial data stays safe and confidential",
        },
        {
            icon: <Clock className="w-8 h-8 text-[#20C997]" />,
            title: "Save Time",
            description: "Automated tracking and smart categorization save you hours every month",
        },
        {
            icon: <Users className="w-8 h-8 text-[#20C997]" />,
            title: "For Everyone",
            description: "Designed to be simple and intuitive, no financial expertise required",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section with Dynamic Background */}
            <section className="relative min-h-screen overflow-hidden">
                {/* Background Images with Crossfade */}
                <div className="absolute inset-0">
                    {userTypes.map((user, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeIndex === index ? 1 : 0,
                                scale: activeIndex === index ? 1 : 1.1,
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${user.bgImage})` }}
                            />
                            {/* Dark overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                        </motion.div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 md:px-12 py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                        {/* Left Side - Text Content */}
                        <motion.div
                            className="text-white"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/20 border border-[#20C997]/40 text-[#20C997] font-bold text-sm uppercase tracking-widest mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Who Is It For?
                            </motion.span>

                            <h1 className="font-sora text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                Built for <span className="text-[#20C997]">Everyone</span>
                            </h1>

                            <p className="font-inter text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
                                Whether you're a student managing pocket money or a professional planning investments,
                                SwiftFin adapts to your unique financial needs.
                            </p>

                            <AnimatedDownloadButton className="px-8 py-4 text-lg" text="Download Now" />
                        </motion.div>

                        {/* Right Side - User Type Selector */}
                        <div className="space-y-4">
                            {userTypes.map((user, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden group ${activeIndex === index
                                            ? 'bg-white/15 backdrop-blur-md border border-white/30'
                                            : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                                        }`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${activeIndex === index
                                                ? 'bg-[#20C997] text-white'
                                                : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                                            }`}>
                                            {user.icon}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="font-sora text-xl font-bold text-white mb-1">
                                                {user.title}
                                            </h3>
                                            <p className={`font-inter text-sm transition-all duration-300 ${activeIndex === index ? 'text-gray-300' : 'text-gray-400'
                                                }`}>
                                                {user.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <ChevronRight className={`w-6 h-6 transition-all duration-300 ${activeIndex === index ? 'text-[#20C997] translate-x-1' : 'text-white/30'
                                            }`} />
                                    </div>

                                    {/* Expanded Features */}
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10">
                                                    {user.features.map((feature, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            className="flex items-center gap-2"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.1 }}
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#20C997]" />
                                                            <span className="text-xs text-gray-300">{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-sora text-4xl md:text-5xl font-bold text-[#2E3A39] mb-6">
                            Why Choose SwiftFin?
                        </h2>
                        <p className="font-inter text-lg text-gray-600">
                            Join thousands who trust SwiftFin to manage their finances efficiently and securely.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-[#20C997]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-sora text-xl font-bold text-[#2E3A39] mb-3">{benefit.title}</h3>
                                <p className="font-inter text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#2E3A39] text-white">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-sora text-4xl md:text-5xl font-bold mb-6">
                            Ready to Take Control of Your Finances?
                        </h2>
                        <p className="font-inter text-xl text-gray-300 mb-10">
                            Download SwiftFin today and start your journey to financial freedom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <AnimatedDownloadButton className="px-8 py-4 text-lg" text="Download Now" />
                            <Link
                                href="/#features"
                                className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-inter font-bold text-lg rounded-xl hover:bg-white/20 transition-all"
                            >
                                Explore Features
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
