import { useState } from "react";
import "./style.css";

export default function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            style={{
              fontSize: "40px",
              cursor: "pointer",
              color: starValue <= (hover || rating) ? "gold" : "lightgray",
            }}
          >
            ★{" "}
          </span>
        );
      })}

      <p>Rating: {rating}</p>
    </div>
  );
}
