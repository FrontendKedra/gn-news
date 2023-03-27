import { IndexSingature } from "../common/interfaces/interface";

export const getNewsFromApi = async <ApiType>(
  url: string,
  params: IndexSingature
): Promise<ApiType> => {
  const response = await fetch(`${url}?${new URLSearchParams(params)}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
