"use client";

import Hero from "./components/hero";
import BlogPreview from "./components/BlogPreview";
import About from "./components/about";
import Metrics from "./components/metrics";
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";

import FAQ from "./components/faq";

// Firebase imports
import { db } from "@/app/lib/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

import StackingCards from "./components/StackingCards";

export default function Home() {

  // Test Firebase connection
  async function testFirebase() {
    try {
      if (!db) {
        console.error("Firebase not initialized");
        return;
      }
      await addDoc(collection(db, "test"), {
        message: "Firebase is connected!",
        timestamp: new Date(),
      });
      alert("Test successful — check your Firestore!");
    } catch (err) {
      console.error(err);
      alert("Firebase NOT connected — check console.");
    }
  }

  return (
    <main className="min-h-screen bg-white space-y-24 lg:space-y-32">
      <Hero />
      <About />
      <Metrics />
      <Features />
      <StackingCards />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
