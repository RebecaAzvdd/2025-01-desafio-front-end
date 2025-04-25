import axios from "axios";
import { CommonsImage } from "../@types/species.type";

const COMMONS_API = "https://commons.wikimedia.org/w/api.php";

export const getCommonsImageData = async (
  fileTitle: string
): Promise<CommonsImage | null> => {
  try {
    const response = await axios.get(COMMONS_API, {
      params: {
        action: "query",
        titles: `File:${fileTitle}`,
        prop: "imageinfo",
        iiprop: "url|extmetadata",
        format: "json",
        origin: "*",
      },
    });

    const pages = response.data.query.pages;
    const pageId = Object.keys(pages)[0];
    return pages[pageId];
  } catch (error) {
    console.error("Erro ao buscar imagem do Commons:", error);
    return null;
  }
};


export async function searchSpeciesByName(query: string): Promise<string[]> {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
      query + " animal"
    )}&format=json&origin=*`
  );

  const data = await response.json();

  const results: CommonsImage[] = data?.query?.search || [];

return results
  .map((item) => item.title)
  .filter((title) => !title.includes("List of"));
}
