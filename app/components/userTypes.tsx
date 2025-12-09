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
            icon: <Users className="w-6 h-6" />,
            description: "Track expenses, manage pocket money, and build healthy financial habits early.",
            benefits: ["Smart budgeting", "Pocket money tracker", "Savings goals"],
            bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80",
        },
        {
            title: "Working Professionals",
            icon: <Briefcase className="w-6 h-6" />,
            description: "Manage salary, track investments, and plan for future financial goals.",
            benefits: ["Salary planning", "Investment tracking", "Tax insights"],
            bgImage: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80",
        },
        {
            title: "Freelancers",
            icon: <Laptop className="w-6 h-6" />,
            description: "Monitor project income, track business expenses, and manage cash flow.",
            benefits: ["Invoice tracking", "Expense separation", "Cash flow view"],
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
        },
        {
            title: "Small Business",
            icon: <Building2 className="w-6 h-6" />,
            description: "Manage business finances, track EMIs, and monitor portfolios.",
            benefits: ["GST reports", "EMI management", "Multi-account"],
            bgImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1920&q=80",
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

    const currentUser = users[currentIndex];

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Dynamic Background Images with Crossfade */}
            <div className="absolute inset-0">
                {users.map((user, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: currentIndex === index ? 1 : 0,
                            scale: currentIndex === index ? 1 : 1.1,
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${user.bgImage})` }}
                        />
                        {/* Dark overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-block px-4 py-1.5 rounded-full bg-[#20C997]/20 border border-[#20C997]/40 mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">
                                Who is it for?
                            </span>
                        </motion.div>
                        <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Built for <span className="text-[#20C997]">Everyone</span>
                        </h2>
                        <p className="font-inter text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                            Whether you&apos;re a student managing pocket money or a professional planning investments,
                            SwiftFin adapts to your unique financial needs.
                        </p>
                        <AnimatedDownloadButton text="Download Now" />
                    </motion.div>

                    {/* Right - User Type Cards with Hover Effect */}
                    <div className="flex-1 w-full">
                        <div className="space-y-3">
                            {users.map((user, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden group ${currentIndex === index
                                            ? 'bg-white/15 backdrop-blur-md border border-white/30'
                                            : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                                        }`}
                                    onMouseEnter={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 8 }}
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${currentIndex === index
                                                ? 'bg-[#20C997] text-white'
                                                : 'bg-white/10 text-white/70 group-hover:bg-white/20'
                                            }`}>
                                            {user.icon}
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1">
                                            <h3 className="font-sora text-lg font-bold text-white mb-0.5">
                                                {user.title}
                                            </h3>
                                            <p className={`font-inter text-sm transition-all duration-300 ${currentIndex === index ? 'text-gray-300' : 'text-gray-400'
                                                }`}>
                                                {user.description}
                                            </p>
                                        </div>

                                        {/* Arrow */}
                                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${currentIndex === index ? 'text-[#20C997] translate-x-1' : 'text-white/30'
                                            }`} />
                                    </div>

                                    {/* Expanded Benefits */}
                                    <AnimatePresence>
                                        {currentIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                                                    {user.benefits.map((benefit, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="flex items-center gap-2 bg-[#20C997]/20 px-3 py-1.5 rounded-full"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: i * 0.1 }}
                                                        >
                                                            <Check className="w-3 h-3 text-[#20C997]" />
                                                            <span className="text-xs text-white font-medium">{benefit}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={() => paginate(-1)}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex gap-2">
                                {users.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setDirection(index > currentIndex ? 1 : -1);
                                            setCurrentIndex(index);
                                        }}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'w-8 bg-[#20C997]'
                                                : 'w-2 bg-white/30 hover:bg-white/50'
                                            }`}
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
