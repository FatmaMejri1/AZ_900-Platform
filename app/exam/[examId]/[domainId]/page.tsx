import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDomainById, getExamById } from '@/lib/data';

export default async function DomainPage({ params }: { params: Promise<{ examId: string, domainId: string }> }) {
  const resolvedParams = await params;
  const exam = getExamById(resolvedParams.examId);
  const domain = getDomainById(resolvedParams.examId, resolvedParams.domainId);

  if (!exam || !domain) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-8">
          <Link href={`/exam/${exam.id}`} className="text-sm text-primary hover:underline flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Domains
          </Link>
        </div>
        
        <header className="mb-12">
          <div className="text-sm font-medium text-muted-foreground mb-2">{exam.title}</div>
          <h1 className="text-4xl font-bold mb-4">{domain.title}</h1>
          {domain.weight && (
            <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              Weight: {domain.weight}
            </div>
          )}
        </header>

        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Topics & Quizzes</h2>

        <div className="grid grid-cols-1 gap-4">
          {domain.courses.map((course) => (
            <Link key={course.id} href={`/exam/${exam.id}/${domain.id}/${course.id}`} className="block group">
              <div className="bg-card border border-border rounded-xl p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium group-hover:text-primary transition-colors">{course.title}</h3>
                  {course.description && <p className="text-muted-foreground text-sm mt-1">{course.description}</p>}
                  <p className="text-xs text-muted-foreground mt-2">{course.questions.length} Questions</p>
                </div>
                <button className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center">
                  Start Quiz
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
