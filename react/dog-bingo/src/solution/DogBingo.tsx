import { useEffect, useState } from "react";
import { BingoCard } from "./BingoCard";
import { getAllDogBreeds, getSingleDogImage } from "./DogBingo.api";
import "./BingoCard.css";

function DogBingo() {
    const [numBingoCards, setNumBingoCards] = useState<number>(1);
    const [numRowsCols, setNumRowsCols] = useState<number>(1);
    const [dogBreeds, setDogBreeds] = useState<string[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<string>("");
    const [selectedBreedImage, setSelectedBreedImage] = useState<string>("");

    useEffect(() => {
        getAllDogBreeds().then((breeds) =>
            setDogBreeds(Object.keys(breeds.message)),
        );
        console.log(dogBreeds);
    }, []);

    useEffect(() => {
        if (selectedBreed) {
            getSingleDogImage(selectedBreed).then((image) =>
                setSelectedBreedImage(image.message),
            );
        }
    }, [selectedBreed]);

    const generateBingoCards = () => {
        const bingoCards = [];
        for (let i = 0; i < numBingoCards; i++) {
            const uniqueBreeds = [...dogBreeds]
                .sort(() => 0.5 - Math.random())
                .slice(0, numRowsCols * numRowsCols);
            bingoCards.push(
                <BingoCard
                    numRowCols={numRowsCols}
                    breeds={uniqueBreeds}
                    onBreedClick={setSelectedBreed}
                />,
            );
        }
        return bingoCards;
    };

    return (
        <div className="dog-bingo-container">
            <h1 className="dog-bingo-title">Dog Bingo</h1>
            <div className="dog-bingo-input-container">
                Generate
                <input
                    type="number"
                    value={numBingoCards}
                    onChange={(e) => setNumBingoCards(parseInt(e.target.value))}
                    min="1"
                    max="5"
                />
                random bingo cards, each with
                <input
                    type="number"
                    value={numRowsCols}
                    onChange={(e) => setNumRowsCols(parseInt(e.target.value))}
                    min="1"
                    max="5"
                />
                rows and columns.
                <button
                    className="btn btn-primary"
                    onClick={generateBingoCards}
                    disabled={!numBingoCards || !numRowsCols}
                >
                    Generate
                </button>
            </div>
            {generateBingoCards()}
            {selectedBreed && <img src={selectedBreedImage} alt={selectedBreed} />}
        </div>
    );
}

export default DogBingo;
