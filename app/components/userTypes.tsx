"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Users, Briefcase, Laptop, Building2 } from "lucide-react";
import AnimatedDownloadButton from "./AnimatedDownloadButton";
import { useRef } from "react";

interface UserType {
    title: string;
    icon: JSX.Element;
    description: string;
    benefits: string[];
    gradient: string;
    bgColor: string;
    iconBg: string;
}

function CardStack({ user, index, total }: { user: UserType; index: number; total: number }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [200, 0, 0, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

    return (
        <div
            ref={cardRef}
            className="h-screen flex items-center justify-center sticky top-0 px-6"
            style={{ zIndex: index + 1 }}
        >
            <motion.div
                style={{ y, scale, opacity }}
                className={`w-full max-w-5xl ${user.bgColor} rounded-3xl shadow-2xl overflow-hidden`}
            >
                <div className="relative p-8 md:p-12 lg:p-16">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${user.gradient} opacity-10`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-20 h-20 rounded-2xl ${user.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                            <div className="text-white w-10 h-10">
                                {user.icon}
                            </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                            {user.title}
                        </h3>
                        <p className="font-inter text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                            {user.description}
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {user.benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                >
                                    <div className={`w-6 h-6 rounded-full ${user.iconBg} flex items-center justify-center shrink-0`}>
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-800 font-semibold text-sm md:text-base">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <AnimatedDownloadButton
                                text="Get Started Free"
                                className="px-8 py-4 text-lg shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-64 h-64 ${user.iconBg} opacity-10 rounded-full blur-3xl -translate-y-32 translate-x-32`}></div>
                    <div className={`absolute bottom-0 left-0 w-48 h-48 ${user.iconBg} opacity-10 rounded-full blur-3xl translate-y-24 -translate-x-24`}></div>
                </div>
            </motion.div>
        </div>
    );
}

export default function UserTypes() {
    const users: UserType[] = [
        {
            title: "Students",
            icon: <Users className="w-full h-full" />,
            description: "Track expenses, manage pocket money, and build healthy financial habits early.",
            benefits: ["Smart budgeting", "Pocket money tracker", "Savings goals"],
            gradient: "from-blue-500 via-blue-600 to-cyan-600",
            bgColor: "bg-gray-100",
            iconBg: "bg-linear-to-br from-blue-500 to-cyan-600",
        },
        {
            title: "Working Professionals",
            icon: <Briefcase className="w-full h-full" />,
            description: "Manage salary, track investments, and plan for future financial goals.",
            benefits: ["Salary planning", "Investment tracking", "Tax insights"],
            gradient: "from-purple-500 via-purple-600 to-pink-600",
            bgColor: "bg-gray-100",
            iconBg: "bg-linear-to-br from-purple-500 to-pink-600",
        },
        {
            title: "Freelancers",
            icon: <Laptop className="w-full h-full" />,
            description: "Monitor project income, track business expenses, and manage cash flow.",
            benefits: ["Invoice tracking", "Expense separation", "Cash flow view"],
            gradient: "from-orange-500 via-orange-600 to-red-600",
            bgColor: "bg-gray-100",
            iconBg: "bg-linear-to-br from-orange-500 to-red-600",
        },
        {
            title: "Small Business",
            icon: <Building2 className="w-full h-full" />,
            description: "Manage business finances, track EMIs, and monitor portfolios.",
            benefits: ["GST reports", "EMI management", "Multi-account"],
            gradient: "from-teal-500 via-teal-600 to-emerald-600",
            bgColor: "bg-gray-100",
            iconBg: "bg-linear-to-br from-teal-500 to-emerald-600",
        }
    ];

    return (
        <section className="relative bg-white">
            {/* Header Section */}
            <div className="container mx-auto px-6 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.div
                        className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">
                            Who is it for?
                        </span>
                    </motion.div>
                    <motion.h2
                        className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Built for <span className="text-teal-600">Everyone</span>
                    </motion.h2>
                    <motion.p
                        className="font-inter text-gray-600 text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Whether you&apos;re a student managing pocket money or a professional planning investments,
                        SwiftFin adapts to your unique financial needs.
                    </motion.p>
                </div>
            </div>

            {/* Card Stack */}
            <div className="relative">
                {users.map((user, index) => (
                    <CardStack
                        key={index}
                        user={user}
                        index={index}
                        total={users.length}
                    />
                ))}
            </div>

            {/* Bottom Spacing */}
            <div className="h-24"></div>
        </section>
    );
}
