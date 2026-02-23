"use client";

import React from 'react';

interface LogoProps {
    className?: string;
    light?: boolean;
}

export default function Logo({ className = "h-8 w-auto", light = false }: LogoProps) {
    const color = light ? "white" : "black";

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 240 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Horizontal line under the wordmark */}
                <path
                    d="M30 110H210"
                    stroke={color}
                    strokeWidth="5"
                    strokeLinecap="round"
                />

                {/* Jagged Line Chart - Positioned high above the text */}
                <path
                    d="M55 25L75 35L95 15L115 30L145 32L180 25"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Dots on the chart line points */}
                <circle cx="55" cy="25" r="3.5" fill={color} />
                <circle cx="180" cy="25" r="3.5" fill={color} />

                {/* Growth Arrow at the end of the chart */}
                <path
                    d="M185 22L215 8M215 8V22M215 8H200"
                    stroke={color}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* FINCO Wordmark - Shifted lower to ensure zero overlap with the chart */}
                <text
                    x="120"
                    y="95"
                    fill={color}
                    fontSize="46"
                    fontWeight="900"
                    fontFamily="Montserrat, sans-serif"
                    textAnchor="middle"
                    style={{ letterSpacing: '0.04em' }}
                >
                    FINCO
                </text>
            </svg>
        </div>
    );
}
