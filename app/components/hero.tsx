"use client";

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Plus, TrendingUp, Lightbulb, PieChart, Home, Receipt, Target, MoreHorizontal, Wallet, CreditCard, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const [splashStep, setSplashStep] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const phoneRef = useRef(null);

    useEffect(() => {
        const logoTimer = setTimeout(() => setSplashStep(1), 400);
        const nameTimer = setTimeout(() => setSplashStep(2), 1000);
        const taglineTimer = setTimeout(() => setSplashStep(3), 1600);
        const splashTimer = setTimeout(() => {
            setShowSplash(false);
            setTimeout(() => setIsVisible(true), 100);
        }, 2800);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleMouseMove = (e) => {
            if (phoneRef.current) {
                const rect = phoneRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                setMousePosition({
                    x: (e.clientX - centerX) / 40,
                    y: (e.clientY - centerY) / 40
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(nameTimer);
            clearTimeout(taglineTimer);
            clearTimeout(splashTimer);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const parallaxOffset = scrollY * 0.3;

    return (
        <>
            {/* Splash Screen with Sequential Animation */}
            <div className={`fixed inset-0 z-50 bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600 flex items-center justify-center transition-opacity duration-1000 ${showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="text-center space-y-8 px-4">
                    {/* Logo - Enhanced visibility with actual logo */}
                    <div className={`transition-all duration-700 ${splashStep >= 0 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-8'}`}>
                        <div className="w-48 h-48 mx-auto bg-white rounded-3xl shadow-2xl p-10 flex items-center justify-center">
                            {/* SwiftFin Logo SVG - Direct from image */}
                            <svg viewBox="0 0 320 320" className="w-full h-full">
                                {/* Wallet Body */}
                                <rect x="110" y="150" width="130" height="100" rx="12" fill="#50B8A6" stroke="#3D9B8C" strokeWidth="4" />

                                {/* Dollar sign on wallet */}
                                <text x="175" y="210" fontFamily="Arial" fontSize="32" fontWeight="bold" fill="white">$</text>

                                {/* Wallet cards/bills sticking out */}
                                <rect x="115" y="135" width="120" height="18" rx="4" fill="#50B8A6" opacity="0.85" stroke="#3D9B8C" strokeWidth="2" />
                                <rect x="120" y="120" width="110" height="18" rx="4" fill="#50B8A6" opacity="0.7" stroke="#3D9B8C" strokeWidth="2" />

                                {/* Curved Arrow */}
                                <path
                                    d="M 80 140 Q 50 90, 100 65"
                                    stroke="#5EEAD4"
                                    strokeWidth="12"
                                    fill="none"
                                    strokeLinecap="round"
                                />

                                {/* Arrow head */}
                                <path
                                    d="M 85 50 L 120 70 L 100 90 Z"
                                    fill="#FFA500"
                                    stroke="#FFA500"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Name */}
                    <div className={`transition-all duration-700 delay-200 ${splashStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold text-white">
                            Swift<span className="text-teal-100">Fin</span>
                        </h1>
                    </div>

                    {/* Tagline */}
                    <div className={`transition-all duration-700 delay-300 ${splashStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-2xl text-white/95 font-medium">Your Money, Simplified.</p>
                        <p className="text-xl text-white/80 font-medium mt-2">Track. Save. Grow.</p>
                    </div>
                </div>
            </div>

            {/* Main Hero Section with Background Image */}
            <section className="relative w-full min-h-screen overflow-hidden">

                {/* Background Image Layer - Financial Chart */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(20, 184, 166, 0.05) 100%)`,
                        }}
                    ></div>
                    {/* Simulated chart background pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="chart-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="0" x2="0" y2="50" stroke="#14B8A6" strokeWidth="0.5" />
                                <line x1="0" y1="50" x2="50" y2="50" stroke="#14B8A6" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#chart-grid)" />
                        {/* Chart line simulation */}
                        <path d="M 0 400 Q 200 300, 400 350 T 800 300 T 1200 250 T 1600 300 T 2000 200"
                            stroke="#14B8A6"
                            strokeWidth="3"
                            fill="none"
                            opacity="0.3" />
                        <path d="M 0 500 Q 250 450, 500 480 T 1000 420 T 1500 400 T 2000 350"
                            stroke="#5EEAD4"
                            strokeWidth="2"
                            fill="none"
                            opacity="0.25" />
                        {/* Bar chart elements */}
                        {[
                            { x: 100, y: 450, height: 150 },
                            { x: 250, y: 520, height: 80 },
                            { x: 400, y: 480, height: 120 },
                            { x: 550, y: 430, height: 170 },
                            { x: 700, y: 500, height: 100 },
                            { x: 850, y: 470, height: 130 },
                            { x: 1000, y: 440, height: 160 },
                            { x: 1150, y: 510, height: 90 },
                            { x: 1300, y: 460, height: 140 },
                            { x: 1450, y: 490, height: 110 },
                            { x: 1600, y: 420, height: 180 },
                            { x: 1750, y: 530, height: 70 },
                        ].map((bar, i) => (
                            <rect key={i} x={bar.x} y={bar.y} width="30" height={bar.height} fill="#14B8A6" opacity="0.15" />
                        ))}
                    </svg>
                </div>

                {/* White overlay to blend with design */}
                <div className="absolute inset-0 bg-white/85 z-[1]"></div>

                {/* Subtle Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-[2]">
                    <div className="absolute top-32 right-20 text-gray-200 text-6xl font-light select-none">+</div>
                    <div className="absolute bottom-40 left-32 text-gray-100 text-8xl font-light select-none">+</div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
                    <div className="w-full grid lg:grid-cols-12 gap-4 items-start lg:items-center">

                        {/* Left Content - Text */}
                        <div className={`lg:col-span-4 space-y-6 transition-all duration-1000 lg:-mt-56 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="space-y-4">
                                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-light leading-tight tracking-wide text-gray-900">
                                    <span className="tracking-wider">Welcome to SwiftFin</span>
                                    <br />
                                    <span className="text-teal-600 tracking-wider">Your Personal Finance Buddy</span>
                                </h1>
                            </div>

                            <div className="pt-4">
                                <button className="group px-8 py-4 bg-white border-2 border-teal-500 text-teal-600 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3">
                                    <span>Get Started Free</span>
                                    <div className="w-8 h-8 bg-teal-500 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
                                        <ArrowRight className="w-4 h-4 text-white group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Center Content - Interactive Phone Mockup */}
                        <div className={`lg:col-span-4 flex justify-center transition-all duration-1000 delay-200 relative z-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div
                                ref={phoneRef}
                                className="relative group"
                                style={{
                                    transform: `translateY(${parallaxOffset}px) translateX(${mousePosition.x * 2}px) translateY(${mousePosition.y * 2}px) perspective(2000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${-mousePosition.y * 0.3}deg)`,
                                    transition: 'transform 0.2s ease-out',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <div className="relative w-[600px] h-[800px] transform transition-all duration-500">
                                    <Image
                                        src="/herophone2.png"
                                        alt="SwiftFin App Hero Phone"
                                        fill
                                        className="object-contain  drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Glow effect */}
                                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent blur-3xl rounded-full -z-10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className={`lg:col-span-4 space-y-8 transition-all duration-1000 delay-400 lg:-mt-72 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="flex justify-end mb-8">
                                <div className="text-teal-300 text-8xl font-light leading-none select-none">+</div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-2xl text-gray-600 leading-relaxed">
                                    Simplify your financial life. Our intuitive app makes managing your money effortless.
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-6">
                                <div className="flex -space-x-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-4 border-white shadow-lg"></div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white shadow-lg"></div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 border-4 border-white shadow-lg"></div>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">2.3M+</p>
                                    <p className="text-sm text-gray-500">Trusted to use by millions users<br />over 140 countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Teal Curved Background with Ticker - Bottom Half */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-72 overflow-hidden z-[5]">
                    <div className="absolute inset-0 bg-teal-600 rounded-t-[80px] shadow-2xl">
                        {/* Ticker Text */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
                            <div className="flex animate-ticker whitespace-nowrap">
                                <span className="inline-block text-white text-6xl font-black px-8">
                                    Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy •
                                </span>
                                <span className="inline-block text-white text-6xl font-black px-8">
                                    Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy • Your Personal Finance Buddy •
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    @keyframes ticker {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-ticker {
                        animation: ticker 30s linear infinite;
                    }
                `}</style>
            </section>
        </>
    );
}