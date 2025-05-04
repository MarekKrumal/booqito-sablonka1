"use client";

import { useState, useEffect } from "react";
import { rooms } from "@/data/RoomData";
import Room from "./Room";

export default function Rooms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % rooms.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + rooms.length) % rooms.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-rotate slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [isTransitioning]);

  return (
    <section id="rooms" className="py-20 container mx-auto px-6 md:px-12">
      <div className="relative">
        <div className="flex items-center justify-center gap-4 transition-all duration-500">
          {/* Previous room */}
          <div className="hidden md:block w-1/4 transition-all duration-500">
            <Room
              room={rooms[(currentIndex - 1 + rooms.length) % rooms.length]}
            />
          </div>

          {/* Current room */}
          <div className="w-full md:w-1/2 transition-all duration-500">
            <Room room={rooms[currentIndex]} isActive={true} />
          </div>

          {/* Next room */}
          <div className="hidden md:block w-1/4 transition-all duration-500">
            <Room room={rooms[(currentIndex + 1) % rooms.length]} />
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
