"use server";

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function createRazorpayOrder(grade: string) {
  const pricing: Record<string, number> = { "8": 90, "9": 95, "10": 99 };
  const amount = pricing[grade] || 99;

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_grade_${grade}_${Date.now()}`,
    });

    return {
      id: order.id,
      amount: Number(order.amount),
      grade,
    };
  } catch (error) {
    console.error("Razorpay Error:", error);
    throw new Error("Failed to create order");
  }
}
