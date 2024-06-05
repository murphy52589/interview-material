export async function fetchBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const breeds = await response.json();
  return breeds.message;
}

export async function fetchRandomPicture(breed) {
  const response = await fetch (`https://dog.ceo/api/breed/${breed}/images/random`);
  const image = await response.json();
  return image.message;
}