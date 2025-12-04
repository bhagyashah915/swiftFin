"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera } from "lucide-react";
import { motion } from "framer-motion"

export default function Features() {
    const features = [
        {
            icon: <Receipt className="w-8 h-8 text-primary-teal" />,
            title: "Automated Expense Tracking",
            description: "Track expenses with manual entry, receipt scanning, and automatic categorization of recurring expenses."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-primary-teal" />,
            title: "Monthly & Yearly Reports",
            description: "Interactive dashboards with charts, filters, and easy PDF/CSV export for comprehensive financial analysis."
        },
        {
            icon: <CreditCard className="w-8 h-8 text-primary-teal" />,
            title: "EMI Tracking",
            description: "Manage loan details, get payment reminders, and visualize your EMI progress with intuitive charts."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-primary-teal" />,
            title: "Investment Management",
            description: "Add investments, view portfolio overview, and track gain/loss across all your investment accounts."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-primary-teal" />,
            title: "Smart Finance Tips",
            description: "Get personalized insights and recommendations based on your spending behavior and financial goals."
        },
        {
            icon: <Camera className="w-8 h-8 text-primary-teal" />,
            title: "Receipt Scanning",
            description: "Snap a photo of your receipt and let AI automatically extract and categorize the expense details."
        }
    ];

    return (
        <section id="features" className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-primary-teal font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">Features</h2>
                    <h3 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-slate mb-4 md:mb-6 px-4">
                        Everything You Need to Manage Your Finances
                    </h3>
                    <p className="font-inter text-gray-600 text-base sm:text-lg px-4">
                        SwiftFin provides a complete suite of tools designed to help you take control of your financial life.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-teal hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20,
                                delay: index * 0.1
                            }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary-teal to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                            {/* FIXED ICON WRAPPER → ONLY REMOVED hover:bg-primary-teal */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-teal-50 rounded-xl flex items-center justify-center mb-5 sm:mb-6 hover:scale-110 transition-all duration-300 shadow-inner">
                                <div className="hover:text-primary-teal transition-colors">
                                    {feature.icon}
                                </div>
                            </div>

                            <h4 className="font-sora text-lg sm:text-xl font-bold text-neutral-slate mb-2 sm:mb-3 hover:text-primary-teal transition-colors">
                                {feature.title}
                            </h4>
                            <p className="font-inter text-gray-600 leading-relaxed text-sm sm:text-base">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
