import { mockRegister } from "@/mock/loginMock";
import { useState } from "react";
import Button from "../ui/button/button";
import Link from "next/link";

export default function CadastroForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    const result = await mockRegister({ name, email, password });
    setMessage(result.message);
  };

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-2xl h-[650px] mx-auto p-6 bg-white shadow-md rounded-md flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold mb-2">CRIE SUA CONTA NA SIAPESQ:</h2>
      <label className="text-lg font-bold text-gray-700">NOME</label>
      <input
        type="text"
        name="name"
        placeholder="NOME"
        value={formData.name}
        onChange={handleChange}
        className="border rounded-md px-3 py-4 text-md"
        required
      />
      <label className="text-lg font-bold text-gray-700">EMAIL</label>
      <input
        type="email"
        name="email"
        placeholder="EMAIL"
        value={formData.email}
        onChange={handleChange}
        className="border rounded-md px-3 py-4 text-md"
        required
      />
      <label className="text-lg font-bold text-gray-700">SENHA</label>
      <input
        type="password"
        name="password"
        placeholder="SENHA"
        value={formData.password}
        onChange={handleChange}
        className="border rounded-md px-3 py-4 text-md"
        required
      />
      <label className="text-lg font-bold text-gray-700">SENHA NOVAMENTE</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="CONFIRME SUA SENHA"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="border rounded-md px-3 py-4 text-md"
        required
      />
      <div className="flex justify-center mt-4">
        <Button
          type="submit"
          color=" bg-[#0038B1]"
          textColor="text-white"
          altura="h-14"
          largura="w-62"
          label="CONFIRMAR"
        ></Button>
      </div>

      {message && (
        <p className="text-center text-sm text-gray-600">{message}</p>
      )}
    </form>
  );
}
