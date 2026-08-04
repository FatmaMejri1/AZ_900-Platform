import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCourseById, getDomainById, getExamById } from '@/lib/data';
import Quiz from '@/components/quiz';

export default async function CourseQuizPage({ params }: { params: Promise<{ examId: string, domainId: string, courseId: string }> }) {
  const resolvedParams = await params;
  const exam = getExamById(resolvedParams.examId);
  const domain = getDomainById(resolvedParams.examId, resolvedParams.domainId);
  const course = getCourseById(resolvedParams.examId, resolvedParams.domainId, resolvedParams.courseId);

  if (!exam || !domain || !course) {
    notFound();
  }

  // If there are no questions yet, show a placeholder
  if (!course.questions || course.questions.length === 0) {
    return (
      <div className="min-h-screen bg-background p-8 flex flex-col">
        <div className="mb-8">
          <Link href={`/exam/${exam.id}/${domain.id}`} className="text-sm text-primary hover:underline flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Topics
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-lg w-full text-center shadow-sm">
            <div className="w-16 h-16 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
            <p className="text-muted-foreground mb-6">Questions for this topic have not been added yet. Please check back later.</p>
            <Link href={`/exam/${exam.id}/${domain.id}`} className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium transition-colors">
              Return to Topics
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const storageKey = `quiz_state_${exam.id}_${domain.id}_${course.id}`;

  return (
    <>
      <div className="absolute top-4 left-4 z-10">
        <Link href={`/exam/${exam.id}/${domain.id}`} className="text-sm font-medium text-muted-foreground hover:text-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/50 shadow-sm flex items-center transition-colors">
          <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Exit Quiz
        </Link>
      </div>
      <Quiz 
        questions={course.questions} 
        storageKey={storageKey} 
        courseTitle={course.title}
      />
    </>
  );
}
