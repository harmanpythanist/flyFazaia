"use client"

import React from 'react';
import Lenis from 'lenis';
import { useEffect } from 'react';

const SmoothScroll = ({children}) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,              // Reduced for smoother motion
            duration: 1.2,           // Animation duration
            orientation: 'vertical', // Updated API
            gestureOrientation: 'vertical', // Updated API
            smoothWheel: true,       // Updated from 'smooth'
            smoothTouch: false,      // Better mobile performance
            touchMultiplier: 2,
            infinite: false,
            autoResize: true,        // Auto handle resize
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
}

export default SmoothScroll;