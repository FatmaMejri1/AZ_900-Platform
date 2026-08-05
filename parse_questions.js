const fs = require('fs');

const rawText = `1. What service model do Azure Virtual Machines represent? A) Software as a service (SaaS) B) Platform as a service (PaaS) C) Infrastructure as a service (IaaS) D) Function as a service (FaaS)
2. With Azure VMS, who controls the operating system and installed software? A) Microsoft exclusively B) The user, similar to a physical server C) No one; it's fully automated D) A third-party partner
3. What does Azure remove the need for when you use VMs? A) The need to manage any software B) The need to buy and maintain physical server hardware C) The need to patch the OS D) The need to configure networking
4. What is an Azure VM image? A) A screenshot ofthe VM's desktop B) A template that already includes an operating system and tools C) A billing document D) A network security rule
5. Which ofthe following is NOT listed as a common VM use case? A) Testing and development B) Disaster recovery C) Lift and shift migration D) Static website DNS hosting only
6. What does "datacenter extension" refer to as a VM use case? A) Physically expanding a datacenter building B) Extending an on-premises network into Azure and hosting workloads in a connected virtual network C) Adding more availability zones D) Extending a subscription's billing cycle
7. When provisioning a VM, which Of these is NOT one Of the resource choices mentioned? A) Size B) Storage disks C) Networking D) Management group assignment
8. Which VM family is best suited for burstable, cost-emcient dev/test workloads with occasional CPU spikes? A) D-series B) B- series C) M-series D) N-series
9. Which VM family is memory optimized, suited for in -memory databases and analytics? A) E-series B) F-series C) L-series D) B-series
10. Which VM family is GPU enabled, suited for AI training/inference and graphics workloads? A) M-series B) N-series C) D-series D) F-series
11. Which VM family is compute optimized for CPU-intensive application tiers? A) F-series B) L-series C) E-series D) B-series
12. Which VM family has a large memory footprint, suited for large enterprise databases? A) L-series B) N-series C) M-series D) B-series
13. In a VM name like "D2s_v5," what does the "2" represent? A) The hardware generation B) The number ofvCPUs C) Premium SSD support D) The datacenter number
14. In a VM name like "D2s_v5," what does the "s" indicate? A) Support for Premium SSD storage B) The number of vCPUs C) The VM family D) Hardware generation
15. At a fundamentals level, what is the recommended approach to selecting a VM size? A) Always choose the largest size available B) Select a family that matches workload behavior, then choose the size that meets performance needs, and scale as demand grows C) Randomly select a size and adjust later D) Always use the B-series regardless of workload
16. What do virtual machine scale sets let you do? A) Create and manage groups of identical, load-balanced VMS B) Permanently fix VM pricing C) Merge multiple subscriptions D) Replace availability zones
17. Without scale sets, what must you do manually? A) Nothing; scale sets are required for all VMS B) Keep VM configuration consistent, monitor utilization, and adjust instance counts C) Delete unused resource groups D) Configure region pairs
18. What do scale sets integrate with to distribute trafic efficiently? A) Load balancing B) Management groups C) Azure DNS only D) Sovereign regions
19. What is the purpose of virtual machine availability sets? A) To reduce billing costs only B) To improve VM resiliency inside a region by reducing the chance all VMS are affected by one event C) To replace scale sets entirely D) To increase the number ofvCPUs automatically
20. What does an "update domain" in an availability set group VMS by? A) VMS that share a potential power or network failure point B) VMS that can be rebooted together during planned maintenance C) VMS in different regions D) VMS with the same storage disk
21. What does a "fault domain" in an availability set group VMS by? A) VMS that can be rebooted together during planned maintenance B) VMS that share a potential power or network failure point C) VMS with identical vCPU counts D) VMS in the same management group
22. In regions that support Availability Zones, what design is often preferred over availability sets? A) Single VM design B) Zone-based designs, because they provide broader failure isolation C) Region pair design D) Sovereign region design
23. What is Azure Virtual Desktop? A) A physical desktop computer sold by Microsoft B) A desktop and application virtualization service that lets users securely access Windows desktops and apps remotely C) A container orchestration tool D) A VM sizing calculator
24. At a fundamentals level, how is Azure Virtual Desktop best described? A) A managed option for remote desktop access where desktops and apps stay in the cloud B) A tool exclusively for mobile app development C) A replacement for Azure Functions D) A storage-only service
25. When is Azure Virtual Desktop particularly useful? A) When a team needs centralized desktop and app access across distributed users, contractors, or hybrid workers B) Only for single-user personal computers C) Only when no identity provider is available D) Only for gaming workloads
26. What does Azure Virtual Desktop integrate with for identity and access controls? A) Azure Kubernetes Service B) Microsoft Entra ID C) Azure Container Instances D) Azure IoT Hub
27. What session types does Azure Virtual Desktop support? A) Single-session only B) Multi-session only C) Both single-session and multi-session Windows experiences D) No session-based access at all
28. What is a key limitation of virtual machines that containers help address? A) VMS cannot connect to networks B) VMS are limited to a single operating system per VM C) VMS cannot be resized D) VMS cannot be deployed in Azure
29. Unlike virtual machines, what do you NOT manage with a container? A) The application code B) The operating system C) The network configuration D) The container image
30. What is one of the most popular container engines mentioned, which Azure supports? A) Kubernetes B) Docker C) Hyper-V D) VMware
31. What service model are Azure Container Instances considered? A) Infrastructure as a service (IaaS) B) Platform as a service (PaaS) C) Software as a service (SaaS) D) Function as a service (FaaS)
32. What is a key feature ofAzure Container Apps beyond basic container instances? A) They require manual VM management B) They include built-in load balancing and scaling C) They only support Windows containers D) They eliminate the need for Docker
33. What does Azure Kubernetes Service (AKS) provide? A) A single-container hosting solution only B) A container orchestration service that manages the lifecycle Of containers, simplifying fleet management C) A virtual desktop platform D) A billing management tool
34. In a microservice architecture using containers, what is the benefit of splitting a website into separate containers for front end, back end, and storage? A) It increases COStS with no benefit B) It lets you maintain, scale, or update each part of the app independently C) It requires all parts to scale together D) It eliminates the need for load balancing
35. What compute model does Azure Functions represent? A) Infrastructure as a service B) Event-driven, serverless compute C) Container orchestration D) Desktop virtualization
36. What triggers an Azure Function to run? A) A constant polling loop B) An event, such as a REST request, timer, or message from another Azure service C) Manual VM startup D) A scheduled VM reboot
37. How does Azure charge for Azure Functions? A) A flat monthly fee regardless ofusage B) Only for the CPU time used while the function runs C) Based on the number ofVMs provisioned D) A one-time setup fee only
38. What is the difference between stateless and stateful (Durable) Functions? A) Stateless functions behave as if they restart every time; stateful functions use a context to track prior activity B) Stateless functions cost more than stateful functions C) Stateful functions cannot scale automatically D) There is no difference
39. What happens to resources when an Azure Function finishes runningQ A) They remain provisioned indefinitely B) They are automatically deallocated C) They are transferred to a VM D) They must be manually deleted
40. What are Azure AI services best suited for? A) Training custom models from scratch B) Adding intelligent features (language, speech, vision, document processing) through prebuilt APIs C) Managing physical datacenter hardware D) Hosting web applications
41. When should you use Azure Machine Learning instead ofAzure AI services? A) When you need prebuilt APIs only B) When your scenario requires custom model development, experimentation, and lifecycle management C) When you only need IoT telemetry D) When you need desktop virtualization
42. What does Azure IoT Hub enable? A) Secure, bi-directional communication between cloud services and IoT devices B) Container orchestration C) Serverless function triggers only D) Virtual desktop access
43. What does Azure IoT Edge do? A) Deletes IoT device data B) Extends cloud capabilities to edge devices so some workloads can run closer to where data is generated C) Replaces Azure IoT Hub entirely D) Provides desktop virtualization for IoT devices
44. What is Azure App Service used for? A) Building and hosting web apps, background jobs, mobile back-ends, and RESTful APIs without managing infrastructure B) Only running virtual machines C) Only managing IoT devices D) Only orchestrating containers
45. Which Of the following app types can be hosted with Azure App Service? A) Web apps only B) Web apps, API apps, WebJ0bs, and Mobile apps C) Only WebJ0bs D) Only Mobile apps`;

const keysObj = {
  1: 'C', 2: 'B', 3: 'B', 4: 'B', 5: 'D', 6: 'B', 7: 'D', 8: 'B', 9: 'A', 10: 'B',
  11: 'A', 12: 'C', 13: 'B', 14: 'A', 15: 'B', 16: 'A', 17: 'B', 18: 'A', 19: 'B', 20: 'B',
  21: 'B', 22: 'B', 23: 'B', 24: 'A', 25: 'A', 26: 'B', 27: 'C', 28: 'B', 29: 'B', 30: 'B',
  31: 'B', 32: 'B', 33: 'B', 34: 'B', 35: 'B', 36: 'B', 37: 'B', 38: 'A', 39: 'B', 40: 'B',
  41: 'B', 42: 'A', 43: 'B', 44: 'A', 45: 'B'
};

const questions = [];

const lines = rawText.split('\n');

for (let line of lines) {
  const match = line.match(/^(\d+)\. (.*?) A\) (.*?)(?: B\) (.*?))?(?: C\) (.*?))?(?: D\) (.*?))?$/);
  if (match) {
    const id = parseInt(match[1]);
    const questionBody = match[2].trim();
    const options = [
      match[3] ? match[3].trim() : "",
      match[4] ? match[4].trim() : "",
      match[5] ? match[5].trim() : "",
      match[6] ? match[6].trim() : ""
    ].filter(o => o);
    
    const answerLetter = keysObj[id];
    const answerIdx = answerLetter.charCodeAt(0) - 'A'.charCodeAt(0);
    
    questions.push({
      id: id,
      question: questionBody,
      options: options,
      answer: answerIdx,
      explanation: "The correct answer is " + answerLetter + ". This aligns with Azure's Compute Services module."
    });
  } else {
    console.log('Failed to match:', line);
  }
}

const fileContent = "import { Question } from './quiz-data';\n\nexport const computeQuestions: Question[] = " + JSON.stringify(questions, null, 2) + ";\n";

fs.writeFileSync('lib/az900-compute.ts', fileContent);
console.log('Done!');
