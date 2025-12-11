"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedDownloadButtonProps {
    className?: string;
    text?: string;
    href?: string;
    onClick?: () => void;
}

export default function AnimatedDownloadButton({
    className = "",
    text = "Download Now",
    href = "/download",
    onClick,
}: AnimatedDownloadButtonProps) {
    const ButtonContent = (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 bg-transparent border border-[#20C997] text-[#20C997] font-bold rounded-full hover:bg-[#20C997] hover:text-white transition-all duration-300 ${className}`}
            onClick={onClick}
        >
            {text}
        </motion.button>
    );

    if (href) {
        return <Link href={href}>{ButtonContent}</Link>;
    }

    return ButtonContent;
}
