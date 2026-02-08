"use client";

import { createRazorpayOrder } from "@/app/actions/payment";
import { RazorpayOptions, RazorpayResponse } from "@/type/razorpay";

interface OrderData {
  id: string;
  amount: number;
  grade: string;
}

export const useRazorpay = () => {
  const handlePayment = async (grade: string): Promise<void> => {
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
          // 1. Log payment for debugging if needed
          console.log("Transaction Successful:", response.razorpay_payment_id);

          // 2. Define your target WhatsApp Group link
          const waGroupLink =
            "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";

          // 3. Implement Success Delay (1.5 seconds)
          // This gives the Razorpay 'Success' checkmark time to show up
          setTimeout(() => {
            window.location.href = waGroupLink;
          }, 1500);
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
        },
        theme: {
          color: "#2563eb",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment initiation failed. Please check your connection.");
    }
  };

  return { handlePayment };
};
