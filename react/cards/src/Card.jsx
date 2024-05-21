export const Card = ({ suit, rank }) => {
    return (
        <div
            className="card"
            style={{ color: ["♦", "♥"].includes(suit) ? "red" : "black" }}
        >
            <div className="suit" style={{ alignSelf: "flex-start" }}>
                {suit}
            </div>
            <div className="rank">{rank}</div>
            <div className="suit" style={{ alignSelf: "flex-end" }}>
                {suit}
            </div>
        </div>
    );
};
