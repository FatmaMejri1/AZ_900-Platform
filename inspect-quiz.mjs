import mammoth from 'mammoth';

const result = await mammoth.extractRawText({ path: 'data/AWS_CCP_Quiz-b570dd.docx' });
console.log(result.value.slice(0, 4000));
