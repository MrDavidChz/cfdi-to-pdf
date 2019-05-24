const express = require('express');
const app = express();

var cfdi2pdf = require('./index');
const xmlExample = require('./examples/xmlExample');


const fonts = {
  Roboto: {
    normal: 'public/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'public/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'public/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'public/fonts/Roboto/Roboto-MediumItalic.ttf'
  }
};
// Image must be a base 64 string
const image = "";
const options = {
  fonts,
  image,
  save: {
    folder: 'public/',
    fileName: `myPDF.pdf`,
  },
};
// XML in string
const xml = xmlExample;
app.get('/', async function(req, res, next) {
  const doc = await cfdi2pdf.createPDFServer(xml, options);
  doc.pipe(res);
  doc.end();
});

app.listen(3000, function () {
  console.log('cfdi2pdf app listening on port 3000');
});
