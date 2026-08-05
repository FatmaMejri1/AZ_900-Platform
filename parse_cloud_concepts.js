const fs = require('fs');

const rawText = `1. What is Microsoft Azure?
- A. A single on-premises server product
- B. A cloud computing platform with an ever-expanding set of services
- C. A programming language
- D. An antivirus software suite

### 2. How many learning paths make up Azure Fundamentals that align to a specific AZ-900 exam domain?
- A. Three
- B. Two
- C. Four
- D. Five

### 3. Which AZ-900 domain area carries the highest exam weight?
- A. Describe Azure management and governance
- B. Describe Azure architecture and services
- C. All domains are weighted equally
- D. Describe cloud concepts

### 4. What is the approximate exam weight range for 'Describe cloud concepts' on the AZ-900 exam?
- A. 10-15%
- B. 25-30%
- C. 60-65%
- D. 45-50%

### 5. Is technical IT experience required before starting Azure Fundamentals?
- A. Only for the governance module
- B. Yes, it is mandatory
- C. Yes, at least 2 years
- D. No, though general IT knowledge helps

### 6. How is cloud computing best defined?
- A. A method of encrypting local files
- B. The delivery of computing services over the internet
- C. A type of offline software license
- D. The purchase of physical servers for a datacenter

### 7. Which of the following is NOT typically listed as a traditional IT infrastructure service delivered via the cloud?
- A. Networking
- B. Storage
- C. Virtual machines
- D. Physical office furniture

### 8. Cloud services expand traditional IT offerings to include which of the following?
- A. IoT, machine learning, and AI
- B. Only email hosting
- C. Only paper archiving
- D. Only physical security guards

### 9. Why doesn't cloud computing have to be constrained by physical infrastructure the way a traditional datacenter is?
- A. Because it does not use servers at all
- B. Because it only runs on mobile devices
- C. Because it is always free
- D. Because it delivers services over the internet

### 10. In the retail seasonal-launch example, what did the team do instead of buying extra physical servers months in advance?
- A. Reduced their website traffic manually
- B. Deployed additional cloud compute capacity for the launch period and scaled down after
- C. Outsourced the entire IT department
- D. Cancelled the launch

### 11. At a fundamentals level, how does cloud computing change infrastructure planning?
- A. It eliminates the need for scaling
- B. It removes the need for any planning
- C. It shifts planning from long procurement cycles to on-demand provisioning
- D. It requires longer procurement cycles than before

### 12. What advantage does the cloud's global reach provide?
- A. Teams can place services closer to users and design for regional resilience
- B. It removes the need for internet access
- C. It requires building multiple physical datacenters
- D. It guarantees zero cost

### 13. Which capability allows teams to test and recover faster in the cloud model described?
- A. Manual server installation
- B. Long hardware procurement cycles
- C. On-demand provisioning and adaptable capacity
- D. Fixed, non-adjustable infrastructure

### 14. In a traditional on-premises datacenter, who is responsible for maintaining the physical space and hardware?
- A. The cloud provider
- B. No one, it is automated
- C. Your own IT department/team
- D. The software vendor only

### 15. Under the shared responsibility model, who is responsible for physical security, power, cooling, and network connectivity?
- A. Nobody, it is unnecessary
- B. The consumer
- C. The cloud provider
- D. A third-party auditor

### 16. Under the shared responsibility model, who is always responsible for the data and information stored in the cloud?
- A. The cloud provider
- B. The internet service provider
- C. The hardware manufacturer
- D. The consumer

### 17. Who is responsible for access security, i.e., ensuring only the right people have access?
- A. The consumer
- B. It is not anyone's responsibility
- C. The cloud provider
- D. A random third party

### 18. If you use a cloud SQL database (a managed database service), who maintains the actual database engine?
- A. The cloud provider
- B. A subcontractor chosen by the consumer
- C. Neither party
- D. The consumer

### 19. If you deploy a virtual machine and install your own SQL database on it, who is responsible for database patches and updates?
- A. The database vendor exclusively
- B. No patching is required
- C. The consumer
- D. The cloud provider

### 20. Which cloud service type places the MOST responsibility on the consumer?
- A. Platform as a Service (PaaS)
- B. Function as a Service (FaaS)
- C. Software as a Service (SaaS)
- D. Infrastructure as a Service (IaaS)

### 21. Which cloud service type places the MOST responsibility on the cloud provider?
- A. None, responsibility is never shifted
- B. Software as a Service (SaaS)
- C. Infrastructure as a Service (IaaS)
- D. Platform as a Service (PaaS)

### 22. Which of the following is always the responsibility of the cloud provider, regardless of service model?
- A. The customer's user accounts
- B. The customer's application code
- C. The customer's stored data
- D. The physical datacenter, network, and hosts

### 23. In a PaaS or SaaS model, identity and access is typically described as:
- A. Entirely the provider's responsibility with no customer involvement
- B. Entirely the customer's responsibility with no provider involvement
- C. Shared: the customer manages users, roles, and policies while the provider runs the authentication platform
- D. Not applicable to cloud computing

### 24. What do cloud models define?
- A. The deployment type of cloud resources
- B. The number of employees at Microsoft
- C. The price of the exam
- D. The programming language used

### 25. Which cloud model is used exclusively by a single entity?
- A. Community cloud
- B. Public cloud
- C. Multicloud
- D. Private cloud

### 26. Which of the following is a characteristic of a private cloud?
- A. It is available to the general public
- B. It offers greater IT control but at greater cost
- C. It cannot be hosted on-site
- D. It has no capital expenditures

### 27. Who builds, controls, and maintains a public cloud?
- A. A government agency only
- B. A third-party cloud provider
- C. The end user's IT department
- D. A single dedicated organization

### 28. What is a key differentiator between public and private clouds?
- A. Private clouds are always free
- B. Public clouds cannot scale
- C. General public availability
- D. Public clouds are only accessible to a single company

### 29. What is a hybrid cloud?
- A. A public cloud that has been shut down
- B. A cloud used only for testing
- C. A computing environment using both public and private clouds in an interconnected environment
- D. A private cloud with no internet connection

### 30. Which benefit is commonly associated with a hybrid cloud approach?
- A. It requires no security management
- B. It eliminates all cloud costs
- C. It only works with a single vendor
- D. It provides the most flexibility, letting you choose where to run applications

### 31. Which cloud pricing/deployment characteristic is associated with public cloud, according to the comparison table?
- A. Hardware must be purchased for startup
- B. You have complete control over hardware
- C. Data isn't collocated with other tenants' data
- D. You pay only for what you use, with no capital expenditures to scale up

### 32. According to the comparison table, which is a drawback of private cloud?
- A. No control over resources and security
- B. It is always accessible to the public
- C. You are responsible for hardware maintenance and updates
- D. You cannot scale at all

### 33. What best describes a multicloud scenario?
- A. Using a single cloud provider exclusively
- B. Using only on-premises servers
- C. Using multiple public cloud providers
- D. Avoiding the use of any cloud provider

### 34. What is Azure Arc used for?
- A. Encrypting network traffic exclusively
- B. Managing cloud environments across public, private, hybrid, and multicloud scenarios
- C. Only managing on-premises hardware
- D. Replacing the need for Azure subscriptions

### 35. What does Azure VMware Solution allow you to do?
- A. Run VMware workloads in Azure with integration and scalability
- B. Migrate only databases, not virtual machines
- C. Delete all VMware infrastructure automatically
- D. Replace VMware with Hyper-V by force

### 36. What does the consumption-based model mean for cloud computing costs?
- A. You never pay for compute resources
- B. You pay for the IT resources you use, and nothing more
- C. You must prepay for five years of usage
- D. You pay a flat fee regardless of usage

### 37. What does CapEx stand for?
- A. Capital expenditure
- B. Cloud experience
- C. Central expenditure
- D. Capacity expansion

### 38. What does OpEx stand for?
- A. Operating exemption
- B. Operational expenditure
- C. Optional expense
- D. Open expenditure

### 39. Why is cloud computing classified as an operational expense (OpEx)?
- A. Because it requires a one-time capital investment only
- B. Because you must buy the hardware upfront
- C. Because you pay for cloud services as you consume them
- D. Because it has no ongoing cost

### 40. Which of the following is a benefit of the consumption-based model?
- A. Mandatory long-term hardware contracts
- B. Fixed capacity that cannot be changed
- C. Guaranteed idle capacity at all times
- D. No upfront costs for hardware or datacenter infrastructure

### 41. In a traditional datacenter, what happens if you overestimate future resource needs?
- A. You overspend on infrastructure that sits idle
- B. Your applications run faster
- C. You save money automatically
- D. Nothing, overestimating has no effect

### 42. In a traditional datacenter, what happens if you underestimate future resource needs?
- A. Your applications suffer degraded performance
- B. Nothing changes
- C. You automatically get more servers for free
- D. Costs are eliminated entirely

### 43. In a cloud-based model, how do you typically adjust resources to match demand?
- A. By adding virtual machines when needed and removing them when demand drops
- B. By permanently over-provisioning resources
- C. By shutting down the entire environment
- D. By ordering new physical hardware each time

### 44. What pricing model do cloud providers commonly use?
- A. Free for unlimited usage
- B. Fixed annual fee regardless of usage
- C. One-time lifetime fee
- D. Pay-as-you-go

### 45. The cloud provider maintaining underlying infrastructure like power, cooling, hardware, and networking allows the customer to focus on:
- A. Solving business problems and delivering new capabilities to users
- B. Manually cooling their own servers
- C. Physical datacenter construction
- D. Managing electrical grids`;

const keysObj = {
  1: 'B', 2: 'A', 3: 'B', 4: 'B', 5: 'D', 6: 'B', 7: 'D', 8: 'A', 9: 'D', 10: 'B',
  11: 'C', 12: 'A', 13: 'C', 14: 'C', 15: 'C', 16: 'D', 17: 'A', 18: 'A', 19: 'C', 20: 'D',
  21: 'B', 22: 'D', 23: 'C', 24: 'A', 25: 'D', 26: 'B', 27: 'B', 28: 'C', 29: 'C', 30: 'D',
  31: 'D', 32: 'C', 33: 'C', 34: 'B', 35: 'A', 36: 'B', 37: 'A', 38: 'B', 39: 'C', 40: 'D',
  41: 'A', 42: 'A', 43: 'A', 44: 'D', 45: 'A'
};

const questions = [];

const lines = rawText.split('\n');
let currentQuestion = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;
  
  if (line.includes('## ✅ Corrigé')) break;
  
  const qMatch = line.match(/^(?:### )?(\d+)\.\s+(.*)$/);
  if (qMatch) {
    if (currentQuestion) {
      questions.push(currentQuestion);
    }
    const id = parseInt(qMatch[1]);
    currentQuestion = {
      id: id,
      question: qMatch[2].trim(),
      options: [],
      answer: 0,
      explanation: "The correct answer is " + keysObj[id] + ". This aligns with the Describe Cloud Concepts module."
    };
    const answerLetter = keysObj[id];
    currentQuestion.answer = answerLetter.charCodeAt(0) - 'A'.charCodeAt(0);
  } else if (line.startsWith('- A. ')) {
    currentQuestion.options[0] = line.substring(5).trim();
  } else if (line.startsWith('- B. ')) {
    currentQuestion.options[1] = line.substring(5).trim();
  } else if (line.startsWith('- C. ')) {
    currentQuestion.options[2] = line.substring(5).trim();
  } else if (line.startsWith('- D. ')) {
    currentQuestion.options[3] = line.substring(5).trim();
  }
}
if (currentQuestion) {
  questions.push(currentQuestion);
}

const fileContent = "import { Question } from './quiz-data';\n\nexport const cloudComputingQuestions: Question[] = " + JSON.stringify(questions, null, 2) + ";\n";

fs.writeFileSync('lib/az900-cloud-computing.ts', fileContent);
console.log('Parsed ' + questions.length + ' questions. Done!');
