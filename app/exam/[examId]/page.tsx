import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getExamById } from '@/lib/data';

export default async function ExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const resolvedParams = await params;
  const exam = getExamById(resolvedParams.examId);

  if (!exam) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-sm text-primary hover:underline flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Exams
          </Link>
        </div>
        
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{exam.title}</h1>
          <p className="text-xl text-muted-foreground">{exam.description}</p>
        </header>

        <h2 className="text-2xl font-semibold mb-6 border-b border-border pb-2">Exam Domains</h2>

        <div className="space-y-6">
          {exam.domains.map((domain, index) => (
            <Link key={domain.id} href={`/exam/${exam.id}/${domain.id}`} className="block group">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    Domain {index + 1} {domain.weight && <span className="ml-2 px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">{domain.weight}</span>}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{domain.title}</h3>
                  <p className="text-muted-foreground mt-2">{domain.courses.length} {domain.courses.length === 1 ? 'Topic' : 'Topics'}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center text-primary font-medium">
                  <span>View Topics</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
