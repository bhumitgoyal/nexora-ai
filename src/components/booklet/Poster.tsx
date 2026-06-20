"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PosterProps = {
  children: ReactNode;
  page: string;
  section: string;
  className?: string;
  showWatermark?: boolean;
};

export function Poster({
  children,
  page,
  section,
  className,
  showWatermark = true,
}: PosterProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn("poster", className)}
    >
      {children}

      {showWatermark ? (
        <>
          <div className="poster-pagenum">{page}</div>
          <div className="poster-watermark">
            Nexora AI · Services booklet · {section}
          </div>
        </>
      ) : null}
    </motion.section>
  );
}
