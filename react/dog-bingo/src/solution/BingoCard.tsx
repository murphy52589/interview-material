import React from "react";
import "./BingoCard.css";

export const BingoCard: React.FC<BingoCardProps> = ({numRowCols, breeds, onBreedClick}) => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${numRowCols}, 1fr)`,
            }}
        >
            {breeds.map((breed) => (
                <div key={breed} onClick={() => onBreedClick(breed)} title={breed}>
                    {breed.length > 10 ? breed.substring(0, 10) + "..." : breed}
                </div>
            ))}
        </div>
    );
};

interface BingoCardProps {
    numRowCols: number;
    breeds: string[];
    onBreedClick: (breed: string) => void;
}
