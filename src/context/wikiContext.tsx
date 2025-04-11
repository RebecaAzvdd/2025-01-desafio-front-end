import { createContext, useContext, useState, ReactNode } from "react";

interface WikiData {
  title: string;
  extract: string;
  imageUrl: string | null;
}

interface WikiContextProps {
    wikiData: WikiData | null;
    setWikiData: (data: WikiData) => void;
  }
  
  const WikiContext = createContext<WikiContextProps | undefined>(undefined);
  
  export const WikiProvider = ({ children }: { children: ReactNode }) => {
    const [wikiData, setWikiData] = useState<WikiData | null>(null);
  
    return (
      <WikiContext.Provider value={{ wikiData, setWikiData }}>
        {children}
      </WikiContext.Provider>
    );
  };

  export const useWiki = (): WikiContextProps => {
    const context = useContext(WikiContext);
    if (!context) {
      throw new Error("useWiki must be used within a WikiProvider");
    }
    return context;
  };