import { Question } from './quiz-data';

export const benefitsQuestions: Question[] = [
  {
    "id": 1,
    "question": "Que garantit un SLA (Service-Level Agreement) chez Azure ?",
    "options": [
      "Le prix maximum d'un service",
      "Le nombre de régions disponibles",
      "Le niveau de disponibilité et de performance garanti d'un service",
      "La vitesse du support technique"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 2,
    "question": "Un service Azure garantit un SLA de 99,9 %. Combien de temps d'arrêt cela représente-t-il approximativement par an ?",
    "options": [
      "8,76 heures",
      "3,65 jours",
      "52,6 minutes",
      "24 heures"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 3,
    "question": "Un SLA de 99,99 % correspond à combien de temps d'indisponibilité par an environ ?",
    "options": [
      "8,76 heures",
      "3,65 jours",
      "5,2 heures",
      "52,6 minutes"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 4,
    "question": "Quel est l'objectif principal de la haute disponibilité ?",
    "options": [
      "Réduire les coûts au maximum",
      "Garantir une disponibilité maximale malgré les perturbations",
      "Augmenter la puissance de calcul",
      "Simplifier la facturation"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 5,
    "question": "Plus le SLA garanti est élevé (ex. 99,99 % vs 99 %), quel est généralement l'impact ?",
    "options": [
      "Le coût peut augmenter",
      "Le coût diminue",
      "Aucun impact sur le coût",
      "La sécurité diminue"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 6,
    "question": "Qu'est-ce que la scalabilité dans le cloud ?",
    "options": [
      "La capacité à sauvegarder des données automatiquement",
      "La capacité à chiffrer les données au repos",
      "La capacité à changer de fournisseur cloud",
      "La capacité à ajuster les ressources pour répondre à la demande"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 7,
    "question": "Ajouter plus de CPU ou de RAM à une machine virtuelle existante est un exemple de :",
    "options": [
      "Scalabilité horizontale",
      "Scalabilité verticale",
      "Redondance géographique",
      "Load balancing"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 8,
    "question": "Ajouter des instances supplémentaires de machines virtuelles pour répondre à une hausse de trafic est un exemple de :",
    "options": [
      "Scale up",
      "Scale down",
      "Scale out (scalabilité horizontale)",
      "Scale in vertical"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 9,
    "question": "Réduire le nombre d'instances déployées lorsque la demande diminue s'appelle :",
    "options": [
      "Scale up",
      "Scale down vertical",
      "Failover",
      "Scale in"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 10,
    "question": "Quel est l'un des principaux avantages économiques de la scalabilité dans le cloud ?",
    "options": [
      "Vous ne payez que pour ce que vous utilisez (modèle à la consommation)",
      "Vous payez toujours un montant fixe",
      "Vous devez acheter du matériel à l'avance",
      "Le prix est identique quelle que soit la demande"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 11,
    "question": "Diminuer les spécifications CPU/RAM d'une VM surdimensionnée est un exemple de :",
    "options": [
      "Scale out",
      "Scale in",
      "Scale down (vertical)",
      "Scale up (vertical)"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 12,
    "question": "Que signifie la fiabilité (reliability) dans le contexte du cloud ?",
    "options": [
      "La capacité d'un système à se remettre des pannes et à continuer de fonctionner",
      "La capacité à réduire les coûts",
      "La capacité à chiffrer les communications",
      "La capacité à gérer les licences logicielles"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 13,
    "question": "La fiabilité est un pilier de quel framework Azure ?",
    "options": [
      "Azure Service Health",
      "Azure Well-Architected Framework",
      "Azure Resource Manager",
      "Azure DevOps Framework"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 14,
    "question": "Pourquoi le design décentralisé du cloud favorise-t-il la fiabilité ?",
    "options": [
      "Parce qu'il n'existe qu'une seule région dans le monde",
      "Parce que si une région tombe en panne, d'autres régions continuent de fonctionner",
      "Parce qu'il élimine le besoin de sauvegardes",
      "Parce qu'il réduit automatiquement les coûts"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 15,
    "question": "Dans un scénario de reprise après sinistre, si la région R1 échoue, que peut faire Azure automatiquement selon le concept de fiabilité ?",
    "options": [
      "Supprimer toutes les données",
      "Arrêter tous les services dans le monde",
      "Facturer des frais supplémentaires uniquement",
      "Basculer (failover) vers une autre région comme R2"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 16,
    "question": "Quel terme désigne le chemin utilisé pour basculer vers une région de secours en cas de panne ?",
    "options": [
      "Load path",
      "Failover path",
      "Scaling path",
      "Compliance path"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 17,
    "question": "La prévisibilité dans le cloud concerne principalement quels deux aspects ?",
    "options": [
      "La sécurité et la gouvernance",
      "La performance et le coût",
      "La scalabilité et la fiabilité",
      "Le stockage et le réseau"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 18,
    "question": "Quel outil Azure aide à estimer les coûts futurs avant le déploiement ?",
    "options": [
      "Azure Monitor",
      "Azure Pricing Calculator",
      "Azure Load Balancer",
      "Azure Security Center"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 19,
    "question": "Quel concept permet de déployer automatiquement des ressources supplémentaires lorsque la demande augmente, puis de les réduire lorsque la demande diminue ?",
    "options": [
      "Load balancing",
      "Autoscaling",
      "Geo-redundancy",
      "Role-based access control"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 20,
    "question": "Quel mécanisme redirige le trafic vers des zones moins sollicitées lorsque la charge est concentrée sur une zone ?",
    "options": [
      "Autoscaling",
      "Failover clustering",
      "Data analytics",
      "Load balancing"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 21,
    "question": "Le suivi en temps réel de l'utilisation des ressources et l'application d'analyses de données pour repérer des tendances contribuent principalement à :",
    "options": [
      "La haute disponibilité",
      "La prévisibilité des coûts",
      "La scalabilité verticale",
      "La gouvernance uniquement"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 22,
    "question": "Quel outil permet de garantir que les ressources déployées respectent des normes techniques et réglementaires ?",
    "options": [
      "Les templates (modèles) de ressources",
      "Le Pricing Calculator",
      "Le Load Balancer",
      "La scalabilité horizontale"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 23,
    "question": "L'audit basé sur le cloud permet de :",
    "options": [
      "Augmenter automatiquement les coûts",
      "Supprimer les ressources non utilisées sans avertissement",
      "Signaler les ressources non conformes et suggérer des mitigations",
      "Remplacer la fiabilité par la sécurité"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 24,
    "question": "Dans quel modèle de service le client garde-t-il le maximum de contrôle sur la sécurité (gestion de l'OS et des logiciels installés) ?",
    "options": [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "FaaS (Function as a Service)",
      "IaaS (Infrastructure as a Service)"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 25,
    "question": "Dans quels modèles les correctifs (patches) et la maintenance sont généralement pris en charge automatiquement par le fournisseur ?",
    "options": [
      "PaaS et SaaS",
      "IaaS uniquement",
      "Aucun modèle",
      "Uniquement les machines virtuelles"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 26,
    "question": "Les fournisseurs cloud sont généralement bien équipés pour gérer quel type d'attaque réseau ?",
    "options": [
      "Attaques par hameçonnage (phishing) uniquement",
      "Attaques physiques sur site",
      "Attaques par déni de service distribué (DDoS)",
      "Vol de matériel"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 27,
    "question": "Établir une bonne gouvernance dès le début permet de :",
    "options": [
      "Éliminer complètement le besoin de sécurité",
      "Garder l'environnement cloud sécurisé et bien géré",
      "Réduire uniquement les coûts de stockage",
      "Remplacer les SLA"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 28,
    "question": "La « gestion DU cloud » (management of the cloud) fait référence à :",
    "options": [
      "La manière dont le cloud gère automatiquement vos ressources",
      "La manière dont vous gérez vos ressources cloud (outils utilisés)",
      "Le coût des ressources cloud",
      "La sécurité physique des datacenters"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 29,
    "question": "La « gestion DANS le cloud » (management in the cloud) fait référence à :",
    "options": [
      "La surveillance automatique de la santé des ressources",
      "Le remplacement automatique des ressources défaillantes",
      "La mise à l'échelle automatique",
      "La façon dont vous interagissez avec et gérez vos ressources cloud (portail, CLI, API, PowerShell)"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 30,
    "question": "Lequel des éléments suivants N'EST PAS un exemple de « management OF the cloud » ?",
    "options": [
      "Mise à l'échelle automatique basée sur les besoins",
      "Surveillance de la santé et remplacement des ressources défaillantes",
      "Utilisation d'une interface web pour gérer manuellement chaque ressource",
      "Alertes en temps réel basées sur des métriques configurées"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 31,
    "question": "Quel outil de ligne de commande permet de gérer les ressources Azure par script ?",
    "options": [
      "Azure Portal",
      "Azure CLI",
      "Azure Advisor",
      "Azure Pricing Calculator"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 32,
    "question": "Quels sont les moyens disponibles pour gérer les ressources Azure (choisissez la meilleure réponse) ?",
    "options": [
      "Portail web, CLI, API et PowerShell",
      "Uniquement via le portail web",
      "Uniquement par téléphone avec le support",
      "Uniquement via des applications tierces"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 33,
    "question": "Le déploiement de ressources à partir d'un modèle préconfiguré (template) permet principalement de :",
    "options": [
      "Supprimer le besoin de sécurité",
      "Augmenter automatiquement les prix",
      "Éliminer le besoin de configuration manuelle",
      "Réduire la disponibilité"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 34,
    "question": "Quelle pratique soutient les objectifs de durabilité dans le cloud ?",
    "options": [
      "Laisser toutes les ressources fonctionner en permanence, utilisées ou non",
      "Réduire l'échelle des ressources lorsque la demande diminue",
      "Toujours choisir la configuration la plus puissante disponible",
      "Ignorer la surveillance des ressources"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 35,
    "question": "Un environnement de développement qui s'arrête automatiquement en dehors des heures de bureau illustre quel principe ?",
    "options": [
      "La haute disponibilité",
      "La scalabilité verticale uniquement",
      "La gouvernance de sécurité",
      "La durabilité par l'automatisation et la réduction du gaspillage"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 36,
    "question": "Lequel de ces éléments fait partie du cycle « Right-size, Automate, Optimize, Monitor » lié à la durabilité ?",
    "options": [
      "Choisir des services et configurations efficaces (Optimize)",
      "Ignorer l'utilisation des ressources",
      "Toujours surdimensionner les ressources",
      "Ne jamais suivre les dépenses"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 37,
    "question": "Pourquoi le cloud peut-il améliorer l'efficacité par rapport à des environnements sur site isolés ?",
    "options": [
      "Parce que le cloud n'a pas besoin d'électricité",
      "Parce que les fournisseurs cloud opèrent à grande échelle avec une meilleure utilisation des ressources",
      "Parce que le cloud élimine tout besoin de matériel",
      "Parce que le cloud ne nécessite aucune surveillance"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 38,
    "question": "Quel avantage du cloud permet de payer uniquement pour les ressources réellement consommées ?",
    "options": [
      "La gouvernance",
      "La haute disponibilité",
      "La fiabilité",
      "Le modèle de consommation (pay-as-you-go)"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 39,
    "question": "Quelle est la différence principale entre la scalabilité verticale et horizontale ?",
    "options": [
      "La verticale modifie la capacité d'une ressource existante, l'horizontale ajoute/retire des instances",
      "La verticale ajoute des instances, l'horizontale ajoute de la puissance",
      "Il n'y a aucune différence",
      "La verticale concerne uniquement le stockage"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 40,
    "question": "Quel élément du Azure Well-Architected Framework est directement lié à la reprise après panne ?",
    "options": [
      "La performance uniquement",
      "Le coût uniquement",
      "La fiabilité (Reliability)",
      "La sécurité uniquement"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 41,
    "question": "Quel est l'avantage principal de la haute disponibilité combinée à un bon SLA ?",
    "options": [
      "Réduction du besoin de sécurité",
      "Élimination totale des pannes",
      "Diminution automatique des coûts",
      "Assurance contractuelle d'un certain niveau de disponibilité du service"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 42,
    "question": "Un pic soudain de trafic sur une application web est le mieux géré par :",
    "options": [
      "La réduction manuelle des ressources",
      "L'arrêt du service",
      "La scalabilité (autoscaling) pour ajouter des ressources",
      "Le changement de fournisseur cloud"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 43,
    "question": "Quel bénéfice du cloud permet de suivre les tendances d'utilisation pour mieux planifier les déploiements futurs ?",
    "options": [
      "La sécurité physique",
      "La prévisibilité des coûts via l'analyse de données",
      "La scalabilité horizontale uniquement",
      "Le failover automatique"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 44,
    "question": "Lequel de ces éléments N'EST PAS un bénéfice typiquement associé au cloud computing dans AZ-900 ?",
    "options": [
      "Garantie d'absence totale de pannes",
      "Haute disponibilité",
      "Scalabilité",
      "Prévisibilité"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  },
  {
    "id": 45,
    "question": "En résumé, quel est l'objectif combiné de la fiabilité et de la prévisibilité dans le cloud ?",
    "options": [
      "Éliminer le besoin de gouvernance",
      "Remplacer complètement la sécurité",
      "Garantir un prix fixe indépendamment de l'usage",
      "Permettre aux organisations d'avancer avec confiance en cas de panne et en matière de coûts/performances"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Avantages du Cloud (AZ-900)."
  }
];
