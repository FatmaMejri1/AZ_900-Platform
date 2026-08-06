const fs = require('fs');

const rawText = `**Q1.** What does IaaS stand for?
A. Integration as a Service
B. Internet as a Service
C. Intelligence as a Service
D. Infrastructure as a Service

**Q2.** Which cloud service type provides the maximum amount of control for your cloud resources?
A. SaaS
B. PaaS
C. FaaS
D. IaaS

**Q3.** In an IaaS model, who is responsible for maintaining hardware and physical security?
A. The customer exclusively
B. The cloud provider
C. A third-party auditor
D. Shared equally with no provider role

**Q4.** In IaaS, who is responsible for operating system installation, configuration, and maintenance?
A. The customer
B. The cloud provider
C. Microsoft support only
D. Automatic patching with no customer involvement

**Q5.** In IaaS, who is typically responsible for network configuration?
A. The cloud provider only
B. Microsoft global network team only
C. The customer
D. Automatic configuration with no customer setup

**Q6.** With IaaS, you are essentially doing which of the following?
A. Using a fully managed email application
B. Building on a managed development platform only
C. Paying for analytics tools as a service
D. Renting hardware in a cloud datacenter while deciding how to use it

**Q7.** In the IaaS shared responsibility model, which stack layers does the customer typically manage?
A. Operating system through applications
B. Only applications
C. Only data
D. Servers, storage, and networking

**Q8.** In IaaS, which layers are managed by the cloud provider?
A. Applications and data
B. Servers, storage, and networking
C. Operating system and middleware
D. Runtime and middleware only

**Q9.** A lift-and-shift migration is a common scenario for which service model?
A. SaaS
B. PaaS only
C. IaaS
D. None of the above

**Q10.** Rapidly replicating development and test environments while maintaining complete control is a typical use case for:
A. SaaS
B. PaaS only
C. Managed email services
D. IaaS

**Q11.** In IaaS, database and storage configuration is the responsibility of:
A. The customer
B. The cloud provider exclusively
C. Automatic Azure defaults only
D. External consultants only

**Q12.** IaaS is described as the most ___ category of cloud services.
A. expensive
B. flexible
C. restrictive
D. automated

**Q13.** In IaaS, network connectivity to the internet is maintained by:
A. The customer datacenter team
B. On-premises ISP contracts only
C. The cloud provider
D. End users

**Q14.** Which of the following is NOT typically a customer responsibility in IaaS?
A. OS patching
B. Application deployment
C. Network configuration
D. Physical datacenter security

**Q15.** IaaS offers maximum flexibility but also the largest:
A. Operational responsibility for the customer
B. Provider control over application code
C. Restriction on customization
D. Elimination of security duties

**Q16.** What does PaaS stand for?
A. Process as a Service
B. Platform as a Service
C. Program as a Service
D. Protocol as a Service

**Q17.** PaaS is best described as a middle ground between:
A. Public cloud and private cloud only
B. On-premises and hybrid only
C. IaaS and SaaS
D. Azure and AWS only

**Q18.** In PaaS, the cloud provider typically maintains which of the following?
A. Customer application source code
B. Customer business data content only
C. End-user device management only
D. Operating systems, middleware, development tools, and analytics services

**Q19.** In PaaS, customers generally do not need to worry about licensing or patching for:
A. Operating systems and databases
B. End-user laptops
C. Office productivity apps only
D. Physical server hardware exclusively

**Q20.** In PaaS, customers primarily focus on:
A. Physical server rack maintenance
B. Application code, data, and access controls
C. Datacenter cooling systems
D. Internet backbone cabling

**Q21.** In the PaaS responsibility stack, the customer manages:
A. Runtime and middleware
B. Servers and storage
C. Applications and data
D. Networking hardware only

**Q22.** In PaaS, the provider typically manages layers from runtime through:
A. Applications only
B. Customer data classification
C. End-user training
D. Networking infrastructure

**Q23.** PaaS is well suited to provide:
A. A complete development environment without maintaining all development infrastructure
B. A fully packaged email client only
C. Raw virtual machines with no platform services
D. Physical hardware leasing without software

**Q24.** Using built-in software components to build customizable cloud applications describes a common ___ scenario.
A. SaaS email hosting
B. PaaS development framework
C. IaaS lift-and-shift
D. On-premises mainframe migration

**Q25.** Analyzing data, finding patterns, and predicting outcomes using platform tools is a common scenario for:
A. IaaS only
B. Raw storage accounts only
C. PaaS analytics and business intelligence
D. SaaS-only licensing

**Q26.** In PaaS, physical security of the datacenter is managed by:
A. The customer security team
B. Local office staff
C. End users
D. The cloud provider

**Q27.** PaaS platforms often include scalability and high availability features that can:
A. Reduce the amount of coding developers must do
B. Eliminate all need for application design
C. Remove all customer security responsibilities
D. Guarantee zero downtime forever

**Q28.** In PaaS, some networking and application security settings may be:
A. Ignored entirely
B. Shared between customer and provider depending on configuration
C. Always 100% provider-owned with no customer role
D. Always 100% customer-owned with no provider role

**Q29.** Which of the following is NOT typically managed by the provider in PaaS?
A. Middleware
B. Managed runtime
C. Application code written by the customer
D. Operating system patching

**Q30.** In PaaS, maintaining the connection to the internet is the responsibility of:
A. The customer ISP contract alone
B. Individual application users
C. On-premises firewalls only
D. The cloud provider

**Q31.** What does SaaS stand for?
A. Software as a Service
B. Storage as a Service
C. Security as a Service
D. System as a Service

**Q32.** SaaS is the most ___ cloud service model from a product perspective.
A. hardware-focused
B. complete
C. manual
D. infrastructure-heavy

**Q33.** With SaaS, you are essentially:
A. Managing raw virtual machine disks
B. Installing your own operating system patches
C. Renting or using a fully developed application
D. Building middleware from scratch

**Q34.** SaaS typically requires the least amount of:
A. provider availability
B. internet access
C. user accounts
D. Technical knowledge or expertise to employ

**Q35.** Compared to IaaS and PaaS, SaaS is generally the ___ flexible model.
A. least
B. most
C. only
D. equally most

**Q36.** In SaaS, the cloud provider manages:
A. Only physical cabling
B. Almost the entire application stack including infrastructure and platform
C. Only customer data classification policies
D. Only end-user desktop antivirus

**Q37.** In SaaS, customers primarily manage:
A. Operating system kernel patches
B. Physical server firmware
C. Data, identity and access settings, and device access posture
D. Middleware licensing for databases

**Q38.** SaaS generally has the lowest ___ for customers.
A. application features
B. provider accountability
C. internet dependency
D. Operational overhead

**Q39.** Microsoft 365, Teams, and Outlook are examples of:
A. SaaS
B. IaaS
C. PaaS development frameworks
D. Raw compute instances

**Q40.** Word, Excel, and PowerPoint online are examples of:
A. IaaS infrastructure
B. SaaS productivity applications
C. PaaS middleware
D. On-premises licensing only

**Q41.** In SaaS, which layer of the responsibility stack does the customer still manage?
A. Applications
B. Middleware
C. Data
D. Operating system

**Q42.** Which cloud service model gives the customer the LEAST control?
A. IaaS
B. PaaS
C. Hybrid cloud
D. SaaS

**Q43.** Which cloud service model gives the customer the MOST control?
A. SaaS
B. IaaS
C. SaaS email only
D. Managed SaaS analytics

**Q44.** Cloud-based finance and expense tracking tools are a common scenario for:
A. IaaS raw VMs
B. SaaS
C. Bare-metal servers
D. Custom middleware only

**Q45.** Across IaaS, PaaS, and SaaS, the cloud provider is always responsible for physical:
A. Application business logic
B. Customer stored file contents only
C. Infrastructure such as servers, storage, and networking
D. End-user password policies exclusively`;

const keysObj = {
  1: 'D', 2: 'D', 3: 'B', 4: 'A', 5: 'C',
  6: 'D', 7: 'A', 8: 'B', 9: 'C', 10: 'D',
  11: 'A', 12: 'B', 13: 'C', 14: 'D', 15: 'A',
  16: 'B', 17: 'C', 18: 'D', 19: 'A', 20: 'B',
  21: 'C', 22: 'D', 23: 'A', 24: 'B', 25: 'C',
  26: 'D', 27: 'A', 28: 'B', 29: 'C', 30: 'D',
  31: 'A', 32: 'B', 33: 'C', 34: 'D', 35: 'A',
  36: 'B', 37: 'C', 38: 'D', 39: 'A', 40: 'B',
  41: 'C', 42: 'D', 43: 'B', 44: 'B', 45: 'C'
};

const questions = [];

const blocks = rawText.split('**Q').filter(b => b.trim().length > 0);

for (const block of blocks) {
  const match = block.match(/^(\d+)\.\*\*\s+(.*?)\nA\.\s+(.*?)\nB\.\s+(.*?)\nC\.\s+(.*?)\nD\.\s+(.*)$/ms);
  if (match) {
    const id = parseInt(match[1]);
    const answerLetter = keysObj[id];
    questions.push({
      id,
      question: match[2].trim().replace(/\n/g, ' '),
      options: [
        match[3].trim().replace(/\n/g, ' '),
        match[4].trim().replace(/\n/g, ' '),
        match[5].trim().replace(/\n/g, ' '),
        match[6].trim().replace(/\n/g, ' ')
      ],
      answer: answerLetter.charCodeAt(0) - 'A'.charCodeAt(0),
      explanation:
        'The correct answer is ' +
        answerLetter +
        '. This aligns with the Cloud Service Types module (IaaS, PaaS, SaaS).'
    });
  } else {
    console.log('Failed to match:', block.substring(0, 50));
  }
}

const fileContent =
  "import { Question } from './quiz-data';\n\nexport const cloudServiceTypesQuestions: Question[] = " +
  JSON.stringify(questions, null, 2) +
  ';\n';

fs.writeFileSync('lib/az900-cloud-service-types.ts', fileContent);
console.log('Parsed ' + questions.length + ' questions. Done!');
