"use client";
import { useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import ClassSelector from "@/components/ClassSelector";
import Hero from "@/components/Hero";
import SessionBlueprint from "@/components/SessionBlueprint";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { useRazorpay } from "@/hooks/useRazorpay";
import { SuccessOverlay } from "@/components/SuccessOverlay";

export default function Home() {
  const [selectedGrade, setSelectedGrade] = useState("10");

  const { handlePayment, isLoading, isSuccess } = useRazorpay();

  return (
    <main className="bg-black min-h-screen pb-24 md:pb-0">
      {isSuccess && <SuccessOverlay />}{" "}
      {/* Added padding for mobile bottom nav */}
      <AnnouncementBanner />
      <Hero grade={selectedGrade} onPay={handlePayment} isPaying={isLoading} />
      <ClassSelector selected={selectedGrade} onSelect={setSelectedGrade} />
      <SessionBlueprint />
      <Mentor />
      <Footer />
      {/* This will stay synced and visible on mobile only */}
      <StickyCTA
        grade={selectedGrade}
        onPay={handlePayment}
        isPaying={isLoading}
      />
    </main>
  );
}
