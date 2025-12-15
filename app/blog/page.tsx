"use client";

import { ArrowLeft, Calendar, User, Clock, TrendingUp, Wallet, PiggyBank, CreditCard, ChevronRight, Play, Sparkles, Receipt, BarChart3, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Blog() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Featured blogs for slideshow - Completely different from latest articles
    const featuredBlogs = [
        {
            title: "The Psychology of Money: Understanding Your Financial Behavior",
            excerpt: "Explore how emotions and mindset shape your financial decisions and learn to build better money habits.",
            category: "Financial Psychology",
            image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=1920&q=80"
        },
        {
            title: "Crypto & Digital Assets: A Beginner's Complete Guide",
            excerpt: "Navigate the world of cryptocurrency with confidence and understand blockchain fundamentals.",
            category: "Cryptocurrency",
            image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1920&q=80"
        },
        {
            title: "Tax Planning Strategies for Maximum Savings in 2025",
            excerpt: "Discover legal tax-saving techniques and deductions that can significantly reduce your tax burden.",
            category: "Tax Planning",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
        },
        {
            title: "Building Passive Income Streams: 10 Proven Methods",
            excerpt: "Learn how successful entrepreneurs create multiple income sources for financial freedom.",
            category: "Passive Income",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80"
        },
        {
            title: "Financial Independence: Retire Early with FIRE Movement",
            excerpt: "Master the principles of Financial Independence Retire Early and plan your path to freedom.",
            category: "FIRE Strategy",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920&q=80"
        }
    ];

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
            title: "5 Budget Hacks That Actually Save Money in 2025",
            excerpt: "Practical budgeting strategies that have helped thousands reduce spending by 40% without sacrificing quality of life.",
            date: "Dec 3, 2025",
            author: "Sarah Martinez",
            authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
            category: "Budgeting",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
        },
        {
            title: "Understanding Credit Scores: The Complete Guide",
            excerpt: "Master the factors that influence your credit score and learn proven strategies to improve it quickly and sustainably.",
            date: "Dec 1, 2025",
            author: "James Wilson",
            authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
            category: "Credit Management",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1554224311-beee4ead2e1b?w=800&q=80"
        },
        {
            title: "Emergency Fund Essentials: How Much Do You Really Need?",
            excerpt: "Calculate your ideal emergency fund size and discover the fastest ways to build it using automated savings strategies.",
            date: "Nov 28, 2025",
            author: "Amanda Lee",
            authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
            category: "Savings",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80"
        },
        {
            title: "Debt Avalanche vs Snowball: Which Method Works Best?",
            excerpt: "Compare the two most popular debt repayment strategies with real examples and find out which one will help you become debt-free faster.",
            date: "Nov 25, 2025",
            author: "Robert Garcia",
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            category: "Debt Management",
            readTime: "11 min read",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
        }
    ];

    // Auto-advance slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredBlogs.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - New Design */}
            <section className="relative min-h-screen overflow-hidden bg-white">
                <div className="container relative z-10 mx-auto px-6 pt-12 pb-20">
                    <a
                        href="/"
                        className="inline-flex items-center text-slate-600 hover:text-[#20C997] transition-all duration-300 group mb-12 w-fit"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>

                    <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                        {/* Left - Blog Title and Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 mb-8 leading-none">
                                Blog
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                                Explore expert insights on expense tracking, investment strategies, EMI management, and AI-powered financial tips. Your complete guide to mastering personal finance and building lasting wealth.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-[#20C997]/10 flex items-center justify-center">
                                        <Receipt className="w-7 h-7 text-[#20C997]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">50+</div>
                                        <div className="text-sm text-slate-600">Finance Guides</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-[#20C997]/10 flex items-center justify-center">
                                        <Target className="w-7 h-7 text-[#20C997]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">30%</div>
                                        <div className="text-sm text-slate-600">Avg. Savings</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-14 h-14 rounded-full bg-[#20C997]/10 flex items-center justify-center">
                                        <TrendingUp className="w-7 h-7 text-[#20C997]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900">Weekly</div>
                                        <div className="text-sm text-slate-600">Fresh Content</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Featured Blogs Slideshow with Dynamic Background */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] flex items-center justify-center"
                        >
                            {/* Full section background that changes with slides */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`bg-${currentSlide}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute -inset-40 z-0"
                                    style={{
                                        backgroundImage: `url('${featuredBlogs[currentSlide].image}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        opacity: 0.15
                                    }}
                                />
                            </AnimatePresence>

                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-[#20C997]/20 z-10">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        className="absolute inset-0"
                                    >
                                        {/* Blog Image */}
                                        <img
                                            src={featuredBlogs[currentSlide].image}
                                            alt={featuredBlogs[currentSlide].title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/20" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#20C997] text-white text-xs font-bold uppercase tracking-wide mb-4">
                                                {featuredBlogs[currentSlide].category}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                                {featuredBlogs[currentSlide].title}
                                            </h3>
                                            <p className="text-white/90 text-base md:text-lg leading-relaxed">
                                                {featuredBlogs[currentSlide].excerpt}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Slide Indicators */}
                                <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                                    {featuredBlogs.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                                ? 'w-8 bg-[#20C997]'
                                                : 'w-2 bg-white/50 hover:bg-white/80'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#20C997]/20 rounded-3xl blur-2xl z-0" />
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#20C997]/20 rounded-3xl blur-2xl z-0" />
                        </motion.div>
                    </div>
                </div>
            </section>

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