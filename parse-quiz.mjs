import mammoth from 'mammoth';

const result = await mammoth.extractRawText({ path: 'data/AWS_CCP_Quiz-b570dd.docx' });
const fullText = result.value;

// Write full text to file for inspection
import fs from 'fs';
fs.writeFileSync('quiz-full-text.txt', fullText);
console.log('Full text length:', fullText.length);
console.log('First 5000 chars:', fullText.slice(0, 5000));
