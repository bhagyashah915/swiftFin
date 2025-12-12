"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, PieChart, Wallet, Camera, Calculator, ArrowLeft, CheckCircle2, Shield, Clock, Target, Zap, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FeaturesPage() {
    const [activeStep, setActiveStep] = useState(0);

    const keyFeatures = [
        {
            icon: <Receipt className="w-8 h-8" />,
            title: "Expense Tracking",
            subtitle: "Record and categorize expenses automatically or manually",
            description: "Track every rupee with intelligent expense tracking. Scan receipts using your camera, manually enter transactions, or let SwiftFin automatically categorize your spending. Get real-time insights into where your money goes with detailed breakdowns by category, merchant, and time period.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80",
            benefits: [
                "Automatic categorization with AI",
                "Receipt scanning with OCR technology",
                "Real-time expense notifications",
                "Multi-currency support"
            ]
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Financial Reports",
            subtitle: "Generate reports and visualizations to analyze spending habits",
            description: "Transform your financial data into actionable insights with interactive dashboards and comprehensive reports. Visualize spending trends, compare periods, and identify opportunities to save. Export reports in PDF or CSV format for tax purposes or financial planning.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
            benefits: [
                "Interactive charts and graphs",
                "Customizable date ranges",
                "Export to PDF/CSV",
                "Spending trend analysis"
            ]
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: "EMI Management",
            subtitle: "Track and manage all loans with clear payment schedules",
            description: "Never miss an EMI payment again. Track all your loans in one place with automated payment reminders. Visualize your loan progress, understand interest breakdowns, and plan prepayments to reduce your debt burden faster.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
            benefits: [
                "Payment reminders and alerts",
                "Interest calculation breakdown",
                "Prepayment impact analysis",
                "Loan payoff timeline"
            ]
        }
    ];

    const moreFeatures = [
        {
            icon: <PieChart className="w-8 h-8" />,
            title: "Smart Budgeting",
            description: "Manage detailed budgets across categories like housing, transportation, food, and entertainment to stay on top of your finances."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Investment Tracking",
            description: "Monitor and analyze your investment portfolio, including stocks, mutual funds, and bonds, to maximize growth potential."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Savings Goals",
            description: "Set specific savings goals for vacations, emergencies, or big purchases and track your progress toward achieving them."
        },
        {
            icon: <Calculator className="w-8 h-8" />,
            title: "Tax Planning",
            description: "Identify tax-saving opportunities, organize documents, and simplify your preparation for filing season with smart suggestions."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Bill Payments",
            description: "Pay and schedule bills directly within the app, giving you a single place to manage all recurring expenses efficiently."
        },
        {
            icon: <Wallet className="w-8 h-8" />,
            title: "Multiple Accounts",
            description: "Manage multiple bank accounts, credit cards, and wallets in one unified dashboard for complete financial visibility."
        }
    ];

    const benefits = [
        {
            icon: <Clock className="w-12 h-12" />,
            title: "Save Time & Reduce Stress",
            subtitle: "Automate your finances for less worry",
            description: "Automate repetitive tasks like budgeting, expense tracking, and bill payments. Free up your time for things that matter while reducing financial anxiety.",
            points: ["Stay on top of your budget", "Automate finances for less stress"],
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
        },
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Accelerate Financial Growth",
            subtitle: "Take control of your financial future",
            description: "Get valuable insights into your spending patterns and identify areas where you can save more. Make informed decisions backed by data.",
            points: ["Reach your financial goals faster", "Make data-driven decisions"],
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Bank-Level Security",
            subtitle: "Experience ultimate financial security",
            description: "Your data is protected with 256-bit encryption and multi-factor authentication. Focus on managing your money without security worries.",
            points: ["Protect your sensitive data", "Complete peace of mind"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        {
            number: "1",
            title: "Connect Your Accounts",
            description: "Securely link your bank accounts, credit cards, and investment accounts to get a complete financial overview in one place.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80"
        },
        {
            number: "2",
            title: "Track Expenses",
            description: "Automatically categorize transactions or manually add expenses. Scan receipts and let AI do the work for you.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80"
        },
        {
            number: "3",
            title: "Set Budgets & Goals",
            description: "Create custom budgets for different categories and set savings goals. Get alerts when you're close to your limits.",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-white">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent"></div>

                <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                    <a
                        href="/"
                        className="inline-flex items-center text-slate-600 hover:text-teal-600 transition-all duration-300 group mb-8"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                            Your Finance <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Solutions</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                            Experience the peace of mind that comes with having your finances under complete control
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl"></div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Key Features</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-4">
                                Explore Our Standout Features
                            </h2>
                        </motion.div>
                    </div>

                    <div className="space-y-32">
                        {keyFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                    <p className="text-lg text-slate-500 mb-6">{feature.subtitle}</p>
                                    <p className="text-slate-600 leading-relaxed mb-8">{feature.description}</p>
                                    <div className="space-y-3">
                                        {feature.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                                <span className="text-slate-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full h-[500px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                                    </div>
                                    {/* Decorative blob */}
                                    <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Features Grid */}
            <section className="py-20 bg-gradient-to-b from-white to-teal-50/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">More Features</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                                More Great Additional Features
                            </h2>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {moreFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100/50"
                            >
                                <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Benefits</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                                Experience The Future Of Finance
                            </h2>
                        </motion.div>
                    </div>

                    <div className="space-y-20">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white mb-6 shadow-lg shadow-teal-500/30">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                    <p className="text-xl text-teal-600 mb-6">{benefit.subtitle}</p>
                                    <p className="text-slate-600 leading-relaxed mb-6">{benefit.description}</p>
                                    <div className="space-y-3">
                                        {benefit.points.map((point, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                                                <span className="text-slate-700 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="w-full h-[400px] object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">How It Works</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
                                How SwiftFin Can Help You
                            </h2>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onClick={() => setActiveStep(index)}
                                className={`cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-105' : ''}`}
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6 group">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
                                    <div className="absolute top-6 left-6">
                                        <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-bold">
                                            {step.number}
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your First Step To Financial Freedom Begins Here
                        </h2>
                        <p className="text-xl text-white/80 mb-10">
                            Watch your money grow. Download the app now and start taking control of your money today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105">
                                Download for iOS
                            </button>
                            <button className="px-8 py-4 bg-teal-500 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105 border-2 border-teal-400">
                                Download for Android
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}