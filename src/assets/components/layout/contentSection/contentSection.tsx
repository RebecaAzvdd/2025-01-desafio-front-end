import { useEffect, useState } from "react";
import { getCommonsImageData } from "@/services/wikService";
import { useWiki } from "@/context/wikiContext";
import { useRouter } from "next/router";

export default function ContentSection() {
  const router = useRouter();
  const searchTerm = router.query.search as string | undefined;
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { wikiData, setWikiData } = useWiki();

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) return;

      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
            searchTerm
          )}`
        );
        const data = await response.json();

        const formattedTitle = searchTerm.replace(/ /g, "_") + ".jpg";
        const imageData = await getCommonsImageData(formattedTitle);
        const url = imageData?.imageinfo?.[0]?.url || null;

        setWikiData({
          title: data.title,
          extract: data.extract,
          imageUrl: url,
        });
        setImageUrl(url);
      } catch (error) {
        console.error("Erro ao buscar dados do animal:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const currentImageUrl = wikiData?.imageUrl;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center gap-6">
      {wikiData && (
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          {wikiData.title}
          {searchTerm && wikiData.title !== searchTerm && (
            <span className="block text-sm sm:text-base text-gray-600 italic">
              ({searchTerm})
            </span>
          )}
        </h1>
      )}

      {currentImageUrl ? (
        <img
          src={currentImageUrl}
          alt={wikiData?.title || "Imagem do animal"}
          className="w-full max-w-[800px] h-[400px] object-cover rounded-lg shadow-lg"
        />
      ) : (
        <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
          <span className="text-gray-500">Imagem não encontrada</span>
        </div>
      )}

      {wikiData?.extract && (
        <p className="text-base sm:text-lg text-left w-full leading-relaxed text-gray-800">
          {wikiData.extract}
        </p>
      )}
    </div>
  );
}
