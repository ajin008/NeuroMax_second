"use client";
import { useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import ClassSelector from "@/components/ClassSelector";
import Hero from "@/components/Hero";
import SessionBlueprint from "@/components/SessionBlueprint";
import Mentor from "@/components/Mentor";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
// import { useRazorpay } from "@/hooks/useRazorpay";
import { SuccessOverlay } from "@/components/SuccessOverlay";
import { useQrPayment } from "@/hooks/useQrPayment";
import { QrModal } from "@/components/QrModal";

export default function Home() {
  const [selectedGrade, setSelectedGrade] = useState("10");

  // const { handlePayment, isLoading, isSuccess } = useRazorpay();
  const {
    handlePayment,
    isLoading,
    isSuccess,
    timer,
    triggerSuccess,
    price,
    grade,
  } = useQrPayment();

  return (
    <main className="bg-black min-h-screen pb-24 md:pb-0">
      {isLoading && (
        <QrModal
          isOpen={isLoading}
          timer={timer}
          price={price} // New
          grade={grade} // New
          onComplete={triggerSuccess}
        />
      )}
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
