"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Do you work with startups?",
        answer: "Absolutely. We love partnering with ambitious founders to build brands from the ground up."
    },
    {
        question: " What is your typical timeline?",
        answer: "It varies by project scope, but a typical branding and web project takes 4-8 weeks."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes, we offer retainer packages for ongoing design, development, and strategic support."
    },
    {
        question: "what is your pricing model?",
        answer: "We offer both project-based pricing and monthly retainers (see our Engagement Models)."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tighter text-[#F0F8FF]">
                    COMMON <span className="opacity-50">QUESTIONS</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl font-bold text-[#F0F8FF]">{faq.question}</span>
                                <span className="text-2xl text-[#F0F8FF] opacity-50">
                                    {openIndex === i ? "−" : "+"}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-lg opacity-70 border-t border-white/5 text-[#F0F8FF]">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
