"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Laptop, Store, TrendingUp, Shield, Clock, Users } from "lucide-react";
import AnimatedDownloadButton from "../components/AnimatedDownloadButton";
import Link from "next/link";

export default function WhoIsItForPage() {
    const userTypes = [
        {
            icon: <GraduationCap className="w-10 h-10" />,
            title: "Students",
            description: "Track expenses, manage pocket money, and build healthy financial habits early.",
            features: [
                "Track daily expenses and pocket money",
                "Set monthly budgets and savings goals",
                "Learn financial management early",
                "Monitor spending patterns"
            ],
            gradient: "from-purple-500 to-indigo-600",
            bgPattern: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            icon: <Briefcase className="w-10 h-10" />,
            title: "Working Professionals",
            description: "Manage salary, track investments, and plan for future financial goals.",
            features: [
                "Salary and income tracking",
                "Investment portfolio management",
                "EMI and loan tracking",
                "Tax planning and reports"
            ],
            gradient: "from-pink-500 to-rose-600",
            bgPattern: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            icon: <Laptop className="w-10 h-10" />,
            title: "Freelancers",
            description: "Monitor project income, track business expenses, and manage irregular cash flow.",
            features: [
                "Project-based income tracking",
                "Business expense categorization",
                "Cash flow management",
                "Client payment reminders"
            ],
            gradient: "from-cyan-500 to-blue-600",
            bgPattern: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            icon: <Store className="w-10 h-10" />,
            title: "Small Business Owners",
            description: "Manage business finances, track EMIs, and monitor investment portfolios.",
            features: [
                "Business revenue tracking",
                "Vendor payment management",
                "Inventory cost monitoring",
                "Profit and loss reports"
            ],
            gradient: "from-emerald-500 to-teal-600",
            bgPattern: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        }
    ];

    const benefits = [
        {
            icon: <TrendingUp className="w-8 h-8 text-primary-teal" />,
            title: "Smart Insights",
            description: "Get personalized financial insights based on your spending patterns and goals"
        },
        {
            icon: <Shield className="w-8 h-8 text-primary-teal" />,
            title: "Secure & Private",
            description: "Bank-grade encryption ensures your financial data stays safe and confidential"
        },
        {
            icon: <Clock className="w-8 h-8 text-primary-teal" />,
            title: "Save Time",
            description: "Automated tracking and smart categorization save you hours every month"
        },
        {
            icon: <Users className="w-8 h-8 text-primary-teal" />,
            title: "For Everyone",
            description: "Designed to be simple and intuitive, no financial expertise required"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-mesh pt-32 pb-20">
                <div className="absolute top-20 right-10 w-96 h-96 bg-teal-400 shape-circle-glow animate-float-slow"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-400 shape-circle-glow animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary-teal font-bold tracking-wide uppercase text-sm mb-4 font-inter">Who Is It For?</h2>
                        <h1 className="font-sora text-5xl md:text-7xl font-bold text-neutral-slate mb-6 leading-tight">
                            Built for <span className="text-gradient-primary">Everyone</span>
                        </h1>
                        <p className="font-inter text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                            Whether you're a student managing pocket money or a professional planning investments,
                            SwiftFin adapts to your unique financial needs.
                        </p>
                        <AnimatedDownloadButton className="inline-block px-8 py-4 text-lg" text="Download Now" />
                    </motion.div>
                </div>
            </section>

            {/* User Types Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-sora text-4xl md:text-5xl font-bold text-neutral-slate mb-6">
                            Perfect for Your Lifestyle
                        </h2>
                        <p className="font-inter text-lg text-gray-600">
                            No matter your profession or financial goals, SwiftFin has the tools you need to succeed.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {userTypes.map((user, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Gradient Header */}
                                <div
                                    className="relative p-8 text-white"
                                    style={{ background: user.bgPattern }}
                                >
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                                            {user.icon}
                                        </div>
                                        <h3 className="font-sora text-3xl font-bold mb-3">{user.title}</h3>
                                        <p className="font-inter text-white/90 text-lg">{user.description}</p>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="p-8">
                                    <h4 className="font-sora text-lg font-bold text-neutral-slate mb-4">Key Features:</h4>
                                    <ul className="space-y-3">
                                        {user.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-success-green mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-inter text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
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
                        <h2 className="font-sora text-4xl md:text-5xl font-bold text-neutral-slate mb-6">
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
                                className="text-center p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-sora text-xl font-bold text-neutral-slate mb-3">{benefit.title}</h3>
                                <p className="font-inter text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-neutral-slate text-white">
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
