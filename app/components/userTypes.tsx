"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useState, useEffect } from "react";

export default function UserTypes() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const users = [
        {
            title: "Students",
            description: "Track expenses, manage pocket money, and build healthy financial habits early.",
            bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        },
        {
            title: "Working Professionals",
            description: "Manage salary, track investments, and plan for future financial goals.",
            bgImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        },
        {
            title: "Freelancers",
            description: "Monitor project income, track business expenses, and manage irregular cash flow.",
            bgImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            title: "Small Business Owners",
            description: "Manage business finances, track EMIs, and monitor investment portfolios.",
            bgImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        }
    ];

    // Auto-rotate every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % users.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [users.length]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            let next = prev + newDirection;
            if (next < 0) next = users.length - 1;
            if (next >= users.length) next = 0;
            return next;
        });
    };

    return (
        <section className="py-16 md:py-20 bg-neutral-slate text-white bg-grid-pattern overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-primary-teal font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">Who is it for?</h2>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                            Built for <span className="text-primary-teal">Everyone</span>
                        </h3>
                        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
                            Whether you&apos;re a student managing pocket money or a professional planning investments,
                            SwiftFin adapts to your unique financial needs. Join thousands who trust us with their finances.
                        </p>
                        <AnimatedDownloadButton className="inline-block px-6 sm:px-8 py-3 w-full sm:w-auto" text="Download" />
                    </motion.div>

                    <div className="flex-1 w-full relative">
                        {/* Carousel Container */}
                        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = swipePower(offset.x, velocity.x);

                                        if (swipe < -swipeConfidenceThreshold) {
                                            paginate(1);
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            paginate(-1);
                                        }
                                    }}
                                    className="absolute w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                >
                                    {users.map((user, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative p-6 sm:p-8 rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                                            style={{ background: user.bgImage }}
                                            initial={{ opacity: 0.7, scale: 0.95 }}
                                            animate={{
                                                opacity: index === currentIndex || index === (currentIndex + 1) % users.length ||
                                                    index === (currentIndex + 2) % users.length || index === (currentIndex + 3) % users.length ? 1 : 0.7,
                                                scale: index === currentIndex || index === (currentIndex + 1) % users.length ||
                                                    index === (currentIndex + 2) % users.length || index === (currentIndex + 3) % users.length ? 1 : 0.95
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/20"></div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <h4 className="font-sora text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white drop-shadow-lg">
                                                    {user.title}
                                                </h4>
                                                <p className="font-inter text-white/90 text-sm sm:text-base leading-relaxed drop-shadow">
                                                    {user.description}
                                                </p>
                                            </div>

                                            {/* Decorative element */}
                                            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full"></div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
                            {users.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary-teal' : 'w-2 bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
