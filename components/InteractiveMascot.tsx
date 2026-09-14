"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/basePath";

export default function InteractiveMascot() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeAngle, setActiveAngle] = useState<
    "far_left" | "left" | "center" | "right" | "far_right"
  >("center");

  // Image Asset Paths with BasePath Prefix
  const imgFarLeft = getAssetPath("/images/char_far_left.webp");
  const imgLeft = getAssetPath("/images/char_left.webp");
  const imgCenter = getAssetPath("/images/char_center.webp");
  const imgRight = getAssetPath("/images/char_right.webp");
  const imgFarRight = getAssetPath("/images/char_far_right.webp");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      // Normalize mouse coordinates relative to window half-width (-1 to 1)
      const normX = Math.max(
        -1,
        Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2))
      );

      // 5-Zone Mouse Angle Thresholds:
      // Mouse on far right -> look far_right
      // Mouse on right -> look right
      // Mouse on far left -> look far_left
      // Mouse on left -> look left
      // Center zone -> look center
      let newAngle: "far_left" | "left" | "center" | "right" | "far_right" = "center";

      if (normX > 0.35) {
        newAngle = "far_right";
      } else if (normX > 0.08) {
        newAngle = "right";
      } else if (normX < -0.35) {
        newAngle = "far_left";
      } else if (normX < -0.08) {
        newAngle = "left";
      } else {
        newAngle = "center";
      }

      setActiveAngle((prev) => (prev !== newAngle ? newAngle : prev));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hidden lg:flex relative w-full max-w-md sm:max-w-xl items-end justify-center select-none self-end pb-0 mb-0"
    >
      {/* Fixed-position Character Container without physical movement or wobble */}
      <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] flex items-end justify-center pb-0 mb-0">
        <div className="relative w-full h-full flex items-end justify-center pb-0 mb-0">
          {/* Far Left Angle Photo */}
          <Image
            src={imgFarLeft}
            alt="Mainframe Retro Character - Far Left"
            width={600}
            height={750}
            priority
            unoptimized
            className={`absolute inset-0 w-full h-full object-bottom object-contain transition-opacity duration-200 ${
              activeAngle === "far_left" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />

          {/* Left Angle Photo */}
          <Image
            src={imgLeft}
            alt="Mainframe Retro Character - Left"
            width={600}
            height={750}
            priority
            unoptimized
            className={`absolute inset-0 w-full h-full object-bottom object-contain transition-opacity duration-200 ${
              activeAngle === "left" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />

          {/* Center Angle Photo */}
          <Image
            src={imgCenter}
            alt="Mainframe Retro Character - Center"
            width={600}
            height={750}
            priority
            unoptimized
            className={`absolute inset-0 w-full h-full object-bottom object-contain transition-opacity duration-200 ${
              activeAngle === "center" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />

          {/* Right Angle Photo */}
          <Image
            src={imgRight}
            alt="Mainframe Retro Character - Right"
            width={600}
            height={750}
            priority
            unoptimized
            className={`absolute inset-0 w-full h-full object-bottom object-contain transition-opacity duration-200 ${
              activeAngle === "right" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />

          {/* Far Right Angle Photo */}
          <Image
            src={imgFarRight}
            alt="Mainframe Retro Character - Far Right"
            width={600}
            height={750}
            priority
            unoptimized
            className={`absolute inset-0 w-full h-full object-bottom object-contain transition-opacity duration-200 ${
              activeAngle === "far_right" ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}








