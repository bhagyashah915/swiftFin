"use client";

import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useRef } from "react";
import { Users, TrendingUp, MapPin, Star } from "lucide-react";

export default function Metrics() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const metrics = [
        {
            icon: <Users className="w-8 h-8" />,
            value: 500000,
            suffix: "+",
            label: "Active Users",
            description: "Trust SwiftFin daily",
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            value: 50,
            suffix: "M+",
            label: "Transactions",
            description: "Tracked securely",
            color: "from-emerald-500 to-emerald-600"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            value: 4000,
            suffix: "+",
            label: "Cities",
            description: "Across India",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: <Star className="w-8 h-8" />,
            value: 4.8,
            suffix: "/5",
            label: "Rating",
            description: "On App Stores",
            decimals: 1,
            color: "from-amber-500 to-amber-600"
        }
    ];

    return (
        <section ref={ref} className="py-20 md:py-24 relative overflow-hidden" style={{ perspective: "1500px" }}>
            {/* Animated background graphics */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating orbs */}
                <motion.div
                    className="absolute top-10 left-[5%] w-72 h-72 rounded-full bg-linear-to-br from-primary-teal/20 to-emerald-400/20 blur-3xl"
                    animate={{
                        y: [0, 50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-linear-to-br from-blue-400/20 to-purple-400/20 blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Floating shapes */}
                <motion.div
                    className="absolute top-1/4 right-[15%] w-20 h-20 rounded-2xl bg-primary-teal/10 backdrop-blur-sm"
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-[10%] w-16 h-16 rounded-full bg-blue-500/10 backdrop-blur-sm"
                    animate={{
                        y: [0, 40, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-teal/10 mb-4 backdrop-blur-sm border border-primary-teal/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                            Our Impact
                        </span>
                    </motion.div>

                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-slate mb-6 leading-tight">
                        Trusted by <span className="text-[#20C997]">Millions</span>
                    </h2>
                    <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
                        SwiftFin is helping users across India take control of their financial future
                    </p>
                </motion.div>

                {/* Metrics cards - 2x2 Grid with 3D effects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Card with 3D depth */}
                            <motion.div
                                className="relative h-full bg-white rounded-3xl border border-gray-200 p-8 overflow-hidden"
                                whileHover={{
                                    y: -10,
                                    rotateX: 5,
                                    rotateY: 5,
                                    scale: 1.02
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                style={{
                                    boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 10px 25px -5px rgba(32, 201, 151, 0.2)',
                                    transformStyle: "preserve-3d"
                                }}
                            >
                                {/* Gradient background overlay */}
                                <div className={`absolute inset-0 bg-linear-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Animated border glow */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl"
                                    style={{
                                        background: `linear-gradient(135deg, transparent, ${index % 2 === 0 ? 'rgba(32, 201, 151, 0.1)' : 'rgba(59, 130, 246, 0.1)'}, transparent)`,
                                        transform: "translateZ(-1px)"
                                    }}
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                                />

                                {/* Icon with 3D depth */}
                                <motion.div
                                    className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-primary-teal to-emerald-600 flex items-center justify-center mb-6 text-white"
                                    whileHover={{
                                        rotate: [0, -10, 10, -10, 0],
                                        scale: 1.1
                                    }}
                                    style={{
                                        boxShadow: '0 10px 30px -5px rgba(32, 201, 151, 0.5)',
                                        transform: "translateZ(30px)"
                                    }}
                                >
                                    {metric.icon}

                                    {/* Icon glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-primary-teal blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                                </motion.div>

                                {/* Value with animation */}
                                <div className="mb-3 relative" style={{ transform: "translateZ(20px)" }}>
                                    <motion.span
                                        className="font-sora text-5xl md:text-6xl font-bold text-neutral-slate"
                                        animate={isInView ? {
                                            textShadow: [
                                                "0 0 0px rgba(32, 201, 151, 0)",
                                                "0 0 20px rgba(32, 201, 151, 0.3)",
                                                "0 0 0px rgba(32, 201, 151, 0)"
                                            ]
                                        } : {}}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                    >
                                        {isInView && (
                                            <CountUp
                                                end={metric.value}
                                                duration={2.5}
                                                decimals={metric.decimals || 0}
                                                separator=","
                                            />
                                        )}
                                    </motion.span>
                                    <span className="text-3xl md:text-4xl font-bold ml-1 text-[#20C997]">
                                        {metric.suffix}
                                    </span>
                                </div>

                                {/* Label */}
                                <h3 className="font-sora font-bold text-neutral-slate text-2xl mb-2" style={{ transform: "translateZ(15px)" }}>
                                    {metric.label}
                                </h3>
                                <p className="font-inter text-gray-600 text-base" style={{ transform: "translateZ(10px)" }}>
                                    {metric.description}
                                </p>

                                {/* Decorative 3D elements */}
                                <motion.div
                                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-linear-to-br from-primary-teal/20 to-transparent blur-2xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ transform: "translateZ(-10px)" }}
                                />

                                {/* Corner accent */}
                                <div className="absolute top-4 right-4 w-12 h-12 border-2 border-primary-teal/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ transform: "translateZ(25px)" }} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom text */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-gray-600 text-lg">
                        Join the <span className="text-[#20C997] font-semibold">500,000+</span> users already managing their finances smarter
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
