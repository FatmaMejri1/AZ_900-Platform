import { Question } from './quiz-data';

export const networkingQuestions: Question[] = [
  {
    "id": 1,
    "question": "What does an Azure Virtual Network (VNet) primarily enable?",
    "options": [
      "Secure communication between Azure resources",
      "File storage encryption",
      "Automatic billing management",
      "Identity federation"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 2,
    "question": "How is the IP address space of a VNet defined?",
    "options": [
      "By the DNS provider",
      "By the user, using public or private address ranges",
      "It cannot be defined, only inherited",
      "Automatically by Microsoft support"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 3,
    "question": "What is the purpose of dividing a VNet into subnets?",
    "options": [
      "To create separate Azure tenants",
      "To enable ExpressRoute automatically",
      "To allocate portions of the address space to logical segments",
      "To increase the number of subscriptions"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 4,
    "question": "Which of the following can a virtual network connect, besides VMs?",
    "options": [
      "Only Azure Active Directory",
      "Only on-premises servers",
      "Only Azure Storage accounts",
      "App Service Environment, AKS, VM scale sets"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 5,
    "question": "What lets Azure resource types like SQL Database or Storage connect to a VNet without needing a full network interface?",
    "options": [
      "Service endpoints",
      "Route tables",
      "VPN gateways",
      "Network security groups"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 6,
    "question": "Is the private IP address range of a VNet routable on the public internet?",
    "options": [
      "Only with a public load balancer",
      "No, it only exists within the virtual network",
      "Only with ExpressRoute",
      "Yes, always"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 7,
    "question": "Which name resolution options are available for a VNet?",
    "options": [
      "None, DNS is not supported",
      "Only Azure Active Directory",
      "The built-in Azure name resolution service or a custom internal/external DNS server",
      "Only external DNS servers"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 8,
    "question": "How can incoming connections from the internet be enabled for an Azure resource?",
    "options": [
      "By using a private endpoint",
      "By creating a subnet",
      "By enabling BGP",
      "By assigning a public IP address or using a public load balancer"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 9,
    "question": "What best describes \"isolation and segmentation\" in Azure Virtual Network?",
    "options": [
      "The ability to create multiple isolated virtual networks",
      "The ability to disable DNS",
      "The ability to remove NSGs",
      "The ability to merge subscriptions"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 10,
    "question": "Which statement about virtual network peering is correct?",
    "options": [
      "It only works within the same region",
      "It allows two VNets to connect directly over the Microsoft backbone network",
      "It replaces the need for subnets",
      "It requires traffic to travel over the public internet"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 11,
    "question": "What characterizes a public endpoint?",
    "options": [
      "It cannot be assigned to a VM",
      "It requires ExpressRoute",
      "It has a public IP address and can be reached from anywhere",
      "It has a private IP address only"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 12,
    "question": "What characterizes a private endpoint?",
    "options": [
      "It uses anycast routing",
      "It requires a public load balancer",
      "It is always internet-facing",
      "It exists within a virtual network with a private IP from that VNet's address space"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 13,
    "question": "Which endpoint type would you choose to minimize exposure to the public internet?",
    "options": [
      "Private endpoint",
      "CDN endpoint",
      "Front Door endpoint",
      "Public endpoint"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 14,
    "question": "Service endpoints are best described as a way to:",
    "options": [
      "Register a domain name",
      "Link specific Azure PaaS resources (e.g., SQL, Storage) to a virtual network",
      "Configure BGP routes",
      "Encrypt VPN tunnels"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 15,
    "question": "From where does a private endpoint draw its IP address?",
    "options": [
      "The ExpressRoute circuit",
      "Azure DNS",
      "The address space of the virtual network it belongs to",
      "A public IP pool"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 16,
    "question": "What is the default behavior of Azure regarding traffic between subnets, on-premises networks, and the internet?",
    "options": [
      "Only ExpressRoute traffic is routed",
      "Traffic must be manually enabled subnet by subnet",
      "All traffic is blocked by default",
      "Azure automatically routes traffic between them"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 17,
    "question": "What do route tables allow you to do?",
    "options": [
      "Define custom rules for how packets are routed between subnets",
      "Encrypt data in transit",
      "Register DNS domains",
      "Create VPN gateways"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 18,
    "question": "What is the role of Network Security Groups (NSGs)?",
    "options": [
      "Route BGP announcements",
      "Allow or block inbound/outbound traffic based on rules like IP, port, and protocol",
      "Host DNS zones",
      "Provide DNS resolution"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 19,
    "question": "A network virtual appliance (NVA) is best described as:",
    "options": [
      "A billing tool",
      "A type of storage account",
      "A specialized VM performing a network function such as firewall or WAN optimization",
      "A managed DNS service"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 20,
    "question": "User-defined routes (UDRs) are used to:",
    "options": [
      "Enable zone redundancy",
      "Encrypt VPN preshared keys",
      "Register domain names",
      "Give greater control over traffic flow between subnets or VNets"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 21,
    "question": "What is a VPN Gateway in Azure?",
    "options": [
      "A type of virtual network gateway deployed in a dedicated subnet",
      "A DNS resolver",
      "A load balancer only",
      "A type of storage account"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 22,
    "question": "How many VPN gateways can be deployed in a single virtual network?",
    "options": [
      "Exactly two",
      "Only one",
      "Unlimited",
      "Depends on the region"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 23,
    "question": "Which connection type links an individual device to a virtual network?",
    "options": [
      "Site-to-site",
      "Network-to-network",
      "Point-to-site",
      "ExpressRoute Global Reach"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 24,
    "question": "Which connection type links an on-premises datacenter to a virtual network?",
    "options": [
      "VNet peering",
      "Point-to-site",
      "Private endpoint",
      "Site-to-site"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 25,
    "question": "What authentication method is used for Azure VPN gateways, regardless of VPN type?",
    "options": [
      "Preshared key",
      "Kerberos",
      "Certificates only",
      "OAuth tokens"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 26,
    "question": "Which VPN type evaluates each packet against static IP address sets to determine the tunnel?",
    "options": [
      "Route-based VPN",
      "Policy-based VPN",
      "Zone-redundant VPN",
      "Active-active VPN"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 27,
    "question": "Which VPN type models IPSec tunnels as a network/virtual interface and uses IP routing to select a tunnel?",
    "options": [
      "Policy-based VPN",
      "Static VPN",
      "Route-based VPN",
      "Basic VPN"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 28,
    "question": "Which scenario specifically requires a route-based VPN gateway?",
    "options": [
      "Only single-site static connections",
      "Single fixed IP address connections only",
      "DNS record hosting",
      "Point-to-site connections and coexistence with ExpressRoute"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 29,
    "question": "In a default Active/Standby VPN gateway configuration, what happens during a planned maintenance event?",
    "options": [
      "The standby instance takes over automatically, usually within seconds",
      "ExpressRoute takes over automatically",
      "The connection is permanently lost",
      "A new gateway must be manually created"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 30,
    "question": "What distinguishes an Active/Active VPN gateway configuration?",
    "options": [
      "It requires ExpressRoute",
      "Each instance is assigned a unique public IP address with separate tunnels",
      "It cannot use BGP",
      "A single shared public IP address for both instances"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 31,
    "question": "Why might you configure a VPN gateway as a failover path for ExpressRoute?",
    "options": [
      "To disable BGP",
      "To replace ExpressRoute permanently",
      "To provide an internet-based backup connection if the ExpressRoute circuit fails",
      "To reduce costs only"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 32,
    "question": "What benefit do zone-redundant gateways provide?",
    "options": [
      "Free domain registration",
      "Automatic DNS record creation",
      "Lower latency only",
      "Resiliency against zone-level failures within a region"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 33,
    "question": "What is required to deploy a zone-redundant gateway?",
    "options": [
      "A Standard public IP address and a compatible gateway SKU",
      "A private endpoint",
      "A policy-based VPN",
      "A Basic public IP address"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 34,
    "question": "What does Azure ExpressRoute primarily provide?",
    "options": [
      "DNS hosting",
      "A private, dedicated connection between on-premises networks and Microsoft cloud services",
      "Free domain names",
      "A public internet-based VPN tunnel"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 35,
    "question": "What is the term for an ExpressRoute connection?",
    "options": [
      "A private endpoint",
      "A service endpoint",
      "An ExpressRoute circuit",
      "A VNet peering"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 36,
    "question": "Which connectivity models can be used to establish an ExpressRoute connection?",
    "options": [
      "Only Wi-Fi",
      "Only 4G/5G connections",
      "Only satellite links",
      "Any-to-any (IP VPN), point-to-point Ethernet, or virtual cross-connection via a provider"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 37,
    "question": "What feature allows two on-premises sites to communicate through the Microsoft network using their ExpressRoute circuits?",
    "options": [
      "ExpressRoute Global Reach",
      "Private Link",
      "Azure DNS",
      "VNet peering"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 38,
    "question": "Which protocol is used by ExpressRoute for dynamic routing?",
    "options": [
      "RIP",
      "BGP",
      "EIGRP",
      "OSPF"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 39,
    "question": "Despite having ExpressRoute configured, which type of traffic may still travel over the public internet?",
    "options": [
      "VNet peering traffic",
      "VM-to-VM traffic within the same VNet",
      "DNS queries and certificate revocation checks",
      "All Azure Storage traffic"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 40,
    "question": "When is ExpressRoute generally the better choice over a standard VPN connection?",
    "options": [
      "When only a single test VM needs connectivity",
      "When DNS hosting is the primary need",
      "When internet-based, low-cost connectivity is the only requirement",
      "When predictable latency, high throughput, and strict compliance are required"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 41,
    "question": "What is Azure DNS primarily used for?",
    "options": [
      "Hosting DNS domains and providing name resolution",
      "Managing VM backups",
      "Encrypting VPN traffic",
      "Load balancing VM traffic"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  },
  {
    "id": 42,
    "question": "How does Azure DNS achieve fast, reliable performance for DNS queries?",
    "options": [
      "Through VPN gateways",
      "Through anycast networking, directing queries to the closest server",
      "Through ExpressRoute circuits",
      "Through a single central DNS server"
    ],
    "answer": 1,
    "explanation": "The correct answer is B. This aligns with Azure's Networking Services module."
  },
  {
    "id": 43,
    "question": "What Azure feature helps secure DNS resources through role assignments and activity logs?",
    "options": [
      "BGP",
      "Service endpoints",
      "Azure RBAC (built on Azure Resource Manager)",
      "Network security groups"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This aligns with Azure's Networking Services module."
  },
  {
    "id": 44,
    "question": "What is a key advantage of an alias record set in Azure DNS?",
    "options": [
      "It replaces the need for a virtual network",
      "It only works with on-premises DNS",
      "It requires manual updates whenever the underlying resource's IP changes",
      "It automatically updates when the IP address of the linked Azure resource changes"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This aligns with Azure's Networking Services module."
  },
  {
    "id": 45,
    "question": "Can you purchase (register) a new domain name directly through Azure DNS?",
    "options": [
      "No — domains must be purchased via App Service domains or a third-party registrar, then hosted in Azure DNS",
      "Only with a VPN Gateway",
      "Only with an ExpressRoute subscription",
      "Yes, directly through Azure DNS"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This aligns with Azure's Networking Services module."
  }
];
