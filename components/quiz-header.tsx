import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function QuizHeader({
  examTitle,
  courseTitle,
  currentQuestion,
  totalQuestions,
  timeLeft,
  skippedIndices = [],
  onJumpToQuestion,
}: {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
  skippedIndices?: number[];
  onJumpToQuestion?: (idx: number) => void;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const timeWarning = timeLeft < 300; // Less than 5 minutes

  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{examTitle}</h1>
            <p className="text-muted-foreground text-sm">{courseTitle}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Skipped dropdown */}
            {skippedIndices.length > 0 && (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:bg-amber-400/20 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block" />
                  {skippedIndices.length} skipped
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50 max-h-60 overflow-y-auto">
                    <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      Skipped Questions
                    </div>
                    {skippedIndices.map((idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          onJumpToQuestion?.(idx);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-muted text-foreground transition-colors flex items-center justify-between"
                      >
                        <span>Question {idx + 1}</span>
                        {currentQuestion === idx && <span className="w-1.5 h-1.5 rounded-full bg-primary" title="Current Question" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Timer */}
            <div
              className={`text-center px-4 py-2 rounded-lg font-mono font-bold text-lg ${
                timeWarning
                  ? 'bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400'
                  : 'bg-primary/10 text-primary'
              }`}
            >
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="text-muted-foreground">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="text-muted-foreground">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
