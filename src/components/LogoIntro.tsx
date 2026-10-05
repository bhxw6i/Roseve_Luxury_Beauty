import { useEffect } from "react";
import { motion } from "framer-motion";

interface LogoIntroProps {
  onComplete: () => void;
}

const LogoIntro = ({ onComplete }: LogoIntroProps) => {
  useEffect(() => {
    // Transition to main page after 2.2s
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background cursor-pointer select-none overflow-hidden"
      onClick={onComplete}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Radiant ambient glow */}
      <motion.div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at center, hsl(43, 60%, 55% / 0.2) 0%, transparent 60%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 0.3 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />

      {/* Main Luxury Brand Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Crest icon or subtle ring */}
        <motion.div
          className="w-16 h-16 mb-6 rounded-full border border-primary/30 flex items-center justify-center relative"
          initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="w-10 h-10 rounded-full border border-primary/60"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1.1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute font-display text-primary text-xl font-light italic">
            R
          </span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="font-display text-5xl md:text-7xl tracking-[0.25em] text-gold-gradient font-light uppercase my-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Roséve
        </motion.h1>

        {/* Golden Line Separator */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent my-4"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "140px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground text-xs md:text-sm tracking-[0.45em] uppercase font-light"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Luxury Skincare
        </motion.p>
      </div>

      {/* Subtle Bottom Skip Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">
          Tap anywhere to enter
        </span>
      </motion.div>
    </motion.div>
  );
};

export default LogoIntro;
