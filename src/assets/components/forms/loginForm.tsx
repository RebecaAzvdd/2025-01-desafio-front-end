import Button from "../ui/button/button";
import { mockLogin } from "@/mock/loginMock";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await mockLogin(email, password);
    const result = await mockLogin(email, password);
    setMessage(response.message);
    if (result.success) {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-2xl h-[500px] mx-auto p-6 bg-white shadow-md rounded-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold mb-2">IDENTIFIQUE-SE NA SIAPESQ:</h2>
      <label className="text-lg font-bold text-gray-700 mt-4">EMAIL</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-md px-3 py-4 text-md"
        required
        placeholder="Ex: email@gmail.com"
      />
      <label className="text-lg font-bold text-gray-700">SENHA</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded-md px-3 py-4 text-md"
        required
        placeholder="Ex: password"
      />
      <div className="flex justify-center mt-4">
        <Button
          type="submit"
          color=" bg-[#0038B1]"
          textColor="text-white"
          altura="h-12"
          largura="w-56"
          label="CONFIRMAR"
        ></Button>
      </div>
      {message && (
        <p className="text-center text-sm text-gray-600">{message}</p>
      )}
      <div className="text-center mt-2 text-md text-gray-500 space-y-1">
        <Link href="/cadastro/cadastro" className="hover:underline cursor-pointer">
          NÃO TENHO CONTA. REGISTRE-SE
        </Link>
      </div>
    </form>
  );
}
