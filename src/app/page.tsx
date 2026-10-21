import React from "react";
import DemoNoticeBanner from "@/components/DemoNoticeBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import HistoryHeritage from "@/components/HistoryHeritage";
import RoomCatalog from "@/components/RoomCatalog";
import ServicesGrid from "@/components/ServicesGrid";
import GuestExperienceTimeline from "@/components/GuestExperienceTimeline";
import StrategicDistances from "@/components/StrategicDistances";
import VerifiedTeam from "@/components/VerifiedTeam";
import InstitutionalPartners from "@/components/InstitutionalPartners";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import AccessibilityDialog from "@/components/AccessibilityDialog";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* Skip to Main Content Link for WCAG Screen Readers */}
      <a href="#main-content" className="skip-link">
        Salta direttamente al contenuto principale
      </a>

      {/* Unofficial Proposal Disclaimer Banner */}
      <DemoNoticeBanner />

      {/* Main Sticky Navbar with Drawer */}
      <Navbar />

      {/* Main Page Landmark */}
      <main id="main-content">
        {/* 1. Editorial Hero */}
        <Hero />

        {/* 2. Interactive Booking & Estimate Bar */}
        <BookingBar />

        {/* 3. History & Heritage dal 1928 */}
        <HistoryHeritage />

        {/* 4. Filterable Rooms Portfolio & Controllable Slider */}
        <RoomCatalog />

        {/* 5. Services Grid & Sardinian Breakfast Spotlight */}
        <ServicesGrid />

        {/* 6. Guest Journey 6-Step Experience Timeline */}
        <GuestExperienceTimeline />

        {/* 7. Strategic Distances from Port, Station & Airport */}
        <StrategicDistances />

        {/* 8. Verified Operational Departments & Transparency */}
        <VerifiedTeam />

        {/* 9. Institutional Grants & Authorized Partner Carousel */}
        <InstitutionalPartners />

        {/* 10. Validated Contact Form, Direct Channels & Newsletter */}
        <ContactForm />

        {/* 11. Accessible FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* Accessible Quick Dialog for UNI CEI EN 301549 */}
      <AccessibilityDialog />

      {/* Non-intrusive Cookie Consent Banner */}
      <CookieConsentBanner />

      {/* Complete Institutional Footer */}
      <Footer />
    </>
  );
}
