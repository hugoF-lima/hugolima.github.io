import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { MdOutlinePlayCircleFilled, MdClose } from 'react-icons/md';

export interface ShowcaseItem {
  src: string;
  tabLabel?: string;
  descKey?: string;
  previewImage?: string;
}

interface MediaLightboxProps {
  items: ShowcaseItem[];
  openIndex?: number;
  onClose: () => void;
}

export const MediaLightbox: React.FC<MediaLightboxProps> = ({ items, openIndex = 0, onClose }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState<number>(openIndex);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const active = items[activeIndex];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeIndex]);

  const node =
    typeof document !== 'undefined' ? document.body : null;

  const lightbox = (
    <div className="media-lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="media-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="media-lightbox__close"
          onClick={onClose}
          aria-label="Close lightbox"
          type="button"
        >
          <MdClose />
        </button>

        <div className="media-lightbox__player">
          <video
            ref={videoRef}
            controls
            className="media-lightbox__video"
          >
            <source src={active?.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="media-lightbox__meta">
          {items.length > 1 && (
            <div className="media-lightbox__tabs" role="tablist">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={idx === activeIndex}
                  type="button"
                  className={[
                    'media-lightbox__tab',
                    idx === activeIndex ? 'media-lightbox__tab--active' : '',
                  ].filter(Boolean).join(' ')}
                  onClick={() => setActiveIndex(idx)}
                >
                  {item.tabLabel || `Demo ${idx + 1}`}
                </button>
              ))}
            </div>
          )}

          {active?.descKey && (
            <div
              className="media-lightbox__desc-wrap"
              style={{ whiteSpace: 'pre-line' }}
            >
              <p className="media-lightbox__desc">{t(active.descKey)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (!node) return lightbox;
  return createPortal(lightbox, node);
};

interface ShowcasePreviewProps {
  items: ShowcaseItem[];
  onOpen: (index: number) => void;
}

export const ShowcasePreview: React.FC<ShowcasePreviewProps> = ({ items, onOpen }) => {
  return (
    <div className={`showcase-previews showcase-previews--${Math.min(items.length, 3)}`}>
      {items.map((item, idx) => (
        <button
          key={idx}
          type="button"
          className="showcase-preview-card"
          onClick={() => onOpen(idx)}
          aria-label={item.tabLabel || `Open demo ${idx + 1}`}
        >
          {item.previewImage ? (
            <img src={item.previewImage} alt="" className="showcase-preview-card__image" />
          ) : (
            <div className="showcase-preview-card__ph" />
          )}
          <div className="showcase-preview-card__overlay">
            <MdOutlinePlayCircleFilled className="showcase-preview-card__play" />
            {item.tabLabel && (
              <span className="showcase-preview-card__tag">{item.tabLabel}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};
