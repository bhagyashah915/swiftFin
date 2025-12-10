"use client";

import { Receipt, BarChart3, CreditCard, TrendingUp, Lightbulb, Camera, ChevronRight, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function Features() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const features = [
        {
            icon: <Receipt className="w-10 h-10" />,
            title: "Expense Tracking",
            description: "Track expenses with manual entry, receipt scanning, and automatic categorization.",
            details: [
                "Manual entry & receipt scan",
                "Auto-categorization by AI",
                "Real-time tracking"
            ]
        },
        {
            icon: <BarChart3 className="w-10 h-10" />,
            title: "Financial Reports",
            description: "Interactive dashboards with charts and easy PDF/CSV export.",
            details: [
                "Interactive dashboards",
                "Beautiful charts & graphs",
                "PDF/CSV export"
            ]
        },
        {
            icon: <CreditCard className="w-10 h-10" />,
            title: "EMI Tracking",
            description: "Manage loans, get reminders, and visualize EMI progress.",
            details: [
                "Loan management",
                "Payment reminders",
                "Progress visualization"
            ]
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Investments",
            description: "Track portfolio, view gain/loss across all accounts.",
            details: [
                "Portfolio tracking",
                "Gain/loss analytics",
                "Multi-account support"
            ]
        },
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "Smart Tips",
            description: "Personalized insights based on your spending behavior.",
            details: [
                "AI-powered insights",
                "Spending analysis",
                "Saving recommendations"
            ]
        },
        {
            icon: <Camera className="w-10 h-10" />,
            title: "Receipt Scan",
            description: "AI-powered receipt scanning and auto-categorization.",
            details: [
                "Camera scanning",
                "OCR text extraction",
                "Auto-save to expense"
            ]
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 4000);

        return () => {
            clearInterval(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, [features.length]);

    const getPhoneTransform = (index: number) => {
        const totalFeatures = features.length;
        const angleStep = 360 / totalFeatures;
        const radius = isMobile ? 180 : 320;
        const centerOffset = activeIndex * angleStep;

        const angle = (index * angleStep - centerOffset + 360) % 360;
        const radian = (angle * Math.PI) / 180;

        const x = Math.sin(radian) * radius;
        const z = Math.cos(radian) * radius;

        // Calculate scale and opacity based on z-position
        const normalizedZ = (z + radius) / (2 * radius);
        const scale = 0.6 + (normalizedZ * 0.5);
        const opacity = Math.max(0.3, normalizedZ);

        // Rotation for depth effect
        const rotateY = -angle;

        return {
            x,
            z,
            scale,
            opacity,
            rotateY,
            isCenter: angle < 30 || angle > 330
        };
    };

    return (
        <>
            {/* Google Fonts Import */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

            <section id="features" className="relative py-20 md:py-32 overflow-hidden font-lato">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
                    {/* Gradient mesh overlay */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-emerald-500/20 animate-gradient-shift"></div>
                    </div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                    {/* Animated gradient orbs */}
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float-slow"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow"></div>

                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-particle-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${15 + Math.random() * 10}s`
                            }}
                        />
                    ))}

                    {/* Diagonal lines pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="rotate(45)">
                                    <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(32, 201, 151, 0.3)" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
                        </svg>
                    </div>
                </div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 mb-4 backdrop-blur-sm">
                            <span className="text-teal-400 font-bold text-sm uppercase tracking-widest font-poppins">
                                Features
                            </span>
                        </div>
                        <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Powerful Tools at Your Fingertips
                        </h2>
                        <p className="font-lato text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Experience SwiftFin&apos;s innovative features designed for modern finance management
                        </p>
                    </div>

                    {/* 3D Carousel Phone Display */}
                    <div
                        className="relative h-[550px] md:h-[700px] mb-12"
                        style={{
                            perspective: "2000px",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {features.map((feature, index) => {
                                const transform = getPhoneTransform(index);
                                const isActive = transform.isCenter;

                                return (
                                    <div
                                        key={index}
                                        className="absolute cursor-pointer transition-all duration-1000 ease-out"
                                        style={{
                                            transform: `
                                                translate3d(${transform.x}px, 0, ${transform.z}px)
                                                rotateY(${transform.rotateY}deg)
                                                scale(${transform.scale})
                                            `,
                                            opacity: transform.opacity,
                                            transformStyle: "preserve-3d",
                                            zIndex: Math.round(transform.z + 500)
                                        }}
                                        onClick={() => setActiveIndex(index)}
                                    >
                                        {/* Phone mockup */}
                                        <div className="relative w-[260px] md:w-[320px]">
                                            {/* Phone frame with 3D depth */}
                                            <div
                                                className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] p-3 transition-all duration-500"
                                                style={{
                                                    boxShadow: isActive
                                                        ? '0 30px 60px -15px rgba(32, 201, 151, 0.5), 0 20px 40px -10px rgba(0, 0, 0, 0.6)'
                                                        : '0 15px 30px -10px rgba(0, 0, 0, 0.4)',
                                                    transform: isActive ? 'translateZ(50px)' : 'translateZ(0px)'
                                                }}
                                            >
                                                {/* Notch */}
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-3xl z-20" />

                                                {/* Screen */}
                                                <div
                                                    className="relative rounded-[2.2rem] overflow-hidden h-[420px] md:h-[520px]"
                                                    style={{
                                                        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)"
                                                    }}
                                                >
                                                    {/* Animated gradient overlay */}
                                                    <div
                                                        className="absolute inset-0 transition-opacity duration-1000"
                                                        style={{
                                                            background: "linear-gradient(135deg, rgba(32, 201, 151, 0.15) 0%, rgba(16, 185, 129, 0.1) 50%, rgba(6, 182, 212, 0.15) 100%)",
                                                            opacity: isActive ? 0.8 : 0.3
                                                        }}
                                                    />

                                                    {/* Top bar */}
                                                    <div className="absolute top-0 left-0 right-0 h-16 bg-black/40 border-b border-white/10 z-10 flex items-center justify-center">
                                                        <div className="w-12 h-1 bg-white/30 rounded-full" />
                                                    </div>

                                                    {/* Content */}
                                                    <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center pt-20 text-white">
                                                        {/* Icon */}
                                                        <div
                                                            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center mb-6 text-white shadow-lg transition-transform duration-500"
                                                            style={{
                                                                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                                                boxShadow: isActive ? '0 10px 30px -5px rgba(32, 201, 151, 0.5)' : '0 5px 15px -3px rgba(32, 201, 151, 0.3)'
                                                            }}
                                                        >
                                                            {feature.icon}
                                                        </div>

                                                        {/* Title - Poppins Bold */}
                                                        <h3 className="font-poppins font-bold text-white text-xl md:text-2xl mb-3">
                                                            {feature.title}
                                                        </h3>

                                                        {/* Description - Lato Regular */}
                                                        <p className="font-lato text-slate-300 text-sm leading-relaxed mb-6 px-2">
                                                            {feature.description}
                                                        </p>

                                                        {/* Feature details */}
                                                        <div className="w-full space-y-2">
                                                            {feature.details.map((detail, idx) => (
                                                                <div
                                                                    key={`detail-${index}-${idx}`}
                                                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20 transition-all duration-300"
                                                                    style={{
                                                                        opacity: isActive ? 1 : 0.6,
                                                                        transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                                                                        transitionDelay: `${idx * 100}ms`
                                                                    }}
                                                                >
                                                                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shrink-0">
                                                                        <Check className="w-3 h-3 text-white" />
                                                                    </div>
                                                                    <span className="font-lato text-xs font-medium text-slate-200 text-left">{detail}</span>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* CTA Button - Poppins SemiBold */}
                                                        {isActive && (
                                                            <button
                                                                className="font-poppins font-semibold mt-4 px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full text-sm transition-all duration-300 flex items-center gap-1 shadow-lg hover:shadow-teal-500/50 hover:scale-105"
                                                            >
                                                                Learn more <ChevronRight className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </div>

                                                    {/* Decorative circles */}
                                                    <div
                                                        className="absolute bottom-10 right-0 w-32 h-32 border border-teal-500/30 rounded-full transition-opacity duration-500"
                                                        style={{ opacity: isActive ? 0.5 : 0.2 }}
                                                    />
                                                    <div
                                                        className="absolute bottom-5 right-5 w-20 h-20 border border-teal-500/40 rounded-full transition-opacity duration-500"
                                                        style={{ opacity: isActive ? 0.6 : 0.2 }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Reflection effect */}
                                            <div
                                                className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-b from-slate-800/20 to-transparent rounded-b-[2.5rem] blur-sm transform scale-y-[-1]"
                                                style={{ opacity: isActive ? 0.4 : 0.2 }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'w-8 bg-gradient-to-r from-teal-400 to-emerald-500'
                                    : 'w-2 bg-slate-600 hover:bg-slate-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Custom Styles */}
                <style jsx>{`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Lato:wght@300;400;700&display=swap');

                    .font-poppins {
                        font-family: 'Poppins', sans-serif;
                    }

                    .font-lato {
                        font-family: 'Lato', sans-serif;
                    }

                    @keyframes gradient-shift {
                        0%, 100% { transform: translate(0, 0); opacity: 0.5; }
                        50% { transform: translate(10px, 10px); opacity: 0.8; }
                    }

                    @keyframes float-slow {
                        0%, 100% { transform: translateY(0px) translateX(0px); }
                        50% { transform: translateY(-30px) translateX(20px); }
                    }

                    @keyframes float-delayed {
                        0%, 100% { transform: translateY(0px) translateX(0px); }
                        50% { transform: translateY(-40px) translateX(-20px); }
                    }

                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 0.5; transform: scale(1.1); }
                    }

                    @keyframes particle-float {
                        0% { transform: translate(0, 0) scale(1); opacity: 0; }
                        10% { opacity: 0.5; }
                        90% { opacity: 0.5; }
                        100% { transform: translate(50px, -100vh) scale(0.5); opacity: 0; }
                    }

                    .animate-gradient-shift {
                        animation: gradient-shift 15s ease-in-out infinite;
                    }

                    .animate-float-slow {
                        animation: float-slow 20s ease-in-out infinite;
                    }

                    .animate-float-delayed {
                        animation: float-delayed 25s ease-in-out infinite;
                    }

                    .animate-pulse-slow {
                        animation: pulse-slow 15s ease-in-out infinite;
                    }

                    .animate-particle-float {
                        animation: particle-float linear infinite;
                    }

                    .bg-grid-pattern {
                        background-image: 
                            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
                        background-size: 60px 60px;
                    }
                `}</style>
            </section>
        </>
    );
}