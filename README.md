## cfdi2pdf
version 2.0.0

**cdfi2pdf** creates a pdf based on an XML CFDI. It uses pdfmake and xml2js as dependencies.

### Preface

Electronic invoices in Mexico are generated using XML files, this files contains all data of the transactions. The XML files are sent over email or downloaded and many times they are accompanied with the corresponding PDF file with the same information, so it is easy to print and to be sent by email to the receiver. We decided to make this module because we needed for our platform, so we can send and store the PDF representation of the electronic invoices generated. This implementation is specially designed to generate PDF from the CFDI 3.3 version as specified by the SAT (Mexican Government), as for Jan 2018 onwards. It may not be compatible with previous or future realeases, but we hope you might find it useful. Contributions are welcomed, please send us an email to <info @ quad-tree.com>

The default image in the example file  is a Base64 string representation of a PNG file, and it should be replaced by the logo of the company that generates the XML.


### How to install

1.- Make a directory:
~~~
$ mkdir cfditest
$ cd cfditest
~~~


2.- Install from NPM
~~~
$ npm install --save cfdi2pdf
~~~


### Creating a PDF client side

You need to pass an XML string to the method in order to get the PDF document.
~~~
const cfdi2pdf = require("cfdi2pdf");
cfdi2pdf.createPDFClient(xml);
~~~


### Creating a PDF server side

In order to use the module server side, you need to have the fonts to be used in your public folder.

You need to pass an XML string, the response (where the pdf will be sent), and the fonts as options in order to get the PDF document.

You can also send a base64 image as part of the options in order to be used as the logo of the company.

Here is an example using express:

*create a file: cfdi2pdf_test.js*
~~~
const express = require('express');
const app = express();
const cfdi2pdf = require("cfdi2pdf");
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
    folder: 'public/pdf/',
    fileName: `myPDF.pdf`,
  },
};
// XML in string
const xml = "";
app.get('/', async function(req, res, next) {
  const doc = await cfdi2pdf.createPDFServer(xml, options);
  doc.pipe(res);
  doc.end();
});

app.listen(3000, function () {
  console.log('cfdi2pdf app listening on port 3000');
});
~~~

In Terminal, run:
~~~
$ node cfdi2pdf_test.js
~~~


Open the browser at http://localhost:3000
and voilà, you have a PDF representation of a CFDI 3.3

<hr>

## Made with love at Quad Tree / SLP / Mexico
by: Manuel Garcia, Carlos Alvarez, Enrique Motilla
visit our project at:  https://erpcloud.mx

Maintained by: Alan Rodríguez
