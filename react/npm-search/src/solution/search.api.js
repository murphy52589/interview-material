export const fetchPackages = async (query) => {
    const searchURL = "https://api.github.com/search/repositories?q=";
    try {
        const response = await fetch(`${searchURL}${query}`);

        if (!response.ok) {
            console.log("Network response was not ok", response);
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        throw new Error("An error occurred while fetching packages.");
    }
};
