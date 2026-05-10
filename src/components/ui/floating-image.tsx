"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FloatingImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}
