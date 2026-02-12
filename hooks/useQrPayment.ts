"use client";
import { useState, useEffect, useCallback } from "react";

const GRADE_DATA: Record<string, { price: string; link: string }> = {
  "8": {
    price: "90",
    link: "https://chat.whatsapp.com/IzbfO5mIcjJ2UJrGsUy2K2",
  },
  "9": {
    price: "95",
    link: "https://chat.whatsapp.com/ChXywJIoD2b1m23iImGEl6",
  },
  "10": {
    price: "99",
    link: "https://chat.whatsapp.com/JdD0o2kKWTC3Q5HVwbAF7K?mode=gi_t",
  },
};

export const useQrPayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [timer, setTimer] = useState(20); // 1. Set initial state to 20
  const [currentGrade, setCurrentGrade] = useState("10");

  const handlePayment = (grade: string) => {
    setCurrentGrade(grade);
    setTimer(20); // 2. Set reset value to 20
    setIsLoading(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isLoading, timer]);

  // Using useCallback prevents the "cascading render" error you saw earlier
  const triggerSuccess = useCallback(() => {
    setIsLoading(false);
    setIsSuccess(true);

    const targetLink = GRADE_DATA[currentGrade].link;

    setTimeout(() => {
      window.location.href = targetLink;
    }, 2000);
  }, [currentGrade]);

  return {
    handlePayment,
    isLoading,
    isSuccess,
    timer,
    triggerSuccess,
    price: GRADE_DATA[currentGrade].price,
    grade: currentGrade,
  };
};
