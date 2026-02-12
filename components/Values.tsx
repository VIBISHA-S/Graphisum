"use client";

import { motion } from "framer-motion";

const values = [
    { title: "CURIOSITY", description: "We ask why, how, and what if. Always exploring." },
    { title: "PRECISION", description: "We measure twice, cut once. Details matter." },
    { title: "EMPATHY", description: "We design for humans, not users. Feeling first." },
    { title: "AUDACITY", description: "We take risks. Safe is boring." },
];

export default function Values() {
    return (
        <section className="py-24 bg-background border-y border-white/5 relative bg-[url('/noise.png')]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-syne)] text-[#F0F8FF] tracking-wider">
                                {value.title}
                            </h3>
                            <p className="text-lg opacity-60 leading-relaxed text-[#F0F8FF]">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
