import { delay } from 'framer-motion';
import { del } from 'framer-motion/client';
import React from 'react';

const UseVariants = () => {
  // Container for whole block
  let grandParentVar = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.03,   // slower stagger
      delayChildren: 0.2,      // slight delay before starting
    },
  },
};


  // For full lines (headers, phrases)
 let textVar = {
  initial: { opacity: 0, y: 10 },  // add a tiny upward motion for smoothness
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.04,  // slower fade
      ease:"easeOut", // smoother cubic easing
    },
  },
};
let textVar2 = {
    initial: { opacity: 0, y: 4 }, 
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,delay:.2,
        ease: "easeOut",
      },
    },
  };
  // Parent controlling per-character typing
  let parentVar = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.04, // slightly slower for smoother rhythm
        // delayChildren: 0.2,
      },
    },
  };

  let parentVar2 = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: .3,
        delayChildren: 0.15,
      },
    },
  };

  // Each character (typewriter effect)
  let childVar = {
    initial: { opacity: 0, y: 1 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // slightly longer than before
        ease: "linear", // steady type feel
      },
    },
  };

  let childVar2 = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Cursor blink (pseudo typewriter caret)
  let cursorVar = {
    animate: {
      opacity: [1, 0, 1], // blink
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return { parentVar, parentVar2, childVar, grandParentVar, childVar2, textVar, cursorVar,textVar2 };
};

export default UseVariants;
