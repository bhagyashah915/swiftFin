"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Users, Briefcase, Laptop, Building2 } from "lucide-react";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState } from "react";

export default function UserTypes() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const users = [
        {
            title: "Students",
            icon: <Users className="w-5 h-5" />,
            description: "Track expenses, manage pocket money, and build healthy financial habits early.",
            benefits: ["Smart budgeting", "Pocket money tracker", "Savings goals"],
            bgColor: "#8b5cf6",
            gradientFrom: "#8b5cf6",
            gradientTo: "#7c3aed"
        },
        {
            title: "Working Professionals",
            icon: <Briefcase className="w-5 h-5" />,
            description: "Manage salary, track investments, and plan for future financial goals.",
            benefits: ["Salary planning", "Investment tracking", "Tax insights"],
            bgColor: "#ec4899",
            gradientFrom: "#ec4899",
            gradientTo: "#db2777"
        },
        {
            title: "Freelancers",
            icon: <Laptop className="w-5 h-5" />,
            description: "Monitor project income, track business expenses, and manage cash flow.",
            benefits: ["Invoice tracking", "Expense separation", "Cash flow view"],
            bgColor: "#20C997",
            gradientFrom: "#20C997",
            gradientTo: "#14b8a6"
        },
        {
            title: "Small Business",
            icon: <Building2 className="w-5 h-5" />,
            description: "Manage business finances, track EMIs, and monitor portfolios.",
            benefits: ["GST reports", "EMI management", "Multi-account"],
            bgColor: "#FD7E14",
            gradientFrom: "#FD7E14",
            gradientTo: "#ea580c"
        }
    ];

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let next = prev + newDirection;
            if (next < 0) next = users.length - 1;
            if (next >= users.length) next = 0;
            return next;
        });
    };

    const slideVariants = {
        enter: (direction: number) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({ x: direction < 0 ? 200 : -200, opacity: 0 })
    };

    const currentUser = users[currentIndex];

    return (
        <section className="py-20 md:py-28 bg-[#495057]">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-[#20C997] font-semibold text-sm uppercase tracking-wider mb-4">
                            Who is it for?
                        </span>
                        <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                            Built for Everyone
                        </h2>
                        <p className="font-inter text-gray-300 text-lg leading-relaxed mb-8">
                            Whether you&apos;re a student managing pocket money or a professional planning investments,
                            SwiftFin adapts to your unique financial needs.
                        </p>
                        <AnimatedDownloadButton text="Download Now" />
                    </motion.div>

                    {/* Right - Simple Carousel */}
                    <div className="flex-1 w-full">
                        <div className="relative h-[320px] sm:h-[340px]">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute inset-0"
                                >
                                    <div
                                        className="rounded-2xl p-8 h-full"
                                        style={{
                                            background: `linear-gradient(135deg, ${currentUser.gradientFrom} 0%, ${currentUser.gradientTo} 100%)`
                                        }}
                                    >
                                        {/* Header */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white">
                                                {currentUser.icon}
                                            </div>
                                            <h3 className="font-sora font-bold text-white text-2xl">
                                                {currentUser.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="font-inter text-white/90 text-base leading-relaxed mb-6">
                                            {currentUser.description}
                                        </p>

                                        {/* Benefits */}
                                        <ul className="space-y-3">
                                            {currentUser.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-white">
                                                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Check className="w-3 h-3" />
                                                    </div>
                                                    <span className="font-inter text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button
                                onClick={() => paginate(-1)}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex gap-2">
                                {users.map((user, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentIndex ? 1 : -1);
                                            setCurrentIndex(index);
                                        }}
                                        className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6' : 'w-2 bg-white/30'
                                            }`}
                                        style={{
                                            backgroundColor: index === currentIndex ? user.bgColor : undefined
                                        }}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => paginate(1)}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
