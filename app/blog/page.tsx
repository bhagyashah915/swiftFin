"use client";

import { ArrowLeft, Calendar, User, Clock, TrendingUp, Wallet, PiggyBank, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
    const posts = [
        {
            title: "Mindful Spending: Choose What You Afford Wisely",
            excerpt: "Learn the philosophy of conscious financial choices and how strategic spending can help you afford anything - but not everything - on your path to financial independence.",
            date: "Dec 10, 2025",
            author: "Sarah Johnson",
            category: "Money Mindset",
            readTime: "6 min read",
            featured: true,
            image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&q=80"
        },
        {
            title: "Credit Score Mastery: Build Strong Financial Health",
            excerpt: "Discover proven strategies to improve your credit profile and unlock better financial opportunities through smart credit management.",
            date: "Dec 8, 2025",
            author: "Michael Chen",
            category: "Credit",
            readTime: "5 min read",
            featured: true,
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
        },
        {
            title: "Debt Freedom Blueprint: Your Path to Liberation",
            excerpt: "Transform your financial life with actionable steps to eliminate debt and build lasting wealth through strategic payoff plans.",
            date: "Dec 5, 2025",
            author: "Priya Sharma",
            category: "Debt Management",
            readTime: "8 min read",
            featured: true,
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
        },
        {
            title: "5 Simple Ways to Track Your Daily Expenses",
            excerpt: "Master your spending with practical strategies that take minutes to implement but deliver lasting financial clarity and control.",
            date: "Dec 3, 2025",
            author: "Raj Kumar",
            category: "Budgeting",
            readTime: "4 min read",
            featured: false,
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
        },
        {
            title: "Understanding EMI: Complete Guide for Smart Borrowing",
            excerpt: "Decode the mathematics of EMIs and learn proven strategies to optimize loan payments for maximum savings.",
            date: "Nov 30, 2025",
            author: "David Park",
            category: "Loans",
            readTime: "8 min read",
            featured: false,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        },
        {
            title: "Investment Basics for Beginners in 2025",
            excerpt: "Start your wealth-building journey with fundamental principles updated for today's economic landscape and market conditions.",
            date: "Nov 28, 2025",
            author: "Lisa Wang",
            category: "Investing",
            readTime: "7 min read",
            featured: false,
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Image Background */}
            <div className="relative h-[70vh] min-h-[600px] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-teal-900/80 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80"
                        alt="Finance background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-center">
                    <a
                        href="/"
                        className="inline-flex items-center text-white/80 hover:text-white transition-all duration-300 group mb-8 w-fit"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="text-teal-400 text-sm font-medium mb-4 tracking-wider">
                            Ideas that move, insights that matter.
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight lowercase">
                            Blogs
                        </h1>
                    </motion.div>
                </div>

                {/* Animated Marquee */}
                <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden py-6 bg-gradient-to-r from-teal-600 to-teal-500">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-8 whitespace-nowrap"
                    >
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-8">
                                <span className="text-white font-bold text-lg">SMART MONEY</span>
                                <span className="text-white/70">•</span>
                                <span className="text-white font-bold text-lg">FINANCIAL FREEDOM</span>
                                <span className="text-white/70">•</span>
                                <span className="text-white font-bold text-lg">WEALTH BUILDING</span>
                                <span className="text-white/70">•</span>
                                <span className="text-white font-bold text-lg">SMART SAVINGS</span>
                                <span className="text-white/70">•</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Our Insights Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-4">
                            {`Our Insights`}
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Stay Ahead with Smart Money Strategies
                        </h2>
                    </motion.div>
                </div>

                {/* Featured Highlights - Triple Card */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {posts.slice(0, 3).map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-[400px] rounded-3xl overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="inline-flex items-center gap-2 bg-teal-500 px-3 py-1 rounded-full text-xs font-bold mb-3">
                                        Highlights
                                    </div>
                                    <div className="text-sm mb-2 opacity-80">
                                        {post.date} / {post.category}
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-teal-400 transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(3).map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-[280px] rounded-2xl overflow-hidden mb-4">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="text-sm text-slate-500 mb-2">
                                {post.date} / {post.category}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 line-clamp-2 mb-4">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}