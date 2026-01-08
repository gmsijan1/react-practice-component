import { useState } from "react";
import "./style.css";

export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/101/800/400",
    "https://picsum.photos/id/104/800/400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider-image-wrapper">
        <img src={images[currentIndex]} alt="slider" className="slider-image" />
      </div>

      <div className="slider-buttons">
        <button className="slider-btn" onClick={handlePrev}>
          Prev
        </button>
        <button className="slider-btn" onClick={handleNext}>
          Next
        </button>
      </div>

      <p className="slider-counter">
        {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}
