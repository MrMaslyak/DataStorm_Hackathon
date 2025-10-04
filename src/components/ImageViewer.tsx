import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface ImageViewerProps {
  images: string[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function ImageViewer({ images, currentIndex, onNavigate }: ImageViewerProps) {
  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden border border-gray-300 shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Satellite view ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 border border-gray-300 shadow-lg"
            onClick={() => onNavigate('prev')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 border border-gray-300 shadow-lg"
            onClick={() => onNavigate('next')}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full border border-gray-300 shadow-lg">
            <span className="text-gray-800">{currentIndex + 1} / {images.length}</span>
          </div>
        </>
      )}
    </div>
  );
}
