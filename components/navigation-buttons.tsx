import { SkipForward, ChevronLeft, ChevronRight, Flag } from 'lucide-react';

export default function NavigationButtons({
  canGoPrevious,
  isFullyAnswered,
  isLastQuestion,
  canSkip,
  onPrevious,
  onNext,
  onSkip,
  onSubmit,
  hasUnanswered,
  onReviewSkipped,
}: {
  canGoPrevious: boolean;
  isFullyAnswered: boolean;
  isLastQuestion: boolean;
  canSkip: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSkip: () => void;
  onSubmit: () => void;
  hasUnanswered: boolean;
  onReviewSkipped: () => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {/* Top row: Previous + Next/Finish */}
      <div className="flex gap-3">
        {/* Previous */}
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex items-center justify-center gap-2 flex-1 px-6 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {/* Next or Finish */}
        {!isLastQuestion ? (
          <button
            onClick={onNext}
            disabled={!isFullyAnswered}
            title={!isFullyAnswered ? 'Please answer the question first, or use Skip & Review Later' : ''}
            className="flex items-center justify-center gap-2 flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : hasUnanswered ? (
          <button
            onClick={onReviewSkipped}
            className="flex items-center justify-center gap-2 flex-1 px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-all duration-200"
          >
            Review Skipped
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onSubmit}
            disabled={!isFullyAnswered}
            title={!isFullyAnswered ? 'Please answer this question first to finish, or go back and answer skipped questions' : ''}
            className="flex items-center justify-center gap-2 flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Flag className="w-4 h-4" />
            Finish Exam
          </button>
        )}
      </div>

      {/* Skip & Review Later — shown when question not fully answered and not on last question */}
      {canSkip && !isLastQuestion && (
        <button
          onClick={onSkip}
          className="w-full flex items-center justify-center gap-2 px-6 py-2.5 border border-amber-400/60 text-amber-600 dark:text-amber-400 bg-amber-400/5 hover:bg-amber-400/10 rounded-lg font-semibold text-sm transition-all duration-200"
        >
          <SkipForward className="w-4 h-4" />
          Skip &amp; Review Later
        </button>
      )}

      {/* Hint message for unanswered last question */}
      {isLastQuestion && hasUnanswered && (
        <p className="text-center text-xs text-amber-600 dark:text-amber-400 font-medium mt-2">
          You must answer all questions before finishing. Click &quot;Review Skipped&quot; to continue.
        </p>
      )}
    </div>
  );
}
