"use client"

import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { useRef } from "react"
import { Users, TrendingUp, MapPin, Star, Zap } from "lucide-react"
import Image from "next/image"

export default function Metrics() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Soft Teal Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[520px] h-[520px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(32, 201, 151, 0.35), transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[460px] h-[460px] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(25, 135, 84, 0.25), transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      {/* Animated Floating Icons with Visible Comet Tail Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 1 }}>
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
        >
          <defs>
            {/* Left-side gradient - fades from center (right) to icon (left) */}
            <linearGradient id="tealTailLeft" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#20C997" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="1" />
            </linearGradient>
            {/* Right-side gradient - fades from center (left) to icon (right) */}
            <linearGradient id="tealTailRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#20C997" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Top-left coins icon tail - from center to icon at 8%, 18% */}
          <motion.path
            d="M 50 40 Q 30 28, 10 20"
            stroke="url(#tealTailLeft)"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
          />

          {/* Bottom-left cash icon tail - from center to icon at 10%, 85% */}
          <motion.path
            d="M 50 65 Q 32 75, 12 87"
            stroke="url(#tealTailLeft)"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.7 }}
          />

          {/* Top-right card icon tail - from center to icon at 88%, 22% */}
          <motion.path
            d="M 50 40 Q 68 30, 87 24"
            stroke="url(#tealTailRight)"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
          />

          {/* Bottom-right wallet icon tail - from center to icon at 96%, 88% */}
          <motion.path
            d="M 50 60 Q 72 72, 94 88"
            stroke="url(#tealTailRight)"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
            transition={{ duration: 1.3, ease: "easeOut", delay: 0.6 }}
          />
        </svg>

        {/* Left side icons */}
        {/* Top-left: Coins icon */}
        <motion.div
          className="absolute top-[18%] left-[8%] z-2"
          initial={{ x: -150, opacity: 0, rotate: -25 }}
          animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-20 h-20 drop-shadow-2xl">
            <Image src="/icon3coins.png" alt="Coins" fill className="object-contain" />
          </div>
        </motion.div>

        {/* Bottom-left: Cash icon */}
        <motion.div
          className="absolute top-[85%] left-[10%] z-2"
          initial={{ x: -160, opacity: 0, rotate: -20 }}
          animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 2, ease: "easeOut", delay: 0.7 }}
        >
          <div className="relative w-18 h-18 drop-shadow-2xl">
            <Image src="/icon2money.png" alt="Cash" fill className="object-contain" />
          </div>
        </motion.div>

        {/* Right side icons */}
        {/* Top-right: Card icon */}
        <motion.div
          className="absolute top-[22%] right-[12%] z-2"
          initial={{ x: 150, opacity: 0, rotate: 25 }}
          animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
        >
          <div className="relative w-20 h-20 drop-shadow-2xl">
            <Image src="/icon4card.png" alt="Card" fill className="object-contain" />
          </div>
        </motion.div>

        {/* Bottom-right: Wallet icon */}
        <motion.div
          className="absolute top-[88%] right-[4%] z-2"
          initial={{ x: 140, opacity: 0, rotate: -18 }}
          animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 1.7, ease: "easeOut", delay: 0.6 }}
        >
          <div className="relative w-18 h-18 drop-shadow-xl">
            <Image src="/icon1wallet.png" alt="Wallet" fill className="object-contain" />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-5 py-2 rounded-full bg-[#20C997]/10 border border-[#20C997]/30 shadow-sm">
            <span className="text-[#20C997] font-bold text-sm uppercase tracking-widest">Our Impact</span>
          </div>

          <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2E3A39] mt-5 leading-tight">
            Trusted by <span className="text-[#20C997]">Millions</span>
          </h2>

          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            SwiftFin empowers Indians to take control of their financial future with ease.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto sm:auto-rows-[140px]">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white border border-[#20C997]/25 shadow-[0_4px_20px_rgba(32,201,151,0.12)] p-6 hover:shadow-[0_6px_24px_rgba(32,201,151,0.22)] transition duration-300"
          >
            <p className="text-[#2E3A39] text-sm font-medium">India's Fastest Growing Finance App</p>
            <div className="flex gap-3 mt-5">
              {[Zap, TrendingUp, Star, Users].map((Icon, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-xl bg-[#20C997]/10 border border-[#20C997]/25 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-[#20C997]" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-br from-[#20C997] to-[#198754] p-6 shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <motion.span className="font-sora text-5xl md:text-6xl font-bold text-white">
              {isInView && <CountUp end={25} duration={2} />}K
            </motion.span>
            <p className="text-white/95 text-sm mt-1">Weekly Downloads</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-white border border-[#20C997]/25 p-6 shadow-sm"
          >
            <span className="font-sora text-5xl md:text-6xl font-bold text-[#2E3A39]">
              {isInView && <CountUp end={50} duration={2} />}K
            </span>
            <p className="text-gray-600 text-sm mt-1">Active Users Now</p>
          </motion.div>

          {/* Card 4 – Large */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl bg-white border border-[#20C997]/25 p-6 shadow-md row-span-2"
          >
            <p className="text-[#2E3A39] text-sm font-medium">Total Users</p>

            <span className="font-sora text-6xl md:text-7xl font-bold text-[#2E3A39] block mb-4">
              {isInView && <CountUp end={1538} duration={2.5} separator="," />}
            </span>

            {/* Bar Chart */}
            <div className="flex items-end gap-1 h-20">
              {[40, 60, 35, 80, 55, 90, 65, 100, 75, 85].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#20C997]/70 to-[#198754]/60 rounded-sm"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${h}%` } : {}}
                />
              ))}
            </div>
          </motion.div>

          {/* Card 5 – Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-3xl bg-gradient-to-br from-[#20C997] to-[#198754] p-6 flex items-center justify-center shadow-lg"
          >
            <span className="font-sora text-4xl font-bold text-white">SWIFTFIN</span>
          </motion.div>

          {/* Card 6 – Transactions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-3xl bg-white border border-[#20C997]/25 p-6 shadow-md sm:col-span-2"
          >
            <p className="text-[#2E3A39] text-sm font-medium">Total Transactions</p>

            <div className="flex items-end justify-between mt-1">
              <span className="font-sora text-5xl md:text-6xl font-bold text-[#2E3A39]">
                {isInView && <CountUp end={200} duration={2} />}K
              </span>

              {/* Line graph */}
              <svg viewBox="0 0 100 40" className="w-32 h-12 ml-4" shapeRendering="geometricPrecision">
                <defs>
                  <linearGradient id="tealGraph" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#20C997" />
                    <stop offset="100%" stopColor="#198754" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,35 Q10,30 20,26 T40,20 T60,17 T80,12 T100,6"
                  fill="none"
                  stroke="url(#tealGraph)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Tagline Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="rounded-3xl bg-[#F8FFFC] border border-[#20C997]/20 p-6 sm:col-span-2 shadow-sm"
          >
            <p className="font-sora text-xl md:text-2xl font-semibold text-[#2E3A39]">
              Track your <span className="text-[#20C997]">expenses</span> with ease.
              <br />
              Manage your <span className="text-[#20C997]">finances smartly</span>.
            </p>
          </motion.div>

          {/* Cities */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-3xl bg-white border border-[#20C997]/25 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-[#20C997]" />
              <p className="text-[#2E3A39] text-sm font-medium">Cities Covered</p>
            </div>

            <span className="font-sora text-5xl font-bold text-[#2E3A39]">
              {isInView && <CountUp end={4000} duration={2} separator="," />}+
            </span>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="rounded-3xl bg-white border border-[#20C997]/25 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-[#20C997] fill-[#20C997]" />
              <p className="text-[#2E3A39] text-sm font-medium">App Rating</p>
            </div>

            <span className="font-sora text-5xl font-bold text-[#2E3A39]">
              {isInView && <CountUp end={4.8} duration={2} decimals={1} />}/5
            </span>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <p className="text-gray-600 text-lg">
            Join over <span className="text-[#20C997] font-semibold">500,000+</span> Indians managing money smarter.
          </p>
        </motion.div>
      </div>
    </section>
  )
}