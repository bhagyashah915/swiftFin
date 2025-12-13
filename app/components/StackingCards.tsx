"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Users, Briefcase, Laptop, Building2 } from "lucide-react"
import AnimatedDownloadButton from "./AnimatedDownloadButton"

interface Card {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
  bgGradient: string
}

const cards: Card[] = [
  {
    id: 1,
    title: "Students",
    description: "Track expenses, manage pocket money, and build healthy financial habits early.",
    icon: <Users className="w-full h-full" />,
    benefits: ["Smart budgeting", "Pocket money tracker", "Savings goals"],
    bgGradient: "from-teal-400 to-teal-600",
  },
  {
    id: 2,
    title: "Working Professionals",
    description: "Manage salary, track investments, and plan for future financial goals.",
    icon: <Briefcase className="w-full h-full" />,
    benefits: ["Salary planning", "Investment tracking", "Tax insights"],
    bgGradient: "from-teal-400 to-teal-600",
  },
  {
    id: 3,
    title: "Freelancers",
    description: "Monitor project income, track business expenses, and manage cash flow.",
    icon: <Laptop className="w-full h-full" />,
    benefits: ["Invoice tracking", "Expense separation", "Cash flow view"],
    bgGradient: "from-teal-400 to-teal-600",
  },
  {
    id: 4,
    title: "Small Business",
    description: "Manage business finances, track EMIs, and monitor portfolios.",
    icon: <Building2 className="w-full h-full" />,
    benefits: ["GST reports", "EMI management", "Multi-account"],
    bgGradient: "from-teal-400 to-teal-600",
  },
]

function Card({ card, index }: { card: Card; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky px-6"
      style={{
        zIndex: index,
        top: `${index * 30}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "center",
        }}
        className="w-full max-w-5xl h-[500px] md:h-[550px] bg-gray-100 rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="relative p-8 md:p-10 h-full">
          <div className="flex flex-col md:flex-row gap-8 items-center h-full">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div
                className={`w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center shadow-lg`}
              >
                <div className="text-white w-32 h-32 md:w-36 md:h-36">{card.icon}</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col h-full justify-center">
              <h3 className="font-sora text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="font-inter text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                {card.description}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 gap-3 mb-6">
                {card.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm"
                  >
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${card.bgGradient} flex items-center justify-center shrink-0`}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <AnimatedDownloadButton text="Download Now" className="px-8 py-4 text-lg shadow-lg" />
              </div>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-400 to-teal-600 opacity-10 rounded-full blur-3xl -translate-y-24 translate-x-24" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-400 to-teal-600 opacity-10 rounded-full blur-3xl translate-y-20 -translate-x-20" />
        </div>
      </motion.div>
    </div>
  )
}

export default function StackingCards() {
  return (
    <section className="relative bg-white">
      {/* Header */}
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-6">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Who is it for?</span>
          </div>
          <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Built for <span className="text-teal-600">Everyone</span>
          </h2>
          <p className="font-inter text-gray-600 text-lg md:text-xl leading-relaxed">
            Whether you&apos;re a student managing pocket money or a professional planning investments, SwiftFin adapts
            to your unique financial needs.
          </p>
        </div>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} index={index} />
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-screen" />
    </section>
  )
}
