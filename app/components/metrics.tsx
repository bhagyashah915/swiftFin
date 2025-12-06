"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, TrendingUp, MapPin, Star } from "lucide-react";

export default function Metrics() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const metrics = [
        {
            icon: <Users className="w-8 h-8" />,
            label: "Active Users",
            value: 500000,
            suffix: "+",
            prefix: ""
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            label: "Transactions Tracked",
            value: 50,
            suffix: "M+",
            prefix: ""
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            label: "Cities Covered",
            value: 4000,
            suffix: "+",
            prefix: ""
        },
        {
            icon: <Star className="w-8 h-8" />,
            label: "App Rating",
            value: 4.8,
            suffix: "/5",
            prefix: "",
            decimals: 1
        },
    ];

    return (
        <section className="bg-neutral-slate py-20 bg-grid-pattern" ref={ref}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Stats Grid - Left Side */}
                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-2 gap-6">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="text-primary-teal mb-4 group-hover:scale-110 transition-transform">
                                        {metric.icon}
                                    </div>
                                    <div className="font-sora text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                                        {inView && (
                                            <>
                                                {metric.prefix}
                                                <CountUp
                                                    end={metric.value}
                                                    duration={2.5}
                                                    decimals={metric.decimals || 0}
                                                    separator=","
                                                />
                                                {metric.suffix}
                                            </>
                                        )}
                                    </div>
                                    <div className="font-inter text-gray-400 font-medium text-base">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Content - Right Side */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-primary-teal font-bold tracking-wide uppercase text-sm mb-3 font-inter">
                            Trusted Worldwide
                        </h2>
                        <h3 className="font-sora text-6xl md:text-7xl font-bold text-white mb-6">
                            Join Thousands of <span className="text-primary-teal">Happy Users</span>
                        </h3>
                        <p className="font-inter text-gray-300 text-lg leading-relaxed mb-6">
                            SwiftFin is trusted by hundreds of thousands of users across India who are taking control
                            of their finances. Our platform has helped track millions of transactions, manage countless
                            EMIs, and grow investments worth crores.
                        </p>
                        <p className="font-inter text-gray-300 text-lg leading-relaxed">
                            With a 4.8-star rating and presence in over 4000 cities, we&apos;re committed to making
                            financial management simple, secure, and accessible for everyone.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
