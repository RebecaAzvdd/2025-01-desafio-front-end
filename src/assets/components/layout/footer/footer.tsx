import Image from "next/image";
import logo from "@/assets/images/logoFooter.png";
import { InstagramIcon, GithubIcon, LinkedinIcon } from "./socialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center">
          <Image src={logo} alt="Logo" className="h-38 w-auto" />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Cadastro de Usuário</a></li>
            <li><a href="#" className="hover:underline">Consulta de Dados</a></li>
            <li><a href="#" className="hover:underline">Suporte Técnico</a></li>
            <li><a href="#" className="hover:underline">Ajuda e FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="https://www.instagram.com/siapesq/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="w-6 h-6 hover:text-pink-500" />
            </a>
            <a href="https://www.linkedin.com/in/rebeca-azevedo-a6778b1b3/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-6 h-6 hover:text-blue-400" />
            </a>
            <a href="https://github.com/RebecaAzvdd" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-6 h-6 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-sm py-4">
        © {new Date().getFullYear()} Todos os direitos reservados | Desenvolvido por @RebecaAzvdd
      </div>
    </footer>
  );
}
