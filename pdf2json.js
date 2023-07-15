const PDFParser = require('pdf2json');
const fs = require('fs');

function pdfToJSON(pdfPath, jsonPath) {
  const pdfParser = new PDFParser();

  pdfParser.on('pdfParser_dataReady', function (pdfData) {
    const content = pdfParser.getRawTextContent();
    const jsonContent = JSON.stringify({ content }, null, 4);

    fs.writeFileSync(jsonPath, jsonContent);

    console.log(`Successfully converted PDF to JSON. JSON file saved at ${jsonPath}`);
  });

  pdfParser.loadPDF(pdfPath);
}

// Provide the path to the PDF file and the desired path for the JSON file
const pdfFilePath = 'path/to/input.pdf';
const jsonFilePath = 'path/to/output.json';

pdfToJSON(pdfFilePath, jsonFilePath);
