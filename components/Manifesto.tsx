"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <section ref={containerRef} className="py-32 overflow-hidden bg-background">
            <div className="flex flex-col gap-8 opacity-80">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap">
                    <h2 className="text-[10vw] md:text-[8vw] font-bold leading-none font-[family-name:var(--font-syne)] text-[#F0F8FF] opacity-20">
                        WE ARE THE ARCHITECTS OF THE NEW DIGITAL AGE —
                    </h2>
                </motion.div>

                <motion.div style={{ x: x2 }} className="whitespace-nowrap">
                    <h2 className="text-[10vw] md:text-[8vw] font-bold leading-none font-[family-name:var(--font-syne)] text-[#F0F8FF]">
                        — TURNING COMPLEXITY INTO CLARITY AND NOISE INTO SIGNAL.
                    </h2>
                </motion.div>

                <div className="container mx-auto px-6 mt-20 max-w-4xl text-center">
                    <p className="text-xl md:text-3xl leading-relaxed text-[#F0F8FF]">
                        We believe that design is not just about how things look, but how they work.
                        At Graphisum, we bridge the gap between heavy engineering and pure aesthetics.
                        Our mission is to build digital experiences that are solid, scalable, and undeniably beautiful.
                    </p>
                </div>
            </div>
        </section>
    );
}
