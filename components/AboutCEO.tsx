"use client";

import { motion } from "framer-motion";

export default function AboutCEO() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#0a3f2f] to-[#121212] relative flex-shrink-0"
                    >
                        {/* Placeholder for CEO Image */}
                        <div className="absolute inset-2 rounded-full bg-black/20 border border-white/10 overflow-hidden">
                            {/* Image would go here */}
                        </div>
                    </motion.div>

                    <div className="max-w-2xl text-center md:text-left">
                        <span className="text-sm uppercase tracking-widest opacity-40 mb-4 block">The Visionary</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                            &quot;We don&apos;t just build websites. We build digital monuments that stand the test of time.&quot;
                        </h2>

                        <div className="flex flex-col gap-2">
                            <strong className="text-xl uppercase tracking-wider">Alex Vesper</strong>
                            <span className="opacity-50 font-mono">Founder & CEO, Graphisum</span>
                        </div>

                        {/* Signature effect */}
                        <div className="mt-8 opacity-30">
                            <svg width="150" height="40" viewBox="0 0 150 40">
                                <path d="M10,30 Q50,5 90,30 T140,20" stroke="currentColor" fill="none" strokeWidth="2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
