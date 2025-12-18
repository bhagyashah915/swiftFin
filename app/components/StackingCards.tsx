"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Users, Briefcase, Laptop, Building2 } from "lucide-react"

function AnimatedDownloadButton({ text, className = "" }: { text: string; className?: string }) {
  return (
    <a href="/download" className={`inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:from-teal-600 hover:to-teal-700 transition-all ${className}`}>
      {text}
    </a>
  )
}

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
        top: `${index * 20}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "center",
        }}
        className="w-full max-w-5xl h-auto min-h-[500px] md:h-[600px] bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden relative font-['Montserrat']"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />

        <div className="relative p-6 md:p-12 h-full flex flex-col gap-6 md:gap-8 z-10">
          {/* Title and Badge - Mobile First */}
          <div className="flex flex-col items-start gap-3">
            <span className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${card.bgGradient} text-white text-xs font-bold tracking-wider uppercase shadow-sm`}>
              {card.title}
            </span>
            <h3 className="font-bold text-2xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
              {card.title}
            </h3>
          </div>

          {/* Content Layout - Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center flex-1">
            {/* Image Section */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div className="w-40 h-32 md:w-64 md:h-48 lg:w-80 lg:h-56 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 overflow-hidden border-4 border-white/50">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                {card.description}
              </p>

              {/* Benefits List */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {card.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/70 border border-white/80 shadow-sm hover:bg-white transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${card.bgGradient}`} />
                    <span className="text-gray-800 font-medium text-xs md:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <AnimatedDownloadButton text="Get Started" className="px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full md:w-auto" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function StackingCards() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="relative min-h-screen">
      {/* Dynamic Background with White Overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-white/80 z-20 transition-colors duration-500" />
        <AnimatePresence mode="popLayout">
          {cards.map((card, index) => (
            index === activeCard && (
              <motion.div
                key={card.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-1000 scale-105"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-8 md:pb-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 mb-4 md:mb-6">
            <span className="text-teal-600 font-bold text-xs md:text-sm uppercase tracking-widest font-['Montserrat']">Who is it for?</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-['Montserrat']">
            Built for <span className="text-teal-600">Everyone</span>
          </h2>
          <p className="text-black text-base md:text-lg lg:text-xl leading-relaxed font-['Montserrat']">
            Whether you&apos;re a student managing pocket money or a professional planning investments, SwiftFin adapts
            to your unique financial needs.
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

      {/* Bottom spacing */}
      <div className="h-screen" />
    </section>
  )
}