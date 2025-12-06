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
            animate={{
                boxShadow: [
                    "0 0 0 0 rgba(13, 148, 136, 0.4)",
                    "0 0 0 10px rgba(13, 148, 136, 0)",
                ],
            }}
            transition={{
                boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                },
                default: { duration: 0.2 },
            }}
            className={`px-8 py-4 bg-primary-teal text-white font-bold rounded-xl shadow-lg hover:bg-teal-600 transition-colors ${className}`}
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
