import Hero from "./components/hero";
import About from "./components/about";
import Metrics from "./components/metrics";
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";
import UserTypes from "./components/userTypes";
import Security from "./components/security";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Metrics />
      <Features />
      <HowItWorks />
      <UserTypes />
      <Security />
      <Pricing />
      <FAQ />
    </main>
  );
}
