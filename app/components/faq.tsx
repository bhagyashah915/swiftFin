"use client";

import { ChevronRight, Sparkles, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Is SwiftFin free to use?",
            answer: "Yes! SwiftFin is completely free with all core features. Premium plans are available for advanced analytics.",
            emoji: "💸",
        },
        {
            question: "How secure is my financial data?",
            answer: "Your data is protected with 256-bit encryption. We never share information with third parties.",
            emoji: "🔒",
        },
        {
            question: "Can I track multiple accounts?",
            answer: "Absolutely! Add unlimited bank accounts, credit cards, and investment portfolios in one dashboard.",
            emoji: "💳",
        },
        {
            question: "Does SwiftFin work offline?",
            answer: "Yes, add expenses offline and everything syncs automatically when you're back online.",
            emoji: "📶",
        },
        {
            question: "How does receipt scanning work?",
            answer: "Take a photo and our AI extracts amount, date, and category automatically.",
            emoji: "🧾",
        },
        {
            question: "Can I export financial reports?",
            answer: "Yes! Export expense reports and summaries in PDF or CSV format anytime.",
            emoji: "📊",
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                {/* Header */}
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FD7E14]/10 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Sparkles className="w-4 h-4 text-[#FD7E14]" />
                        <span className="text-sm font-bold uppercase tracking-wider text-[#FD7E14]">FAQ</span>
                    </motion.div>
                    <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-bold text-[#495057] mb-6 leading-tight">
                        Got Questions?
                    </h2>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed">
                        Click on any question to reveal the answer
                    </p>
                </motion.div>

                {/* Interactive FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, rotateX: -10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className="cursor-pointer perspective-1000"
                        >
                            <motion.div
                                className={`relative h-48 rounded-2xl transition-all duration-300 ${activeIndex === index
                                    ? 'bg-[#20C997] shadow-xl shadow-[#20C997]/20'
                                    : 'bg-white border border-gray-100 shadow-md hover:shadow-lg'
                                    }`}
                                animate={{
                                    scale: hoveredIndex === index ? 1.02 : 1,
                                    rotateY: activeIndex === index ? 0 : 0
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Front - Question */}
                                <AnimatePresence mode="wait">
                                    {activeIndex !== index ? (
                                        <motion.div
                                            key="question"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 p-6 flex flex-col"
                                        >
                                            <motion.span
                                                className="text-4xl mb-3"
                                                animate={{
                                                    rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                                                    scale: hoveredIndex === index ? 1.2 : 1
                                                }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                {faq.emoji}
                                            </motion.span>
                                            <h3 className="font-sora font-bold text-[#495057] text-lg md:text-xl flex-1">
                                                {faq.question}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-[#20C997] font-medium">
                                                <span>Click to reveal</span>
                                                <motion.div
                                                    animate={{ x: hoveredIndex === index ? [0, 5, 0] : 0 }}
                                                    transition={{ duration: 0.5, repeat: hoveredIndex === index ? Infinity : 0 }}
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="answer"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="absolute inset-0 p-6 flex flex-col justify-center"
                                        >
                                            <p className="font-inter text-white leading-relaxed">
                                                {faq.answer}
                                            </p>
                                            <span className="mt-3 text-white/70 text-sm">
                                                Click to close
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Decorative corner */}
                                <motion.div
                                    className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full ${activeIndex === index ? 'bg-white/10' : 'bg-[#20C997]/5'
                                        }`}
                                    animate={{ scale: hoveredIndex === index ? 1.2 : 1 }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <motion.a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#495057] text-white font-semibold rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "#3d4349" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <MessageCircle className="w-5 h-5" />
                        Contact Support
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
