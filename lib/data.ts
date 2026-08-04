import { Question } from './quiz-data';
import { coreComponentsQuestions } from './az900-core-components';

export interface Course {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface Domain {
  id: string;
  title: string;
  weight?: string;
  courses: Course[];
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  domains: Domain[];
}

export const exams: Exam[] = [
  {
    id: 'az-900',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    description: 'Master the basics of cloud computing and Azure services.',
    domains: [
      {
        id: 'domain-1',
        title: 'Cloud Concepts',
        weight: '25-30%',
        courses: [
          { id: 'cloud-computing', title: 'Cloud Computing', questions: [] },
          { id: 'benefits-of-cloud', title: 'Benefits of Cloud', questions: [] },
          { id: 'cloud-service-types', title: 'Cloud Service Types', questions: [] }
        ]
      },
      {
        id: 'domain-2',
        title: 'Azure Architecture & Services',
        weight: '35-40%',
        courses: [
          { id: 'core-components', title: 'Core Components', questions: coreComponentsQuestions },
          { id: 'compute-networking', title: 'Compute & Networking', questions: [] },
          { id: 'storage', title: 'Storage', questions: [] },
          { id: 'identity-security', title: 'Identity & Security', questions: [] }
        ]
      },
      {
        id: 'domain-3',
        title: 'Azure Management & Governance',
        weight: '30-35%',
        courses: [
          { id: 'cost-management', title: 'Cost Management', questions: [] },
          { id: 'governance-compliance', title: 'Governance & Compliance', questions: [] },
          { id: 'manage-deploy-resources', title: 'Manage & Deploy Resources', questions: [] },
          { id: 'monitoring-tools', title: 'Monitoring Tools', questions: [] }
        ]
      }
    ]
  }
];

export function getExamById(id: string): Exam | undefined {
  return exams.find(e => e.id === id);
}

export function getDomainById(examId: string, domainId: string): Domain | undefined {
  const exam = getExamById(examId);
  return exam?.domains.find(d => d.id === domainId);
}

export function getCourseById(examId: string, domainId: string, courseId: string): Course | undefined {
  const domain = getDomainById(examId, domainId);
  return domain?.courses.find(c => c.id === courseId);
}
