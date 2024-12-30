'use client'

import React, { useState, useEffect } from 'react';

interface TimerProps {
  duration: number; // Duration in seconds
  onTimerEnd?: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimerEnd }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimerEnd?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimerEnd]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold">{formatTime(timeLeft)}</h1>
    </div>
  );
};

export default Timer;
