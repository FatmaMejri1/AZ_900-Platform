// AWS Cloud Practitioner Practice Exam - Main Application Script

class PracticeExam {
  constructor() {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.startTime = Date.now();
    this.totalTime = 90 * 60 * 1000; // 90 minutes in milliseconds
    this.timerInterval = null;
    this.examFinished = false;

    // Initialize the application
    this.init();
  }

  init() {
    this.setupEventListeners();
    
    // Load state from localStorage
    const savedState = localStorage.getItem('aws_quiz_state');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        this.currentQuestionIndex = parsed.currentQuestionIndex ?? 0;
        this.userAnswers = parsed.userAnswers ?? new Array(this.questions.length).fill(null);
        this.examFinished = parsed.examFinished ?? false;
        
        if (parsed.savedTimeLeft !== undefined) {
          this.totalTime = parsed.savedTimeLeft;
        }
      } catch (e) {
        console.error('Failed to parse saved quiz state', e);
      }
    }

    if (this.examFinished) {
      this.displayResults();
    } else {
      this.displayQuestion();
      this.startTimer();
    }
  }

  saveState() {
    const elapsed = Date.now() - this.startTime;
    const remaining = Math.max(0, this.totalTime - elapsed);
    
    const state = {
      currentQuestionIndex: this.currentQuestionIndex,
      userAnswers: this.userAnswers,
      examFinished: this.examFinished,
      savedTimeLeft: remaining
    };
    localStorage.setItem('aws_quiz_state', JSON.stringify(state));
  }

  setupEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
    document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
    document.getElementById('skipBtn').addEventListener('click', () => this.skipQuestion());
    document.getElementById('finishBtn').addEventListener('click', () => this.showConfirmation());
    document.getElementById('restartBtn').addEventListener('click', () => this.restartExam());
    document.getElementById('cancelBtn').addEventListener('click', () => this.hideConfirmation());
    document.getElementById('confirmBtn').addEventListener('click', () => this.submitExam());
    document.getElementById('modalOverlay').addEventListener('click', () => this.hideConfirmation());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.previousQuestion();
      if (e.key === 'ArrowRight') this.nextQuestion();
    });
  }

  displayQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;

    // Update progress
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = `Question ${this.currentQuestionIndex + 1}`;
    document.getElementById('questionNumber').textContent = `Question ${this.currentQuestionIndex + 1}`;
    document.getElementById('questionText').textContent = question.question;

    // Render options
    this.renderOptions(question);

    // Update button states
    this.updateButtonStates();
  }

  renderOptions(question) {
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    question.options.forEach((option, index) => {
      const isMultiple = question.isMultiple || false;
      const inputType = isMultiple ? 'checkbox' : 'radio';
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option';
      optionDiv.id = `option-${index}`;

      // Check if this option is selected
      const isSelected = this.isOptionSelected(index);
      if (isSelected) {
        optionDiv.classList.add('selected');
      }

      const input = document.createElement('input');
      input.type = inputType;
      input.id = `opt-${this.currentQuestionIndex}-${index}`;
      input.value = index;
      input.checked = isSelected;
      input.dataset.questionIndex = this.currentQuestionIndex;
      input.dataset.optionIndex = index;

      input.addEventListener('change', () => {
        if (isMultiple) {
          this.handleMultipleChoice(index);
        } else {
          this.handleSingleChoice(index);
        }
      });

      const label = document.createElement('label');
      label.htmlFor = input.id;
      label.textContent = option;

      const letterSpan = document.createElement('span');
      letterSpan.className = 'option-letter';
      letterSpan.textContent = String.fromCharCode(65 + index);

      optionDiv.appendChild(input);
      optionDiv.appendChild(letterSpan);
      optionDiv.appendChild(label);
      container.appendChild(optionDiv);

      // Make the whole option clickable
      optionDiv.addEventListener('click', (e) => {
        if (e.target !== input) {
          input.click();
        }
      });
    });
  }

  isOptionSelected(optionIndex) {
    const answer = this.userAnswers[this.currentQuestionIndex];
    if (answer === null) return false;

    if (Array.isArray(answer)) {
      return answer.includes(optionIndex);
    }
    return answer === optionIndex;
  }

  handleSingleChoice(optionIndex) {
    this.userAnswers[this.currentQuestionIndex] = optionIndex;
    document.querySelectorAll('.option').forEach((opt, idx) => {
      opt.classList.toggle('selected', idx === optionIndex);
    });
    this.updateButtonStates();
    this.saveState();
  }

  handleMultipleChoice(optionIndex) {
    let answer = this.userAnswers[this.currentQuestionIndex];
    if (!Array.isArray(answer)) {
      answer = [];
    }

    if (answer.includes(optionIndex)) {
      answer = answer.filter(a => a !== optionIndex);
    } else {
      answer.push(optionIndex);
    }

    this.userAnswers[this.currentQuestionIndex] = answer.length > 0 ? answer : null;
    this.displayQuestion();
    this.updateButtonStates();
    this.saveState();
  }

  isFullyAnswered(questionIndex) {
    const question = this.questions[questionIndex];
    const answer = this.userAnswers[questionIndex];
    if (question.isMultiple) {
      // Multi-select requires exactly 2 answers
      return Array.isArray(answer) && answer.length === 2;
    }
    // Single-select requires exactly 1 answer
    return answer !== null && !Array.isArray(answer);
  }

  updateButtonStates() {
    const fullyAnswered = this.isFullyAnswered(this.currentQuestionIndex);
    const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
    const isFirstQuestion = this.currentQuestionIndex === 0;
    const canSkip = !fullyAnswered;

    document.getElementById('prevBtn').disabled = isFirstQuestion;

    // Next: only enabled when fully answered and not last question
    document.getElementById('nextBtn').disabled = !fullyAnswered || isLastQuestion;
    document.getElementById('nextBtn').classList.toggle('hidden', isLastQuestion);

    // Finish: only enabled when fully answered and on last question
    document.getElementById('finishBtn').disabled = !fullyAnswered;
    document.getElementById('finishBtn').classList.toggle('hidden', !isLastQuestion);

    // Skip: shown when not fully answered and not on last question
    document.getElementById('skipBtn').classList.toggle('hidden', fullyAnswered || isLastQuestion);

    this.updateSkippedBadge();
  }

  updateSkippedBadge() {
    const skippedCount = this.userAnswers.filter(a => a === null).length;
    const badge = document.getElementById('skippedBadge');
    const countEl = document.getElementById('skippedCount');
    if (skippedCount > 0) {
      badge.style.display = '';
      countEl.textContent = skippedCount;
    } else {
      badge.style.display = 'none';
    }
  }

  skipQuestion() {
    // Clear any partial answer and move to next
    this.userAnswers[this.currentQuestionIndex] = null;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.displayQuestion();
      this.saveState();
      window.scrollTo(0, 0);
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.displayQuestion();
      this.saveState();
      window.scrollTo(0, 0);
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.displayQuestion();
      this.saveState();
      window.scrollTo(0, 0);
    }
  }

  showConfirmation() {
    document.getElementById('confirmationModal').classList.remove('hidden');
    document.getElementById('modalOverlay').classList.remove('hidden');
  }

  hideConfirmation() {
    document.getElementById('confirmationModal').classList.add('hidden');
    document.getElementById('modalOverlay').classList.add('hidden');
  }

  submitExam() {
    this.hideConfirmation();
    this.examFinished = true;
    clearInterval(this.timerInterval);
    this.saveState();
    this.displayResults();
  }

  displayResults() {
    // Calculate score
    const results = this.calculateScore();

    // Hide quiz section, show results section
    document.getElementById('quizSection').classList.add('hidden');
    document.getElementById('resultsSection').classList.remove('hidden');

    // Display score card
    document.getElementById('scoreNumber').textContent = results.correct;
    document.getElementById('scoreText').textContent = `/ ${this.questions.length}`;
    document.getElementById('percentageDisplay').textContent = results.percentage + '%';

    const passFail = document.getElementById('passFail');
    passFail.textContent = results.passed ? 'PASS' : 'FAIL';
    passFail.className = results.passed ? 'pass-fail pass' : 'pass-fail fail';

    // Display statistics
    document.getElementById('statTotal').textContent = this.questions.length;
    document.getElementById('statCorrect').textContent = results.correct;
    document.getElementById('statIncorrect').textContent = results.incorrect;
    document.getElementById('statTime').textContent = this.formatTime(results.timeTaken);

    // Display review
    this.displayReview(results);

    window.scrollTo(0, 0);
  }

  calculateScore() {
    let correct = 0;
    let incorrect = 0;

    this.questions.forEach((question, index) => {
      const userAnswer = this.userAnswers[index];
      const correctAnswer = question.answer;

      const isCorrect = this.checkAnswer(userAnswer, correctAnswer);
      if (isCorrect) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const percentage = Math.round((correct / this.questions.length) * 100);
    const passed = percentage >= 70;
    
    // Ensure we handle timeTaken properly based on whether timer is running
    const elapsed = Date.now() - this.startTime;
    const timeTaken = Math.min(this.totalTime, elapsed);

    return {
      correct,
      incorrect,
      percentage,
      passed,
      timeTaken
    };
  }

  checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === null) return false;

    if (Array.isArray(correctAnswer)) {
      // Multiple choice question
      if (!Array.isArray(userAnswer)) return false;
      if (userAnswer.length !== correctAnswer.length) return false;
      return correctAnswer.every(ans => userAnswer.includes(ans)) &&
             userAnswer.every(ans => correctAnswer.includes(ans));
    } else {
      // Single choice question
      return userAnswer === correctAnswer;
    }
  }

  displayReview(results) {
    const reviewSection = document.getElementById('reviewSection');
    reviewSection.innerHTML = '<h3>Exam Review</h3>';

    this.questions.forEach((question, index) => {
      const userAnswer = this.userAnswers[index];
      const correctAnswer = question.answer;
      const isCorrect = this.checkAnswer(userAnswer, correctAnswer);

      const reviewItem = document.createElement('div');
      reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

      // Question number
      const questionNum = document.createElement('div');
      questionNum.className = 'review-question-number';
      questionNum.textContent = `Question ${index + 1}`;

      // Question text
      const questionText = document.createElement('div');
      questionText.className = 'review-question-text';
      questionText.textContent = question.question;

      // User's answer
      const userAnswerDiv = document.createElement('div');
      userAnswerDiv.className = 'review-answer';

      const userAnswerLabel = document.createElement('div');
      userAnswerLabel.className = 'review-answer-label';
      userAnswerLabel.textContent = 'Your Answer:';

      const userAnswerText = document.createElement('div');
      userAnswerText.className = 'review-answer-text';

      if (userAnswer === null) {
        userAnswerText.textContent = 'Not answered';
        userAnswerText.style.color = '#999';
      } else {
        const answerIndices = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
        const answerTexts = answerIndices.map(idx => `${String.fromCharCode(65 + idx)}) ${question.options[idx]}`).join(', ');
        userAnswerText.textContent = answerTexts;
        userAnswerText.innerHTML += ` <span class="review-answer-icon">${isCorrect ? '✓' : '✗'}</span>`;
        userAnswerText.style.color = isCorrect ? '#2ecc71' : '#e74c3c';
      }

      userAnswerDiv.appendChild(userAnswerLabel);
      userAnswerDiv.appendChild(userAnswerText);

      // Correct answer (if wrong)
      let correctAnswerDiv = '';
      if (!isCorrect && userAnswer !== null) {
        correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.className = 'review-answer';

        const correctAnswerLabel = document.createElement('div');
        correctAnswerLabel.className = 'review-answer-label';
        correctAnswerLabel.textContent = 'Correct Answer:';

        const correctAnswerText = document.createElement('div');
        correctAnswerText.className = 'review-answer-text';

        const correctIndices = Array.isArray(correctAnswer) ? correctAnswer : [correctAnswer];
        const correctTexts = correctIndices.map(idx => `${String.fromCharCode(65 + idx)}) ${question.options[idx]}`).join(', ');
        correctAnswerText.textContent = correctTexts;
        correctAnswerText.innerHTML += ' <span class="review-answer-icon">✓</span>';
        correctAnswerText.style.color = '#2ecc71';

        correctAnswerDiv.appendChild(correctAnswerLabel);
        correctAnswerDiv.appendChild(correctAnswerText);
      }

      // Explanation
      const explanation = document.createElement('div');
      explanation.className = 'review-explanation';
      explanation.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;

      reviewItem.appendChild(questionNum);
      reviewItem.appendChild(questionText);
      reviewItem.appendChild(userAnswerDiv);
      if (correctAnswerDiv) {
        reviewItem.appendChild(correctAnswerDiv);
      }
      reviewItem.appendChild(explanation);

      reviewSection.appendChild(reviewItem);
    });
  }

  startTimer() {
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      const remaining = Math.max(0, this.totalTime - elapsed);

      if (remaining <= 0) {
        clearInterval(this.timerInterval);
        if (!this.examFinished) {
          this.submitExam();
        }
      }

      this.updateTimerDisplay(remaining);
      
      // Save state periodically (every 5 seconds)
      if (Math.floor(remaining / 1000) % 5 === 0) {
        this.saveState();
      }
    }, 1000);
  }

  updateTimerDisplay(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = formattedTime;

    // Change color if time is running out
    const timerElement = document.getElementById('timerDisplay');
    if (minutes < 5) {
      timerElement.style.color = '#e74c3c';
    } else {
      timerElement.style.color = 'inherit';
    }
  }

  formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }

  restartExam() {
    // Reset all data
    this.currentQuestionIndex = 0;
    this.userAnswers = new Array(this.questions.length).fill(null);
    this.startTime = Date.now();
    this.totalTime = 90 * 60 * 1000;
    this.examFinished = false;
    localStorage.removeItem('aws_quiz_state');

    // Clear existing timer
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }

    // Hide results, show quiz
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('quizSection').classList.remove('hidden');

    // Re-initialize
    this.displayQuestion();
    this.startTimer();
    window.scrollTo(0, 0);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PracticeExam();
});
