import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Proposito from "@/components/sections/Proposito";
import QuemSomos from "@/components/sections/QuemSomos";
import Valores from "@/components/sections/Valores";
import OEstagio from "@/components/sections/OEstagio";
import Oportunidades from "@/components/sections/Oportunidades";
import Etapas from "@/components/sections/Etapas";
import Beneficios from "@/components/sections/Beneficios";
import Depoimentos from "@/components/sections/Depoimentos";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Proposito />
        <QuemSomos />
        <Valores />
        <OEstagio />
        <Oportunidades />
        <Etapas />
        <Beneficios />
        <Depoimentos />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
