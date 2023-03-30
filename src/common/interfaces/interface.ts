export interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

export interface Source {
  id: string;
  name: string | null;
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
