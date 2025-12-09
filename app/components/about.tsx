"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera,
    ArrowRight
} from "lucide-react";
import { useRef } from "react";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const y2 = useTransform(scrollYProgress, [0, 1], [40, -120]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    // SwiftFin Features with images
    const features = [
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Expense Tracking",
            description: "Track every rupee with smart categorization",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Financial Reports",
            description: "Beautiful charts and detailed analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: "EMI Management",
            description: "Never miss a payment with smart reminders",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Investment Tracking",
            description: "Monitor your portfolio in real-time",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80"
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Smart Insights",
            description: "AI-powered spending recommendations",
            image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?w=400&q=80"
        },
        {
            icon: <Camera className="w-6 h-6" />,
            title: "Receipt Scanning",
            description: "Snap and auto-categorize expenses",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80"
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1920&q=80')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#1e293b]/90 to-[#0f172a]/95" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-30"
                    style={{
                        background: "radial-gradient(circle, #20C997 0%, transparent 70%)",
                        y: y1,
                        scale
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl opacity-20"
                    style={{
                        background: "radial-gradient(circle, #FD7E14 0%, transparent 70%)",
                        y: y2
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#20C997]/20 border border-[#20C997]/40 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
                        <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                            About SwiftFin
                        </span>
                    </motion.div>

                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        Your Complete{" "}
                        <span className="text-[#20C997]">Finance</span>{" "}
                        Solution
                    </h2>

                    <p className="font-inter text-gray-300 text-lg leading-relaxed">
                        SwiftFin brings together powerful tools for expense tracking, investment monitoring,
                        and smart financial insights - all in one beautiful, easy-to-use app.
                    </p>
                </motion.div>

                {/* Features Grid with Images */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#20C997]/40 transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <motion.img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />

                                {/* Icon Badge */}
                                <motion.div
                                    className="absolute bottom-4 left-4 w-12 h-12 bg-[#20C997] rounded-xl flex items-center justify-center text-white shadow-lg"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-sora font-bold text-white text-lg mb-2 group-hover:text-[#20C997] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="font-inter text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#20C997]/10 to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="text-center mt-14"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="#faq"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#20C997] text-white font-semibold rounded-full hover:bg-[#198754] transition-all shadow-lg hover:shadow-xl group"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Have questions? View FAQ
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
