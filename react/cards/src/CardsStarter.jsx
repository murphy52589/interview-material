import React from "react";
import { Card } from "./Card";

export default function CardsStarter() {
    const suits = ["♠", "♣", "♦", "♥"];
    const ranks = [
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

    const deck = suits.flatMap((suit) => ranks.map((rank) => ({ suit, rank })));


    const shuffle = () => {
    };

    //draw card at random and update deck to have that card removed
    const drawCard = () => {
    };

    return (
        <div className="App">
            <button onClick={shuffle}>Shuffle</button>
            <button onClick={drawCard}>Draw card</button>
            <div className="deck-view">
                {deck.map((card, index) => (
                    <Card key={index} suit={card.suit} rank={card.rank} />
                ))}
            </div>
        </div>
    );
}
