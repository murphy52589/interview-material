import { useEffect, useState } from "react";
import { Card, ICard } from "./Card";

export default function CardSolution() {
    const suits: string[] = ["♠", "♣", "♦", "♥"];
    const ranks: string[] = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
    ];

    const deck: ICard[] = suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank })));
    const [shuffledDeck, setShuffledDeck] = useState<ICard[]>(deck);

    useEffect(() => {
        shuffle();
    }, []);

    const shuffle = () => {
        const tempDeck = [...deck].sort(() => 0.5 - Math.random());
        setShuffledDeck(tempDeck);
        return shuffledDeck;
    };

    //draw card at random and update deck to have that card removed
    const drawCard = () => {
        const cardIndex = Math.floor(Math.random() * shuffledDeck.length);
        const newDeck = [...shuffledDeck]; // Create a copy of the deck
        newDeck.splice(cardIndex, 1); // Remove the card from the deck
        setShuffledDeck(newDeck); // Update the deck
    };

    return (
        <div className="App">
            <button onClick={shuffle}>Shuffle</button>
            <button onClick={drawCard}>Draw card</button>
            <div className="deck-view">
                {shuffledDeck.map((card, index) => (
                    <Card key={index} suit={card.suit} rank={card.rank} />
                ))}
            </div>
        </div>
    );
}
