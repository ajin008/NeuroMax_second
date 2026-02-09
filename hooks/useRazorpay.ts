"use client";
import { useState } from "react";
import { createRazorpayOrder } from "@/app/actions/payment";
import { RazorpayOptions, RazorpayResponse } from "@/type/razorpay";

interface OrderData {
  id: string;
  amount: number;
  grade: string;
}

export const useRazorpay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // New Success State

  const handlePayment = async (grade: string): Promise<void> => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const order = (await createRazorpayOrder(grade)) as OrderData;

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Neuromax Academy",
        description: `Class ${grade} Board Prep 2026`,
        order_id: order.id,
        handler: function (response: RazorpayResponse): void {
          setIsLoading(false);
          setIsSuccess(true); // Trigger the overlay immediately

          const waGroupLink =
            "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";

          setTimeout(() => {
            window.location.href = waGroupLink;
          }, 2000); // Slightly longer for the user to read the message
        },
        modal: {
          ondismiss: () => setIsLoading(false),
          escape: true,
          backdropclose: false,
        },
        prefill: { name: "Student Name", email: "student@example.com" },
        theme: { color: "#2563eb" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment failed. Please try again.");
      setIsLoading(false);
    }
  };

  return { handlePayment, isLoading, isSuccess }; // Export isSuccess
};
