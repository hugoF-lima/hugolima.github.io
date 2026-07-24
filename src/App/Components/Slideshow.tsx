import React, { useState } from 'react';

interface SlideshowProps {
  images: string[];
}

export const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="image-container slideshow">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className="slide-image"
          style={{
            display: idx === currentIndex ? 'block' : 'none',
            opacity: idx === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="cell">
        <ul className="dots">
          {images.map((_, idx) => (
            <li
              key={idx}
              className={`slide-button ${idx === currentIndex ? 'active' : ''}`}
              data-index={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{ cursor: 'pointer' }}
            >
              {idx + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
