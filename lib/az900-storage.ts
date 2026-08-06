import { Question } from './quiz-data';

export const storageQuestions: Question[] = [
  {
    "id": 1,
    "question": "Quel est le format d'endpoint correct pour Blob Storage ?",
    "options": [
      "`<nom>.file.core.windows.net`",
      "`<nom>.queue.core.windows.net`",
      "`<nom>.table.core.windows.net`",
      "`<nom>.blob.core.windows.net`"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 2,
    "question": "Quelles sont les règles de nommage d'un compte de stockage Azure ?",
    "options": [
      "1 à 12 caractères, majuscules autorisées",
      "3 à 24 caractères, lettres minuscules et chiffres uniquement",
      "5 à 50 caractères alphanumériques",
      "Exactement 24 caractères, chiffres uniquement"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 3,
    "question": "Combien de fois les données sont-elles toujours répliquées dans la région primaire, quelle que soit l'option choisie ?",
    "options": [
      "3 fois",
      "2 fois",
      "6 fois",
      "1 fois"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 4,
    "question": "Quelle option de redondance réplique les données de façon synchrone trois fois dans un seul datacenter ?",
    "options": [
      "ZRS",
      "GRS",
      "LRS",
      "GZRS"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 5,
    "question": "Quelle est la durabilité annuelle approximative offerte par LRS ?",
    "options": [
      "12 nines",
      "16 nines",
      "9 nines",
      "11 nines (99,999999999 %)"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 6,
    "question": "ZRS réplique les données de façon synchrone sur combien de zones de disponibilité dans la région primaire ?",
    "options": [
      "3 zones",
      "2 zones",
      "5 zones",
      "1 zone"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 7,
    "question": "Quelle est la durabilité annuelle approximative offerte par ZRS ?",
    "options": [
      "11 nines",
      "16 nines",
      "12 nines (99,9999999999 %)",
      "9 nines"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 8,
    "question": "Quel est l'avantage principal de ZRS par rapport à LRS ?",
    "options": [
      "Un coût plus faible",
      "Les données restent disponibles en lecture/écriture même si une zone est indisponible",
      "La réplication automatique vers une autre région",
      "Il n'y a aucune différence"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 9,
    "question": "Comment fonctionne la redondance géo-redondante (GRS) ?",
    "options": [
      "ZRS dans la région primaire et ZRS dans la région secondaire",
      "LRS uniquement, sans réplication vers une autre région",
      "Aucune réplication secondaire n'est effectuée",
      "LRS dans la région primaire, répliqué de façon asynchrone vers LRS dans la région secondaire"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 10,
    "question": "Quelle est la durabilité annuelle approximative offerte par GRS et GZRS ?",
    "options": [
      "12 nines",
      "11 nines",
      "16 nines",
      "9 nines"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 11,
    "question": "Comment fonctionne la redondance géo-zone-redondante (GZRS) ?",
    "options": [
      "ZRS dans la région primaire, LRS dans la région secondaire",
      "LRS dans les deux régions",
      "ZRS dans les deux régions",
      "Aucune résilience zonale n'est utilisée"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 12,
    "question": "Que représente le RPO (Recovery Point Objective) dans le contexte d'Azure Storage ?",
    "options": [
      "Le temps nécessaire pour restaurer un service après une panne",
      "L'intervalle entre les dernières écritures dans la région primaire et la dernière écriture répliquée dans la région secondaire",
      "Le coût total de la réplication",
      "Le nombre total de copies de données"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 13,
    "question": "Quel est le RPO typique d'Azure Storage pour la réplication vers la région secondaire ?",
    "options": [
      "Moins de 24 heures",
      "Il n'y a jamais de perte de données possible",
      "Moins d'une heure",
      "Moins de 15 minutes"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 14,
    "question": "Par défaut, les données de la région secondaire sont-elles accessibles en lecture ?",
    "options": [
      "Non, sauf en cas de failover",
      "Oui, toujours accessibles",
      "Oui, mais uniquement en écriture",
      "Cela dépend uniquement du prix payé"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 15,
    "question": "Quelle option permet de lire les données de la région secondaire AVANT qu'un failover ne se produise ?",
    "options": [
      "LRS",
      "ZRS",
      "RA-GRS (Read-Access Geo-Redundant Storage)",
      "Aucune option ne le permet"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 16,
    "question": "Lequel de ces services Azure Storage est un magasin d'objets massivement scalable pour données texte et binaires ?",
    "options": [
      "Azure Tables",
      "Azure Blobs",
      "Azure Queues",
      "Azure Disks"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 17,
    "question": "Lequel de ces services fournit des partages de fichiers gérés accessibles via les protocoles SMB ou NFS ?",
    "options": [
      "Azure Blobs",
      "Azure Tables",
      "Azure Queues",
      "Azure Files"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 18,
    "question": "Lequel de ces services est utilisé pour la messagerie fiable entre les composants d'une application ?",
    "options": [
      "Azure Disks",
      "Azure Tables",
      "Azure Queues",
      "Azure Blobs"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 19,
    "question": "Lequel de ces services fournit un stockage en volumes de niveau bloc pour les machines virtuelles Azure ?",
    "options": [
      "Azure Disks",
      "Azure Files",
      "Azure Queues",
      "Azure Blobs"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 20,
    "question": "Lequel de ces services est une option NoSQL pour des données structurées et non relationnelles ?",
    "options": [
      "Azure Files",
      "Azure Tables",
      "Azure Blobs",
      "Azure Disks"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 21,
    "question": "Quelle est la taille maximale d'un message dans Azure Queue Storage ?",
    "options": [
      "256 Ko",
      "1 Mo",
      "128 Ko",
      "64 Ko"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 22,
    "question": "Quel service Azure est fréquemment associé à Azure Queue Storage pour déclencher des actions en arrière-plan ?",
    "options": [
      "Azure Functions",
      "Azure Migrate",
      "Azure File Sync",
      "Azure Data Box"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 23,
    "question": "Lequel des éléments suivants N'EST PAS un avantage d'Azure Storage mentionné dans le cours ?",
    "options": [
      "Durable et hautement disponible",
      "Sécurisé grâce au chiffrement automatique des données",
      "Nécessite une gestion manuelle du matériel physique par le client",
      "Accessible globalement via HTTP/HTTPS"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 24,
    "question": "Quel niveau d'accès Blob est optimisé pour les données consultées fréquemment ?",
    "options": [
      "Cool",
      "Hot",
      "Archive",
      "Cold"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 25,
    "question": "Quelle est la période minimale de rétention recommandée pour le niveau d'accès Cool ?",
    "options": [
      "180 jours",
      "90 jours",
      "Aucune période minimale",
      "30 jours"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 26,
    "question": "Quelle est la période minimale de rétention recommandée pour le niveau d'accès Cold ?",
    "options": [
      "30 jours",
      "180 jours",
      "90 jours",
      "Aucune période minimale"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 27,
    "question": "Quel niveau d'accès Blob convient le mieux aux données rarement consultées, stockées au moins 180 jours ?",
    "options": [
      "Archive",
      "Hot",
      "Cool",
      "Cold"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 28,
    "question": "Le niveau d'accès Archive peut-il être défini au niveau du compte de stockage ?",
    "options": [
      "Oui, toujours possible",
      "Non, il n'est disponible qu'au niveau du blob individuel",
      "Oui, mais uniquement pour les comptes Premium",
      "Cela dépend uniquement de la région choisie"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 29,
    "question": "Quel type de compte de stockage est recommandé par défaut pour la plupart des scénarios (blobs, fichiers, files d'attente et tables) ?",
    "options": [
      "Premium page blobs",
      "Premium block blobs",
      "Premium file shares",
      "Standard general-purpose v2"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 30,
    "question": "Quel type de compte de stockage est recommandé pour les scénarios à taux de transaction élevé ou avec des objets de petite taille ?",
    "options": [
      "Premium block blobs",
      "Standard general-purpose v2",
      "Premium page blobs",
      "Premium file shares"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 31,
    "question": "Quel type de compte de stockage prend en charge à la fois SMB et NFS pour Azure Files ?",
    "options": [
      "Standard general-purpose v2",
      "Premium block blobs",
      "Premium file shares",
      "Premium page blobs"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 32,
    "question": "Quel type de compte de stockage est utilisé exclusivement pour les page blobs (par exemple, les disques de VM) ?",
    "options": [
      "Standard general-purpose v2",
      "Premium page blobs",
      "Premium file shares",
      "Premium block blobs"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 33,
    "question": "Quelles options de redondance sont disponibles pour le type de compte Premium page blobs ?",
    "options": [
      "LRS, ZRS, GRS",
      "GRS et GZRS uniquement",
      "Toutes les options de redondance",
      "LRS uniquement"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 34,
    "question": "Quel service Azure fonctionne comme un hub centralisé pour évaluer et migrer une infrastructure on-premises complète vers Azure ?",
    "options": [
      "Azure Migrate",
      "Azure Data Box",
      "Azure File Sync",
      "AzCopy"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 35,
    "question": "Quelle est la capacité de stockage utilisable maximale d'un appareil Azure Data Box ?",
    "options": [
      "40 To",
      "100 To",
      "80 To",
      "10 To"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 36,
    "question": "Azure Data Box est principalement conçu pour :",
    "options": [
      "La synchronisation bidirectionnelle continue de fichiers",
      "Le transfert physique et hors ligne de très grands volumes de données",
      "La gestion des machines virtuelles",
      "La messagerie asynchrone entre applications"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 37,
    "question": "Selon quelle norme les disques d'un appareil Data Box sont-ils effacés après un transfert d'importation vers Azure ?",
    "options": [
      "ISO 27001",
      "RGPD (GDPR)",
      "SOC 2",
      "NIST 800-88r1"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 38,
    "question": "Azure Migrate fonctionne principalement comme :",
    "options": [
      "Un hub unifié pour évaluer et suivre la migration vers Azure",
      "Un appareil physique de transfert de données",
      "Un outil de synchronisation bidirectionnelle de fichiers",
      "Un service de messagerie asynchrone"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 39,
    "question": "Lequel de ces outils est un utilitaire en ligne de commande permettant de copier des blobs ou fichiers vers/depuis un compte de stockage ?",
    "options": [
      "Azure Storage Explorer",
      "Azure File Sync",
      "AzCopy",
      "Azure Migrate"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 40,
    "question": "La synchronisation effectuée par AzCopy est :",
    "options": [
      "Bidirectionnelle et automatique",
      "Unidirectionnelle (de la source vers la destination)",
      "Basée sur les métadonnées et horodatages des fichiers",
      "Impossible entre deux comptes de stockage différents"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 41,
    "question": "Quel outil fournit une interface graphique (GUI) pour gérer les blobs et fichiers, disponible sur Windows, macOS et Linux ?",
    "options": [
      "AzCopy",
      "Azure Migrate",
      "Azure Data Box",
      "Azure Storage Explorer"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 42,
    "question": "Quel outil utilise AzCopy en arrière-plan pour effectuer ses opérations de gestion des fichiers et blobs ?",
    "options": [
      "Azure Storage Explorer",
      "Azure File Sync",
      "Azure Migrate",
      "Azure Data Box"
    ],
    "answer": 0,
    "explanation": "La bonne réponse est A. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 43,
    "question": "Quel outil permet de synchroniser de façon bidirectionnelle un serveur de fichiers Windows local avec Azure Files ?",
    "options": [
      "AzCopy",
      "Azure Storage Explorer",
      "Azure File Sync",
      "Azure Migrate"
    ],
    "answer": 2,
    "explanation": "La bonne réponse est C. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 44,
    "question": "Le « cloud tiering » dans Azure File Sync permet de :",
    "options": [
      "Supprimer définitivement les fichiers peu utilisés",
      "Garder les fichiers les plus utilisés en local, tout en conservant les fichiers peu utilisés dans le cloud jusqu'à leur demande",
      "Chiffrer uniquement les fichiers volumineux",
      "Empêcher toute forme de synchronisation locale"
    ],
    "answer": 1,
    "explanation": "La bonne réponse est B. Ce thème fait partie des Azure Storage Services (AZ-900)."
  },
  {
    "id": 45,
    "question": "Si un serveur local utilisant Azure File Sync tombe en panne, que peut faire l'administrateur ?",
    "options": [
      "Il est impossible de le remplacer",
      "Toutes les données sont définitivement perdues",
      "Il faut recréer entièrement le compte de stockage",
      "Installer Azure File Sync sur un nouveau serveur dans le même datacenter pour le remplacer"
    ],
    "answer": 3,
    "explanation": "La bonne réponse est D. Ce thème fait partie des Azure Storage Services (AZ-900)."
  }
];
