import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
