"use client";

import { motion } from "framer-motion";
import { ChevronRight, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview() {
    const posts = [
        {
            title: "Automated Expense Tracking: The Future of Money Management",
            excerpt: "Discover how AI-powered receipt scanning and automated categorization can help you reduce overspending by 30%.",
            date: "Dec 10, 2025",
            author: "Sarah Johnson",
            authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
            category: "Expense Tracking",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80"
        },
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
            excerpt: "Monitor your portfolio across multiple platforms in one dashboard. Track mutual funds, stocks, and get real-time alerts.",
            date: "Dec 5, 2025",
            author: "Priya Sharma",
            authorImage: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&q=80",
            category: "Investment",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/50 text-teal-700 text-sm font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                            Financial Wisdom
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Latest Insights for Your <span className="text-teal-600">Wallet</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Expert advice, strategies, and tips to help you master your finances and build lasting wealth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-lg font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                        >
                            View All Articles
                            <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link href="/blog" className="block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col transform group-hover:-translate-y-1">
                                    {/* Image Wrapper */}
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                        <div className="absolute top-4 left-4">
                                            <div className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-teal-700 text-xs font-bold uppercase tracking-wide shadow-sm">
                                                {post.category}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4 text-teal-500" />
                                                {post.date}
                                            </div>
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            <div>{post.readTime}</div>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        <p className="text-slate-600 mb-6 flex-1 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={post.authorImage}
                                                    alt={post.author}
                                                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                                />
                                                <span className="font-semibold text-slate-900 text-sm">{post.author}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
