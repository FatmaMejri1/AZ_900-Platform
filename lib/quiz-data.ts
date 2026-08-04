export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number | number[];
  explanation: string;
  multipleSelect?: boolean;
}

export const PASSING_SCORE = 70;
export const EXAM_TIME_MINUTES = 90;

export const questions: Question[] = [
  {
    id: 1,
    question: "Which service can a customer use to set up a management payer account to view consolidated billing reports?",
    options: [
      "AWS Budgets",
      "Amazon Macie",
      "Amazon QuickSight",
      "AWS Organizations"
    ],
    answer: 3,
    explanation: "AWS Organizations allows you to consolidate multiple AWS accounts and manage them centrally, including consolidated billing reports."
  },
  {
    id: 2,
    question: "Which AWS services or features can control VPC traffic? (Select TWO.)",
    options: [
      "Security groups",
      "AWS Direct Connect",
      "Amazon GuardDuty",
      "Network ACLs",
      "Amazon Connect"
    ],
    answer: [0,3],
    explanation: "Security groups and Network ACLs are both firewall mechanisms that control traffic in and out of a VPC. Security groups operate at the instance level, while Network ACLs operate at the subnet level.",
    multipleSelect: true
  },
  {
    id: 3,
    question: "Which tasks are the customer's responsibility, according to the AWS shared responsibility model? (Select TWO.)",
    options: [
      "Patch the guest operating system",
      "Physically secure the data center hardware",
      "Patch the network hardware",
      "Configure firewalls",
      "Decommission deprecated storage devices"
    ],
    answer: [0,3],
    explanation: "Customer responsibilities include patching guest operating systems and configuring firewalls. AWS is responsible for physical infrastructure and hardware.",
    multipleSelect: true
  },
  {
    id: 4,
    question: "Which benefit does Amazon Rekognition provide?",
    options: [
      "The ability to place watermarks on images",
      "The ability to detect objects that appear in pictures",
      "The ability to resize millions of images automatically",
      "The ability to bid on object detection jobs"
    ],
    answer: 1,
    explanation: "Amazon Rekognition is an image recognition service that can detect objects, faces, text, and scenes in images and videos."
  },
  {
    id: 5,
    question: "Which AWS service can generate a finding when personally identifiable information (PII) is stored within an Amazon S3 bucket?",
    options: [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    answer: 1,
    explanation: "Amazon Macie is a data security service that uses machine learning to automatically discover, classify, and protect sensitive data, including PII, in S3 buckets."
  },
  {
    id: 6,
    question: "What are characteristics of AWS IAM users and groups? (Select TWO.)",
    options: [
      "Groups can be nested and can contain other groups",
      "A user can be a member of multiple groups",
      "Groups can contain users only and cannot be nested",
      "A user can only be a member of a single group at one time",
      "All new users are automatically added to a default group"
    ],
    answer: [1,2],
    explanation: "Users can be members of multiple groups. Groups cannot be nested—they can only contain users directly.",
    multipleSelect: true
  },
  {
    id: 7,
    question: "A company wants its employees to have access to virtual desktop infrastructure to securely access company-provided desktops through the employees' personal devices. Which AWS service should the company use to meet these requirements?",
    options: [
      "Amazon AppStream 2.0",
      "AWS AppSync",
      "Amazon FSx for Windows File Server",
      "Amazon WorkSpaces"
    ],
    answer: 3,
    explanation: "Amazon WorkSpaces provides managed desktop computing service that allows users to securely access desktops from any device."
  },
  {
    id: 8,
    question: "Which responsibility is shared between the user and AWS?",
    options: [
      "Provide a key for Amazon S3 client-side encryption",
      "Configure an Amazon EC2 instance",
      "Control the environment of physical AWS data centers",
      "Provide awareness and training"
    ],
    answer: 3,
    explanation: "Both AWS and the customer share responsibility for awareness and training. AWS provides training for their infrastructure, while customers are responsible for training their own staff."
  },
  {
    id: 9,
    question: "Which AWS service or tool can a company use to visualize, understand, and manage AWS spending and usage over time?",
    options: [
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    answer: 2,
    explanation: "AWS Cost Explorer is the primary tool for visualizing, understanding, and managing AWS spending and usage trends over time."
  },
  {
    id: 10,
    question: "A large company has a workload that requires hardware to remain on premises. The company wants to use the same management and control plane services that it currently uses on AWS. Which AWS service should the company use to meet these requirements?",
    options: [
      "AWS Device Farm",
      "AWS Fargate",
      "AWS Outposts",
      "AWS Ground Station"
    ],
    answer: 2,
    explanation: "AWS Outposts brings AWS infrastructure and services on premises, allowing companies to use the same AWS management plane and services while keeping hardware on-site."
  },
  {
    id: 11,
    question: "Which AWS service can help a company detect an outage of its website servers and redirect users to alternate servers?",
    options: [
      "Amazon CloudFront",
      "Amazon GuardDuty",
      "Amazon Route 53",
      "AWS Trusted Advisor"
    ],
    answer: 2,
    explanation: "Amazon Route 53 is a DNS service that can perform health checks and automatically redirect traffic to healthy servers."
  },
  {
    id: 12,
    question: "A company wants to ensure that two Amazon EC2 instances are in separate data centers with minimal communication latency between the data centers. How can the company meet this requirement?",
    options: [
      "Place the EC2 instances in two separate AWS Regions connected with a VPC peering connection",
      "Place the EC2 instances in two separate Availability Zones within the same AWS Region",
      "Place one EC2 instance on premises and the other in an AWS Region. Then connect them by using an AWS VPN connection",
      "Place both EC2 instances in a placement group for dedicated bandwidth"
    ],
    answer: 1,
    explanation: "Availability Zones are separate data centers within the same region with low-latency connectivity, providing fault tolerance while minimizing communication latency."
  },
  {
    id: 13,
    question: "Which AWS Support plan includes a designated AWS technical account manager (TAM)?",
    options: [
      "AWS Business Support",
      "AWS Enterprise Support",
      "AWS Basic Support",
      "AWS Developer Support"
    ],
    answer: 1,
    explanation: "AWS Enterprise Support includes a designated Technical Account Manager (TAM) to help with architecture optimization and support."
  },
  {
    id: 14,
    question: "A company has a stateless application that can handle interruptions. The application must be available all day and night. Traffic increases heavily during business hours. Which instance types for base and peak traffic are MOST cost-efficient to meet these requirements?",
    options: [
      "Reserved Instances for both the base and peak traffic",
      "Reserved Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet",
      "On-Demand Instances for base traffic and On-Demand Instances with auto scaling for peak traffic",
      "On-Demand Instances for base traffic and Spot Instances for peak traffic using an Amazon EC2 Fleet"
    ],
    answer: 1,
    explanation: "Use Reserved Instances for baseline guaranteed capacity and Spot Instances for variable peak traffic, providing the best cost optimization."
  },
  {
    id: 15,
    question: "Which feature can be used to protect Amazon S3 buckets from accidental overwrites or deletions?",
    options: [
      "Lifecycle policies",
      "Bucket versioning",
      "Server-side encryption",
      "S3 access points"
    ],
    answer: 1,
    explanation: "Bucket versioning maintains multiple versions of objects, allowing recovery from accidental overwrites or deletions."
  },
  {
    id: 16,
    question: "According to the AWS shared responsibility model, which task is the responsibility of AWS for workloads running on Amazon EC2?",
    options: [
      "Updating the physical hardware",
      "Updating the operating system",
      "Updating the database engine",
      "Updating the user data"
    ],
    answer: 0,
    explanation: "AWS is responsible for updating and maintaining the physical hardware infrastructure. Customers are responsible for the OS, database, and application updates."
  },
  {
    id: 17,
    question: "A web developer is concerned that a DDoS attack could target an application. Which AWS services or features can help protect against such an attack? (Select TWO.)",
    options: [
      "AWS Shield",
      "AWS CloudTrail",
      "Amazon CloudFront",
      "AWS Support",
      "AWS Health Dashboard"
    ],
    answer: [0,2],
    explanation: "AWS Shield provides DDoS protection, and Amazon CloudFront helps mitigate DDoS attacks by distributing traffic globally.",
    multipleSelect: true
  },
  {
    id: 18,
    question: "Which of the following are security principles in the AWS Well-Architected Framework? (Select TWO.)",
    options: [
      "Analyze and attribute expenditures",
      "Monitor, alert, and audit actions and changes to AWS resources",
      "Deploy globally in minutes",
      "Protect data in transit and at rest",
      "Perform operations as code"
    ],
    answer: [1,3],
    explanation: "Monitoring, alerting, and auditing, plus protecting data in transit and at rest are key security principles in the AWS Well-Architected Framework.",
    multipleSelect: true
  },
  {
    id: 19,
    question: "Which AWS Cloud design principles can help increase reliability? (Select TWO.)",
    options: [
      "Using monolithic architecture",
      "Measuring overall efficiency",
      "Testing recovery procedures",
      "Adopting a consumption model",
      "Automatically recovering from failure"
    ],
    answer: [2,4],
    explanation: "Testing recovery procedures and automatically recovering from failure are key design principles for improving reliability.",
    multipleSelect: true
  },
  {
    id: 20,
    question: "Which option is an AWS Cloud Adoption Framework (AWS CAF) foundational capability for the operations perspective?",
    options: [
      "Performance and capacity management",
      "Application portfolio management",
      "Identity and access management",
      "Product management"
    ],
    answer: 0,
    explanation: "Performance and capacity management is a foundational capability for the operations perspective in the AWS Cloud Adoption Framework."
  },
  {
    id: 21,
    question: "Which AWS service or feature can a developer use to access AWS services programmatically?",
    options: [
      "AWS Management Console",
      "AWS software development kits (SDKs)",
      "AWS CodeDeploy",
      "AWS CodePipeline"
    ],
    answer: 1,
    explanation: "AWS SDKs provide libraries and tools for developers to interact with AWS services programmatically."
  },
  {
    id: 22,
    question: "What is a responsibility of AWS under the AWS shared responsibility model?",
    options: [
      "Design a customer's application for disaster recovery",
      "Update the guest operating systems on deployed Amazon EC2 instances",
      "Configure new resources within an AWS account",
      "Secure the physical infrastructure"
    ],
    answer: 3,
    explanation: "AWS is responsible for securing the physical infrastructure, including hardware, facilities, and the hypervisor."
  },
  {
    id: 23,
    question: "Which AWS compute service is serverless?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS",
      "Amazon Elastic Container Service (Amazon ECS)"
    ],
    answer: 1,
    explanation: "AWS Lambda is a serverless compute service where you pay only for execution time without provisioning or managing servers."
  },
  {
    id: 24,
    question: "Which AWS service offers the MOST cost-effective means of storing static images?",
    options: [
      "Amazon S3",
      "Amazon DynamoDB",
      "AWS Snowball Edge",
      "Amazon Elastic Block Store (Amazon EBS)"
    ],
    answer: 0,
    explanation: "Amazon S3 is the most cost-effective service for storing static images at scale with high availability."
  },
  {
    id: 25,
    question: "Which architecture design principle applies to the concept of rightsizing the AWS Cloud infrastructure?",
    options: [
      "Scale horizontally for increased workload availability",
      "Optimize for cost",
      "Make frequent, small, reversible changes",
      "Perform operations as code"
    ],
    answer: 1,
    explanation: "Rightsizing—using the right-sized resources for your workload needs—directly applies to the cost optimization design principle."
  },
  {
    id: 26,
    question: "A company is launching a new application in the AWS Cloud. The application will run on an Amazon EC2 instance. More EC2 instances will be needed when the workload increases. Which AWS service or tool can the company use to launch the number of EC2 instances that will be needed to handle the workload?",
    options: [
      "Elastic Load Balancing (ELB)",
      "Amazon EC2 Auto Scaling",
      "AWS App2Container (A2C)",
      "AWS Systems Manager"
    ],
    answer: 1,
    explanation: "Amazon EC2 Auto Scaling automatically scales the number of EC2 instances based on demand."
  },
  {
    id: 27,
    question: "What is a benefit of moving to the AWS Cloud in terms of improving time to market?",
    options: [
      "Decreased deployment speed",
      "Increased application security",
      "Increased business agility",
      "Increased backup capabilities"
    ],
    answer: 2,
    explanation: "Moving to AWS increases business agility by enabling faster deployment and iteration cycles."
  },
  {
    id: 28,
    question: "A company needs access to cloud support engineers 24 hours a day, 7 days a week. What is the LEAST expensive AWS Support plan that meets this requirement?",
    options: [
      "AWS Basic Support",
      "AWS Business Support",
      "AWS Developer Support",
      "AWS Enterprise Support"
    ],
    answer: 1,
    explanation: "AWS Business Support provides 24/7 access to support engineers and is less expensive than Enterprise Support."
  },
  {
    id: 29,
    question: "A company wants to continuously monitor AWS account activity, including actions taken through the AWS Management Console, AWS software development kits (SDKs), and command line tools. Which AWS service meets these requirements?",
    options: [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS CloudTrail"
    ],
    answer: 3,
    explanation: "AWS CloudTrail records all API calls and actions taken in your AWS account for auditing and compliance."
  },
  {
    id: 30,
    question: "According to the AWS shared responsibility model, which of the following tasks are AWS responsibilities? (Select TWO.)",
    options: [
      "The physical security of AWS facilities",
      "Encrypting customer data",
      "Patching and updating the hypervisor",
      "Patching operating systems on Amazon EC2",
      "Defining network firewalls inside the VPC"
    ],
    answer: [0,2],
    explanation: "AWS is responsible for physical security of facilities and patching/updating the hypervisor. Customers are responsible for encrypting their data, patching EC2 OS, and configuring VPC firewalls.",
    multipleSelect: true
  },
  {
    id: 31,
    question: "What is an AWS best practice for managing an AWS account root user?",
    options: [
      "Share the root user password with the operations team",
      "Turn on multi-factor authentication (MFA) for the root user",
      "Create an access key for the root user",
      "Do not rotate the root user password"
    ],
    answer: 1,
    explanation: "Best practices include enabling MFA for the root user, not sharing credentials, not creating root user access keys, and limiting root user access."
  },
  {
    id: 32,
    question: "A company has existing software licenses that it wants to bring to AWS, but the licensing model requires licensing physical cores. How can the company meet this requirement in the AWS Cloud?",
    options: [
      "Launch an Amazon EC2 instance with default tenancy",
      "Launch an Amazon EC2 instance on a Dedicated Host",
      "Create an On-Demand Capacity Reservation",
      "Purchase Dedicated Reserved Instances"
    ],
    answer: 1,
    explanation: "Dedicated Hosts allow you to launch EC2 instances on physical servers dedicated for your use, which is necessary for licensing models based on physical cores."
  },
  {
    id: 33,
    question: "A company does not own a physical data center but needs a network solution that connects employee laptops directly to the AWS Cloud. Which AWS service will meet this requirement?",
    options: [
      "AWS Outposts",
      "AWS Client VPN",
      "AWS Snowball Edge",
      "Amazon CloudFront"
    ],
    answer: 1,
    explanation: "AWS Client VPN provides secure remote access to AWS resources and on-premises networks for individual devices."
  },
  {
    id: 34,
    question: "A company has a Java web application. The company wants to use auto deployment to create the AWS environment and deploy new versions of its application. Which AWS service will meet these requirements?",
    options: [
      "AWS Auto Scaling",
      "AWS Elastic Beanstalk",
      "AWS Control Tower",
      "Amazon EC2"
    ],
    answer: 1,
    explanation: "AWS Elastic Beanstalk handles the deployment, scaling, and management of web applications and automatically manages the infrastructure."
  },
  {
    id: 35,
    question: "What is an IAM best practice for AWS account root user access keys?",
    options: [
      "Delete all root user access keys, if possible",
      "Use root user credentials to access sensitive information stored on AWS",
      "Allow the system administrator group to use the root user credentials for daily access",
      "Use root user credentials to access production database instances"
    ],
    answer: 0,
    explanation: "Best practice is to delete all root user access keys. Only use root user when necessary (account closure, IAM configuration changes, etc.)."
  },
  {
    id: 36,
    question: "Which of the following is a benefit of using an AWS managed service?",
    options: [
      "Reduced operational overhead for a company's IT staff",
      "Increased fixed costs that can be predicted by a finance team",
      "Removal of the need to have a backup strategy",
      "Removal of the need to follow compliance standards"
    ],
    answer: 0,
    explanation: "AWS managed services reduce operational overhead by handling maintenance, updates, and scaling automatically."
  },
  {
    id: 37,
    question: "A company needs to audit its AWS resources. The company must document any changes that have been made to the resources. Which AWS service will meet these requirements?",
    options: [
      "AWS Artifact",
      "AWS Config",
      "Amazon Inspector",
      "Amazon CloudWatch"
    ],
    answer: 1,
    explanation: "AWS Config records and tracks changes to AWS resources, providing detailed audit trails."
  },
  {
    id: 38,
    question: "A cloud practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which component of the AWS Cloud should the company use to meet these requirements?",
    options: [
      "AWS accounts",
      "AWS Regions",
      "Availability Zones",
      "Edge locations"
    ],
    answer: 1,
    explanation: "AWS Regions are separate geographic areas that allow you to replicate data for disaster recovery and compliance purposes."
  },
  {
    id: 39,
    question: "A company needs to run an application on Amazon EC2 instances. The running workload cannot be interrupted. The company needs an instance purchasing option that requires no commitment. Which instance purchasing option will meet these requirements MOST cost effectively?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Hosts",
      "Reserved Instances"
    ],
    answer: 0,
    explanation: "On-Demand Instances provide flexibility with no commitment, though Spot Instances are cheaper. Since interruptions cannot be tolerated, On-Demand is the right choice."
  },
  {
    id: 40,
    question: "Which AWS service can be used to migrate an active, on-premises database to the AWS Cloud?",
    options: [
      "AWS Storage Gateway",
      "AWS Application Migration Service",
      "AWS DataSync",
      "AWS Database Migration Service (AWS DMS)"
    ],
    answer: 3,
    explanation: "AWS Database Migration Service (DMS) is designed to migrate databases to AWS with minimal downtime."
  },
  {
    id: 41,
    question: "Which tasks require use of the AWS account root user? (Select TWO.)",
    options: [
      "Restoring IAM administrator permissions",
      "Modifying an Amazon EC2 instance type",
      "Grouping resources in AWS Systems Manager",
      "Running applications in Amazon Elastic Kubernetes Service (Amazon EKS)",
      "Closing an AWS account"
    ],
    answer: [0,4],
    explanation: "Root user is needed to restore IAM permissions and close an AWS account. Most other tasks should be performed by IAM users.",
    multipleSelect: true
  },
  {
    id: 42,
    question: "A developer needs to access AWS resources from the AWS CLI. Which feature in AWS Identity and Access Management (IAM) can the developer use for authentication?",
    options: [
      "IAM access keys",
      "IAM policies",
      "SSH keys",
      "Account password policies"
    ],
    answer: 0,
    explanation: "IAM access keys (access key ID and secret access key) are used for programmatic access to AWS services, including the AWS CLI."
  },
  {
    id: 43,
    question: "A company wants to build a data analytics application that uses Amazon Redshift. The company needs a cost estimate for its future Amazon Redshift usage. Which AWS tool will provide a high-level cost estimation?",
    options: [
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "Savings Plans"
    ],
    answer: 1,
    explanation: "AWS Pricing Calculator provides cost estimations for AWS services based on your anticipated usage."
  },
  {
    id: 44,
    question: "According to the AWS shared responsibility model, which security-related tasks are the customer's responsibility? (Select TWO.)",
    options: [
      "Security of edge locations",
      "Client-side data encryption",
      "Hardware security within AWS Regions",
      "AWS global infrastructure network security",
      "Customer data integrity"
    ],
    answer: [1,4],
    explanation: "Customers are responsible for client-side encryption and ensuring the integrity of their data. AWS is responsible for infrastructure security.",
    multipleSelect: true
  },
  {
    id: 45,
    question: "An application is receiving SQL injection attacks from multiple external resources. Which AWS service or feature can help automate mitigation against these attacks?",
    options: [
      "AWS WAF",
      "Security groups",
      "Elastic Load Balancing (ELB)",
      "Network ACL"
    ],
    answer: 0,
    explanation: "AWS Web Application Firewall (WAF) can identify and block SQL injection attacks and other web exploits."
  },
  {
    id: 46,
    question: "An online retail company has seasonal sales spikes several times a year, primarily around holidays. Demand is lower at other times. The company finds it difficult to predict the increasing infrastructure demand for each season. Which advantages of moving to the AWS Cloud would MOST benefit the company? (Select TWO.)",
    options: [
      "Global footprint",
      "Elasticity",
      "AWS service quotas",
      "AWS shared responsibility model",
      "Pay-as-you-go pricing"
    ],
    answer: [1,4],
    explanation: "Elasticity allows automatic scaling to handle seasonal spikes, and pay-as-you-go pricing means the company only pays for what it uses.",
    multipleSelect: true
  },
  {
    id: 47,
    question: "Which AWS database service provides in-memory data storage?",
    options: [
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon RDS",
      "Amazon Timestream"
    ],
    answer: 1,
    explanation: "Amazon ElastiCache provides in-memory caching services using Redis or Memcached."
  },
  {
    id: 48,
    question: "A system automatically recovers from failure when a company launches its workload on the AWS Cloud services platform. Which pillar of the AWS Well-Architected Framework does this situation demonstrate?",
    options: [
      "Reliability",
      "Cost optimization",
      "Performance efficiency",
      "Operational excellence"
    ],
    answer: 0,
    explanation: "Automatic recovery from failure is a key aspect of the Reliability pillar of the AWS Well-Architected Framework."
  },
  {
    id: 49,
    question: "Which of the following will help a user determine if they need to request a VPC service limit increase?",
    options: [
      "AWS Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Cost and Usage Report",
      "AWS Service Catalog"
    ],
    answer: 1,
    explanation: "AWS Trusted Advisor checks your account for service usage and provides recommendations, including VPC limit utilization."
  },
  {
    id: 50,
    question: "Which of the following are security best practices for using AWS Identity and Access Management (IAM)? (Select TWO.)",
    options: [
      "Use AWS account root user credentials for IAM tasks",
      "Rotate credentials regularly",
      "Do not remove credentials, even if they are never used",
      "Enable multi-factor authentication (MFA)",
      "Use inline policies instead of customer managed policies"
    ],
    answer: [1,3],
    explanation: "Rotating credentials regularly and enabling MFA are critical security best practices. Avoid using root credentials and unnecessary credentials.",
    multipleSelect: true
  },
  {
    id: 51,
    question: "Which AWS benefit enables users to deploy cloud infrastructure that consists of multiple geographic Regions connected by a network with low latency, high throughput, and redundancy?",
    options: [
      "Economies of scale",
      "Security",
      "Elasticity",
      "Global reach"
    ],
    answer: 3,
    explanation: "AWS global reach allows deployment across multiple regions with low-latency interconnects for highly available applications."
  },
  {
    id: 52,
    question: "Which AWS service uses machine learning to identify sensitive data that is stored in Amazon S3 buckets?",
    options: [
      "Amazon Personalize",
      "Amazon Macie",
      "AWS CodePipeline",
      "AWS CodeArtifact"
    ],
    answer: 1,
    explanation: "Amazon Macie uses machine learning and pattern matching to discover and protect sensitive data in S3."
  },
  {
    id: 53,
    question: "A company hosts an application on an Amazon EC2 instance. The EC2 instance needs to access several AWS resources, including Amazon S3 and Amazon DynamoDB. What is the MOST operationally efficient solution to delegate permissions?",
    options: [
      "Create an IAM role with the required permissions. Attach the role to the EC2 instance",
      "Create an IAM user and use its access key and secret access key in the application",
      "Create an IAM user and use its access key and secret access key to create a CLI profile in the EC2 instance",
      "Create an IAM role with the required permissions. Attach the role to the administrative IAM user"
    ],
    answer: 0,
    explanation: "IAM roles are the best practice for granting permissions to EC2 instances. This is more secure and doesn't require managing keys."
  },
  {
    id: 54,
    question: "A company wants to host its relational databases on AWS. The databases have predefined schemas that the company needs to replicate on AWS. Which AWS services could the company use for the databases? (Select TWO.)",
    options: [
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DocumentDB (with MongoDB compatibility)",
      "Amazon Neptune",
      "Amazon DynamoDB"
    ],
    answer: [0,1],
    explanation: "Amazon Aurora and Amazon RDS both support relational databases with predefined schemas.",
    multipleSelect: true
  },
  {
    id: 55,
    question: "Which AWS service provides a simple way to set up a new multi-account AWS environment and govern it at scale?",
    options: [
      "AWS Trusted Advisor",
      "AWS Security Hub",
      "AWS Control Tower",
      "AWS Resource Access Manager"
    ],
    answer: 2,
    explanation: "AWS Control Tower simplifies the setup and governance of multi-account AWS environments with automated best practices."
  },
  {
    id: 56,
    question: "What is an example of high availability in the AWS Cloud?",
    options: [
      "Consulting AWS technical support at any time of the day",
      "Ensuring that an application remains accessible, even if a resource fails",
      "Making any AWS service available for use by paying on demand",
      "Deploying in any part of the world by using AWS Regions"
    ],
    answer: 1,
    explanation: "High availability means the application continues to function even when individual components fail."
  },
  {
    id: 57,
    question: "A user has petabytes of data to migrate to AWS from an area where high-speed network connections are not possible. Which service is the FASTEST way to transfer the data?",
    options: [
      "Amazon S3",
      "AWS Batch",
      "AWS Snowball Edge",
      "AWS VPN"
    ],
    answer: 2,
    explanation: "AWS Snowball Edge is a physical device that can transfer large amounts of data offline, making it the fastest option for remote areas."
  },
  {
    id: 58,
    question: "A company has an Amazon EC2 instance that must access AWS Secrets Manager to retrieve credentials. Which identity or service is required by the EC2 instance to perform the task?",
    options: [
      "Multi-factor authentication (MFA)",
      "IAM role",
      "IAM group",
      "Security groups"
    ],
    answer: 1,
    explanation: "An IAM role attached to the EC2 instance allows it to access AWS Secrets Manager without embedding credentials."
  },
  {
    id: 59,
    question: "A company is moving its office and must establish an encrypted connection to AWS. Which AWS service will meet this requirement?",
    options: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Connect"
    ],
    answer: 0,
    explanation: "AWS VPN provides encrypted connections to AWS resources from remote locations."
  },
  {
    id: 60,
    question: "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    options: [
      "No upfront payment",
      "Hourly on-demand payment",
      "Partial upfront payment",
      "All upfront payment"
    ],
    answer: 3,
    explanation: "All upfront payment typically provides the largest discount for reserved capacity compared to other payment options."
  },
  {
    id: 61,
    question: "Which of the following are characteristics of AWS Regions and Availability Zones? (Select TWO.)",
    options: [
      "Regions bring AWS services to on-premises facilities",
      "Regions consist of multiple Availability Zones",
      "An Availability Zone contains several Regions",
      "Regions are within 100 km (60 miles) of each other",
      "Regions are located around the world"
    ],
    answer: [1,4],
    explanation: "Regions consist of multiple Availability Zones for redundancy, and regions are located geographically around the world.",
    multipleSelect: true
  },
  {
    id: 62,
    question: "A company needs to transfer 60 TB of data to the AWS Cloud in a secure manner. Which of the following should the company use to meet these requirements?",
    options: [
      "AWS Snowball Edge",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon S3"
    ],
    answer: 0,
    explanation: "AWS Snowball Edge is designed for large-scale data transfers and provides secure, offline data migration."
  },
  {
    id: 63,
    question: "A company wants to improve its security and audit posture by limiting Amazon EC2 inbound access. What should the company use to access instances remotely instead of opening inbound SSH ports and managing SSH keys?",
    options: [
      "EC2 key pairs",
      "AWS Systems Manager Session Manager",
      "AWS Identity and Access Management (IAM)",
      "Network ACLs"
    ],
    answer: 1,
    explanation: "AWS Systems Manager Session Manager provides secure shell access to EC2 instances without requiring SSH ports or key management."
  },
  {
    id: 64,
    question: "Which AWS service should be used to monitor Amazon EC2 instances for CPU and network utilization?",
    options: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config"
    ],
    answer: 2,
    explanation: "Amazon CloudWatch collects metrics from EC2 instances including CPU and network utilization."
  },
  {
    id: 65,
    question: "A company is using AWS CloudFormation to provision its infrastructure and needs to manage a resource that CloudFormation does not support natively. What can the company use in CloudFormation to manage this resource?",
    options: [
      "AWS Elastic Beanstalk",
      "AWS CodeDeploy",
      "AWS Systems Manager Parameter Store",
      "Custom resources"
    ],
    answer: 3,
    explanation: "CloudFormation custom resources allow you to create and manage AWS resources not natively supported by CloudFormation."
  }
];
