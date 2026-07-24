import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface SlideshowProps {
  images: string[];
}

export const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const hasMultipleImages = images.length > 1;

  const showPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const showNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isLightboxOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }

      if (!hasMultipleImages) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        showPreviousSlide();
      }

      if (event.key === 'ArrowRight') {
        showNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasMultipleImages, isLightboxOpen, showNextSlide, showPreviousSlide]);

  const renderDots = (wrapperClassName?: string) => (
    <div className={wrapperClassName ?? 'cell'}>
      <ul className="dots">
        {images.map((_, idx) => (
          <li
            key={idx}
            className={`slide-button ${idx === currentIndex ? 'active' : ''}`}
            data-index={idx}
          >
            <button
              type="button"
              className="slide-dot-button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
              aria-current={idx === currentIndex ? 'true' : undefined}
            >
              {idx + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="slideshow-shell">
        <div className="slideshow">
          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="slideshow-arrow slideshow-arrow-prev"
                onClick={showPreviousSlide}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className="slideshow-arrow slideshow-arrow-next"
                onClick={showNextSlide}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </>
          )}
          <div className="slideshow-viewport">
            <div
              role="button"
              tabIndex={0}
              className="slideshow-image-button"
              onClick={() => setIsLightboxOpen(true)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setIsLightboxOpen(true);
                }
              }}
              aria-label={`Open image ${currentIndex + 1} in lightbox`}
            >
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
            </div>
          </div>
          {renderDots()}
        </div>
      </div>
      {isLightboxOpen && typeof document !== 'undefined' &&
        createPortal(
          <div
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${currentIndex + 1} preview`}
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close lightbox"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className="slideshow-arrow slideshow-arrow-prev lightbox-arrow"
                    onClick={showPreviousSlide}
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="slideshow-arrow slideshow-arrow-next lightbox-arrow"
                    onClick={showNextSlide}
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </>
              )}
              <div className="lightbox-image-frame">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="lightbox-image"
                />
              </div>
              {renderDots('cell lightbox-cell')}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
