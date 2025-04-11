import LoginForm from "@/assets/components/forms/loginForm";
import Footer from "@/assets/components/layout/footer/footer";
import Header from "@/assets/components/layout/header/header";
import hero from "@/assets/images/formsHero.jpg";
import Image from "next/image";
export default function Login() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center px-4 gap-8 lg:gap-[80px] max-w-7xl mx-auto">
        <div className="hidden lg:flex w-1/2 items-center justify-end">
          <Image
            src={hero}
            alt="Imagem de cadastro"
            className="w-full h-[500px] max-w-[800px] rounded-lg shadow-md"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="w-full max-w-xl">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
}
