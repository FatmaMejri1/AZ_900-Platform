const fs = require('fs');

const rawText = `**Q1.** Que garantit un SLA (Service-Level Agreement) chez Azure ?
A. Le prix maximum d'un service
B. Le nombre de régions disponibles
C. Le niveau de disponibilité et de performance garanti d'un service
D. La vitesse du support technique

**Q2.** Un service Azure garantit un SLA de 99,9 %. Combien de temps d'arrêt cela représente-t-il approximativement par an ?
A. 8,76 heures
B. 3,65 jours
C. 52,6 minutes
D. 24 heures

**Q3.** Un SLA de 99,99 % correspond à combien de temps d'indisponibilité par an environ ?
A. 8,76 heures
B. 3,65 jours
C. 5,2 heures
D. 52,6 minutes

**Q4.** Quel est l'objectif principal de la haute disponibilité ?
A. Réduire les coûts au maximum
B. Garantir une disponibilité maximale malgré les perturbations
C. Augmenter la puissance de calcul
D. Simplifier la facturation

**Q5.** Plus le SLA garanti est élevé (ex. 99,99 % vs 99 %), quel est généralement l'impact ?
A. Le coût peut augmenter
B. Le coût diminue
C. Aucun impact sur le coût
D. La sécurité diminue

**Q6.** Qu'est-ce que la scalabilité dans le cloud ?
A. La capacité à sauvegarder des données automatiquement
B. La capacité à chiffrer les données au repos
C. La capacité à changer de fournisseur cloud
D. La capacité à ajuster les ressources pour répondre à la demande

**Q7.** Ajouter plus de CPU ou de RAM à une machine virtuelle existante est un exemple de :
A. Scalabilité horizontale
B. Scalabilité verticale
C. Redondance géographique
D. Load balancing

**Q8.** Ajouter des instances supplémentaires de machines virtuelles pour répondre à une hausse de trafic est un exemple de :
A. Scale up
B. Scale down
C. Scale out (scalabilité horizontale)
D. Scale in vertical

**Q9.** Réduire le nombre d'instances déployées lorsque la demande diminue s'appelle :
A. Scale up
B. Scale down vertical
C. Failover
D. Scale in

**Q10.** Quel est l'un des principaux avantages économiques de la scalabilité dans le cloud ?
A. Vous ne payez que pour ce que vous utilisez (modèle à la consommation)
B. Vous payez toujours un montant fixe
C. Vous devez acheter du matériel à l'avance
D. Le prix est identique quelle que soit la demande

**Q11.** Diminuer les spécifications CPU/RAM d'une VM surdimensionnée est un exemple de :
A. Scale out
B. Scale in
C. Scale down (vertical)
D. Scale up (vertical)

**Q12.** Que signifie la fiabilité (reliability) dans le contexte du cloud ?
A. La capacité d'un système à se remettre des pannes et à continuer de fonctionner
B. La capacité à réduire les coûts
C. La capacité à chiffrer les communications
D. La capacité à gérer les licences logicielles

**Q13.** La fiabilité est un pilier de quel framework Azure ?
A. Azure Service Health
B. Azure Well-Architected Framework
C. Azure Resource Manager
D. Azure DevOps Framework

**Q14.** Pourquoi le design décentralisé du cloud favorise-t-il la fiabilité ?
A. Parce qu'il n'existe qu'une seule région dans le monde
B. Parce que si une région tombe en panne, d'autres régions continuent de fonctionner
C. Parce qu'il élimine le besoin de sauvegardes
D. Parce qu'il réduit automatiquement les coûts

**Q15.** Dans un scénario de reprise après sinistre, si la région R1 échoue, que peut faire Azure automatiquement selon le concept de fiabilité ?
A. Supprimer toutes les données
B. Arrêter tous les services dans le monde
C. Facturer des frais supplémentaires uniquement
D. Basculer (failover) vers une autre région comme R2

**Q16.** Quel terme désigne le chemin utilisé pour basculer vers une région de secours en cas de panne ?
A. Load path
B. Failover path
C. Scaling path
D. Compliance path

**Q17.** La prévisibilité dans le cloud concerne principalement quels deux aspects ?
A. La sécurité et la gouvernance
B. La performance et le coût
C. La scalabilité et la fiabilité
D. Le stockage et le réseau

**Q18.** Quel outil Azure aide à estimer les coûts futurs avant le déploiement ?
A. Azure Monitor
B. Azure Pricing Calculator
C. Azure Load Balancer
D. Azure Security Center

**Q19.** Quel concept permet de déployer automatiquement des ressources supplémentaires lorsque la demande augmente, puis de les réduire lorsque la demande diminue ?
A. Load balancing
B. Autoscaling
C. Geo-redundancy
D. Role-based access control

**Q20.** Quel mécanisme redirige le trafic vers des zones moins sollicitées lorsque la charge est concentrée sur une zone ?
A. Autoscaling
B. Failover clustering
C. Data analytics
D. Load balancing

**Q21.** Le suivi en temps réel de l'utilisation des ressources et l'application d'analyses de données pour repérer des tendances contribuent principalement à :
A. La haute disponibilité
B. La prévisibilité des coûts
C. La scalabilité verticale
D. La gouvernance uniquement

**Q22.** Quel outil permet de garantir que les ressources déployées respectent des normes techniques et réglementaires ?
A. Les templates (modèles) de ressources
B. Le Pricing Calculator
C. Le Load Balancer
D. La scalabilité horizontale

**Q23.** L'audit basé sur le cloud permet de :
A. Augmenter automatiquement les coûts
B. Supprimer les ressources non utilisées sans avertissement
C. Signaler les ressources non conformes et suggérer des mitigations
D. Remplacer la fiabilité par la sécurité

**Q24.** Dans quel modèle de service le client garde-t-il le maximum de contrôle sur la sécurité (gestion de l'OS et des logiciels installés) ?
A. SaaS (Software as a Service)
B. PaaS (Platform as a Service)
C. FaaS (Function as a Service)
D. IaaS (Infrastructure as a Service)

**Q25.** Dans quels modèles les correctifs (patches) et la maintenance sont généralement pris en charge automatiquement par le fournisseur ?
A. PaaS et SaaS
B. IaaS uniquement
C. Aucun modèle
D. Uniquement les machines virtuelles

**Q26.** Les fournisseurs cloud sont généralement bien équipés pour gérer quel type d'attaque réseau ?
A. Attaques par hameçonnage (phishing) uniquement
B. Attaques physiques sur site
C. Attaques par déni de service distribué (DDoS)
D. Vol de matériel

**Q27.** Établir une bonne gouvernance dès le début permet de :
A. Éliminer complètement le besoin de sécurité
B. Garder l'environnement cloud sécurisé et bien géré
C. Réduire uniquement les coûts de stockage
D. Remplacer les SLA

**Q28.** La « gestion DU cloud » (management of the cloud) fait référence à :
A. La manière dont le cloud gère automatiquement vos ressources
B. La manière dont vous gérez vos ressources cloud (outils utilisés)
C. Le coût des ressources cloud
D. La sécurité physique des datacenters

**Q29.** La « gestion DANS le cloud » (management in the cloud) fait référence à :
A. La surveillance automatique de la santé des ressources
B. Le remplacement automatique des ressources défaillantes
C. La mise à l'échelle automatique
D. La façon dont vous interagissez avec et gérez vos ressources cloud (portail, CLI, API, PowerShell)

**Q30.** Lequel des éléments suivants N'EST PAS un exemple de « management OF the cloud » ?
A. Mise à l'échelle automatique basée sur les besoins
B. Surveillance de la santé et remplacement des ressources défaillantes
C. Utilisation d'une interface web pour gérer manuellement chaque ressource
D. Alertes en temps réel basées sur des métriques configurées

**Q31.** Quel outil de ligne de commande permet de gérer les ressources Azure par script ?
A. Azure Portal
B. Azure CLI
C. Azure Advisor
D. Azure Pricing Calculator

**Q32.** Quels sont les moyens disponibles pour gérer les ressources Azure (choisissez la meilleure réponse) ?
A. Portail web, CLI, API et PowerShell
B. Uniquement via le portail web
C. Uniquement par téléphone avec le support
D. Uniquement via des applications tierces

**Q33.** Le déploiement de ressources à partir d'un modèle préconfiguré (template) permet principalement de :
A. Supprimer le besoin de sécurité
B. Augmenter automatiquement les prix
C. Éliminer le besoin de configuration manuelle
D. Réduire la disponibilité

**Q34.** Quelle pratique soutient les objectifs de durabilité dans le cloud ?
A. Laisser toutes les ressources fonctionner en permanence, utilisées ou non
B. Réduire l'échelle des ressources lorsque la demande diminue
C. Toujours choisir la configuration la plus puissante disponible
D. Ignorer la surveillance des ressources

**Q35.** Un environnement de développement qui s'arrête automatiquement en dehors des heures de bureau illustre quel principe ?
A. La haute disponibilité
B. La scalabilité verticale uniquement
C. La gouvernance de sécurité
D. La durabilité par l'automatisation et la réduction du gaspillage

**Q36.** Lequel de ces éléments fait partie du cycle « Right-size, Automate, Optimize, Monitor » lié à la durabilité ?
A. Choisir des services et configurations efficaces (Optimize)
B. Ignorer l'utilisation des ressources
C. Toujours surdimensionner les ressources
D. Ne jamais suivre les dépenses

**Q37.** Pourquoi le cloud peut-il améliorer l'efficacité par rapport à des environnements sur site isolés ?
A. Parce que le cloud n'a pas besoin d'électricité
B. Parce que les fournisseurs cloud opèrent à grande échelle avec une meilleure utilisation des ressources
C. Parce que le cloud élimine tout besoin de matériel
D. Parce que le cloud ne nécessite aucune surveillance

**Q38.** Quel avantage du cloud permet de payer uniquement pour les ressources réellement consommées ?
A. La gouvernance
B. La haute disponibilité
C. La fiabilité
D. Le modèle de consommation (pay-as-you-go)

**Q39.** Quelle est la différence principale entre la scalabilité verticale et horizontale ?
A. La verticale modifie la capacité d'une ressource existante, l'horizontale ajoute/retire des instances
B. La verticale ajoute des instances, l'horizontale ajoute de la puissance
C. Il n'y a aucune différence
D. La verticale concerne uniquement le stockage

**Q40.** Quel élément du Azure Well-Architected Framework est directement lié à la reprise après panne ?
A. La performance uniquement
B. Le coût uniquement
C. La fiabilité (Reliability)
D. La sécurité uniquement

**Q41.** Quel est l'avantage principal de la haute disponibilité combinée à un bon SLA ?
A. Réduction du besoin de sécurité
B. Élimination totale des pannes
C. Diminution automatique des coûts
D. Assurance contractuelle d'un certain niveau de disponibilité du service

**Q42.** Un pic soudain de trafic sur une application web est le mieux géré par :
A. La réduction manuelle des ressources
B. L'arrêt du service
C. La scalabilité (autoscaling) pour ajouter des ressources
D. Le changement de fournisseur cloud

**Q43.** Quel bénéfice du cloud permet de suivre les tendances d'utilisation pour mieux planifier les déploiements futurs ?
A. La sécurité physique
B. La prévisibilité des coûts via l'analyse de données
C. La scalabilité horizontale uniquement
D. Le failover automatique

**Q44.** Lequel de ces éléments N'EST PAS un bénéfice typiquement associé au cloud computing dans AZ-900 ?
A. Garantie d'absence totale de pannes
B. Haute disponibilité
C. Scalabilité
D. Prévisibilité

**Q45.** En résumé, quel est l'objectif combiné de la fiabilité et de la prévisibilité dans le cloud ?
A. Éliminer le besoin de gouvernance
B. Remplacer complètement la sécurité
C. Garantir un prix fixe indépendamment de l'usage
D. Permettre aux organisations d'avancer avec confiance en cas de panne et en matière de coûts/performances`;

const keysObj = {
  1: 'C', 2: 'A', 3: 'D', 4: 'B', 5: 'A',
  6: 'D', 7: 'B', 8: 'C', 9: 'D', 10: 'A',
  11: 'C', 12: 'A', 13: 'B', 14: 'B', 15: 'D',
  16: 'B', 17: 'B', 18: 'B', 19: 'B', 20: 'D',
  21: 'B', 22: 'A', 23: 'C', 24: 'D', 25: 'A',
  26: 'C', 27: 'B', 28: 'A', 29: 'D', 30: 'C',
  31: 'B', 32: 'A', 33: 'C', 34: 'B', 35: 'D',
  36: 'A', 37: 'B', 38: 'D', 39: 'A', 40: 'C',
  41: 'D', 42: 'C', 43: 'B', 44: 'A', 45: 'D'
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
      explanation: 'La bonne réponse est ' + answerLetter + '. Ce thème fait partie des Avantages du Cloud (AZ-900).'
    });
  } else {
    console.log('Failed to match:', block.substring(0, 50));
  }
}

const fileContent =
  "import { Question } from './quiz-data';\n\nexport const benefitsQuestions: Question[] = " +
  JSON.stringify(questions, null, 2) +
  ';\n';

fs.writeFileSync('lib/az900-benefits.ts', fileContent);
console.log('Parsed ' + questions.length + ' questions. Done!');
