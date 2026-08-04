'use client';

import { useState, useEffect } from 'react';
import { Question, PASSING_SCORE, EXAM_TIME_MINUTES } from '@/lib/quiz-data';
import QuizHeader from './quiz-header';
import QuestionCard from './question-card';
import ResultsScreen from './results-screen';
import NavigationButtons from './navigation-buttons';

interface QuizProps {
  questions: Question[];
  storageKey: string;
  courseTitle: string;
  examTitle: string;
}

export default function Quiz({ questions, storageKey, courseTitle, examTitle }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | number[] | null)[]>(new Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_MINUTES * 60);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [farthestQuestion, setFarthestQuestion] = useState(0);

  // Load state from local storage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        if (parsed.currentQuestion !== undefined) setCurrentQuestion(parsed.currentQuestion);
        if (parsed.answers !== undefined) setAnswers(parsed.answers);
        if (parsed.timeLeft !== undefined) setTimeLeft(parsed.timeLeft);
        if (parsed.submitted !== undefined) setSubmitted(parsed.submitted);
        if (parsed.farthestQuestion !== undefined) setFarthestQuestion(parsed.farthestQuestion);
      } catch (e) {
        console.error('Failed to parse saved quiz state', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save state to local storage when values change (only after loading is complete)
  useEffect(() => {
    if (!isLoaded) return;
    const stateToSave = {
      currentQuestion,
      answers,
      timeLeft,
      submitted,
      farthestQuestion
    };
    localStorage.setItem(storageKey, JSON.stringify(stateToSave));
  }, [currentQuestion, answers, timeLeft, submitted, farthestQuestion, isLoaded]);

  // Update farthest question when current question changes
  useEffect(() => {
    setFarthestQuestion(prev => Math.max(prev, currentQuestion));
  }, [currentQuestion]);

  // Timer effect
  useEffect(() => {
    if (!isLoaded || submitted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, isLoaded]);

  const handleAnswerChange = (optionIndex: number) => {
    const newAnswers = [...answers];
    const question = questions[currentQuestion];

    if (question.multipleSelect) {
      const current = newAnswers[currentQuestion] as number[] || [];
      if (current.includes(optionIndex)) {
        newAnswers[currentQuestion] = current.filter(i => i !== optionIndex);
      } else {
        newAnswers[currentQuestion] = [...current, optionIndex];
      }
    } else {
      newAnswers[currentQuestion] = newAnswers[currentQuestion] === optionIndex ? null : optionIndex;
    }

    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkip = () => {
    // Clear any partial answer and move to the next question
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = null;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const confirmSubmit = () => {
    setSubmitted(true);
    setShowConfirmation(false);
  };

  const handleRestart = () => {
    localStorage.removeItem(storageKey);
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setSubmitted(false);
    setTimeLeft(EXAM_TIME_MINUTES * 60);
    setFarthestQuestion(0);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const userAnswer = answers[idx];
      if (q.multipleSelect) {
        const sortedCorrect = Array.isArray(q.answer) ? q.answer.sort() : [q.answer];
        const sortedUser = Array.isArray(userAnswer) ? (userAnswer as number[]).sort() : [];
        if (JSON.stringify(sortedCorrect) === JSON.stringify(sortedUser)) correct++;
      } else {
        if (userAnswer === q.answer) correct++;
      }
    });
    return correct;
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-muted-foreground mt-4 font-medium animate-pulse">Loading exam progress...</p>
      </div>
    );
  }

  if (submitted) {
    return (
      <ResultsScreen
        score={calculateScore()}
        totalQuestions={questions.length}
        passingScore={PASSING_SCORE}
        timeSpent={EXAM_TIME_MINUTES * 60 - timeLeft}
        answers={answers}
        questions={questions}
        onRestart={handleRestart}
      />
    );
  }

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const isFullyAnsweredFn = (q: Question, a: number | number[] | null) => {
    if (q.multipleSelect) {
      const expectedCount = Array.isArray(q.answer) ? q.answer.length : 2;
      return Array.isArray(a) && a.length === expectedCount;
    }
    return a !== null && typeof a === 'number';
  };

  const isFullyAnswered = isFullyAnsweredFn(currentQ, currentAnswer);
  
  const hasUnanswered = answers.some((a, idx) => !isFullyAnsweredFn(questions[idx], a));

  const handleReviewSkipped = () => {
    const firstUnansweredIndex = answers.findIndex((a, idx) => !isFullyAnsweredFn(questions[idx], a));
    if (firstUnansweredIndex !== -1) {
      setCurrentQuestion(firstUnansweredIndex);
    }
  };

  // Can skip if not fully answered (partial or unanswered)
  const canSkip = !isFullyAnswered;

  // Track indices of skipped questions for the dropdown
  // A question is considered "skipped" if it's unanswered, we've gone past it (or reached it before), and it's not the current question.
  const skippedIndices = answers
    .map((a, idx) => (!isFullyAnsweredFn(questions[idx], a) && idx <= farthestQuestion && idx !== currentQuestion ? idx : -1))
    .filter(idx => idx !== -1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader
        examTitle={examTitle}
        courseTitle={courseTitle}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        timeLeft={timeLeft}
        skippedIndices={skippedIndices}
        onJumpToQuestion={(idx) => setCurrentQuestion(idx)}
      />

      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl">
          <QuestionCard
            question={currentQ}
            questionNumber={currentQuestion + 1}
            selectedAnswer={answers[currentQuestion]}
            onAnswerChange={handleAnswerChange}
            isMultiSelect={currentQ.multipleSelect || false}
          />

          <NavigationButtons
            canGoPrevious={currentQuestion > 0}
            isFullyAnswered={isFullyAnswered}
            isLastQuestion={isLastQuestion}
            canSkip={canSkip}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSkip={handleSkip}
            onSubmit={handleSubmit}
            hasUnanswered={hasUnanswered}
            onReviewSkipped={handleReviewSkipped}
          />
        </div>
      </div>

      <footer className="py-4 border-t border-border text-center text-xs text-muted-foreground bg-card">
        {courseTitle} &bull; Practice Exam Platform &bull; Developed by Fatma Mejri
      </footer>

      {showConfirmation && (
        <ConfirmationModal
          onConfirm={confirmSubmit}
          onCancel={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}

function ConfirmationModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg p-6 max-w-sm shadow-lg border border-border">
        <h2 className="text-xl font-bold text-foreground mb-4">Submit Exam?</h2>
        <p className="text-muted-foreground mb-6">
          Are you sure you want to submit your exam? You won&apos;t be able to make any changes after submission.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-border rounded-md text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
