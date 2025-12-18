"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

export default function BlogPreview() {
    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden flex items-center justify-center">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-teal-600 font-bold text-sm uppercase tracking-widest bg-teal-50 px-5 py-2 rounded-full mb-6 border border-teal-100">
                            Our Blog
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Wisdom</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="flex justify-center">
                    <TiltCard />
                </div>
            </div>
        </section>
    );
}

function TiltCard() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-2xl aspect-[1.6/1] rounded-3xl bg-slate-900 group"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-2xl bg-white shadow-2xl"
            >
                {/* Content Container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl flex flex-col md:flex-row">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                            alt="Financial Growth"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/60"></div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white relative z-10">
                        <div className="bg-teal-50 w-fit px-3 py-1 rounded-full text-teal-600 text-xs font-bold uppercase tracking-wider mb-4">
                            Latest Insight
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                            Mastering Your Personal Finances in 2025
                        </h3>
                        <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                            Discover the key strategies to optimize your savings, manage debt effectively, and build a robust investment portfolio for the future.
                        </p>

                        <Link href="/blog" className="flex items-center gap-2 text-slate-900 font-bold group/link hover:text-teal-600 transition-colors">
                            Read Article
                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Floating Elements (3D Effect) */}
                <div
                    style={{ transform: "translateZ(50px)" }}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-lg animate-float-slow"
                >
                    <Sparkles className="w-10 h-10 text-white" />
                </div>
            </div>

            {/* Edge Highlight */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-teal-500/30 transition-colors pointer-events-none"></div>
        </motion.div>
    );
}

// Ensure the animation is available globally or inline it if necessary, but 'animate-float-slow' typically needs Tailwind config or global CSS.
// Assuming it's part of the existing project or I can rely on Framer Motion for more complex stuff if needed, but the class is used.
