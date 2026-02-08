"use client";

import { motion } from "framer-motion";

export default function BookingSection() {
    return (
        <section className="py-32 bg-[#080c0a] border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
                >
                    READY TO SCALE?
                </motion.h2>
                <p className="opacity-60 text-xl mb-16 max-w-xl mx-auto">
                    Book a free 15-minute discovery call with our dedicated strategy team.
                </p>

                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm min-h-[600px] flex items-center justify-center">
                    {/* Placeholder for Calendly/Cal.com Embed */}
                    <div className="text-center opacity-40">
                        <div className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="uppercase tracking-widest text-sm">Loading Calendar...</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
