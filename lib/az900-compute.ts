import { Question } from './quiz-data';

export const computeQuestions: Question[] = [
  {
    "id": 1,
    "question": "What service model do Azure Virtual Machines represent?",
    "options": [
      "Software as a service (SaaS)",
      "Platform as a service (PaaS)",
      "Infrastructure as a service (IaaS)",
      "Function as a service (FaaS)"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Compute Services module."
  },
  {
    "id": 2,
    "question": "With Azure VMS, who controls the operating system and installed software?",
    "options": [
      "Microsoft exclusively",
      "The user, similar to a physical server",
      "No one; it's fully automated",
      "A third-party partner"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 3,
    "question": "What does Azure remove the need for when you use VMs?",
    "options": [
      "The need to manage any software",
      "The need to buy and maintain physical server hardware",
      "The need to patch the OS",
      "The need to configure networking"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 4,
    "question": "What is an Azure VM image?",
    "options": [
      "A screenshot ofthe VM's desktop",
      "A template that already includes an operating system and tools",
      "A billing document",
      "A network security rule"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 5,
    "question": "Which ofthe following is NOT listed as a common VM use case?",
    "options": [
      "Testing and development",
      "Disaster recovery",
      "Lift and shift migration",
      "Static website DNS hosting only"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Compute Services module."
  },
  {
    "id": 6,
    "question": "What does \"datacenter extension\" refer to as a VM use case?",
    "options": [
      "Physically expanding a datacenter building",
      "Extending an on-premises network into Azure and hosting workloads in a connected virtual network",
      "Adding more availability zones",
      "Extending a subscription's billing cycle"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 7,
    "question": "When provisioning a VM, which Of these is NOT one Of the resource choices mentioned?",
    "options": [
      "Size",
      "Storage disks",
      "Networking",
      "Management group assignment"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Compute Services module."
  },
  {
    "id": 8,
    "question": "Which VM family is best suited for burstable, cost-emcient dev/test workloads with occasional CPU spikes?",
    "options": [
      "D-series",
      "B- series",
      "M-series",
      "N-series"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 9,
    "question": "Which VM family is memory optimized, suited for in -memory databases and analytics?",
    "options": [
      "E-series",
      "F-series",
      "L-series",
      "B-series"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 10,
    "question": "Which VM family is GPU enabled, suited for AI training/inference and graphics workloads?",
    "options": [
      "M-series",
      "N-series",
      "D-series",
      "F-series"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 11,
    "question": "Which VM family is compute optimized for CPU-intensive application tiers?",
    "options": [
      "F-series",
      "L-series",
      "E-series",
      "B-series"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 12,
    "question": "Which VM family has a large memory footprint, suited for large enterprise databases?",
    "options": [
      "L-series",
      "N-series",
      "M-series",
      "B-series"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Compute Services module."
  },
  {
    "id": 13,
    "question": "In a VM name like \"D2s_v5,\" what does the \"2\" represent?",
    "options": [
      "The hardware generation",
      "The number ofvCPUs",
      "Premium SSD support",
      "The datacenter number"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 14,
    "question": "In a VM name like \"D2s_v5,\" what does the \"s\" indicate?",
    "options": [
      "Support for Premium SSD storage",
      "The number of vCPUs",
      "The VM family",
      "Hardware generation"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 15,
    "question": "At a fundamentals level, what is the recommended approach to selecting a VM size?",
    "options": [
      "Always choose the largest size available",
      "Select a family that matches workload behavior, then choose the size that meets performance needs, and scale as demand grows",
      "Randomly select a size and adjust later",
      "Always use the B-series regardless of workload"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 16,
    "question": "What do virtual machine scale sets let you do?",
    "options": [
      "Create and manage groups of identical, load-balanced VMS",
      "Permanently fix VM pricing",
      "Merge multiple subscriptions",
      "Replace availability zones"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 17,
    "question": "Without scale sets, what must you do manually?",
    "options": [
      "Nothing; scale sets are required for all VMS",
      "Keep VM configuration consistent, monitor utilization, and adjust instance counts",
      "Delete unused resource groups",
      "Configure region pairs"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 18,
    "question": "What do scale sets integrate with to distribute trafic efficiently?",
    "options": [
      "Load balancing",
      "Management groups",
      "Azure DNS only",
      "Sovereign regions"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 19,
    "question": "What is the purpose of virtual machine availability sets?",
    "options": [
      "To reduce billing costs only",
      "To improve VM resiliency inside a region by reducing the chance all VMS are affected by one event",
      "To replace scale sets entirely",
      "To increase the number ofvCPUs automatically"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 20,
    "question": "What does an \"update domain\" in an availability set group VMS by?",
    "options": [
      "VMS that share a potential power or network failure point",
      "VMS that can be rebooted together during planned maintenance",
      "VMS in different regions",
      "VMS with the same storage disk"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 21,
    "question": "What does a \"fault domain\" in an availability set group VMS by?",
    "options": [
      "VMS that can be rebooted together during planned maintenance",
      "VMS that share a potential power or network failure point",
      "VMS with identical vCPU counts",
      "VMS in the same management group"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 22,
    "question": "In regions that support Availability Zones, what design is often preferred over availability sets?",
    "options": [
      "Single VM design",
      "Zone-based designs, because they provide broader failure isolation",
      "Region pair design",
      "Sovereign region design"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 23,
    "question": "What is Azure Virtual Desktop?",
    "options": [
      "A physical desktop computer sold by Microsoft",
      "A desktop and application virtualization service that lets users securely access Windows desktops and apps remotely",
      "A container orchestration tool",
      "A VM sizing calculator"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 24,
    "question": "At a fundamentals level, how is Azure Virtual Desktop best described?",
    "options": [
      "A managed option for remote desktop access where desktops and apps stay in the cloud",
      "A tool exclusively for mobile app development",
      "A replacement for Azure Functions",
      "A storage-only service"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 25,
    "question": "When is Azure Virtual Desktop particularly useful?",
    "options": [
      "When a team needs centralized desktop and app access across distributed users, contractors, or hybrid workers",
      "Only for single-user personal computers",
      "Only when no identity provider is available",
      "Only for gaming workloads"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 26,
    "question": "What does Azure Virtual Desktop integrate with for identity and access controls?",
    "options": [
      "Azure Kubernetes Service",
      "Microsoft Entra ID",
      "Azure Container Instances",
      "Azure IoT Hub"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 27,
    "question": "What session types does Azure Virtual Desktop support?",
    "options": [
      "Single-session only",
      "Multi-session only",
      "Both single-session and multi-session Windows experiences",
      "No session-based access at all"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Compute Services module."
  },
  {
    "id": 28,
    "question": "What is a key limitation of virtual machines that containers help address?",
    "options": [
      "VMS cannot connect to networks",
      "VMS are limited to a single operating system per VM",
      "VMS cannot be resized",
      "VMS cannot be deployed in Azure"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 29,
    "question": "Unlike virtual machines, what do you NOT manage with a container?",
    "options": [
      "The application code",
      "The operating system",
      "The network configuration",
      "The container image"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 30,
    "question": "What is one of the most popular container engines mentioned, which Azure supports?",
    "options": [
      "Kubernetes",
      "Docker",
      "Hyper-V",
      "VMware"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 31,
    "question": "What service model are Azure Container Instances considered?",
    "options": [
      "Infrastructure as a service (IaaS)",
      "Platform as a service (PaaS)",
      "Software as a service (SaaS)",
      "Function as a service (FaaS)"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 32,
    "question": "What is a key feature ofAzure Container Apps beyond basic container instances?",
    "options": [
      "They require manual VM management",
      "They include built-in load balancing and scaling",
      "They only support Windows containers",
      "They eliminate the need for Docker"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 33,
    "question": "What does Azure Kubernetes Service (AKS) provide?",
    "options": [
      "A single-container hosting solution only",
      "A container orchestration service that manages the lifecycle Of containers, simplifying fleet management",
      "A virtual desktop platform",
      "A billing management tool"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 34,
    "question": "In a microservice architecture using containers, what is the benefit of splitting a website into separate containers for front end, back end, and storage?",
    "options": [
      "It increases COStS with no benefit",
      "It lets you maintain, scale, or update each part of the app independently",
      "It requires all parts to scale together",
      "It eliminates the need for load balancing"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 35,
    "question": "What compute model does Azure Functions represent?",
    "options": [
      "Infrastructure as a service",
      "Event-driven, serverless compute",
      "Container orchestration",
      "Desktop virtualization"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 36,
    "question": "What triggers an Azure Function to run?",
    "options": [
      "A constant polling loop",
      "An event, such as a REST request, timer, or message from another Azure service",
      "Manual VM startup",
      "A scheduled VM reboot"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 37,
    "question": "How does Azure charge for Azure Functions?",
    "options": [
      "A flat monthly fee regardless ofusage",
      "Only for the CPU time used while the function runs",
      "Based on the number ofVMs provisioned",
      "A one-time setup fee only"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 38,
    "question": "What is the difference between stateless and stateful (Durable) Functions?",
    "options": [
      "Stateless functions behave as if they restart every time; stateful functions use a context to track prior activity",
      "Stateless functions cost more than stateful functions",
      "Stateful functions cannot scale automatically",
      "There is no difference"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 39,
    "question": "What happens to resources when an Azure Function finishes runningQ",
    "options": [
      "They remain provisioned indefinitely",
      "They are automatically deallocated",
      "They are transferred to a VM",
      "They must be manually deleted"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 40,
    "question": "What are Azure AI services best suited for?",
    "options": [
      "Training custom models from scratch",
      "Adding intelligent features (language, speech, vision, document processing) through prebuilt APIs",
      "Managing physical datacenter hardware",
      "Hosting web applications"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 41,
    "question": "When should you use Azure Machine Learning instead ofAzure AI services?",
    "options": [
      "When you need prebuilt APIs only",
      "When your scenario requires custom model development, experimentation, and lifecycle management",
      "When you only need IoT telemetry",
      "When you need desktop virtualization"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 42,
    "question": "What does Azure IoT Hub enable?",
    "options": [
      "Secure, bi-directional communication between cloud services and IoT devices",
      "Container orchestration",
      "Serverless function triggers only",
      "Virtual desktop access"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 43,
    "question": "What does Azure IoT Edge do?",
    "options": [
      "Deletes IoT device data",
      "Extends cloud capabilities to edge devices so some workloads can run closer to where data is generated",
      "Replaces Azure IoT Hub entirely",
      "Provides desktop virtualization for IoT devices"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  },
  {
    "id": 44,
    "question": "What is Azure App Service used for?",
    "options": [
      "Building and hosting web apps, background jobs, mobile back-ends, and RESTful APIs without managing infrastructure",
      "Only running virtual machines",
      "Only managing IoT devices",
      "Only orchestrating containers"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Compute Services module."
  },
  {
    "id": 45,
    "question": "Which Of the following app types can be hosted with Azure App Service?",
    "options": [
      "Web apps only",
      "Web apps, API apps, WebJ0bs, and Mobile apps",
      "Only WebJ0bs",
      "Only Mobile apps"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Compute Services module."
  }
];
