import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Valores from "@/components/Valores";
import EscobarPiensa from "@/components/EscobarPiensa";
import EscobarImpulsa from "@/components/EscobarImpulsa";
import Participa from "@/components/Participa";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <QuienesSomos />
        <Valores />
        <EscobarPiensa />
        <EscobarImpulsa />
        <Participa />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
