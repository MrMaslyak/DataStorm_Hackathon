import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

interface ComparisonViewerProps {
  images: string[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
  showComparison: boolean;
  onToggleComparison: (checked: boolean) => void;
}

export function ComparisonViewer({
  images,
  currentIndex,
  onNavigate,
  showComparison,
  onToggleComparison
}: ComparisonViewerProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <Checkbox
          id="comparison"
          checked={showComparison}
          onCheckedChange={onToggleComparison}
          className="border-purple-500 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
        />
        <Label htmlFor="comparison" className="text-purple-200 cursor-pointer">
          Показати порівняння До/Після
        </Label>
      </div>
      
      <div className="relative w-full h-[400px] bg-black/50 rounded-lg overflow-hidden border border-purple-500/30">
        {showComparison ? (
          <div className="grid grid-cols-2 gap-2 h-full p-2">
            <div className="relative h-full rounded overflow-hidden border border-purple-500/50">
              <img
                src={images[currentIndex]}
                alt="До катастрофи"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 bg-purple-600 px-3 py-1 rounded text-white">
                До
              </div>
            </div>
            <div className="relative h-full rounded overflow-hidden border border-purple-500/50">
              <img
                src={images[currentIndex]}
                alt="Після катастрофи"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute top-2 left-2 bg-red-600 px-3 py-1 rounded text-white">
                Після
              </div>
            </div>
          </div>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`Satellite view ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        )}
        
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white border border-purple-500/50"
              onClick={() => onNavigate('prev')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white border border-purple-500/50"
              onClick={() => onNavigate('next')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full border border-purple-500/50">
              <span className="text-white">{currentIndex + 1} / {images.length}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}