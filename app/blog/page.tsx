"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { useState, useEffect } from "react";

const featuredBlog = {
    id: 1,
    title: "The Future of Digital Banking: AI-Powered Financial Assistants",
    excerpt: "Discover how artificial intelligence is revolutionizing personal finance management and making banking more accessible than ever before.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
    category: "Technology",
    author: "Sarah Johnson",
    date: "Dec 15, 2025",
    readTime: "8 min read"
};

const tickerBlogs = [
    {
        id: 2,
        title: "5 Smart Ways to Save Money in 2025",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2940&auto=format&fit=crop",
        category: "Savings",
        date: "Dec 14, 2025",
        readTime: "5 min read"
    },
    {
        id: 3,
        title: "Understanding Cryptocurrency Investment Basics",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2940&auto=format&fit=crop",
        category: "Investment",
        date: "Dec 13, 2025",
        readTime: "6 min read"
    },
    {
        id: 4,
        title: "Budget Planning for Young Professionals",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format&fit=crop",
        category: "Budgeting",
        date: "Dec 12, 2025",
        readTime: "4 min read"
    },
    {
        id: 5,
        title: "Tax Planning Tips for Freelancers",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop",
        category: "Taxes",
        date: "Dec 11, 2025",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "Building Your Emergency Fund: Step by Step",
        image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2940&auto=format&fit=crop",
        category: "Finance",
        date: "Dec 10, 2025",
        readTime: "5 min read"
    }
];

const carouselBlogs = [
    {
        id: 7,
        title: "Retirement Planning in Your 30s: A Complete Guide",
        excerpt: "Start building your retirement nest egg early with these proven strategies.",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2940&auto=format&fit=crop",
        category: "Retirement",
        author: "Michael Chen",
        date: "Dec 9, 2025",
        readTime: "10 min read"
    },
    {
        id: 8,
        title: "Real Estate Investment: First-Time Buyer's Handbook",
        excerpt: "Everything you need to know before making your first property investment.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2940&auto=format&fit=crop",
        category: "Real Estate",
        author: "Emily Rodriguez",
        date: "Dec 8, 2025",
        readTime: "12 min read"
    },
    {
        id: 9,
        title: "Stock Market Trends to Watch in 2025",
        excerpt: "Expert analysis on the most promising sectors and investment opportunities.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop",
        category: "Stocks",
        author: "David Park",
        date: "Dec 7, 2025",
        readTime: "9 min read"
    },
    {
        id: 10,
        title: "Debt Management Strategies That Actually Work",
        excerpt: "Proven methods to eliminate debt and regain financial freedom.",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2940&auto=format&fit=crop",
        category: "Debt",
        author: "Lisa Thompson",
        date: "Dec 6, 2025",
        readTime: "8 min read"
    },
    {
        id: 11,
        title: "Side Hustles for Extra Income in 2025",
        excerpt: "Discover lucrative opportunities to boost your monthly earnings.",
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2940&auto=format&fit=crop",
        category: "Income",
        author: "James Wilson",
        date: "Dec 5, 2025",
        readTime: "6 min read"
    }
];

const gridBlogs = [
    {
        id: 12,
        title: "Credit Score Myths Debunked",
        excerpt: "Separate fact from fiction when it comes to building credit.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2940&auto=format&fit=crop",
        category: "Credit",
        author: "Anna Lee",
        date: "Dec 4, 2025",
        readTime: "5 min read"
    },
    {
        id: 13,
        title: "Investing in ETFs: Beginner's Strategy",
        excerpt: "Low-cost, diversified investing made simple for newcomers.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2940&auto=format&fit=crop",
        category: "ETFs",
        author: "Robert Kim",
        date: "Dec 3, 2025",
        readTime: "7 min read"
    },
    {
        id: 14,
        title: "Financial Independence Retire Early (FIRE)",
        excerpt: "How the FIRE movement is changing retirement planning.",
        image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=2940&auto=format&fit=crop",
        category: "Lifestyle",
        author: "Jennifer Brown",
        date: "Dec 2, 2025",
        readTime: "11 min read"
    },
    {
        id: 15,
        title: "Insurance Coverage: What You Really Need",
        excerpt: "Cut through the confusion and get the protection that matters.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop",
        category: "Insurance",
        author: "Mark Davis",
        date: "Dec 1, 2025",
        readTime: "6 min read"
    },
    {
        id: 16,
        title: "Building Multiple Income Streams",
        excerpt: "Diversify your earnings for long-term financial security.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop",
        category: "Income",
        author: "Sophia Martinez",
        date: "Nov 30, 2025",
        readTime: "9 min read"
    },
    {
        id: 17,
        title: "Smart Home Buying in a Rising Market",
        excerpt: "Navigate today's competitive real estate landscape successfully.",
        image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2940&auto=format&fit=crop",
        category: "Housing",
        author: "Chris Anderson",
        date: "Nov 29, 2025",
        readTime: "8 min read"
    }
];

export default function BlogPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carouselBlogs.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Hero Header */}
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-7xl md:text-8xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Blog Spot
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Your go-to source for financial wisdom and money management tips
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Section 1: Featured + Ticker in Rounded Box */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12">
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Featured Blog - Left Side */}
                            <div className="lg:col-span-2 order-1">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                >
                                    <div className="relative h-[400px] overflow-hidden">
                                        <img
                                            src={featuredBlog.image}
                                            alt={featuredBlog.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                                                {featuredBlog.category}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <div className="flex items-center gap-4 text-white/90 text-sm mb-3">
                                                <div className="flex items-center gap-2">
                                                    <User className="w-4 h-4" />
                                                    <span>{featuredBlog.author}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{featuredBlog.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{featuredBlog.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                                            {featuredBlog.title}
                                        </h2>
                                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                            {featuredBlog.excerpt}
                                        </p>
                                        <button className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-4 transition-all">
                                            Read Full Article
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Ticker Blogs - Right Side */}
                            <div className="lg:col-span-1 order-2">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Latest Articles</h3>
                                <div className="relative h-[600px] overflow-hidden rounded-2xl">
                                    <motion.div
                                        animate={{
                                            y: [0, -100 * tickerBlogs.length]
                                        }}
                                        transition={{
                                            y: {
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                duration: 20,
                                                ease: "linear"
                                            }
                                        }}
                                        className="space-y-4"
                                    >
                                        {[...tickerBlogs, ...tickerBlogs].map((blog, index) => (
                                            <motion.div
                                                key={`${blog.id}-${index}`}
                                                className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                            >
                                                <div className="relative h-40 overflow-hidden">
                                                    <img
                                                        src={blog.image}
                                                        alt={blog.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute top-3 left-3">
                                                        <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                                            {blog.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                                                        {blog.title}
                                                    </h4>
                                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            <span>{blog.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            <span>{blog.readTime}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Carousel in Rounded Box */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 ">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trending Stories</h2>
                            <p className="text-slate-600 text-lg">Popular articles our readers are loving right now</p>
                        </div>

                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: [0, -1200]
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 25,
                                        ease: "linear"
                                    }
                                }}
                            >
                                {[...carouselBlogs, ...carouselBlogs, ...carouselBlogs].map((blog, index) => (
                                    <div
                                        key={`${blog.id}-${index}`}
                                        className="flex-shrink-0 w-[400px] bg-slate-50 rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full">
                                                    {blog.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                                                {blog.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                                {blog.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <User className="w-3 h-3" />
                                                    <span>{blog.author}</span>
                                                </div>
                                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>{blog.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{blog.readTime}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Grid Layout in Rounded Box */}
            <section className="py-16 pb-24">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 ">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 mb-4">More Insights</h2>
                            <p className="text-slate-600 text-lg">Explore our comprehensive library of financial wisdom</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gridBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-50 rounded-2xl overflow-hidden hover: transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                            {blog.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <User className="w-3 h-3" />
                                                <span className="font-medium">{blog.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                                <Clock className="w-3 h-3" />
                                                <span>{blog.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}