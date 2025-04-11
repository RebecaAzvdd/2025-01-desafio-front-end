export interface WikiData {
    title: string;
    extract: string;
    imageUrl: string | null;
  }
  
export interface WikiContextProps {
      wikiData: WikiData | null;
      setWikiData: (data: WikiData) => void;
    }
    