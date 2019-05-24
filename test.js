var cfdi2pdf = require('./index');
var http = require('http');
const xmlExample = require('./examples/xmlExample');
//console.log(xmlExample)
const fonts = {
  Roboto: {
    normal: './fonts/Roboto/Roboto-Regular.ttf',
    bold: './fonts/Roboto/Roboto-Medium.ttf',
    italics: './fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: './fonts/Roboto/Roboto-MediumItalic.ttf'
  }
};
// Image must be a base 64 string
const image = "";

const options = {
  fonts,
  image,
  save: {
    folder: 'examples/',
    fileName: `myPDF.pdf`,
  },
};


const result = async (req, res) => {
  const doc =  await cfdi2pdf.createPDFServer(xmlExample, options);

}


result()
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));


console.log(result())
/*
http.createServer( function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!---->>');

   const doc =  cfdi2pdf.createPDFServer(xmlExample, options);
  console.log(doc)
  res.end();

//cfdi2pdf.createPDFClient(xmlExample);
}).listen(8080);







*/
//cfdi2pdf.createPDFClient(xml);
