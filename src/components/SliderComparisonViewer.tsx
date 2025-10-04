import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

interface SliderComparisonViewerProps {
  images: string[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function SliderComparisonViewer({
  images,
  currentIndex,
  onNavigate
}: SliderComparisonViewerProps) {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className="w-full space-y-4">
      <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden border border-gray-300 shadow-lg">
        {/* Before Image (bottom layer) */}
        <div className="absolute inset-0">
          <img
            src={images[currentIndex]}
            alt="Після катастрофи"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded-lg text-white shadow-lg">
            Після
          </div>
        </div>

        {/* After Image (top layer with clip) */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
        >
          <img
            src={images[currentIndex]}
            alt="До катастрофи"
            className="w-full h-full object-cover brightness-110"
          />
          <div className="absolute top-4 left-4 bg-blue-600 px-4 py-2 rounded-lg text-white shadow-lg">
            До
          </div>
        </div>

        {/* Divider line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10"
          style={{ left: `${sliderValue[0]}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-600">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-blue-600"></div>
              <div className="w-0.5 h-4 bg-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
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

      {/* Slider Control */}
      <div className="px-4">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          step={1}
          className="cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-gray-600">
          <span>До</span>
          <span>Після</span>
        </div>
      </div>
    </div>
  );
}
