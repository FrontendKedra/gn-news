export interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string | null;
}

export interface Source {
  id: string;
  name: string;
}

export type UsePageNumber = [number, (pageNumber: number) => void];

export interface PopupNewsDetails {
  url: string;
  author: string;
  content: string;
  source: Source;
}

export interface IsList {
  isList: boolean;
}

export interface IndexSingature {
  [index: string]: string;
}