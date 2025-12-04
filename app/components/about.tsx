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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary-teal font-bold tracking-wide uppercase text-sm mb-3 font-inter">About SwiftFin</h2>
                        <h3 className="font-sora text-5xl md:text-6xl font-bold text-neutral-slate mb-6">
                            Your Personal Finance Companion
                        </h3>
                        <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            SwiftFin helps you take control of your spending and manage all your finances in one place.
                            Track expenses effortlessly, monitor EMIs, manage investments, and receive personalized insights
                            to make smarter financial decisions.
                        </p>
                        <a
                            href="#faq"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold font-inter text-white bg-primary-teal rounded-full hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            View FAQ
                        </a>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 transition-all group cursor-pointer relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                    boxShadow: "0 20px 40px -10px rgba(13, 148, 136, 0.15)",
                                    borderColor: "rgba(13, 148, 136, 0.4)",
                                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <motion.div
                                    className="w-14 h-14 bg-primary-teal/10 rounded-2xl flex items-center justify-center text-primary-teal mb-5 relative z-10"
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1,
                                        backgroundColor: "rgba(13, 148, 136, 1)",
                                        color: "white",
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {value.icon}
                                </motion.div>
                                <h4 className="font-sora text-xl font-bold text-neutral-slate mb-3 relative z-10 group-hover:text-primary-teal transition-colors">{value.title}</h4>
                                <p className="font-inter text-gray-600 text-sm leading-relaxed relative z-10">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
