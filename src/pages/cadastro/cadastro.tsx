import CadastroForm from "@/assets/components/forms/cadastroForm";
import Footer from "@/assets/components/layout/footer/footer";
import Header from "@/assets/components/layout/header/header";
import hero from "@/assets/images/formsHero.jpg";
import Image from "next/image";

export default function Cadastro() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="mt-12 flex flex-col md:flex-row px-4 md:gap-[80px]">
        <div className="hidden lg:flex w-1/2 items-center justify-end ">
          <Image
            src={hero}
            alt="Imagem de cadastro"
            className="w-full h-[500px] max-w-[800px] rounded-lg shadow-md"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="w-full max-w-xl">
            <CadastroForm />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
}
