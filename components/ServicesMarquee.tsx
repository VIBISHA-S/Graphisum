"use client";

import { motion } from "framer-motion";

const services = [
    "Branding",
    "UI/UX Design",
    "Web Development",
    "Motion Graphics",
    "Creative Strategy",
    "SEO Optimization",
    "Art Direction"
];

export default function ServicesMarquee() {
    return (
        <section className="py-24 overflow-hidden bg-[#0a3f2f] text-foreground">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-16 items-center"
                >
                    {[...services, ...services, ...services].map((service, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter opacity-80 hover:opacity-100 transition-opacity cursor-default stroke-text">
                                {service}
                            </span>
                            <div className="w-4 h-4 rounded-full bg-foreground opacity-30" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Reverse Scroll */}
            <div className="flex whitespace-nowrap mt-4">
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                    className="flex gap-16 items-center"
                >
                    {[...services, ...services, ...services].reverse().map((service, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-6xl md:text-8xl font-bold uppercase tracking-tighter opacity-40 hover:opacity-70 transition-opacity cursor-default">
                                {service}
                            </span>
                            <div className="w-4 h-4 rounded-full bg-foreground opacity-30" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
