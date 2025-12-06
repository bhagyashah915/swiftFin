"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, ArrowRight } from "lucide-react";

export default function About() {
    const values = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Simplicity First",
            description: "Easy-to-use interface designed for everyone"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security & Privacy",
            description: "Bank-grade encryption for your data"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Smart Automation",
            description: "Automated tracking and insights"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Built for You",
            description: "Personalized financial experience"
        }
    ];

    // Duplicate for seamless loop
    const tickerItems = [...values, ...values, ...values];

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-[#20C997] font-semibold text-sm uppercase tracking-wider mb-4">
                        About SwiftFin
                    </span>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6">
                        Your Personal Finance Companion
                    </h2>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        SwiftFin helps you take control of your spending and manage all your finances in one place.
                        Track expenses, monitor EMIs, and receive personalized insights.
                    </p>
                </motion.div>
            </div>

            {/* Ticker/Marquee Animation */}
            <div className="relative py-8 bg-gradient-to-r from-[#20C997]/5 via-transparent to-[#20C997]/5">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Ticker */}
                <motion.div
                    className="flex gap-8"
                    animate={{ x: [0, -33.33 + "%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear"
                        }
                    }}
                >
                    {tickerItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 px-8 py-4 bg-white rounded-full border border-gray-100 shadow-sm whitespace-nowrap flex-shrink-0"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#20C997]/10 flex items-center justify-center text-[#20C997]">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-sora font-bold text-[#495057] text-sm">
                                    {item.title}
                                </h4>
                                <p className="font-inter text-gray-500 text-xs">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* CTA */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <a
                        href="#faq"
                        className="inline-flex items-center gap-2 text-[#20C997] font-semibold hover:underline transition-all"
                    >
                        Have questions? View FAQ
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
