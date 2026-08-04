import Link from 'next/link';
import { exams } from '@/lib/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <header className="mb-12 text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Practice Exam Platform</h1>
          <p className="text-xl text-muted-foreground">Select an exam to start your preparation.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exams.map((exam) => (
            <Link key={exam.id} href={`/exam/${exam.id}`} className="block group">
              <div className="bg-card border border-border rounded-xl p-6 h-full shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{exam.title}</h2>
                <p className="text-muted-foreground mb-4">{exam.description}</p>
                <div className="flex items-center text-sm font-medium text-primary">
                  <span>View Domains</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <footer className="mt-auto pt-8 pb-4 border-t border-border text-center text-xs text-muted-foreground">
          Practice Exam Platform &bull; Developed by Fatma Mejri
        </footer>
      </div>
    </div>
  );
}
