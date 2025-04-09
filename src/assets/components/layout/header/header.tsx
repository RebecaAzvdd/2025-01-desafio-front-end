import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/images/siapesq.jpeg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src={logo} alt="SIAPESQ" width={80} height={40} />
      </div>

      <Link href="/login/login" className="p-2">
        <UserIcon className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-600" />
      </Link>
    </header>
  );
}
