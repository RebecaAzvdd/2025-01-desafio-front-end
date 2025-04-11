import Footer from "@/assets/components/layout/footer/footer";
import Header from "@/assets/components/layout/header/header";
import Hero from "@/assets/components/layout/hero/Hero";
import Section from "@/assets/components/layout/section/section";
import Services from "@/assets/components/layout/services/services";
import Input from "@/assets/components/ui/input/input";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Header />
          <div className="mt-6">
            <Input />
          </div>
          <div className="mt-6">
            <Hero/>
          </div>
          <div className="mt-6">
            <Section />
          </div>
          <div className="mt-6">
            <Services />
          </div>
          <div className="mt-6">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
