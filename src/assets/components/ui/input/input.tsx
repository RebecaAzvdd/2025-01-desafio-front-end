import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { searchSpeciesByName } from "@/services/wikService"; // serviço para buscar nomes

export default function Input() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length >= 2) {
        const results = await searchSpeciesByName(query);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 300); // debounce
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) router.push(`/content/content?search=${query}`);
  };

  const selectSuggestion = (name: string) => {
    setQuery(name);
    setSuggestions([]);
    router.push(`/content/content?search=${name}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 bg-white rounded-xl shadow-md px-4 py-5 focus-within:ring-2 focus-within:ring-[#0038B1]"
      >
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar espécie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-base text-gray-700 placeholder-gray-400"
        />
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl mt-1 shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((name, index) => (
            <li
              key={index}
              onClick={() => selectSuggestion(name)}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100"
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
