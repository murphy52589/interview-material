import { IBreweries } from "./IBreweries";

export const getBreweries = async (query: string): Promise<IBreweries[]> => {
  const response = await fetch(
    `https://api.openbrewerydb.org/v1/breweries/search?query=${query}`,
  );
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  return response.json();
};
