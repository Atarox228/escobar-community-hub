import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Valores from "@/components/Valores";
import EscobarPiensa from "@/components/EscobarPiensa";
import MujeresEscobarenses from "@/components/MujeresEscobarenses";
import Participa from "@/components/Participa";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen font-body">
        <Header />
          <Hero />
          <QuienesSomos />
          <Valores />
          <EscobarPiensa />
          <MujeresEscobarenses />
          <Participa />
        <Footer />
      </div>
    </>
  );
};

export default Index;
