const fs = require('fs');

const rawText = `**Q1.** Quel est le format d'endpoint correct pour Blob Storage ?
A. \`<nom>.file.core.windows.net\`
B. \`<nom>.queue.core.windows.net\`
C. \`<nom>.table.core.windows.net\`
D. \`<nom>.blob.core.windows.net\`

**Q2.** Quelles sont les règles de nommage d'un compte de stockage Azure ?
A. 1 à 12 caractères, majuscules autorisées
B. 3 à 24 caractères, lettres minuscules et chiffres uniquement
C. 5 à 50 caractères alphanumériques
D. Exactement 24 caractères, chiffres uniquement

**Q3.** Combien de fois les données sont-elles toujours répliquées dans la région primaire, quelle que soit l'option choisie ?
A. 3 fois
B. 2 fois
C. 6 fois
D. 1 fois

**Q4.** Quelle option de redondance réplique les données de façon synchrone trois fois dans un seul datacenter ?
A. ZRS
B. GRS
C. LRS
D. GZRS

**Q5.** Quelle est la durabilité annuelle approximative offerte par LRS ?
A. 12 nines
B. 16 nines
C. 9 nines
D. 11 nines (99,999999999 %)

**Q6.** ZRS réplique les données de façon synchrone sur combien de zones de disponibilité dans la région primaire ?
A. 3 zones
B. 2 zones
C. 5 zones
D. 1 zone

**Q7.** Quelle est la durabilité annuelle approximative offerte par ZRS ?
A. 11 nines
B. 16 nines
C. 12 nines (99,9999999999 %)
D. 9 nines

**Q8.** Quel est l'avantage principal de ZRS par rapport à LRS ?
A. Un coût plus faible
B. Les données restent disponibles en lecture/écriture même si une zone est indisponible
C. La réplication automatique vers une autre région
D. Il n'y a aucune différence

**Q9.** Comment fonctionne la redondance géo-redondante (GRS) ?
A. ZRS dans la région primaire et ZRS dans la région secondaire
B. LRS uniquement, sans réplication vers une autre région
C. Aucune réplication secondaire n'est effectuée
D. LRS dans la région primaire, répliqué de façon asynchrone vers LRS dans la région secondaire

**Q10.** Quelle est la durabilité annuelle approximative offerte par GRS et GZRS ?
A. 12 nines
B. 11 nines
C. 16 nines
D. 9 nines

**Q11.** Comment fonctionne la redondance géo-zone-redondante (GZRS) ?
A. ZRS dans la région primaire, LRS dans la région secondaire
B. LRS dans les deux régions
C. ZRS dans les deux régions
D. Aucune résilience zonale n'est utilisée

**Q12.** Que représente le RPO (Recovery Point Objective) dans le contexte d'Azure Storage ?
A. Le temps nécessaire pour restaurer un service après une panne
B. L'intervalle entre les dernières écritures dans la région primaire et la dernière écriture répliquée dans la région secondaire
C. Le coût total de la réplication
D. Le nombre total de copies de données

**Q13.** Quel est le RPO typique d'Azure Storage pour la réplication vers la région secondaire ?
A. Moins de 24 heures
B. Il n'y a jamais de perte de données possible
C. Moins d'une heure
D. Moins de 15 minutes

**Q14.** Par défaut, les données de la région secondaire sont-elles accessibles en lecture ?
A. Non, sauf en cas de failover
B. Oui, toujours accessibles
C. Oui, mais uniquement en écriture
D. Cela dépend uniquement du prix payé

**Q15.** Quelle option permet de lire les données de la région secondaire AVANT qu'un failover ne se produise ?
A. LRS
B. ZRS
C. RA-GRS (Read-Access Geo-Redundant Storage)
D. Aucune option ne le permet

**Q16.** Lequel de ces services Azure Storage est un magasin d'objets massivement scalable pour données texte et binaires ?
A. Azure Tables
B. Azure Blobs
C. Azure Queues
D. Azure Disks

**Q17.** Lequel de ces services fournit des partages de fichiers gérés accessibles via les protocoles SMB ou NFS ?
A. Azure Blobs
B. Azure Tables
C. Azure Queues
D. Azure Files

**Q18.** Lequel de ces services est utilisé pour la messagerie fiable entre les composants d'une application ?
A. Azure Disks
B. Azure Tables
C. Azure Queues
D. Azure Blobs

**Q19.** Lequel de ces services fournit un stockage en volumes de niveau bloc pour les machines virtuelles Azure ?
A. Azure Disks
B. Azure Files
C. Azure Queues
D. Azure Blobs

**Q20.** Lequel de ces services est une option NoSQL pour des données structurées et non relationnelles ?
A. Azure Files
B. Azure Tables
C. Azure Blobs
D. Azure Disks

**Q21.** Quelle est la taille maximale d'un message dans Azure Queue Storage ?
A. 256 Ko
B. 1 Mo
C. 128 Ko
D. 64 Ko

**Q22.** Quel service Azure est fréquemment associé à Azure Queue Storage pour déclencher des actions en arrière-plan ?
A. Azure Functions
B. Azure Migrate
C. Azure File Sync
D. Azure Data Box

**Q23.** Lequel des éléments suivants N'EST PAS un avantage d'Azure Storage mentionné dans le cours ?
A. Durable et hautement disponible
B. Sécurisé grâce au chiffrement automatique des données
C. Nécessite une gestion manuelle du matériel physique par le client
D. Accessible globalement via HTTP/HTTPS

**Q24.** Quel niveau d'accès Blob est optimisé pour les données consultées fréquemment ?
A. Cool
B. Hot
C. Archive
D. Cold

**Q25.** Quelle est la période minimale de rétention recommandée pour le niveau d'accès Cool ?
A. 180 jours
B. 90 jours
C. Aucune période minimale
D. 30 jours

**Q26.** Quelle est la période minimale de rétention recommandée pour le niveau d'accès Cold ?
A. 30 jours
B. 180 jours
C. 90 jours
D. Aucune période minimale

**Q27.** Quel niveau d'accès Blob convient le mieux aux données rarement consultées, stockées au moins 180 jours ?
A. Archive
B. Hot
C. Cool
D. Cold

**Q28.** Le niveau d'accès Archive peut-il être défini au niveau du compte de stockage ?
A. Oui, toujours possible
B. Non, il n'est disponible qu'au niveau du blob individuel
C. Oui, mais uniquement pour les comptes Premium
D. Cela dépend uniquement de la région choisie

**Q29.** Quel type de compte de stockage est recommandé par défaut pour la plupart des scénarios (blobs, fichiers, files d'attente et tables) ?
A. Premium page blobs
B. Premium block blobs
C. Premium file shares
D. Standard general-purpose v2

**Q30.** Quel type de compte de stockage est recommandé pour les scénarios à taux de transaction élevé ou avec des objets de petite taille ?
A. Premium block blobs
B. Standard general-purpose v2
C. Premium page blobs
D. Premium file shares

**Q31.** Quel type de compte de stockage prend en charge à la fois SMB et NFS pour Azure Files ?
A. Standard general-purpose v2
B. Premium block blobs
C. Premium file shares
D. Premium page blobs

**Q32.** Quel type de compte de stockage est utilisé exclusivement pour les page blobs (par exemple, les disques de VM) ?
A. Standard general-purpose v2
B. Premium page blobs
C. Premium file shares
D. Premium block blobs

**Q33.** Quelles options de redondance sont disponibles pour le type de compte Premium page blobs ?
A. LRS, ZRS, GRS
B. GRS et GZRS uniquement
C. Toutes les options de redondance
D. LRS uniquement

**Q34.** Quel service Azure fonctionne comme un hub centralisé pour évaluer et migrer une infrastructure on-premises complète vers Azure ?
A. Azure Migrate
B. Azure Data Box
C. Azure File Sync
D. AzCopy

**Q35.** Quelle est la capacité de stockage utilisable maximale d'un appareil Azure Data Box ?
A. 40 To
B. 100 To
C. 80 To
D. 10 To

**Q36.** Azure Data Box est principalement conçu pour :
A. La synchronisation bidirectionnelle continue de fichiers
B. Le transfert physique et hors ligne de très grands volumes de données
C. La gestion des machines virtuelles
D. La messagerie asynchrone entre applications

**Q37.** Selon quelle norme les disques d'un appareil Data Box sont-ils effacés après un transfert d'importation vers Azure ?
A. ISO 27001
B. RGPD (GDPR)
C. SOC 2
D. NIST 800-88r1

**Q38.** Azure Migrate fonctionne principalement comme :
A. Un hub unifié pour évaluer et suivre la migration vers Azure
B. Un appareil physique de transfert de données
C. Un outil de synchronisation bidirectionnelle de fichiers
D. Un service de messagerie asynchrone

**Q39.** Lequel de ces outils est un utilitaire en ligne de commande permettant de copier des blobs ou fichiers vers/depuis un compte de stockage ?
A. Azure Storage Explorer
B. Azure File Sync
C. AzCopy
D. Azure Migrate

**Q40.** La synchronisation effectuée par AzCopy est :
A. Bidirectionnelle et automatique
B. Unidirectionnelle (de la source vers la destination)
C. Basée sur les métadonnées et horodatages des fichiers
D. Impossible entre deux comptes de stockage différents

**Q41.** Quel outil fournit une interface graphique (GUI) pour gérer les blobs et fichiers, disponible sur Windows, macOS et Linux ?
A. AzCopy
B. Azure Migrate
C. Azure Data Box
D. Azure Storage Explorer

**Q42.** Quel outil utilise AzCopy en arrière-plan pour effectuer ses opérations de gestion des fichiers et blobs ?
A. Azure Storage Explorer
B. Azure File Sync
C. Azure Migrate
D. Azure Data Box

**Q43.** Quel outil permet de synchroniser de façon bidirectionnelle un serveur de fichiers Windows local avec Azure Files ?
A. AzCopy
B. Azure Storage Explorer
C. Azure File Sync
D. Azure Migrate

**Q44.** Le « cloud tiering » dans Azure File Sync permet de :
A. Supprimer définitivement les fichiers peu utilisés
B. Garder les fichiers les plus utilisés en local, tout en conservant les fichiers peu utilisés dans le cloud jusqu'à leur demande
C. Chiffrer uniquement les fichiers volumineux
D. Empêcher toute forme de synchronisation locale

**Q45.** Si un serveur local utilisant Azure File Sync tombe en panne, que peut faire l'administrateur ?
A. Il est impossible de le remplacer
B. Toutes les données sont définitivement perdues
C. Il faut recréer entièrement le compte de stockage
D. Installer Azure File Sync sur un nouveau serveur dans le même datacenter pour le remplacer`;

const keysObj = {
  1: 'D', 2: 'B', 3: 'A', 4: 'C', 5: 'D', 6: 'A', 7: 'C', 8: 'B', 9: 'D', 10: 'C',
  11: 'A', 12: 'B', 13: 'D', 14: 'A', 15: 'C', 16: 'B', 17: 'D', 18: 'C', 19: 'A', 20: 'B',
  21: 'D', 22: 'A', 23: 'C', 24: 'B', 25: 'D', 26: 'C', 27: 'A', 28: 'B', 29: 'D', 30: 'A',
  31: 'C', 32: 'B', 33: 'D', 34: 'A', 35: 'C', 36: 'B', 37: 'D', 38: 'A', 39: 'C', 40: 'B',
  41: 'D', 42: 'A', 43: 'C', 44: 'B', 45: 'D'
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
      explanation:
        'La bonne réponse est ' +
        answerLetter +
        '. Ce thème fait partie des Azure Storage Services (AZ-900).'
    });
  } else {
    console.log('Failed to match:', block.substring(0, 50));
  }
}

const fileContent =
  "import { Question } from './quiz-data';\n\nexport const storageQuestions: Question[] = " +
  JSON.stringify(questions, null, 2) +
  ';\n';

fs.writeFileSync('lib/az900-storage.ts', fileContent);
console.log('Parsed ' + questions.length + ' questions. Done!');
