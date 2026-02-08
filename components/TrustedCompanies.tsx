"use client";

import { motion } from "framer-motion";

const companies = [
    "NVIDIA", "Spotify", "Airbnb", "Linear", "Vercel", "Stripe", "Ray-Ban", "Nike"
];

export default function TrustedCompanies() {
    return (
        <section className="py-12 border-y border-white/5 bg-background overflow-hidden relative z-20">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm uppercase tracking-[0.2em] opacity-40">Trusted by industry leaders</p>
            </div>

            <div className="flex mask-gradient-x">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex gap-20 items-center px-10"
                >
                    {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-3xl font-bold uppercase tracking-tighter opacity-30 hover:opacity-80 transition-opacity cursor-default whitespace-nowrap"
                        >
                            {company}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
