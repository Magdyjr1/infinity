import React, { useState } from 'react';
import { FileText } from 'lucide-react';

interface SafeImageProps {
  imageNumber: number;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
  showBadge?: boolean;
  priority?: boolean;
  category?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  imageNumber,
  alt,
  className = '',
  aspectRatio = 'square',
  showBadge = false,
  priority = false,
}) => {
  // Cascading source paths: support JPG, PNG, and JPEG variants because the asset library contains mixed extensions.
  const sourceCandidates = [
    `/pictures/${imageNumber}.jpg`,
    `/pictures/${imageNumber}.png`,
    `/pictures/${imageNumber}.jpeg`,
    `./pictures/${imageNumber}.jpg`,
    `./pictures/${imageNumber}.png`,
    `./pictures/${imageNumber}.jpeg`,
    `pictures/${imageNumber}.jpg`,
    `pictures/${imageNumber}.png`,
    `pictures/${imageNumber}.jpeg`,
  ];

  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentSrc = sourceCandidates[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex < sourceCandidates.length - 1) {
      // Try next source candidate
      setCandidateIndex((prev) => prev + 1);
      setIsLoaded(false);
    } else {
      // All sources exhausted
      setHasError(true);
    }
  };

  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-[16/10]'
      : aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : '';

  return (
    <div
      className={`relative overflow-hidden bg-slate-100/80 ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          className={`w-full h-full object-cover transition-all duration-500 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
          style={{ objectFit: 'cover' }}
        />
      ) : (
        /* Minimalist architectural schematic fallback when images are not yet copied to public folder */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 text-slate-400 select-none border border-dashed border-slate-200">
          <div className="w-9 h-9 rounded-sm bg-white border border-slate-200 flex items-center justify-center text-slate-500 mb-2 shadow-2xs">
            <FileText className="w-4 h-4 stroke-[1.5]" />
          </div>
          <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-700 uppercase">
            {imageNumber}.png
          </span>
          <span className="text-[10px] text-slate-500 text-center line-clamp-1 max-w-[85%] mt-0.5">
            {alt}
          </span>
        </div>
      )}

      {showBadge && (
        <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 text-[10px] font-mono font-medium tracking-wider bg-white/90 backdrop-blur-xs text-slate-700 border border-slate-200/80 rounded-xs shadow-2xs">
          #{imageNumber}.png
        </span>
      )}
    </div>
  );
};
