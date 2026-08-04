import fs from 'fs';

const text = `
**1.** What is Microsoft Azure best described as?
A) A single data storage product
B) A continually expanding set of cloud services
C) An on-premises server management tool
D) A programming language

**2.** Which of the following is NOT listed as something Azure helps you do?
A) Run existing applications on virtual machines
B) Explore intelligent bots and generative AI
C) Manufacture physical computer hardware
D) Modernize workloads over time

**3.** According to the module, what is often the starting point for teams new to the cloud?
A) Building AI models from scratch
B) Moving existing applications to virtual machines
C) Migrating directly to event-driven services
D) Deploying IoT sensors

**4.** Which Azure offering would you use to add language, vision, and speech capabilities to an application?
A) Azure Traffic Manager
B) Azure AI services / Azure OpenAI Service
C) Azure DNS
D) Azure Resource Manager

**5.** In the practical example of an app with seasonal demand spikes, what can you do in Azure as demand drops?
A) Nothing; capacity is fixed
B) Scale resources back down so you're not paying for unused capacity
C) Migrate to a different cloud provider
D) Delete the application

**6.** What is one benefit Azure claims by "unifying" technology?
A) Simplifying platform management
B) Eliminating the need for any subscription
C) Removing the need for datacenters
D) Guaranteeing zero cost

**7.** What is created automatically when you create an Azure account for your own workloads?
A) A resource group
B) A subscription
C) A management group
D) An availability zone

**8.** Why might a team use a single Azure account with separate subscriptions?
A) To separate development, testing, and production workloads
B) Because Azure requires a new account for each resource
C) To avoid using resource groups
D) Because subscriptions are free but accounts cost money

**9.** How can you purchase Azure access, according to the module?
A) Only directly from Microsoft
B) Directly from Microsoft, through a Microsoft representative, or through a Microsoft partner
C) Only through third-party resellers
D) Only via the Azure free account

**10.** What do Cloud Solution Provider partners offer?
A) Free unlimited Azure credits
B) A range of complete managed-cloud solutions for Azure
C) Physical datacenter hardware
D) Direct access to Microsoft Entra ID source code

**11.** How long does the Azure free account provide free access to popular Azure products?
A) 3 months
B) 6 months
C) 12 months
D) 24 months

**12.** How many services does the Azure free account give access to that are always free?
A) More than 20
B) More than 40
C) More than 65
D) More than 100

**13.** What do you need to sign up for an Azure free account?
A) A phone number, a credit card, and a Microsoft or GitHub account
B) Only an email address
C) A government-issued ID and a bank statement
D) A business tax ID

**14.** What is the credit card information used for when signing up for the Azure free account?
A) Immediate billing
B) Identity verification only
C) Setting a spending cap
D) Nothing; it isn't required

**15.** What credit does the Azure free student account provide?
A) $50
B) $100
C) $200
D) $500

**16.** How long is the free access period for the Azure free student account?
A) 6 months
B) 12 months
C) 18 months
D) 24 months

**17.** What is a key difference between the free student account and the standard free account?
A) The student account requires a credit card, the standard one doesn't
B) You can sign up for the student account without a credit card
C) The student account has no free services
D) The student account never expires

**18.** What is the foundational physical building block of Azure's infrastructure?
A) Regions
B) Availability zones
C) Datacenters
D) Management groups

**19.** Do users typically interact directly with individual Azure datacenters?
A) Yes, always
B) No, datacenters are grouped into regions and availability zones instead
C) Only in sovereign regions
D) Only for VM deployments

**20.** What tool does the module mention for interactively exploring Azure's underlying infrastructure?
A) Azure Portal Explorer
B) The Global infrastructure site
C) Azure Monitor
D) Azure Resource Graph

**21.** What is an Azure region?
A) A single server rack
B) A geographical area containing at least one datacenter, networked together with low latency
C) A billing boundary only
D) A synonym for availability zone

**22.** What must you often choose when deploying a resource in Azure?
A) A management group
B) A region
C) A sovereign account
D) A resource ID

**23.** Which of these is an example of a global Azure service that does NOT require selecting a specific region?
A) Virtual Machines
B) Microsoft Entra ID
C) Managed Disks
D) Zone-redundant storage

**24.** Why might certain VM sizes or storage types only be available in specific regions?
A) Some services or VM features are only available in certain regions
B) Azure randomly restricts services
C) All regions offer identical services
D) Region restrictions were phased out

**25.** What controls how resources are balanced within a region?
A) The customer manually assigns resources
B) Azure intelligently assigns and controls resources within each region
C) A third-party load balancer
D) Resource groups

**26.** True or False: Every Azure region has the same exact set of available services and VM sizes.
A) True
B) False

**27.** What is an availability zone?
A) A billing category
B) A physically separate datacenter within an Azure region
C) A type of virtual network
D) A backup subscription

**28.** What is each availability zone equipped with?
A) Shared power and cooling with other zones
B) Independent power, cooling, and networking
C) A single shared server rack
D) No networking infrastructure

**29.** How are availability zones connected to each other?
A) Public internet only
B) High-speed, private fiber-optic networks
C) Satellite links
D) They are not connected

**30.** What is the minimum number of separate availability zones present in all availability zone-enabled regions?
A) One
B) Two
C) Three
D) Five

**31.** Do all Azure regions currently support availability zones?
A) Yes, all of them
B) No, not all regions support availability zones
C) Only sovereign regions support them
D) Only paired regions support them

**32.** What type of Azure service requires you to pin a resource to a specific zone (e.g., VMs, managed disks)?
A) Non-regional services
B) Zone-redundant services
C) Zonal services
D) Global services

**33.** What type of service automatically replicates across zones, such as zone-redundant storage or SQL Database?
A) Zonal services
B) Zone-redundant services
C) Non-regional services
D) Sovereign services

**34.** What is a potential downside of duplicating services and replicating data across availability zones?
A) It's technically impossible
B) There could be a cost to duplicating services and transferring data between zones
C) It disables the free account
D) It removes access to Microsoft Entra ID

**35.** What is the purpose of Azure region pairs?
A) To provide even further resilience beyond availability zones
B) To reduce billing costs
C) To replace availability zones entirely
D) To assign management groups

**36.** How far apart are most paired Azure regions within the same geography?
A) At least 50 miles
B) At least 100 miles
C) At least 300 miles
D) At least 1,000 miles

**37.** Which of the following is given as an example of a region pair?
A) West US paired with East US
B) China East paired with US Gov Virginia
C) Brazil South paired with Italy North
D) US DoD Central paired with China North

**38.** In a large-scale Azure outage affecting a region pair, what happens?
A) Both regions are restored simultaneously with equal priority always
B) One region out of every pair is prioritized to be restored as quickly as possible
C) Neither region is prioritized
D) The customer must manually request restoration

**39.** What is unique about Brazil South's region pairing?
A) It has no pair at all
B) It is paired in only one direction, with South Central US as its secondary region
C) It is paired with three other regions simultaneously
D) It is a sovereign region

**40.** Which regions are noted as NOT having a traditional region pair, relying instead on availability zones and geo-redundant storage?
A) West US and East US
B) Italy North, Poland Central, and Israel Central
C) China East and China North
D) US Gov Virginia and US Gov Arizona

**41.** What are Azure sovereign regions?
A) Regions with faster networking than normal regions
B) Instances of Azure that are isolated from the main instance of Azure, often for compliance or legal purposes
C) Regions reserved exclusively for free accounts
D) A deprecated Azure feature

**42.** Who operates the China East and China North sovereign regions?
A) Microsoft directly, with no partners involved
B) A unique partnership between Microsoft and 21Vianet, where Microsoft doesn't directly maintain the datacenters
C) The Chinese government exclusively
D) A third-party unrelated to Microsoft

**43.** Which statement about resource groups is correct?
A) A resource can belong to multiple resource groups at once
B) Every resource must belong to exactly one resource group, and resource groups can't be nested
C) Resource groups can be renamed at any time after creation
D) Deleting a resource group only deletes some resources inside it

**44.** What are the two types of Azure subscription boundaries mentioned in the module?
A) Regional boundary and Zonal boundary
B) Billing boundary and Access control boundary
C) Compliance boundary and Network boundary
D) Tenant boundary and Root boundary

**45.** How deep can Azure management groups be nested, and what sits above all management groups in a tenant?
A) Three levels deep; a Resource Group sits above all
B) Six levels deep (not counting root or subscription level); a single top-level Tenant Root Group sits above all
C) Unlimited levels; a Subscription sits above all
D) Two levels deep; an Availability Zone sits above all
`;

const answersText = `1. B  2. C  3. B  4. B  5. B  6. A
7. B  8. A  9. B  10. B  11. C  12. C  13. A  14. B
15. B  16. B  17. B
18. C  19. B  20. B  21. B  22. B  23. B  24. A  25. B  26. B
27. B  28. B  29. B  30. C  31. B  32. C  33. B  34. B
35. A  36. C  37. A  38. B  39. B  40. B
41. B  42. B
43. B  44. B  45. B`;

const answerMap = {};
const answerRegex = /(\d+)\.\s+([A-D])/g;
let m;
while ((m = answerRegex.exec(answersText)) !== null) {
  const id = parseInt(m[1], 10);
  const letter = m[2];
  answerMap[id] = letter.charCodeAt(0) - 65; // A=0, B=1, C=2, D=3
}

const lines = text.split('\n');
const questions = [];
let currentQuestion = null;

for (const line of lines) {
  const qMatch = line.match(/^\*\*(\d+)\.\*\*\s+(.*)/);
  if (qMatch) {
    if (currentQuestion) {
      questions.push(currentQuestion);
    }
    const id = parseInt(qMatch[1], 10);
    currentQuestion = {
      id: id,
      question: qMatch[2].trim(),
      options: [],
      answer: answerMap[id],
      explanation: "The correct answer is " + String.fromCharCode(65 + answerMap[id]) + ". This aligns with Azure's core architectural components as described in the AZ-900 documentation."
    };
    continue;
  }
  
  const optMatch = line.match(/^([A-D])\)\s+(.*)/);
  if (optMatch && currentQuestion) {
    // Only add if we haven't reached 4 options (to avoid double parsing or issues)
    currentQuestion.options.push(optMatch[2].trim());
  } else if (line.trim().length > 0 && !line.startsWith("**") && currentQuestion) {
      // Might be a multi-line question text, let's append it
      // if we haven't started options yet
      if (currentQuestion.options.length === 0) {
          currentQuestion.question += " " + line.trim();
      }
  }
}
if (currentQuestion) {
  questions.push(currentQuestion);
}

const output = `import { Question } from './quiz-data';

export const coreComponentsQuestions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

fs.writeFileSync('lib/az900-core-components.ts', output);
console.log('Done writing ' + questions.length + ' questions.');
