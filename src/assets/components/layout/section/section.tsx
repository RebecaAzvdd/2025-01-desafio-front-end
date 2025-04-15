import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCommonsImageData } from "@/services/wikService";
import { useWiki } from "@/context/wikiContext";
import { SPECIES_NAMES } from "@/@types/species.const";
import { SectionProps, SpeciesData } from "@/@types/species.type";
import { MAX_GRID_COLUMNS, gridColumnsMap } from "@/@types/layout.const";

export default function Section({ limit, columns = 3 }: SectionProps) {
  const [speciesData, setSpeciesData] = useState<SpeciesData[]>([]);
  const router = useRouter();
  const { setWikiData } = useWiki();
  const speciesNames = SPECIES_NAMES.slice(0, limit || undefined);

  const getGridClass = (columns: number) => {
    const colClass = gridColumnsMap[Math.min(columns, MAX_GRID_COLUMNS)] || "grid-cols-1";
    return `grid ${colClass} gap-8`;
  };

  const handleRedirect = (name: string, image: string | null) => {
    setWikiData({
      title: name,
      extract: "",
      imageUrl: image,
    });

    router.push(`/content/content?search=${encodeURIComponent(name)}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allData = await Promise.all(
        speciesNames.map(async (name) => {
          const formattedName = name.replace(" ", "_") + ".jpg";
          const result = await getCommonsImageData(formattedName);
          const imageUrl = result?.imageinfo?.[0]?.url || null;

          return {
            name,
            image: imageUrl,
          };
        })
      );

      setSpeciesData(allData);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-6">
      {speciesData.length > 0 && (
        <div className={getGridClass(columns)}>
          {speciesData.map((species, index) => (
            <div
              key={index}
              onClick={() => handleRedirect(species.name, species.image)}
              className="flex flex-col gap-4 cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <div className="w-full h-64">
                {species.image ? (
                  <img
                    src={species.image}
                    alt={species.name}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg shadow-md">
                    <span className="text-gray-500">Imagem não encontrada</span>
                  </div>
                )}
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-800">
                {species.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
