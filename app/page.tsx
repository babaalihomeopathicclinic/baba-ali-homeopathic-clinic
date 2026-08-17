import AboutDoctor from "@/components/AboutDoctor";
import ConsultationProcess from "@/components/ConsultationProcess";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Policy from "@/components/Policy";
import SpecializedCare from "@/components/SpecializedCare";
import ConsultationRequest from "@/components/ConsultationRequest";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutDoctor />
        <SpecializedCare />
        <ConsultationProcess />
        <Policy />
        <ConsultationRequest />
        <Footer />
      </main>
    </>
  );
}