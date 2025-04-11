export interface CommonsImageInfo {
  url: string;
  descriptionurl: string;
}

export interface CommonsImage {
  title: string;
  imageinfo: CommonsImageInfo[];
}

export interface SpeciesData {
  image: string | null;
  name: string;
}

export interface SectionProps {
  limit?: number;
  columns?: number;
}
