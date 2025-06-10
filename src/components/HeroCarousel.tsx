import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

interface HeroCarouselProps {
  items?: CarouselItem[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

const HeroCarousel = ({
  items = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80",
      title: "Summer Sale",
      description:
        "Up to 50% off on all summer essentials. Limited time offer!",
      ctaText: "Shop Now",
      ctaLink: "/summer-sale",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1200&q=80",
      title: "New Arrivals",
      description: "Check out our latest collection of premium products",
      ctaText: "Explore",
      ctaLink: "/new-arrivals",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&q=80",
      title: "Exclusive Deals",
      description: "Members get special access to exclusive promotions",
      ctaText: "Join Now",
      ctaLink: "/membership",
    },
  ],
  autoRotate = true,
  rotationInterval = 5000,
}: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: number | undefined;

    if (autoRotate) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, rotationInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRotate, items.length, rotationInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-background">
      {/* Carousel Items */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-500",
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                {item.description}
              </p>
              <Button size="lg" className="font-semibold">
                {item.ctaText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
