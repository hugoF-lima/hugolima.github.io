import React from 'react';

const PITCH_VIDEO_ID = 'ptJdAYgINSs';

interface PitchEmbedProps {
  title: string;
}

export const PitchEmbed: React.FC<PitchEmbedProps> = ({ title }) => {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    controls: '1',
  });
  const embedUrl = `https://www.youtube.com/embed/${PITCH_VIDEO_ID}?${params.toString()}`;

  return (
    <div className="pitch-embed">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};
