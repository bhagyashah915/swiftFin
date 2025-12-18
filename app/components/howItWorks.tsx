"use client";

import { motion } from "framer-motion";
import { Wallet, PieChart, Target, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
    {
        id: 1,
        title: "Connect Your Accounts",
        description: "Securely link your bank, credit cards, and investments to get a complete financial overview in one place.",
        icon: <Wallet className="w-5 h-5 text-white" />,
        bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Track Expenses",
        description: "Monitor your spending across categories with automatic transaction tracking and real-time updates.",
        icon: <PieChart className="w-5 h-5 text-white" />,
        bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Set Budget",
        description: "Create personalized budgets for different categories and get alerts when you're approaching limits.",
        icon: <Target className="w-5 h-5 text-white" />,
        bgImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Monitor Progress",
        description: "Get personalized insights and recommendations to optimize your financial health and reach your goals.",
        icon: <TrendingUp className="w-5 h-5 text-white" />,
        bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop"
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile and auto-scroll
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-scroll on mobile
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setActiveStep((prev) => {
                    return prev >= 4 ? 1 : prev + 1;
                });
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    // Function to render phone screen based on active step
    const renderPhoneScreen = (stepId: number) => {
        switch (stepId) {
            case 1:
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center mb-6">
                            <button className="text-teal-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h1 className="text-xl font-bold text-slate-900 ml-4">Connect Accounts</h1>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-6 mb-6 text-white">
                            <div className="text-sm opacity-90 mb-2">Link Your Accounts</div>
                            <div className="text-3xl font-bold">Get Started</div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white border-2 border-teal-500 rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                        <Wallet className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <span className="font-semibold text-slate-900">Bank Account</span>
                                </div>
                                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-slate-900">Credit Card</span>
                                </div>
                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-slate-600" />
                                    </div>
                                    <span className="font-semibold text-slate-900">Investment</span>
                                </div>
                                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            <a href="/download" className="block text-center w-full bg-teal-500 text-white rounded-2xl py-4 font-semibold text-lg mt-6">
                                Connect Now
                            </a>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center mb-6">
                            <button className="text-teal-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h1 className="text-xl font-bold text-slate-900 ml-4">Track Expenses</h1>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-6 mb-6 text-white">
                            <div className="text-sm opacity-90 mb-2">Today's Spending</div>
                            <div className="text-5xl font-bold">$89.50</div>
                        </div>

                        <div className="space-y-3">
                            {[
                                { name: "Food & Dining", amount: "$42.00", percent: 60, icon: "🍔" },
                                { name: "Transportation", amount: "$18.50", percent: 35, icon: "🚗" },
                                { name: "Shopping", amount: "$29.00", percent: 45, icon: "🛍️" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{item.icon}</span>
                                            <span className="font-semibold text-slate-900">{item.name}</span>
                                        </div>
                                        <span className="font-bold text-slate-900">{item.amount}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2">
                                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${item.percent}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center mb-6">
                            <button className="text-teal-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h1 className="text-xl font-bold text-slate-900 ml-4">Set Budget</h1>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-6 mb-6 text-white">
                            <div className="text-sm opacity-90 mb-2">Monthly Budget</div>
                            <div className="text-5xl font-bold">$2,500</div>
                            <div className="text-sm opacity-80 mt-2">$1,250 remaining</div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white border border-slate-200 rounded-2xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                            <span className="text-xl">🍔</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Food</div>
                                            <div className="text-xs text-slate-500">$500 budget</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-slate-900">$320</div>
                                        <div className="text-xs text-teal-500">64%</div>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: "64%" }}></div>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-2xl p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                            <span className="text-xl">🚗</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-slate-900">Transport</div>
                                            <div className="text-xs text-slate-500">$300 budget</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-slate-900">$145</div>
                                        <div className="text-xs text-teal-500">48%</div>
                                    </div>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div className="bg-teal-500 h-2 rounded-full" style={{ width: "48%" }}></div>
                                </div>
                            </div>

                            <button className="w-full bg-teal-500 text-white rounded-2xl py-4 font-semibold text-lg">
                                Adjust Budget
                            </button>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="px-6 pt-8">
                        <div className="flex items-center mb-6">
                            <button className="text-teal-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <h1 className="text-xl font-bold text-slate-900 ml-4">Progress</h1>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-6 mb-6 text-white">
                            <div className="text-sm opacity-90 mb-2">This Month</div>
                            <div className="text-5xl font-bold">+25%</div>
                            <div className="text-sm opacity-80 mt-2">Savings increased</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-white border border-slate-200 rounded-2xl p-4">
                                <div className="text-xs text-slate-500 mb-1">Saved</div>
                                <div className="text-2xl font-bold text-slate-900">$640</div>
                                <div className="text-xs text-teal-500 mt-1">↑ 15%</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl p-4">
                                <div className="text-xs text-slate-500 mb-1">Goals</div>
                                <div className="text-2xl font-bold text-slate-900">3/5</div>
                                <div className="text-xs text-teal-500 mt-1">On track</div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-4">
                            <div className="font-semibold text-slate-900 mb-3">Weekly Trend</div>
                            <div className="flex items-end h-24 gap-2">
                                {[45, 60, 50, 75, 65, 80, 70].map((height, idx) => (
                                    <div key={idx} className="flex-1 flex flex-col items-center">
                                        <div
                                            className="w-full rounded-t-lg bg-teal-500"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                        <div className="text-xs text-slate-500 mt-1">{["M", "T", "W", "T", "F", "S", "S"][idx]}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <div className="font-semibold text-slate-900 text-sm mb-1">Great job!</div>
                                <div className="text-slate-600 text-xs">You're on track to meet your monthly savings goal.</div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="how-it-works">
            {/* Dynamic Background Images */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={steps[activeStep - 1].bgImage}
                        alt={steps[activeStep - 1].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-400/85"></div>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10 p-8 md:p-20 rounded-3xl md:rounded-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest bg-teal-50 px-5 py-2 rounded-full mb-6 border border-teal-100">
                        How It Works
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        How <span className="text-white">SwiftFin</span><br />Can Help You
                    </h2>
                    <p className="text-blackx text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Follow these simple steps to take control of your finances and achieve your goals.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto gap-8 lg:gap-0">
                    {/* Left Side - Phone Mockup */}
                    <div className="flex-shrink-0 lg:mr-16">
                        <div className="relative">
                            {/* Phone Mockup */}
                            <div className="relative w-[300px] md:w-[340px] h-[620px] md:h-[700px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-3xl z-20"></div>

                                {/* Side Buttons */}
                                <div className="absolute -right-2 top-32 w-1 h-12 bg-slate-800 rounded-r-md"></div>
                                <div className="absolute -left-2 top-32 w-1 h-14 bg-slate-800 rounded-l-md"></div>
                                <div className="absolute -left-2 top-52 w-1 h-14 bg-slate-800 rounded-l-md"></div>

                                {/* Screen Content */}
                                <div className="relative w-full h-full bg-white rounded-[3rem] overflow-hidden">
                                    {/* Status Bar */}
                                    <div className="px-8 pt-3 flex justify-between items-center text-xs font-semibold text-slate-900">
                                        <span>9:41</span>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                                            </svg>
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Dynamic Screen Content */}
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full overflow-y-auto"
                                    >
                                        {renderPhoneScreen(activeStep)}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Steps with Connecting Lines */}
                    <div className="flex-1 relative w-full">
                        {/* Vertical Connecting Line - Hidden on mobile */}
                        <div className="hidden lg:block absolute left-6 top-10 bottom-10 w-0.5 bg-slate-300"></div>

                        <div className="space-y-4 relative">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onMouseEnter={() => !isMobile && setActiveStep(step.id)}
                                    onClick={() => setActiveStep(step.id)}
                                    className="group cursor-pointer relative"
                                >
                                    <div className="flex items-center gap-6">
                                        {/* Step Number Circle */}
                                        <div
                                            className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 z-10 ${
                                                activeStep === step.id
                                                    ? 'bg-teal-600 text-white scale-110'
                                                    : 'bg-white text-slate-900 group-hover:bg-teal-600 group-hover:text-white'
                                            }`}
                                        >
                                            {step.id}
                                        </div>

                                        {/* Content Card */}
                                        <div className={`flex-1 rounded-2xl p-6 transition-all duration-300 ${
                                            activeStep === step.id
                                                ? 'bg-teal-700 shadow-xl'
                                                : 'bg-white shadow-md group-hover:bg-teal-700 group-hover:shadow-xl'
                                        }`}>
                                            <h3 className={`font-bold text-xl mb-3 transition-colors duration-300 ${
                                                activeStep === step.id
                                                    ? 'text-white'
                                                    : 'text-slate-900 group-hover:text-white'
                                            }`}>
                                                {step.title}
                                            </h3>
                                            <p className={`text-base leading-relaxed transition-colors duration-300 ${
                                                activeStep === step.id
                                                    ? 'text-white/90'
                                                    : 'text-slate-600 group-hover:text-white/90'
                                            }`}>
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}