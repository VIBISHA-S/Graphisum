"use client";

import { motion } from "framer-motion";
import Manifesto from "@/components/Manifesto";
import TeamGrid from "@/components/TeamGrid";
import Values from "@/components/Values";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background font-[family-name:var(--font-manrope)]">

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="block text-sm font-bold uppercase tracking-[0.5em] mb-6 opacity-50 text-[#F0F8FF]">
                        Who We Are
                    </span>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-[#F0F8FF] mb-8 font-[family-name:var(--font-syne)] mix-blend-overlay">
                        THE <br />
                        VISIONARIES.
                    </h1>
                </motion.div>
            </section>

            <Manifesto />
            <Values />
            <TeamGrid />

            {/* CTA */}
            <section className="py-32 text-center bg-white/5 mt-20">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#F0F8FF]">
                    JOIN THE MOVEMENT
                </h2>
                <a href="/contact" className="inline-block px-12 py-5 border border-white/20 text-[#F0F8FF] rounded-full font-bold text-xl uppercase tracking-wider hover:bg-[#F0F8FF] hover:text-black transition-all">
                    Work With Us
                </a>
            </section>

        </div>
    );
}
