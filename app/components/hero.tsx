"use client";

import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Plus, TrendingUp, Lightbulb, PieChart, Home, Receipt, Target, MoreHorizontal, Wallet, CreditCard, DollarSign } from 'lucide-react';

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
                        {[100, 250, 400, 550, 700, 850, 1000, 1150, 1300, 1450, 1600, 1750].map((x, i) => (
                            <rect key={i} x={x} y={600 - (Math.random() * 200)} width="30" height={Math.random() * 200} fill="#14B8A6" opacity="0.15" />
                        ))}
                    </svg>
                </div>

                {/* White overlay to blend with design */}
                <div className="absolute inset-0 bg-white/85 z-[1]"></div>

                {/* Subtle Background Elements - keeping original design */}
                <div className="absolute inset-0 pointer-events-none z-[2]">
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-teal-50/60 rounded-full blur-3xl"></div>
                    <div className="absolute top-32 right-20 text-teal-200 text-6xl font-light select-none">+</div>
                    <div className="absolute bottom-40 left-32 text-teal-100 text-8xl font-light select-none">+</div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-20">
                    <div className="w-full grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">

                        {/* Left Content - Text */}
                        <div className={`lg:col-span-4 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                            <div className="space-y-4">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                                    Where Smart Money
                                    <br />
                                    <span className="text-gray-700">Gets Smarter.</span>
                                    <br />
                                    <span className="relative inline-block">
                                        <div className="absolute -bottom-2 left-0 w-32 h-1 bg-teal-500"></div>
                                    </span>
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
                        <div className={`lg:col-span-4 flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                            <div
                                ref={phoneRef}
                                className="relative group cursor-pointer"
                                style={{
                                    transform: `translateY(${parallaxOffset}px) perspective(2000px) rotateY(${-12 + mousePosition.x * 0.3}deg) rotateX(${3 + mousePosition.y * 0.3}deg) rotateZ(${-2}deg)`,
                                    transition: 'transform 0.15s ease-out',
                                    transformStyle: 'preserve-3d'
                                }}
                            >
                                <div
                                    className="relative w-[340px] h-[690px] transform group-hover:scale-[1.03] transition-all duration-500"
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className="absolute inset-0 rounded-[3.5rem] shadow-2xl overflow-hidden border-[3px] border-teal-500/30"
                                        style={{
                                            transform: 'translateZ(20px)',
                                            background: 'linear-gradient(135deg, #e8e0d5 0%, #d4c5b0 50%, #c9b89a 100%)',
                                            boxShadow: '25px 50px 100px rgba(0,0,0,0.35), 15px 30px 60px rgba(0,0,0,0.25), 0 0 0 3px rgba(20, 184, 166, 0.2)'
                                        }}>

                                        <div className="absolute -left-3 top-0 bottom-0 w-3 rounded-l-[3.5rem]"
                                            style={{
                                                transform: 'translateZ(15px)',
                                                background: 'linear-gradient(to right, #b8a88a 0%, #d4c5b0 100%)'
                                            }}></div>

                                        <div className="absolute -left-3 top-32 w-1.5 h-14 bg-gradient-to-r from-gray-500 to-gray-400 rounded-l-sm"
                                            style={{ transform: 'translateZ(18px)' }}></div>
                                        <div className="absolute -left-3 top-52 w-1.5 h-20 bg-gradient-to-r from-gray-500 to-gray-400 rounded-l-sm"
                                            style={{ transform: 'translateZ(18px)' }}></div>
                                        <div className="absolute -left-3 top-[310px] w-1.5 h-20 bg-gradient-to-r from-gray-500 to-gray-400 rounded-l-sm"
                                            style={{ transform: 'translateZ(18px)' }}></div>

                                        <div className="absolute inset-[8px] bg-black rounded-[3.2rem] overflow-hidden"
                                            style={{ transform: 'translateZ(3px)' }}>

                                            <div className="relative w-full h-full bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                                                <div className="relative h-14 bg-white flex items-center justify-between px-8 text-xs font-semibold text-gray-900">
                                                    <span>9:41</span>
                                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-full"></div>
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                                            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                                                        </svg>
                                                    </div>
                                                </div>

                                                <div className="h-[calc(100%-3.5rem-5rem)] overflow-y-auto scrollbar-hide">
                                                    <div className="px-6 pt-4 pb-6">
                                                        <div className="flex items-start justify-between mb-5">
                                                            <div>
                                                                <p className="text-xs text-red-500 font-bold mb-2">SwiftFin</p>
                                                                <p className="text-sm text-gray-500 mb-0.5">Good evening,</p>
                                                                <h2 className="text-xl font-bold text-gray-800">Bhagya shah</h2>
                                                            </div>
                                                            <div className="w-12 h-12 bg-white rounded-full shadow-lg border-2 border-teal-500 flex items-center justify-center">
                                                                <span className="text-teal-600 font-bold text-base">BS</span>
                                                            </div>
                                                        </div>

                                                        <div className="relative mb-5">
                                                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-3xl shadow-xl"></div>
                                                            <div className="relative p-6 rounded-3xl">
                                                                <p className="text-white/90 text-sm font-medium mb-3">Monthly Budget</p>
                                                                <p className="text-white text-4xl font-bold mb-4">₹45,280</p>
                                                                <div className="flex items-center gap-2 text-white/90">
                                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                                    </svg>
                                                                    <span className="text-sm font-medium">8% saved this month</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-5">
                                                            <h3 className="text-base font-bold text-gray-800 mb-3">Quick Actions</h3>
                                                            <div className="grid grid-cols-3 gap-3">
                                                                <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white hover:bg-gray-50 transition-all shadow-md border border-gray-100">
                                                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                                                                        <Wallet className="w-7 h-7 text-teal-600" />
                                                                    </div>
                                                                    <div className="text-center">
                                                                        <span className="text-xs font-semibold text-gray-700 block">Track</span>
                                                                        <span className="text-xs font-semibold text-gray-700 block">Expense</span>
                                                                    </div>
                                                                </button>
                                                                <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white hover:bg-gray-50 transition-all shadow-md border border-gray-100">
                                                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                                                                        <CreditCard className="w-7 h-7 text-orange-600" />
                                                                    </div>
                                                                    <span className="text-xs font-semibold text-gray-700">My EMIs</span>
                                                                </button>
                                                                <button className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white hover:bg-gray-50 transition-all shadow-md border border-gray-100">
                                                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100">
                                                                        <DollarSign className="w-7 h-7 text-green-600" />
                                                                    </div>
                                                                    <span className="text-xs font-semibold text-gray-700">Savings</span>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h3 className="text-base font-bold text-gray-800 mb-3">Overview</h3>
                                                            <div className="space-y-3">
                                                                <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                                                            <TrendingUp className="w-6 h-6 text-purple-600" />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 font-medium mb-0.5">Portfolio Growth</p>
                                                                            <p className="text-lg font-bold text-gray-800">+₹12,450</p>
                                                                        </div>
                                                                    </div>
                                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </div>

                                                                <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-gray-100">
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                                                            <Lightbulb className="w-6 h-6 text-blue-600" />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-xs text-gray-500 font-medium mb-0.5">Money Tips</p>
                                                                            <p className="text-lg font-bold text-gray-800">5 Insights</p>
                                                                        </div>
                                                                    </div>
                                                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-20">
                                                    <div className="px-4 pt-2 pb-1 flex items-center justify-around">
                                                        <button className="flex flex-col items-center gap-0.5 text-teal-500">
                                                            <Home className="w-6 h-6" />
                                                            <span className="text-xs font-semibold">Home</span>
                                                        </button>
                                                        <button className="flex flex-col items-center gap-0.5 text-gray-400">
                                                            <Receipt className="w-6 h-6" />
                                                            <span className="text-xs">Expenses</span>
                                                        </button>
                                                        <button className="flex flex-col items-center gap-0.5 text-gray-400">
                                                            <Target className="w-6 h-6" />
                                                            <span className="text-xs">Goals</span>
                                                        </button>
                                                        <button className="flex flex-col items-center gap-0.5 text-gray-400">
                                                            <TrendingUp className="w-6 h-6" />
                                                            <span className="text-xs">Invest</span>
                                                        </button>
                                                        <button className="flex flex-col items-center gap-0.5 text-gray-400">
                                                            <MoreHorizontal className="w-6 h-6" />
                                                            <span className="text-xs">More</span>
                                                        </button>
                                                    </div>
                                                    <div className="h-6 bg-black flex items-center justify-center rounded-b-[3rem]">
                                                        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent blur-3xl rounded-full"
                                        style={{ transform: 'translateZ(-25px) rotateX(85deg)' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className={`lg:col-span-4 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                            <div className="flex justify-end mb-8">
                                <div className="text-teal-300 text-8xl font-light leading-none select-none">+</div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 leading-relaxed">
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

                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
            </section>
        </>
    );
}