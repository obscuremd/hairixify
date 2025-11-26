"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const media = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60",

    "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=600&auto=format&fit=crop&q=60",

    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3ltfGVufDB8fDB8fHww",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [media.length]);

  return (
    <main className="relative w-full h-[90vh] md:h-[80vh]">
      <AnimatePresence>
        <motion.div
          key={index} // important
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={media[index]}
            alt={`hero image ${index}`}
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-start justify-end p-4 rounded-3xl text-tertiary-c bg-linear-to-b from-black/50 to-black/90 ">
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl md:text-4xl font-bold ">
            <span className="text-primary-c">BC </span>
            Gym Center — Your Fitness Starts Here
          </h1>
          <p className="text-lg font-light">
            Build strength, gain confidence and train with professional fitness
            coaches in a motivating community.
          </p>
          <div className="flex gap-2">
            <Button className="bg-secondary-c text-primary-c">
              Contact Us
            </Button>
            <Button className="bg-primary-c text-secondary-c font-bold">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
