import mammoth from 'mammoth';

const result = await mammoth.extractRawText({ path: 'data/AWS_CCP_Quiz-b570dd.docx' });
const fullText = result.value;

// Write to a file for inspection
import fs from 'fs';
fs.writeFileSync('quiz-content.txt', fullText);
console.log('Successfully extracted quiz content');
console.log('Total characters:', fullText.length);
