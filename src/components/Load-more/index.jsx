import { useState } from "react";
import "./style.css";

export default function LoadMore() {
  const data = [
    "Sijan",
    "Sam",
    "Peter",
    "Tony",
    "Anil",
    "Bruce",
    "John",
    "Steve",
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const visibleData = data.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="loadmore-container">
      {visibleData.map((item, index) => (
        <h3 key={index} className="loadmore-item">
          {item}
        </h3>
      ))}

      {visibleCount < data.length && (
        <button className="loadmore-button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
