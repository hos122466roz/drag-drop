"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import useCoin from "@/app/hooks/useCoin";
type Coin = {
  id: number;
  delay: number;
  destination: { x: number; y: number };
};

const CoinThrow: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const useCoins = useCoin();
  useEffect(() => {
    if (useCoins.isAction) {
      throwCoins();
      useCoins.onClose();
    }
  }, [useCoins.isAction]);
  const throwCoins = () => {
    if (!containerRef.current) return;

    // گرفتن سبد لحظه‌ای (برای سازگاری با ریسپانسیو و موبایل)
    const basketEl = document.getElementById("header-basket");
    if (!basketEl) return;

    const basketRect = basketEl.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const basketX = basketRect.left + basketRect.width / 2;
    const basketY = basketRect.top + basketRect.height / 2;

    const startX = containerRect.left + containerRect.width / 2;
    const startY = containerRect.bottom - 40;

    const destX = basketX - startX;
    const destY = basketY - startY;

    const newCoins = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      delay: i * 0.15,
      destination: { x: destX, y: destY },
    }));

    setCoins(newCoins);

    newCoins.forEach((coin) => {
      setTimeout(() => {
        setCoins((prev) => prev.filter((c) => c.id !== coin.id));
        const audio = new Audio("../audio/coin-drop-82392.mp3");
        audio.play();
      }, 1000 + coin.delay * 1000);
    });
  };

  return (
    <div ref={containerRef} className=" relative inset-0 pointer-events-none z-50">
     

      {coins.map((coin) => (
        <motion.div
          key={coin.id}
          initial={{
            position: "absolute",
            left: "50%",
            bottom: 40,
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: coin.destination.x,
            y: coin.destination.y,
            scale: [1, 1.2, 0.5],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1,
            delay: coin.delay,
            ease: "easeInOut",
          }}
          className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-2xl shadow"
        >
          🪙
        </motion.div>
      ))}
    </div>
  );
};

export default CoinThrow;
