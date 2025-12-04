import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FAQ from "../components/faq";

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="bg-neutral-slate text-white py-20">
                <div className="container mx-auto px-6">
                    <Link href="/" className="inline-flex items-center text-gray-300 hover:text-primary-teal transition-colors mb-8">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300">Find answers to common questions about SwiftFin</p>
                </div>
            </div>

            <FAQ />
        </div>
    );
}
