"use client";

import Hero from "./components/hero";
import About from "./components/about";
import Metrics from "./components/metrics";
import Features from "./components/features";
import HowItWorks from "./components/howItWorks";
import UserTypes from "./components/userTypes";
import FAQ from "./components/faq";

// Firebase imports
import { db } from "@/app/lib/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import HeroNew from "./components/hero-new";

export default function Home() {

  // Test Firebase connection
  async function testFirebase() {
    try {
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
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeroNew/>
      <About />
      <Metrics />
      <Features />
      <HowItWorks />
      <UserTypes />
      <FAQ />

      {/* Firebase connection test button */}
      <div className="flex justify-center py-10">
        <button
          onClick={testFirebase}
          className="px-6 py-3 bg-transparent border border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300"
        >
          Test Firebase Connection
        </button>
      </div>
    </main>
  );
}
