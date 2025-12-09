import Hero from "./components/hero";
import About from "./components/about";
import Metrics from "./components/metrics";
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";
import UserTypes from "./components/userTypes";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <About />
      <Metrics />
      <Features />
      <HowItWorks />
      <UserTypes />
      <FAQ />
    </main>
  );
}

