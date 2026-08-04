import { Question } from '@/lib/quiz-data';

export default function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerChange,
  isMultiSelect,
}: {
  question: Question;
  questionNumber: number;
  selectedAnswer: number | number[] | null;
  onAnswerChange: (optionIndex: number) => void;
  isMultiSelect: boolean;
}) {
  const isSelected = (index: number) => {
    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.includes(index);
    }
    return selectedAnswer === index;
  };

  const selectedCount = Array.isArray(selectedAnswer) ? selectedAnswer.length : 0;
  const isComplete = isMultiSelect ? selectedCount === 2 : selectedAnswer !== null;

  return (
    <div className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-sm mb-6">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
            Question {questionNumber}
          </span>
          {isMultiSelect && (
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 ${
                selectedCount === 2
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : selectedCount === 1
                    ? 'bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/20'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {selectedCount === 2
                ? '✓ Both Selected'
                : selectedCount === 1
                  ? '1 of 2 selected'
                  : 'SELECT TWO'}
            </span>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-foreground leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => onAnswerChange(index)}
            className={`flex items-start gap-4 p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
              isSelected(index)
                ? 'border-primary bg-primary/5 shadow-sm'
                : 'border-border hover:bg-muted/50 hover:border-primary/40'
            }`}
          >
            {isMultiSelect ? (
              <input
                type="checkbox"
                checked={isSelected(index)}
                readOnly
                className="mt-1.5 w-5 h-5 cursor-pointer accent-primary shrink-0 pointer-events-none"
              />
            ) : (
              <input
                type="radio"
                name={`question-${question.id}`}
                checked={isSelected(index)}
                readOnly
                className="mt-1.5 w-5 h-5 cursor-pointer accent-primary shrink-0 pointer-events-none"
              />
            )}
            <span className={`font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
              isSelected(index)
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex-1 text-foreground select-none leading-relaxed mt-0.5">
              {option}
            </span>
          </div>
        ))}
      </div>

      {/* Hint below options */}
      {!isComplete && (
        <p className="text-xs text-muted-foreground mt-4 text-center">
          {isMultiSelect
            ? `Select exactly 2 answers to continue, or use "Skip & Review Later"`
            : `Select an answer to continue, or use "Skip & Review Later"`}
        </p>
      )}
    </div>
  );
}
