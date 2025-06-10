import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, X, ChevronRight } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer = ({
  targetDate,
  onComplete = () => {},
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <Clock className="h-4 w-4 mr-1" />
      <div className="flex gap-1">
        <span className="bg-primary/10 rounded px-1">{timeLeft.days}d</span>:
        <span className="bg-primary/10 rounded px-1">
          {timeLeft.hours.toString().padStart(2, "0")}h
        </span>
        :
        <span className="bg-primary/10 rounded px-1">
          {timeLeft.minutes.toString().padStart(2, "0")}m
        </span>
        :
        <span className="bg-primary/10 rounded px-1">
          {timeLeft.seconds.toString().padStart(2, "0")}s
        </span>
      </div>
    </div>
  );
};

interface PromotionalBannerProps {
  message?: string;
  discount?: string;
  endDate?: Date;
  ctaText?: string;
  onCtaClick?: () => void;
  onClose?: () => void;
}

const PromotionalBanner = ({
  message = "Limited Time Offer!",
  discount = "20% OFF",
  endDate = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  ctaText = "Shop Now",
  onCtaClick = () => {},
  onClose = () => {},
}: PromotionalBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 w-full bg-primary text-primary-foreground py-2 px-4 flex items-center justify-between">
      <div className="flex-1 hidden md:block"></div>

      <div className="flex items-center justify-center flex-1 gap-2 text-sm">
        <Badge
          variant="secondary"
          className="bg-white/20 text-white hover:bg-white/30"
        >
          {discount}
        </Badge>
        <span className="hidden sm:inline">{message}</span>
        <CountdownTimer targetDate={endDate} />
      </div>

      <div className="flex items-center justify-end flex-1 gap-2">
        <Button
          size="sm"
          variant="secondary"
          className="bg-white/20 hover:bg-white/30 text-white"
          onClick={onCtaClick}
        >
          {ctaText}
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6 text-white hover:bg-white/20 hover:text-white"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PromotionalBanner;
