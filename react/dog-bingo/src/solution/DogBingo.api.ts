async function getAllDogBreeds() {
    try {
        // Make the first API call
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const allDogBreeds = await response.json();
        console.log("all dog breeds:", allDogBreeds);
        return allDogBreeds;
    } catch (error) {
        console.error("Error while calling getAllDogBreeds:", error);
    }
}

async function getSingleDogImage(breed: string) {
    try {
        // Make the first API call
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`,
        );
        const singleDogImage = await response.json();
        console.log("get single dog image:", singleDogImage);
        return singleDogImage;
    } catch (error) {
        console.error("Error while calling getAllDogBreeds:", error);
    }
}

export { getAllDogBreeds, getSingleDogImage };
