"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, ArrowRight, Lock, Zap, Users, Target, Globe, HeartHandshake } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [carousel.current]);

    const tickerImages = [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        "https://images.unsplash.com/photo-1579621970590-9d624316904b?w=800&q=80",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ];

    const features = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Expense Tracking",
            description: "Track every rupee with smart categorization.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80",
            leftTitle: "Smart Expense Tracking",
            leftDescription: "Keep track of every transaction with intelligent categorization. SwiftFin automatically sorts your expenses, helping you understand where your money goes with minimal effort."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Financial Reports",
            description: "Beautiful charts and detailed analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
            leftTitle: "Powerful Analytics",
            leftDescription: "Gain deep insights into your financial health with beautiful visualizations and comprehensive reports. Make data-driven decisions with confidence."
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Management",
            description: "Never miss a payment with smart reminders.",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1920&q=80",
            leftTitle: "Never Miss a Payment",
            leftDescription: "Manage all your EMIs and recurring payments in one place. Get timely reminders and track payment history to maintain a perfect credit score."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Tracking",
            description: "Monitor your portfolio in real-time.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80",
            leftTitle: "Watch Your Wealth Grow",
            leftDescription: "Track your investments across multiple platforms in one dashboard. Monitor performance, analyze trends, and make informed decisions about your portfolio."
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Smart Insights",
            description: "AI-powered spending recommendations.",
            image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?w=1920&q=80",
            leftTitle: "AI-Powered Intelligence",
            leftDescription: "Get personalized financial recommendations based on your spending patterns. Our AI analyzes your habits and suggests smart ways to save and invest."
        },
        {
            icon: <Camera className="w-6 h-6" />,
            title: "Receipt Scanning",
            description: "Snap and auto-categorize expenses.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
            leftTitle: "Effortless Receipt Management",
            leftDescription: "Simply snap a photo of your receipt and let our OCR technology extract all the details. Automatic categorization saves you time and keeps your records organized."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Multi-Currency",
            description: "Travel freely with auto-conversions.",
            image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?w=1920&q=80",
            leftTitle: "Global Finance",
            leftDescription: "Handle transactions in multiple currencies seamlessly. Perfect for travelers and international business, with real-time exchange rates."
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Goal Setting",
            description: "Reach your targets faster.",
            image: "https://images.unsplash.com/photo-1533421644343-45b606745fb1?w=1920&q=80",
            leftTitle: "Achieve Your Dreams",
            leftDescription: "Set financial goals and track your progress. Whether it's saving for a vacation or a new home, we help you stay on track."
        }
    ];

    const values = [
        {
            icon: <Target className="w-10 h-10" />,
            title: "Business Growth and Efficiency",
            description: "Empowering businesses to achieve financial excellence through innovative software solutions."
        },
        {
            icon: <HeartHandshake className="w-10 h-10" />,
            title: "Customer-Centric Approach",
            description: "Building solutions that truly understand and address the needs of modern businesses and individuals."
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Excellence in Execution",
            description: "Delivering reliable, high-performance solutions that businesses can depend on every day."
        }
    ];

    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Small Business Owner",
            content: "I love how it helps me stay organized with my spending. I've reached my financial goals faster than I ever thought possible.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
        },
        {
            name: "Mark Thompson",
            role: "Freelance Designer",
            content: "Skeptical at first, but it completely transformed my relationship with money. I'm finally in control of my finances.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
        },
        {
            name: "Emily Rodriguez",
            role: "Marketing Director",
            content: "Intuitive and easy to navigate. A game-changer for my financial life. The insights are incredibly valuable.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
        },
        {
            name: "David Chen",
            role: "Software Engineer",
            content: "Helped me pay off debt and start investing. The automated tracking saves me hours every month.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
        },
        {
            name: "Jessica Miller",
            role: "Financial Analyst",
            content: "The best finance app I've used. Simple, powerful, and secure. It's exactly what I needed for my personal finances.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
        },
        {
            name: "Michael Chang",
            role: "Startup Founder",
            content: "We use SwiftFin for all our company expenses. The multi-currency support is a lifesaver for our international team.",
            image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80"
        },
        {
            name: "Lisa Anderson",
            role: "Digital Nomad",
            content: "Traveling the world is easier when your finances are sorted. SwiftFin handles conversions and categories automatically.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
        },
        {
            name: "James Wilson",
            role: "Investment Banker",
            content: "The portfolio tracking is top-notch. Real-time updates and deep analytics help me make split-second decisions.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
        },
        {
            name: "Anita Patel",
            role: "Real Estate Agent",
            content: "Managing commissions and expenses used to be a nightmare. Now it's the easiest part of my day.",
            image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&q=80"
        }
    ];

    return (
        <>
            {/* Hero Section - Enhanced with Video Background */}
            <section className="relative min-h-screen bg-white pt-20 pb-12 overflow-hidden flex items-center">
                <div className="w-full px-0 sm:px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full h-[90vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
                    >
                        {/* Video Background */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src="/about.mp4" type="video/mp4" />
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="max-w-5xl"
                            >
                                <h1 className="text-[15vw] md:text-[120px] lg:text-[150px] font-black text-white tracking-tight leading-none uppercase mb-8">
                                    About Us
                                </h1>
                                <p className="text-xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto">
                                    SwiftFin is a simple, powerful personal finance app. It helps users track expenses, manage EMIs, monitor investments, and get smart money tips.
                                </p>
                            </motion.div>

                            {/* Scroll Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                            >
                                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                                    <motion.div
                                        animate={{ y: [0, 12, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-1.5 h-1.5 bg-white rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Why Choose SwiftFin - Bento Grid */}
            <section className="relative bg-white py-20 md:py-32 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/20 mb-6"
                        >
                            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                Why Choose SwiftFin
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
                        >
                            Everything You Need in{" "}
                            <span className="text-[#20C997]">One App</span>
                        </motion.h2>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-6 max-w-7xl mx-auto h-auto md:h-[800px]">
                        {/* Large Card - Automated Tracking (2x2) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#20C997] to-teal-600 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="bg-white/20 w-fit p-4 rounded-2xl mb-6 backdrop-blur-sm">
                                        <Receipt className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                                        Automated Expense Tracking
                                    </h3>
                                    <p className="text-white/90 text-lg max-w-sm mb-4">
                                        Snap receipts, auto-categorize expenses, and set recurring bills instantly. Our intelligent OCR technology reads receipts in seconds, eliminating manual data entry forever.
                                    </p>
                                    <p className="text-white/80 text-base max-w-sm">
                                        Save up to 5 hours per week with automatic categorization and smart tagging. Track daily coffee runs, monthly subscriptions, and annual memberships with zero effort.
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-8">
                                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">AI Scan</span>
                                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">Smart Sort</span>
                                    <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">Auto-Tag</span>
                                </div>
                            </div>
                            <Receipt className="absolute -right-12 -bottom-12 w-64 h-64 text-white/10 rotate-12" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                        </motion.div>

                        {/* Stat Card - Speed (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white border border-teal-200 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-primary-teal transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 text-primary-teal" />
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-slate-900 mb-1">Lightning Fast</div>
                                <p className="text-slate-600 font-medium text-sm">Real-time sync across all devices. Updates in milliseconds, not minutes.</p>
                            </div>
                        </motion.div>

                        {/* EMI Card (1x2) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:row-span-2 bg-gradient-to-br from-teal-50 to-white rounded-[2.5rem] p-8 text-slate-900 relative overflow-hidden group border border-teal-100"
                        >
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-4">
                                    <CreditCard className="w-6 h-6 text-teal-600" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold">EMI Manager</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Never miss a payment with smart reminders. Track all your loans, credit cards, and recurring payments in one unified dashboard. Get alerts 3 days before due dates.
                                    </p>

                                    <div className="space-y-3 pt-4">
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200">
                                            <div className="flex justify-between text-xs mb-2 text-slate-600 font-medium">
                                                <span>Home Loan</span>
                                                <span>12/60 months</span>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                                <div className="h-full w-[20%] bg-blue-500 rounded-full"></div>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-2">₹45,000/month • Next: Jan 15</p>
                                        </div>
                                        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200">
                                            <div className="flex justify-between text-xs mb-2 text-slate-600 font-medium">
                                                <span>Car Loan</span>
                                                <span>24/36 months</span>
                                            </div>
                                            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                                <div className="h-full w-[66%] bg-[#20C997] rounded-full"></div>
                                            </div>
                                            <p className="text-xs text-slate-500 mt-2">₹18,500/month • Next: Jan 10</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        </motion.div>

                        {/* Investment (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white border border-teal-200 rounded-[2.5rem] p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-primary-teal" />
                                </div>
                                <span className="bg-teal-100 text-primary-teal px-3 py-1 rounded-full text-xs font-bold">+12.4%</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Portfolio Tracking</h3>
                            <p className="text-slate-600 text-sm">Monitor stocks, mutual funds, crypto, and more. Real-time market data at your fingertips.</p>
                        </motion.div>

                        {/* Security (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group"
                        >
                            <Lock className="w-12 h-12 mb-4 text-white/90" />
                            <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
                            <p className="text-white/70 text-sm leading-relaxed">256-bit AES encryption. Two-factor authentication. Your data is fortress-protected.</p>
                            <Lock className="absolute -right-8 -bottom-8 w-32 h-32 text-white/5 rotate-[-12deg]" />
                        </motion.div>

                        {/* Insights (2x1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-2 bg-gradient-to-r from-teal-50 to-white rounded-[2.5rem] p-8 border border-teal-200 flex items-center justify-between group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="max-w-[60%]">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb className="w-6 h-6 text-primary-teal" />
                                    <span className="font-bold text-primary-teal uppercase tracking-wider text-xs">Smart Insights</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">AI-Powered Financial Coach</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Get personalized money-saving tips based on your spending patterns. Our AI identifies opportunities to cut costs, optimize subscriptions, and boost your savings by up to 30%.
                                </p>

                            </div>
                        </motion.div>

                        {/* Support (1x1) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="bg-white border border-teal-200 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center hover:bg-teal-50 transition-colors"
                        >
                            <Users className="w-10 h-10 text-primary-teal mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Support</h3>
                            <p className="text-slate-600 text-sm">Expert help whenever you need it. Live chat, email, and phone support.</p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Our Mission & Team Section - Extended */}
            <section id="mission" className="relative bg-white py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-6 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/20 mb-6"
                        >
                            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                Our Mission & Values
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Innovating Financial Solutions,<br />
                            <span className="text-[#20C997]">Empowering Businesses</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto"
                        >
                            As a leading provider of innovative finance software, we're dedicated to empowering
                            businesses like yours to achieve their financial goals through cutting-edge technology.
                        </motion.p>
                    </div>

                    {/* Team Meeting & Values Section - Extended */}
                    <div className="max-w-7xl mx-auto mb-20">
                        {/* Rounded Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-slate-50 to-teal-50/30 rounded-[40px] p-6 md:p-12 border border-slate-200 shadow-2xl"
                        >
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                                {/* Left Side - Video Loop - Reduced Spacing */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-[350px] lg:h-[450px] w-full rounded-[32px] overflow-hidden bg-slate-900 shadow-xl">
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            src="/globe.mp4"
                                        ></video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Right Side - Extended Content */}
                                <div className="w-full lg:w-1/2 space-y-6 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/10 text-[#20C997] text-sm font-bold uppercase tracking-wider w-fit">
                                        Our DNA
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                                        Driven by Passion, <br />
                                        <span className="text-[#20C997]">United by Purpose</span>
                                    </h3>

                                    <div className="space-y-6">
                                        <p className="text-lg text-slate-700 leading-relaxed">
                                            At SwiftFin, we're not just building software; we're crafting the future of personal finance.
                                            Our diverse team of engineers, designers, and financial experts comes together with a single mission:
                                            to democratize financial freedom for everyone, everywhere.
                                        </p>
                                        <div className="bg-teal-50/50 rounded-2xl p-6 border border-teal-100">
                                            <p className="text-lg text-slate-800 leading-relaxed italic">
                                                "Financial literacy shouldn't be a privilege—it should be a right. We're building tools
                                                that make complex financial concepts simple, accessible, and actionable for everyone."
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Testimonials Section */}
                    <div className="relative py-20">
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-6 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/20 mb-6"
                            >
                                <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                    Testimonials
                                </span>
                            </motion.div>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Loved by <span className="text-[#20C997]">Thousands</span>
                            </h3>
                        </div>

                        <div className="relative h-[600px] overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                                {/* Column 1 - Bottom to Top */}
                                <div className="relative h-full overflow-hidden mask-gradient">
                                    <motion.div
                                        animate={{ y: [0, -1000] }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="space-y-6 pb-6"
                                    >
                                        {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
                                            <div key={`col1-${index}`} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300">
                                                <div className="flex gap-1 mb-3 text-[#20C997]">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                                                <div className="flex items-center gap-3">
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                                                        <div className="text-xs text-slate-500">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Column 2 - Top to Bottom */}
                                <div className="relative h-full overflow-hidden mask-gradient hidden md:block">
                                    <motion.div
                                        animate={{ y: [-1000, 0] }}
                                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                        className="space-y-6 pb-6"
                                    >
                                        {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
                                            <div key={`col2-${index}`} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300">
                                                <div className="flex gap-1 mb-3 text-[#20C997]">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                                                <div className="flex items-center gap-3">
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                                                        <div className="text-xs text-slate-500">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Column 3 - Bottom to Top */}
                                <div className="relative h-full overflow-hidden mask-gradient hidden lg:block">
                                    <motion.div
                                        animate={{ y: [0, -1000] }}
                                        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                                        className="space-y-6 pb-6"
                                    >
                                        {[...testimonials.slice(6, 9), ...testimonials.slice(6, 9), ...testimonials.slice(6, 9)].map((testimonial, index) => (
                                            <div key={`col3-${index}`} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300">
                                                <div className="flex gap-1 mb-3 text-[#20C997]">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                                                <div className="flex items-center gap-3">
                                                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                                                    <div>
                                                        <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
                                                        <div className="text-xs text-slate-500">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-20"
                    >
                        <div className="inline-block bg-gradient-to-r from-slate-50 to-teal-50 rounded-3xl p-12 border-2 border-slate-100">
                            <Users className="w-16 h-16 text-[#20C997] mx-auto mb-6" />
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                Join the Financial Revolution
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                If still any doubts left we are here to help you out.
                            </p>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#20C997] text-white font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div >
            </section >
        </>
    );
}