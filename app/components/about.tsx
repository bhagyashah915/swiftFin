"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, ArrowRight, Wallet, TrendingUp, CreditCard, PieChart } from "lucide-react";

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
        },
        {
            icon: <Wallet className="w-6 h-6" />,
            title: "All-in-One",
            description: "Manage all finances in one place"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Track Growth",
            description: "Monitor your wealth over time"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Manager",
            description: "Never miss a payment deadline"
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Smart Reports",
            description: "Detailed financial analytics"
        }
    ];

    // Split for two columns
    const leftColumn = values.slice(0, 4);
    const rightColumn = values.slice(4, 8);

    // Duplicate for seamless loop
    const leftTickerItems = [...leftColumn, ...leftColumn, ...leftColumn];
    const rightTickerItems = [...rightColumn, ...rightColumn, ...rightColumn];

    return (
        <section className="py-20 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                {/* Main Layout - Grid with ticker on sides */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Vertical Ticker */}
                    <div className="hidden lg:block lg:col-span-2 relative h-[500px] overflow-hidden">
                        {/* Fade edges */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

                        {/* Vertical Ticker - Moving Up */}
                        <motion.div
                            className="flex flex-col gap-4"
                            animate={{ y: [0, -33.33 + "%"] }}
                            transition={{
                                y: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                        >
                            {leftTickerItems.map((item, index) => (
                                <motion.div
                                    key={`left-${index}`}
                                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(32,201,151,0.15)" }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#20C997] to-[#198754] flex items-center justify-center text-white shadow-md">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-sora font-bold text-[#495057] text-xs text-center">
                                        {item.title}
                                    </h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Center Content */}
                    <div className="lg:col-span-8">
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/10 mb-4">
                                <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                    About SwiftFin
                                </span>
                            </div>
                            <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6 leading-tight">
                                Your Personal <span className="text-[#20C997]">Finance</span> Companion
                            </h2>
                            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
                                SwiftFin helps you take control of your spending and manage all your finances in one place.
                                Track expenses, monitor EMIs, and receive personalized insights to achieve your financial goals.
                            </p>

                            {/* Feature Grid for Mobile */}
                            <div className="grid grid-cols-2 gap-4 lg:hidden mb-8">
                                {values.slice(0, 4).map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-4 bg-gray-50 rounded-xl"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[#20C997]/10 flex items-center justify-center text-[#20C997] mb-2 mx-auto">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-sora font-bold text-[#495057] text-sm text-center">
                                            {item.title}
                                        </h4>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA */}
                            <motion.a
                                href="#faq"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#20C997] text-white font-semibold rounded-full hover:bg-[#198754] transition-all shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Have questions? View FAQ
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right Vertical Ticker */}
                    <div className="hidden lg:block lg:col-span-2 relative h-[500px] overflow-hidden">
                        {/* Fade edges */}
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

                        {/* Vertical Ticker - Moving Down */}
                        <motion.div
                            className="flex flex-col gap-4"
                            initial={{ y: "-66.66%" }}
                            animate={{ y: ["-66.66%", "-33.33%", "0%"] }}
                            transition={{
                                y: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear"
                                }
                            }}
                        >
                            {rightTickerItems.map((item, index) => (
                                <motion.div
                                    key={`right-${index}`}
                                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                                    whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(253,126,20,0.15)" }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FD7E14] to-[#ea580c] flex items-center justify-center text-white shadow-md">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-sora font-bold text-[#495057] text-xs text-center">
                                        {item.title}
                                    </h4>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
