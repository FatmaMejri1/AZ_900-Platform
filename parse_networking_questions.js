const fs = require('fs');

const rawText = `**Q1.** What does an Azure Virtual Network (VNet) primarily enable?
A) Secure communication between Azure resources
B) File storage encryption
C) Automatic billing management
D) Identity federation

**Q2.** How is the IP address space of a VNet defined?
A) By the DNS provider
B) By the user, using public or private address ranges
C) It cannot be defined, only inherited
D) Automatically by Microsoft support

**Q3.** What is the purpose of dividing a VNet into subnets?
A) To create separate Azure tenants
B) To enable ExpressRoute automatically
C) To allocate portions of the address space to logical segments
D) To increase the number of subscriptions

**Q4.** Which of the following can a virtual network connect, besides VMs?
A) Only Azure Active Directory
B) Only on-premises servers
C) Only Azure Storage accounts
D) App Service Environment, AKS, VM scale sets

**Q5.** What lets Azure resource types like SQL Database or Storage connect to a VNet without needing a full network interface?
A) Service endpoints
B) Route tables
C) VPN gateways
D) Network security groups

**Q6.** Is the private IP address range of a VNet routable on the public internet?
A) Only with a public load balancer
B) No, it only exists within the virtual network
C) Only with ExpressRoute
D) Yes, always

**Q7.** Which name resolution options are available for a VNet?
A) None, DNS is not supported
B) Only Azure Active Directory
C) The built-in Azure name resolution service or a custom internal/external DNS server
D) Only external DNS servers

**Q8.** How can incoming connections from the internet be enabled for an Azure resource?
A) By using a private endpoint
B) By creating a subnet
C) By enabling BGP
D) By assigning a public IP address or using a public load balancer

**Q9.** What best describes "isolation and segmentation" in Azure Virtual Network?
A) The ability to create multiple isolated virtual networks
B) The ability to disable DNS
C) The ability to remove NSGs
D) The ability to merge subscriptions

**Q10.** Which statement about virtual network peering is correct?
A) It only works within the same region
B) It allows two VNets to connect directly over the Microsoft backbone network
C) It replaces the need for subnets
D) It requires traffic to travel over the public internet

**Q11.** What characterizes a public endpoint?
A) It cannot be assigned to a VM
B) It requires ExpressRoute
C) It has a public IP address and can be reached from anywhere
D) It has a private IP address only

**Q12.** What characterizes a private endpoint?
A) It uses anycast routing
B) It requires a public load balancer
C) It is always internet-facing
D) It exists within a virtual network with a private IP from that VNet's address space

**Q13.** Which endpoint type would you choose to minimize exposure to the public internet?
A) Private endpoint
B) CDN endpoint
C) Front Door endpoint
D) Public endpoint

**Q14.** Service endpoints are best described as a way to:
A) Register a domain name
B) Link specific Azure PaaS resources (e.g., SQL, Storage) to a virtual network
C) Configure BGP routes
D) Encrypt VPN tunnels

**Q15.** From where does a private endpoint draw its IP address?
A) The ExpressRoute circuit
B) Azure DNS
C) The address space of the virtual network it belongs to
D) A public IP pool

**Q16.** What is the default behavior of Azure regarding traffic between subnets, on-premises networks, and the internet?
A) Only ExpressRoute traffic is routed
B) Traffic must be manually enabled subnet by subnet
C) All traffic is blocked by default
D) Azure automatically routes traffic between them

**Q17.** What do route tables allow you to do?
A) Define custom rules for how packets are routed between subnets
B) Encrypt data in transit
C) Register DNS domains
D) Create VPN gateways

**Q18.** What is the role of Network Security Groups (NSGs)?
A) Route BGP announcements
B) Allow or block inbound/outbound traffic based on rules like IP, port, and protocol
C) Host DNS zones
D) Provide DNS resolution

**Q19.** A network virtual appliance (NVA) is best described as:
A) A billing tool
B) A type of storage account
C) A specialized VM performing a network function such as firewall or WAN optimization
D) A managed DNS service

**Q20.** User-defined routes (UDRs) are used to:
A) Enable zone redundancy
B) Encrypt VPN preshared keys
C) Register domain names
D) Give greater control over traffic flow between subnets or VNets

**Q21.** What is a VPN Gateway in Azure?
A) A type of virtual network gateway deployed in a dedicated subnet
B) A DNS resolver
C) A load balancer only
D) A type of storage account

**Q22.** How many VPN gateways can be deployed in a single virtual network?
A) Exactly two
B) Only one
C) Unlimited
D) Depends on the region

**Q23.** Which connection type links an individual device to a virtual network?
A) Site-to-site
B) Network-to-network
C) Point-to-site
D) ExpressRoute Global Reach

**Q24.** Which connection type links an on-premises datacenter to a virtual network?
A) VNet peering
B) Point-to-site
C) Private endpoint
D) Site-to-site

**Q25.** What authentication method is used for Azure VPN gateways, regardless of VPN type?
A) Preshared key
B) Kerberos
C) Certificates only
D) OAuth tokens

**Q26.** Which VPN type evaluates each packet against static IP address sets to determine the tunnel?
A) Route-based VPN
B) Policy-based VPN
C) Zone-redundant VPN
D) Active-active VPN

**Q27.** Which VPN type models IPSec tunnels as a network/virtual interface and uses IP routing to select a tunnel?
A) Policy-based VPN
B) Static VPN
C) Route-based VPN
D) Basic VPN

**Q28.** Which scenario specifically requires a route-based VPN gateway?
A) Only single-site static connections
B) Single fixed IP address connections only
C) DNS record hosting
D) Point-to-site connections and coexistence with ExpressRoute

**Q29.** In a default Active/Standby VPN gateway configuration, what happens during a planned maintenance event?
A) The standby instance takes over automatically, usually within seconds
B) ExpressRoute takes over automatically
C) The connection is permanently lost
D) A new gateway must be manually created

**Q30.** What distinguishes an Active/Active VPN gateway configuration?
A) It requires ExpressRoute
B) Each instance is assigned a unique public IP address with separate tunnels
C) It cannot use BGP
D) A single shared public IP address for both instances

**Q31.** Why might you configure a VPN gateway as a failover path for ExpressRoute?
A) To disable BGP
B) To replace ExpressRoute permanently
C) To provide an internet-based backup connection if the ExpressRoute circuit fails
D) To reduce costs only

**Q32.** What benefit do zone-redundant gateways provide?
A) Free domain registration
B) Automatic DNS record creation
C) Lower latency only
D) Resiliency against zone-level failures within a region

**Q33.** What is required to deploy a zone-redundant gateway?
A) A Standard public IP address and a compatible gateway SKU
B) A private endpoint
C) A policy-based VPN
D) A Basic public IP address

**Q34.** What does Azure ExpressRoute primarily provide?
A) DNS hosting
B) A private, dedicated connection between on-premises networks and Microsoft cloud services
C) Free domain names
D) A public internet-based VPN tunnel

**Q35.** What is the term for an ExpressRoute connection?
A) A private endpoint
B) A service endpoint
C) An ExpressRoute circuit
D) A VNet peering

**Q36.** Which connectivity models can be used to establish an ExpressRoute connection?
A) Only Wi-Fi
B) Only 4G/5G connections
C) Only satellite links
D) Any-to-any (IP VPN), point-to-point Ethernet, or virtual cross-connection via a provider

**Q37.** What feature allows two on-premises sites to communicate through the Microsoft network using their ExpressRoute circuits?
A) ExpressRoute Global Reach
B) Private Link
C) Azure DNS
D) VNet peering

**Q38.** Which protocol is used by ExpressRoute for dynamic routing?
A) RIP
B) BGP
C) EIGRP
D) OSPF

**Q39.** Despite having ExpressRoute configured, which type of traffic may still travel over the public internet?
A) VNet peering traffic
B) VM-to-VM traffic within the same VNet
C) DNS queries and certificate revocation checks
D) All Azure Storage traffic

**Q40.** When is ExpressRoute generally the better choice over a standard VPN connection?
A) When only a single test VM needs connectivity
B) When DNS hosting is the primary need
C) When internet-based, low-cost connectivity is the only requirement
D) When predictable latency, high throughput, and strict compliance are required

**Q41.** What is Azure DNS primarily used for?
A) Hosting DNS domains and providing name resolution
B) Managing VM backups
C) Encrypting VPN traffic
D) Load balancing VM traffic

**Q42.** How does Azure DNS achieve fast, reliable performance for DNS queries?
A) Through VPN gateways
B) Through anycast networking, directing queries to the closest server
C) Through ExpressRoute circuits
D) Through a single central DNS server

**Q43.** What Azure feature helps secure DNS resources through role assignments and activity logs?
A) BGP
B) Service endpoints
C) Azure RBAC (built on Azure Resource Manager)
D) Network security groups

**Q44.** What is a key advantage of an alias record set in Azure DNS?
A) It replaces the need for a virtual network
B) It only works with on-premises DNS
C) It requires manual updates whenever the underlying resource's IP changes
D) It automatically updates when the IP address of the linked Azure resource changes

**Q45.** Can you purchase (register) a new domain name directly through Azure DNS?
A) No — domains must be purchased via App Service domains or a third-party registrar, then hosted in Azure DNS
B) Only with a VPN Gateway
C) Only with an ExpressRoute subscription
D) Yes, directly through Azure DNS`;

const keysObj = {
  1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'A', 6: 'B', 7: 'C', 8: 'D', 9: 'A', 10: 'B',
  11: 'C', 12: 'D', 13: 'A', 14: 'B', 15: 'C', 16: 'D', 17: 'A', 18: 'B', 19: 'C', 20: 'D',
  21: 'A', 22: 'B', 23: 'C', 24: 'D', 25: 'A', 26: 'B', 27: 'C', 28: 'D', 29: 'A', 30: 'B',
  31: 'C', 32: 'D', 33: 'A', 34: 'B', 35: 'C', 36: 'D', 37: 'A', 38: 'B', 39: 'C', 40: 'D',
  41: 'A', 42: 'B', 43: 'C', 44: 'D', 45: 'A'
};

const questions = [];

const blocks = rawText.split('**Q').filter(b => b.trim().length > 0);

for (let block of blocks) {
  const match = block.match(/^(\d+)\.\*\*\s+(.*?)\nA\)\s+(.*?)\nB\)\s+(.*?)\nC\)\s+(.*?)\nD\)\s+(.*)$/ms);
  if (match) {
    const id = parseInt(match[1]);
    const questionBody = match[2].trim().replace(/\n/g, ' ');
    const options = [
      match[3].trim().replace(/\n/g, ' '),
      match[4].trim().replace(/\n/g, ' '),
      match[5].trim().replace(/\n/g, ' '),
      match[6].trim().replace(/\n/g, ' ')
    ];
    
    const answerLetter = keysObj[id];
    const answerIdx = answerLetter.charCodeAt(0) - 'A'.charCodeAt(0);
    
    questions.push({
      id: id,
      question: questionBody,
      options: options,
      answer: answerIdx,
      explanation: "The correct answer is " + answerLetter + ". This aligns with Azure's Networking Services module."
    });
  } else {
    console.log('Failed to match:', block.substring(0, 50));
  }
}

const fileContent = "import { Question } from './quiz-data';\n\nexport const networkingQuestions: Question[] = " + JSON.stringify(questions, null, 2) + ";\n";

fs.writeFileSync('lib/az900-networking.ts', fileContent);
console.log('Done!');
