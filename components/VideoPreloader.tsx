"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const videos = [
    { id: 1, color: "#1a1a1a", text: "SHOWREEL 2025" },
    { id: 2, color: "#0a3f2f", text: "BRAND IDENTITY" },
    { id: 3, color: "#0f1610", text: "WEB EXPERIENCES" },
    { id: 4, color: "#1c1c1c", text: "DIGITAL CAMPAIGNS" },
    { id: 5, color: "#2a2a2a", text: "MOTION DESIGN" },
    { id: 6, color: "#111111", text: "3D VISUALIZATION" },
    { id: 7, color: "#0d0d0d", text: "UI/UX DESIGN" },
    { id: 8, color: "#000000", text: "GRAPHISUM" } // Final card
];

export default function VideoPreloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(-1); // Start at -1 to represent "Intro State"
    const [isIntroDone, setIsIntroDone] = useState(false);

    useEffect(() => {
        // Step 1: Hold the vertical stack for a moment
        const introTimer = setTimeout(() => {
            setIsIntroDone(true);
            setIndex(0); // Start the removal sequence
        }, 1200); // Reduced to 1.2s for snappiness

        return () => clearTimeout(introTimer);
    }, []);

    useEffect(() => {
        if (!isIntroDone) return;

        if (index < videos.length) {
            // Sequence Logic: Constant deliberate pace
            const duration = 1200;

            const timer = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, duration);
            return () => clearTimeout(timer);
        } else {
            // Finished
            const finishTimer = setTimeout(() => {
                onComplete();
            }, 1200); // Wait for Fly Away (1.2s)
            return () => clearTimeout(finishTimer);
        }
    }, [index, isIntroDone, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden perspective-[1000px]"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <AnimatePresence mode="popLayout">
                {videos.map((item, i) => {
                    // If we passed this index, it's gone.
                    if (index > -1 && i < index) return null;

                    const isLast = i === videos.length - 1;
                    const isActive = i === index;

                    // Intro State Calculation: Vertical Spread
                    // Spread centered: (i - (total-1)/2) * offset
                    const centerOffset = (videos.length - 1) / 2;
                    // Adjusted spread to fit 10 items on screen: ~1000px total height
                    const introY = (i - centerOffset) * 140;
                    const introScale = 0.6; // Smaller scale to fit stack
                    const introZ = 0;
                    const introRotateX = (i - centerOffset) * -10; // Subtle vertical fan angle

                    // Active Sequence State (Tunnel)
                    // The "future" cards bunch up behind the active one
                    const tunnelY = (i - index) * 30;
                    const tunnelZ = -(i - index) * 60; // Dense tunnel to keep all visible in perspective
                    const tunnelScale = 1 - (i - index) * 0.04; // Slower decay: cards stay larger

                    return (
                        <motion.div
                            key={item.id}

                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: 0.5
                            }}
                            animate={!isIntroDone ? {
                                // INTRO: Vertical Fan
                                opacity: 1,
                                x: 0,
                                y: introY,
                                z: introZ,
                                rotateX: introRotateX,
                                rotateY: 0,
                                scale: introScale,
                                filter: "blur(0px)"
                            } : {
                                // SEQUENCE: Tunnel / Active
                                opacity: isActive ? 1 : Math.max(0.2, 1 - (i - index) * 0.1), // Min opacity 0.2
                                x: 0,
                                y: isActive ? 0 : tunnelY,
                                z: isActive ? 0 : tunnelZ,
                                rotateX: isActive ? 0 : (i - index) * 2,
                                rotateY: 0,
                                scale: isActive ? 1.1 : tunnelScale,
                                filter: isActive ? "blur(0px)" : `blur(${(i - index) * 1}px)` // Less blur
                            }}
                            // EXITS
                            exit={{
                                // Fly Away Sequence (Hyper-Zoom for ALL cards)
                                scale: [1, 3],
                                opacity: [1, 0],
                                z: [0, 500],
                                filter: ["blur(0px)", "blur(20px)"],
                                transition: { duration: 1.2, ease: "easeInOut" }
                            }}
                            transition={{
                                duration: isIntroDone ? 0.5 : 1.2, // Snap to center
                                ease: [0.76, 0, 0.24, 1]
                            }}
                            className="absolute w-[60vw] md:w-[400px] aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-black"
                            style={{
                                zIndex: videos.length - i,
                                transformStyle: "preserve-3d",
                                backgroundColor: item.color
                            }}
                        >
                            {/* Video Placeholder Content */}
                            <motion.h1
                                layout
                                className="text-2xl md:text-3xl font-bold text-white tracking-tighter uppercase mix-blend-overlay relative z-10"
                            >
                                {item.text}
                            </motion.h1>

                            {/* Glossy Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 z-20 pointer-events-none mix-blend-overlay"></div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </motion.div>
    );
}
