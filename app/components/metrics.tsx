"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { Users, TrendingUp, MapPin, Star, Sparkles } from "lucide-react";

export default function Metrics() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const metrics = [
        {
            icon: <Users className="w-8 h-8" />,
            value: 500000,
            suffix: "+",
            label: "Active Users",
            description: "Trust SwiftFin daily"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: 50,
            suffix: "M+",
            label: "Transactions",
            description: "Tracked securely"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            value: 4000,
            suffix: "+",
            label: "Cities",
            description: "Across India"
        },
        {
            icon: <Star className="w-8 h-8" />,
            value: 4.8,
            suffix: "/5",
            label: "Rating",
            description: "On App Stores",
            decimals: 1
        }
    ];

    return (
        <section ref={ref} className="py-20 md:py-24 bg-[#495057] relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Teal gradient orb */}
                <motion.div
                    className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(32,201,151,0.2) 0%, transparent 70%)" }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Orange gradient orb */}
                <motion.div
                    className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(253,126,20,0.15) 0%, transparent 70%)" }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -40, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-4 h-4 text-[#20C997]" />
                        <span className="text-sm font-bold uppercase tracking-wider text-[#20C997]">Our Impact</span>
                    </motion.div>

                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Trusted by <span className="text-[#20C997]">Millions</span>
                    </h2>
                    <p className="font-inter text-gray-300 text-lg max-w-2xl mx-auto">
                        SwiftFin is helping users across India take control of their financial future
                    </p>
                </motion.div>

                {/* Metrics cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                        >
                            {/* Card */}
                            <motion.div
                                className="relative h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 md:p-8 overflow-hidden"
                                whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="w-14 h-14 rounded-2xl bg-[#20C997]/20 flex items-center justify-center mb-5 text-[#20C997]"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                >
                                    {metric.icon}
                                </motion.div>

                                {/* Value */}
                                <div className="mb-2">
                                    <span className="font-sora text-4xl md:text-5xl font-bold text-white">
                                        {isInView && (
                                            <CountUp
                                                end={metric.value}
                                                duration={2.5}
                                                decimals={metric.decimals || 0}
                                                separator=","
                                            />
                                        )}
                                    </span>
                                    <span className="text-2xl md:text-3xl font-bold ml-1 text-[#20C997]">
                                        {metric.suffix}
                                    </span>
                                </div>

                                {/* Label */}
                                <h3 className="font-sora font-bold text-white text-lg mb-1">
                                    {metric.label}
                                </h3>
                                <p className="font-inter text-gray-400 text-sm">
                                    {metric.description}
                                </p>

                                {/* Decorative */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#20C997]/10" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom text */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-gray-300">
                        Join the <span className="text-[#20C997] font-semibold">500,000+</span> users already managing their finances smarter
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
