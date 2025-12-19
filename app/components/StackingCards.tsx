"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Users, Briefcase, Laptop, Building2 } from "lucide-react"

interface Card {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  benefits: string[]
  bgGradient: string
  image: string
}

const cards: Card[] = [
  {
    id: 1,
    title: "Students",
    description: "Master your finances while you master your subjects. Track every rupee of your pocket money, hostel expenses, and educational costs. Set savings goals for that trip with friends or the new gadget you've been eyeing. Learn financial discipline that'll serve you for life.",
    icon: <Users className="w-full h-full" />,
    benefits: ["Smart budgeting", "Pocket money tracker", "Savings goals", "Expense categories", "Daily spending limits"],
    bgGradient: "from-teal-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Working Professionals",
    description: "Take control of your salary, investments, and future. Track monthly income, manage EMIs, and monitor your investment portfolio all in one place. Get insights on tax savings, plan for major purchases, and build wealth systematically with automated tracking and smart recommendations.",
    icon: <Briefcase className="w-full h-full" />,
    benefits: ["Salary planning", "Investment tracking", "Tax insights", "EMI calculator", "Retirement planning"],
    bgGradient: "from-teal-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2938&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Freelancers",
    description: "Navigate the unpredictable income landscape with confidence. Track income from multiple clients, separate business and personal expenses, and manage irregular cash flow. Monitor pending invoices, set aside money for taxes, and ensure you're always prepared for lean months.",
    icon: <Laptop className="w-full h-full" />,
    benefits: ["Invoice tracking", "Expense separation", "Cash flow view", "Client payments", "Tax provisioning"],
    bgGradient: "from-teal-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Small Business",
    description: "Comprehensive financial management for your growing business. Track multiple revenue streams, manage employee expenses, handle GST compliance, and monitor business loans. Get real-time insights into profit margins, outstanding payments, and cash flow to make informed decisions that drive growth.",
    icon: <Building2 className="w-full h-full" />,
    benefits: ["GST reports", "EMI management", "Multi-account", "Profit tracking", "Vendor payments"],
    bgGradient: "from-teal-400 to-teal-600",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2940&auto=format&fit=crop"
  },
]

function Card({
  card,
  index,
  activeCard,
  onActive
}: {
  card: Card;
  index: number;
  activeCard: number;
  onActive: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest > 0.3) {
        onActive(index)
      }
      if (latest < 0.3 && activeCard === index && index > 0) {
        onActive(index - 1)
      }
    })
  }, [scrollYProgress, index, onActive, activeCard])

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky px-4 md:px-6"
      style={{
        zIndex: index,
        top: `${index * 12}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "bottom center",
        }}
        className="w-full max-w-6xl h-auto min-h-[420px] md:min-h-[520px] md:h-[640px] bg-white/95 backdrop-blur-2xl rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] overflow-hidden relative font-['Montserrat'] transition-all duration-300 ease-out"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-teal-50/30 pointer-events-none" />

        <div className="relative p-6 md:p-16 h-full flex flex-col gap-6 md:gap-10 z-10">
          {/* Title */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-bold text-2xl md:text-5xl lg:text-6xl text-slate-900 leading-none tracking-tight">
              {card.title}
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mt-2" />
          </div>

          {/* Content Layout */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start flex-1">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-8">
              <p className="text-base md:text-xl text-slate-600 leading-relaxed font-light">
                {card.description}
              </p>

              {/* Benefits List - Minimalist */}
              <div className="flex flex-wrap gap-2.5">
                {card.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50 transition-all duration-300"
                  >
                    <span className="text-slate-700 font-medium text-xs md:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section - Minimalist */}
            <div className="flex-shrink-0 w-full md:w-[45%] flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackingCards() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-slate-50/30 to-white">
      {/* Subtle Dynamic Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 z-20 transition-colors duration-700" />
        <AnimatePresence mode="wait">
          {cards.map((card, index) => (
            index === activeCard && (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover blur-sm"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-32 pb-12 md:pb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight font-['Montserrat']">
            Built for <span className="text-teal-600">Everyone</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl lg:text-2xl leading-relaxed font-light font-['Montserrat'] max-w-3xl mx-auto">
            Whether you&apos;re a student managing pocket money or a professional planning investments, SwiftFin adapts to your unique financial needs.
          </p>
        </div>
      </div>

      {/* Stacking Cards */}
      <div className="relative z-10">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            activeCard={activeCard}
            onActive={setActiveCard}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 font-['Montserrat']">
            Ready to take control?
          </h3>
          <a
            href="/download"
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-32" />
    </section>
  )
}