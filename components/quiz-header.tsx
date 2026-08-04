export default function QuizHeader({
  currentQuestion,
  totalQuestions,
  timeLeft,
  skippedCount = 0,
}: {
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
  skippedCount?: number;
}) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const timeWarning = timeLeft < 300; // Less than 5 minutes

  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">AWS Cloud Practitioner Exam</h1>
            <p className="text-muted-foreground text-sm">CLF-C02 Practice Assessment</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Skipped badge */}
            {skippedCount > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-600 dark:text-amber-400 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse inline-block" />
                {skippedCount} skipped
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
