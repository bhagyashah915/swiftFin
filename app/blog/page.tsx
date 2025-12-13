"use client";

import { ArrowLeft, Calendar, User, Clock, TrendingUp, Wallet, PiggyBank, CreditCard, ChevronRight, Play, Sparkles, Receipt, BarChart3, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Blog() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const featuredPost = {
        title: "Automated Expense Tracking: The Future of Money Management",
        excerpt: "Discover how AI-powered receipt scanning and automated categorization can help you reduce overspending by 30% and take complete control of your finances.",
        date: "Dec 10, 2025",
        author: "Sarah Johnson",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
        category: "Expense Tracking",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
    };

    const posts = [
        {
            title: "EMI Management Made Easy: Never Miss a Payment Again",
            excerpt: "Learn how smart reminders and visual progress tracking help you stay on top of all your loans and maintain a perfect credit score.",
            date: "Dec 8, 2025",
            author: "Michael Chen",
            authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            category: "EMI & Loans",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
        },
        {
            title: "Smart Investment Tracking: Build Wealth While You Sleep",
            excerpt: "Monitor your portfolio across multiple platforms in one dashboard. Track mutual funds, stocks, and get real-time alerts on price movements.",
            date: "Dec 5, 2025",
            author: "Priya Sharma",
            authorImage: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&q=80",
            category: "Investment Management",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
        },
        {
            title: "Financial Reports That Actually Make Sense",
            excerpt: "Turn your spending data into beautiful, actionable insights with visual dashboards, pie charts, and exportable PDF reports.",
            date: "Dec 3, 2025",
            author: "Emily Wilson",
            authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
            category: "Analytics & Reports",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
        {
            title: "Receipt Scanning 101: Snap, Save, Skip the Hassle",
            excerpt: "Master the art of effortless expense tracking with AI-powered OCR technology that extracts details from photos instantly.",
            date: "Nov 30, 2025",
            author: "David Park",
            authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
            category: "Automation",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80"
        },
        {
            title: "30% Less Spending: How Tracking Changes Everything",
            excerpt: "Real stories from users who transformed their financial lives through consistent expense tracking and smart budget management.",
            date: "Nov 28, 2025",
            author: "Raj Kumar",
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            category: "Success Stories",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
        },
        {
            title: "AI-Powered Finance Tips: Your Personal Money Coach",
            excerpt: "Get personalized spending insights and actionable recommendations based on your unique financial patterns and goals.",
            date: "Nov 25, 2025",
            author: "Lisa Wang",
            authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
            category: "Smart Insights",
            readTime: "11 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative min-h-screen overflow-hidden">
                {/* Background Image - Copied from the card */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1920&q=80')`
                    }}
                >
                    {/* Overlay with gradient - Increased opacity for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-teal-50/90 to-white/95"></div>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2320C997" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
                    </div>
                </div>

                <div className="container relative z-10 mx-auto px-6 pt-12 pb-20">
                    <a
                        href="/"
                        className="inline-flex items-center text-slate-600 hover:text-[#20C997] transition-all duration-300 group mb-12 w-fit"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>

                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#20C997]/10 border border-[#20C997]/30 mb-8"
                            >
                                <Sparkles className="w-5 h-5 text-[#20C997]" />
                                <span className="text-[#20C997] font-bold text-sm tracking-wider uppercase">
                                    Financial Wisdom Hub
                                </span>
                            </motion.div>

                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]">
                                <span className="text-slate-900">Track.</span><br />
                                <span className="text-slate-900">Manage.</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20C997] to-teal-700">
                                    Transform.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                                Expert insights on expense tracking, EMI management, smart investing, and AI-powered finance tips. Your journey to financial freedom starts here.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#20C997]/10 flex items-center justify-center">
                                        <Receipt className="w-6 h-6 text-[#20C997]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">50+</div>
                                        <div className="text-sm text-slate-600">Finance Guides</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#20C997]/10 flex items-center justify-center">
                                        <Target className="w-6 h-6 text-[#20C997]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">30%</div>
                                        <div className="text-sm text-slate-600">Avg. Savings</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content - Card without the background image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                                {/* Removed the image from here - it's now in the background */}
                                <div className="p-8">
                                    <div className="bg-gradient-to-r from-[#20C997]/10 to-teal-500/10 rounded-2xl p-8 mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-[#20C997] flex items-center justify-center">
                                                <BarChart3 className="w-7 h-7 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-600 font-medium">Latest Insight</div>
                                                <div className="text-lg font-bold text-slate-900">Master Your Money Flow</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Calendar className="w-4 h-4" />
                                            <span>Updated daily</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <TrendingUp className="w-4 h-4" />
                                            <span>Data-driven insights</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <User className="w-4 h-4" />
                                            <span>Expert financial advice</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#20C997] to-teal-600 rounded-3xl opacity-20 blur-2xl"
                            ></motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-[#20C997] to-teal-600 rounded-3xl opacity-20 blur-2xl"
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Animated Ticker */}
                <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden py-5 bg-[#20C997]">
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#20C997] to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#20C997] to-transparent z-10"></div>

                        <motion.div
                            animate={{ x: [0, -1200] }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="flex gap-12 whitespace-nowrap"
                        >
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex gap-12 items-center">
                                    <span className="text-white font-bold text-lg tracking-wide">EXPENSE TRACKING</span>
                                    <span className="text-white/40 text-xl">✦</span>
                                    <span className="text-white font-bold text-lg tracking-wide">EMI MANAGEMENT</span>
                                    <span className="text-white/40 text-xl">✦</span>
                                    <span className="text-white font-bold text-lg tracking-wide">INVESTMENT INSIGHTS</span>
                                    <span className="text-white/40 text-xl">✦</span>
                                    <span className="text-white font-bold text-lg tracking-wide">SMART FINANCE TIPS</span>
                                    <span className="text-white/40 text-xl">✦</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Featured Article */}
            <div className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/30 mb-6"
                    >
                        <span className="text-[#20C997] font-bold text-sm uppercase tracking-wider">Featured Article</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900"
                    >
                        Editor's <span className="text-[#20C997]">Pick</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-500 border border-slate-100"
                >
                    <div className="grid lg:grid-cols-5 gap-0">
                        <div className="lg:col-span-2 relative h-[350px] lg:h-auto overflow-hidden">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>
                        <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#20C997] mb-4 uppercase tracking-wider">
                                <Wallet className="w-4 h-4" />
                                {featuredPost.category}
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-5 group-hover:text-[#20C997] transition-colors leading-tight">
                                {featuredPost.title}
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={featuredPost.authorImage}
                                        alt={featuredPost.author}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-[#20C997]/20"
                                    />
                                    <div>
                                        <div className="font-bold text-slate-900">{featuredPost.author}</div>
                                        <div className="text-sm text-slate-500">{featuredPost.date} · {featuredPost.readTime}</div>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-[#20C997] group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Latest <span className="text-[#20C997]">Articles</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Deep dive into expense tracking, investment strategies, and smart money management
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <Link href={`/blog#${index}`} key={index} className="contents">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group cursor-pointer h-full"
                            >
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col">
                                    <div className="relative h-[240px] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4">
                                            <div className="px-3 py-1.5 rounded-full bg-[#20C997] text-white text-xs font-bold uppercase tracking-wide">
                                                {post.category}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-7 flex-1 flex flex-col">
                                        <div className="text-sm text-slate-500 mb-3 font-medium">
                                            {post.date} · {post.readTime}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#20C997] transition-colors line-clamp-2 leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 line-clamp-3 mb-6 flex-1 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                                            <img
                                                src={post.authorImage}
                                                alt={post.author}
                                                className="w-10 h-10 rounded-full object-cover border-2 border-[#20C997]/20"
                                            />
                                            <div className="flex-1">
                                                <div className="font-bold text-slate-900 text-sm">{post.author}</div>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 text-[#20C997] transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}