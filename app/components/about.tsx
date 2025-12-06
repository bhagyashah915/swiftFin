"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Users } from "lucide-react";

export default function About() {
    const values = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Simplicity First",
            description: "Easy-to-use interface designed for everyone, no financial expertise needed"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security & Privacy",
            description: "Bank-grade encryption to keep your financial data safe and secure"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Smart Automation",
            description: "Automated tracking and intelligent insights to save you time"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Built for You",
            description: "Personalized experience tailored to your financial goals"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-mesh relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary-teal font-bold tracking-wide uppercase text-xs sm:text-sm mb-3 font-inter">About SwiftFin</h2>
                        <h3 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-slate mb-4 md:mb-6 px-4">
                            Your Personal Finance Companion
                        </h3>
                        <p className="font-inter text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-4">
                            SwiftFin helps you take control of your spending and manage all your finances in one place.
                            Track expenses effortlessly, monitor EMIs, manage investments, and receive personalized insights
                            to make smarter financial decisions.
                        </p>
                        <motion.a
                            href="#faq"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold font-inter text-white bg-primary-teal rounded-full shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05, backgroundColor: "#14b8a6" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View FAQ
                        </motion.a>
                    </motion.div>

                    {/* Values Grid - Mobile Optimized */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/50 shadow-sm hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    borderColor: "rgba(13, 148, 136, 0.3)",
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-teal-50/0 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <motion.div
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-teal/10 rounded-2xl flex items-center justify-center text-primary-teal mb-4 sm:mb-5 relative z-10"
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        scale: 1.1,
                                        backgroundColor: "rgba(13, 148, 136, 1)",
                                        color: "white",
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {value.icon}
                                </motion.div>
                                <h4 className="font-sora text-lg sm:text-xl font-bold text-neutral-slate mb-2 sm:mb-3 relative z-10 group-hover:text-primary-teal transition-colors">{value.title}</h4>
                                <p className="font-inter text-gray-600 text-sm leading-relaxed relative z-10">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
