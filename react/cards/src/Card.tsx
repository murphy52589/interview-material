export interface ICard {
  suit: string;
  rank: string;

}

export const Card = ({ suit, rank }: CardProps) => {
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
