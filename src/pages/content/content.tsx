import ContentSection from "@/assets/components/layout/contentSection/contentSection";
import Footer from "@/assets/components/layout/footer/footer";
import Header from "@/assets/components/layout/header/header";
import Section from "@/assets/components/layout/section/section";

export default function Content() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-6">
        <ContentSection />
      </div>
      <div className="mt-6">
        <Section limit={3} columns={3}/>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
}
