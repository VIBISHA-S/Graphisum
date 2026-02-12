"use client";

import { motion } from "framer-motion";
import ServiceList from "@/components/ServiceList";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-background font-[family-name:var(--font-manrope)]">

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-[#F0F8FF] mb-8 font-[family-name:var(--font-syne)]">
                        WHAT WE <br />
                        <span className="text-[#0a3f2f]">CRAFT.</span>
                    </h1>
                    <p className="text-xl md:text-3xl max-w-3xl opacity-80 leading-relaxed text-[#F0F8FF]">
                        We build digital products that define categories. From identity to interface, our approach is holistic, strategic, and obsessively detailed.
                    </p>
                </motion.div>
            </section>

            <ServiceList />
            <ProcessTimeline />
            <FAQ />

            {/* Footer CTA */}
            <section className="py-24 text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-[#F0F8FF]">
                    READY TO START?
                </h2>
                <a href="/contact" className="inline-block px-12 py-5 bg-[#F0F8FF] text-[#052e16] rounded-full font-bold text-xl uppercase tracking-wider hover:scale-105 transition-transform">
                    Let&apos;s Talk
                </a>
            </section>

        </div>
    );
}
