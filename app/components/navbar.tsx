import Link from "next/link";
import AnimatedDownloadButton from "./AnimatedDownloadButton";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
            <Link href="/" className="flex items-center gap-2">
                {/* Logo placeholder - replacing text with logo later if needed */}
                <div className="w-8 h-8 bg-primary-teal rounded-lg flex items-center justify-center text-white font-bold">
                    S
                </div>
                <h1 className="font-bold text-2xl text-neutral-slate">SwiftFin</h1>
            </Link>

            <div className="hidden md:flex gap-8 text-neutral-slate font-medium">
                <Link href="/#features" className="hover:text-primary-teal transition-colors">Features</Link>
                <Link href="/#how-it-works" className="hover:text-primary-teal transition-colors">How it Works</Link>
                <Link href="/#pricing" className="hover:text-primary-teal transition-colors">Pricing</Link>
                <Link href="/about" className="hover:text-primary-teal transition-colors">About Us</Link>
            </div>

            <div className="flex gap-4">
                <AnimatedDownloadButton className="px-6 py-3 text-base shadow-lg" text="Download" />
            </div>
        </nav>
    );
}
