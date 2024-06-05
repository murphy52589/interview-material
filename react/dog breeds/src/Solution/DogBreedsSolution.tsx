import { useEffect, useState } from 'react';
import { fetchBreeds, fetchRandomPicture } from './DogBreedsSolution.api';

interface DogBreedsSolution {
  imageURL: string;
  breed: string;
}

const DogBreedsSolution = () => {
  const [loading, setLoading] = useState(true);
  const [allBreeds, setAllBreeds] = useState<DogBreedsSolution[]>([]);
  const [images, setImages] = useState<DogBreedsSolution[]>([]);

  useEffect(() => {
    fetchBreeds().then((data) => {
      setAllBreeds(data);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      getBreedPicture();
    }
  }, [loading]);

  const getBreedPicture = async () => {
    for (const breed in allBreeds) {
      try {
        const newImageURL = await fetchRandomPicture(breed);
        setImages(oldImages => [...oldImages, {imageURL: newImageURL, breed}]);
      } catch (error){
        console.log(error);
      }
    }
  }

  const renderLoading = () => {
    return (loading && <span id="js_loading">Loading</span>);
  }

  const renderNotLoading = () => {
    return images.map((imageObj, index) => {
      return (
        <img 
        className="js_img" 
        key={index} 
        src={imageObj.imageURL} 
        title={imageObj.breed}
        alt="breed image" />);
    });
  }

  return (
    <div>
      {renderLoading()}
      <div id="js_gallery">
        {renderNotLoading()}
      </div>
    </div>
  );
}


export default DogBreedsSolution;