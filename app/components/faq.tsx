"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQ() {
    const faqs = [
        {
            question: "Is SwiftFin free to use?",
            answer: "Yes! SwiftFin is completely free to use with all core features. We also offer premium plans with advanced analytics and unlimited cloud storage."
        },
        {
            question: "How secure is my financial data?",
            answer: "Your data is protected with bank-grade 256-bit encryption. We use industry-standard security protocols and never share your information with third parties."
        },
        {
            question: "Can I track multiple accounts and investments?",
            answer: "Absolutely! You can add unlimited bank accounts, credit cards, and investment portfolios. SwiftFin consolidates everything into one easy-to-use dashboard."
        },
        {
            question: "Does SwiftFin work offline?",
            answer: "Yes, you can add expenses and view your data offline. All changes will sync automatically when you're back online."
        },
        {
            question: "How does receipt scanning work?",
            answer: "Simply take a photo of your receipt, and our AI will automatically extract the amount, date, and category. You can review and edit before saving."
        },
        {
            question: "Can I export my financial reports?",
            answer: "Yes! You can export your expense reports, investment summaries, and EMI schedules in PDF or CSV format anytime."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-white section-highlight">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-primary-teal font-bold tracking-wide uppercase text-sm mb-3 font-inter">FAQ</h2>
                    <h3 className="font-sora text-6xl md:text-7xl font-bold text-neutral-slate mb-6">
                        Frequently Asked <span className="text-gradient-primary"> Questions </span>
                    </h3>
                    <p className="font-inter text-gray-600 text-lg">
                        Got questions? We&apos;ve got answers.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200 hover:border-primary-teal transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <details className="group">
                                <summary className="flex justify-between items-center p-6 cursor-pointer bg-white list-none focus:outline-none transition-colors">
                                    <span className="font-sora font-bold text-neutral-slate text-lg pr-4">{faq.question}</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180 shrink-0">
                                        <ChevronDown className="w-5 h-5 text-primary-teal" />
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 font-inter text-gray-600 leading-relaxed bg-white">
                                    {faq.answer}
                                </div>
                            </details>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
