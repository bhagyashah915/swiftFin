"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { Users, TrendingUp, MapPin, Star, Zap } from "lucide-react";

export default function Metrics() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#495057] via-[#3d4349] to-[#495057]">
            {/* Animated background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(32, 201, 151, 0.15) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(253, 126, 20, 0.1) 0%, transparent 70%)"
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/20 mb-4 border border-[#20C997]/30"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                            Our Impact
                        </span>
                    </motion.div>

                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Trusted by <span className="text-[#20C997]">Millions</span>
                    </h2>
                    <p className="font-inter text-gray-300 text-lg max-w-2xl mx-auto">
                        SwiftFin is helping users across India take control of their financial future
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[140px]">

                    {/* Card 1: App Family - spans 1 col, 1 row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#3d4349] to-[#343a40] border border-[#20C997]/20 p-5 overflow-hidden group"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-300 text-sm font-medium">India&apos;s #1 Finance App</p>
                            <motion.a
                                href="/download"
                                className="text-xs px-3 py-1 rounded-full bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30 transition-colors flex items-center gap-1"
                                whileHover={{ scale: 1.05 }}
                            >
                                Download <span>→</span>
                            </motion.a>
                        </div>
                        <div className="flex gap-3 mt-4">
                            {[Zap, TrendingUp, Star, Users].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#20C997]/30 to-[#198754]/30 flex items-center justify-center"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    <Icon className="w-5 h-5 text-[#20C997]" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 2: Weekly Downloads - spans 1 col, 1 row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#20C997] to-[#198754] p-6 overflow-hidden group"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <motion.span
                            className="font-sora text-5xl md:text-6xl font-bold text-white block"
                            animate={isInView ? {
                                textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {isInView && <CountUp end={25} duration={2} />}K
                        </motion.span>
                        <p className="text-white/80 text-sm mt-1">Weekly Downloads</p>
                        {/* Floating decoration */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                    </motion.div>

                    {/* Card 3: Active Users with LIVE - spans 1 col, 1 row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#3d4349] to-[#343a40] border border-[#FD7E14]/20 p-6 overflow-hidden group"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        {/* LIVE indicator */}
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#FD7E14]/20 px-2 py-1 rounded-full">
                            <motion.div
                                className="w-2 h-2 rounded-full bg-[#FD7E14]"
                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            <span className="text-[#FD7E14] text-xs font-semibold">LIVE</span>
                        </div>
                        <motion.span
                            className="font-sora text-5xl md:text-6xl font-bold text-white block"
                        >
                            {isInView && <CountUp end={50} duration={2} />}K
                        </motion.span>
                        <p className="text-gray-400 text-sm mt-1">Active Users Now</p>
                    </motion.div>

                    {/* Card 4: Total Users - Large, spans 1 col, 2 rows */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#3d4349] to-[#343a40] border border-[#20C997]/20 p-6 overflow-hidden group row-span-2"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-gray-400 text-sm font-medium">Active Users</p>
                            <span className="text-[#198754] text-sm font-semibold bg-[#198754]/20 px-2 py-0.5 rounded">+154</span>
                        </div>
                        <motion.span
                            className="font-sora text-6xl md:text-7xl font-bold text-white block mb-4"
                            animate={isInView ? {
                                textShadow: ["0 0 0px rgba(32,201,151,0)", "0 0 30px rgba(32,201,151,0.4)", "0 0 0px rgba(32,201,151,0)"]
                            } : {}}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {isInView && <CountUp end={1538} duration={2.5} separator="," />}
                        </motion.span>

                        {/* Simple chart visual */}
                        <div className="flex items-end gap-1 h-16 mt-auto">
                            {[40, 60, 35, 80, 55, 90, 65, 100, 75, 85].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-[#20C997]/60 to-[#198754]/60 rounded-sm"
                                    initial={{ height: 0 }}
                                    animate={isInView ? { height: `${h}%` } : {}}
                                    transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 5: SwiftFin Accent - spans 1 col, 1 row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#FD7E14] to-[#ea580c] p-6 overflow-hidden group flex items-center justify-center"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <motion.span
                            className="font-sora text-3xl md:text-4xl font-bold text-white/90 tracking-wide"
                            animate={{
                                rotateX: [0, 5, 0, -5, 0],
                                rotateY: [0, 3, 0, -3, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            SWIFT<span className="text-white">FIN</span>
                        </motion.span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </motion.div>

                    {/* Card 6: Total Transactions with trend - spans 2 cols, 1 row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#3d4349] to-[#343a40] border border-[#20C997]/20 p-6 overflow-hidden group sm:col-span-2 lg:col-span-2"
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-gray-400 text-sm font-medium">Total Transactions</p>
                            <span className="text-[#198754] text-sm font-semibold bg-[#198754]/20 px-2 py-0.5 rounded">+7%</span>
                        </div>

                        <div className="flex items-end justify-between">
                            <motion.span
                                className="font-sora text-5xl md:text-6xl font-bold text-white"
                            >
                                {isInView && <CountUp end={200} duration={2} />}K
                            </motion.span>

                            {/* Trend line SVG */}
                            <svg viewBox="0 0 100 40" className="w-32 h-12 ml-4">
                                <motion.path
                                    d="M0,35 Q10,30 20,28 T40,22 T60,18 T80,12 T100,5"
                                    fill="none"
                                    stroke="url(#tealGradient)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={isInView ? { pathLength: 1 } : {}}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                                <defs>
                                    <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#20C997" />
                                        <stop offset="100%" stopColor="#198754" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </motion.div>

                    {/* Card 7: Tagline - spans 2 cols on mobile, 2 cols on desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="relative rounded-3xl bg-gradient-to-r from-[#343a40] to-[#3d4349] border border-[#FD7E14]/10 p-6 overflow-hidden group sm:col-span-2 lg:col-span-2"
                        whileHover={{ scale: 1.01 }}
                    >
                        <motion.p
                            className="font-sora text-xl md:text-2xl font-semibold text-white leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            A place to <span className="text-[#20C997]">track expenses</span> &<br />
                            <span className="text-[#FD7E14]">manage finances</span>.
                        </motion.p>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute bottom-3 right-4 w-3 h-3 rounded-full bg-[#20C997]"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    {/* Card 8: Cities - spans 1 col */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#3d4349] to-[#343a40] border border-[#20C997]/20 p-6 overflow-hidden group"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-5 h-5 text-[#20C997]" />
                            <p className="text-gray-400 text-sm font-medium">Cities Covered</p>
                        </div>
                        <motion.span
                            className="font-sora text-4xl md:text-5xl font-bold text-white block"
                        >
                            {isInView && <CountUp end={4000} duration={2} separator="," />}
                            <span className="text-[#20C997]">+</span>
                        </motion.span>
                    </motion.div>

                    {/* Card 9: Rating */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="relative rounded-3xl bg-gradient-to-br from-[#FD7E14]/20 to-[#ea580c]/20 border border-[#FD7E14]/30 p-6 overflow-hidden group"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-[#FD7E14] fill-[#FD7E14]" />
                            <p className="text-gray-300 text-sm font-medium">App Rating</p>
                        </div>
                        <motion.span
                            className="font-sora text-4xl md:text-5xl font-bold text-white block"
                        >
                            {isInView && <CountUp end={4.8} duration={2} decimals={1} />}
                            <span className="text-[#FD7E14] text-2xl">/5</span>
                        </motion.span>

                        {/* Stars decoration */}
                        <div className="flex gap-1 mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                    key={star}
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ delay: 1 + star * 0.1 }}
                                >
                                    <Star className={`w-4 h-4 ${star <= 4 ? 'text-[#FD7E14] fill-[#FD7E14]' : 'text-[#FD7E14]/50 fill-[#FD7E14]/50'}`} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-gray-300 text-lg">
                        Join the <span className="text-[#20C997] font-semibold">500,000+</span> users already managing their finances smarter
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
