import {NpmPackage} from "./search.tsx";

type ResponseData = {
    items: NpmPackage[];
};

export const fetchPackages = async (query: string) => {
    const searchURL: string = "https://api.github.com/search/repositories?q=";
    try {
        const response = await fetch(`${searchURL}${query}`);

        if (!response.ok) {
            console.log("Network response was not ok", response);
        }
        const data: ResponseData = await response.json();
        return data.items;
    } catch (error) {
        throw new Error("An error occurred while fetching packages.");
    }
};
