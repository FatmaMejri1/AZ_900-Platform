import { Question } from '@/lib/quiz-data';
import { CheckCircle2, XCircle, AlertCircle, Timer, RotateCcw, Trophy } from 'lucide-react';

export default function ResultsScreen({
  score,
  totalQuestions,
  passingScore,
  timeSpent,
  answers,
  questions,
  onRestart,
}: {
  score: number;
  totalQuestions: number;
  passingScore: number;
  timeSpent: number;
  answers: (number | number[] | null)[];
  questions: Question[];
  onRestart: () => void;
}) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= passingScore;
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  const incorrect = totalQuestions - score;
  const skipped = answers.filter(a => a === null).length;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto w-full flex-1">
        {/* Score Card */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg mb-8 relative overflow-hidden">
          {/* Subtle background gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 flex items-center justify-center gap-3">
              {isPassed ? <Trophy className="w-8 h-8 text-yellow-500 animate-bounce" /> : null}
              Exam Completed
            </h1>
            <p className="text-muted-foreground font-medium text-sm md:text-base">AWS Cloud Practitioner CLF-C02</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-8">
            {/* Score Circle */}
            <div className="relative w-48 h-48 drop-shadow-md">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="passedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient id="failedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="10"
                  className="text-muted/30"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke={isPassed ? 'url(#passedGradient)' : 'url(#failedGradient)'}
                  strokeWidth="12"
                  strokeDasharray={`${(percentage / 100) * (2 * Math.PI * 85)} ${2 * Math.PI * 85}`}
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className={`text-4xl font-extrabold tracking-tight ${isPassed ? 'text-emerald-500' : 'text-red-500'}`}>
                  {percentage}%
                </div>
                <div className="text-sm font-semibold text-muted-foreground mt-0.5">
                  {score} / {totalQuestions}
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="text-center md:text-left max-w-sm">
              <div
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-lg mb-4 shadow-sm ${
                  isPassed
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                    : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                }`}
              >
                {isPassed ? '✓ PASSED' : '✗ FAILED'}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {isPassed
                  ? `Congratulations! You cleared the assessment by scoring above the required ${passingScore}% passing threshold.`
                  : `You scored ${percentage}%, which is below the required ${passingScore}% passing threshold. Review your weak areas and try again!`}
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pt-8 border-t border-border">
            <div className="bg-card/50 rounded-xl border border-border p-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-1.5 text-emerald-500">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-emerald-500">{score}</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Correct</div>
            </div>
            
            <div className="bg-card/50 rounded-xl border border-border p-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-1.5 text-red-500">
                <XCircle className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-red-500">{incorrect}</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Incorrect</div>
            </div>

            <div className="bg-card/50 rounded-xl border border-border p-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-1.5 text-amber-500">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-amber-500">{skipped}</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Skipped</div>
            </div>

            <div className="bg-card/50 rounded-xl border border-border p-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-1.5 text-primary">
                <Timer className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Time Taken</div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-foreground mb-6">
            Detailed Exam Review
          </h2>

          <div className="space-y-6">
            {questions.map((question, idx) => {
              const userAnswer = answers[idx];
              const isCorrect = question.multipleSelect
                ? JSON.stringify(Array.isArray(userAnswer) ? (userAnswer as number[]).sort() : []) ===
                  JSON.stringify(Array.isArray(question.answer) ? (question.answer as number[]).sort() : [question.answer].sort())
                : userAnswer === question.answer;
              const isSkipped = userAnswer === null;

              return (
                <div 
                  key={question.id} 
                  className={`bg-card rounded-xl border p-6 shadow-sm transition-all duration-300 ${
                    isSkipped
                      ? 'border-l-4 border-l-amber-500 border-border animate-fade-in'
                      : isCorrect
                        ? 'border-l-4 border-l-emerald-500 border-border animate-fade-in'
                        : 'border-l-4 border-l-red-500 border-border animate-fade-in'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-bold text-foreground text-lg">
                      Question {idx + 1}
                      {question.multipleSelect && (
                        <span className="ml-2 text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          SELECT TWO
                        </span>
                      )}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                        isSkipped
                          ? 'bg-amber-500/10 text-amber-600 border-amber-500/20'
                          : isCorrect
                            ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
                            : 'bg-red-500/10 text-red-600 border-red-500/20'
                      }`}
                    >
                      {isSkipped ? (
                        <>
                          <AlertCircle className="w-3.5 h-3.5" /> Skipped
                        </>
                      ) : isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5" /> Incorrect
                        </>
                      )}
                    </span>
                  </div>

                  <p className="text-foreground font-semibold mb-4 leading-relaxed text-base md:text-lg">
                    {question.question}
                  </p>

                  <div className="space-y-3 mb-4">
                    {!isSkipped && (
                      <div className={`p-4 rounded-lg text-sm border flex items-start gap-3 ${
                        isCorrect 
                          ? 'bg-emerald-500/5 border-emerald-500/15 text-emerald-900 dark:text-emerald-300' 
                          : 'bg-red-500/5 border-red-500/15 text-red-900 dark:text-red-300'
                      }`}>
                        <div className="font-semibold whitespace-nowrap mt-0.5 text-foreground">Your Choice:</div>
                        <div className="leading-relaxed">
                          {Array.isArray(userAnswer)
                            ? userAnswer.map(i => `${String.fromCharCode(65 + i)}) ${question.options[i]}`).join(' AND ')
                            : `${String.fromCharCode(65 + (userAnswer as number))}) ${question.options[userAnswer as number]}`}
                        </div>
                      </div>
                    )}

                    {!isCorrect && (
                      <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-lg text-sm text-emerald-900 dark:text-emerald-300 flex items-start gap-3">
                        <div className="font-semibold whitespace-nowrap mt-0.5 text-foreground">Correct Answer:</div>
                        <div className="leading-relaxed">
                          {Array.isArray(question.answer)
                            ? (question.answer as number[]).map(i => `${String.fromCharCode(65 + i)}) ${question.options[i]}`).join(' AND ')
                            : `${String.fromCharCode(65 + (question.answer as number))}) ${question.options[question.answer as number]}`}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg border border-border/60 border-l-4 border-l-primary/60">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="text-center my-8">
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-primary/20 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            Take Exam Again
          </button>
        </div>
      </div>
      
      <footer className="py-6 border-t border-border text-center text-xs text-muted-foreground w-full mt-8 bg-card">
        AWS Practice Exam Platform &bull; Designed & Developed by Fatma Mejri
      </footer>
    </div>
  );
}
