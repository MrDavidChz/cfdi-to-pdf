const xml2js = require('xml2js');
const PdfPrinter = require('pdfmake/src/printer');
//const PdfPrinter =  require('./node_modules/pdfmake/src/printer');

//const { cadenaOriginal } = require('validadorcfdi');
// const fs = require('fs');
const util = require('util');

const parseData = require('./parseData');
const createPDFContent = require('./createPDFContent');

xml2js.parseStringPromise = util.promisify(xml2js.parseString);

const defaultFonts = {
  Roboto: {
    normal: '../cfdi2pdf/fonts/Roboto/Roboto-Regular.ttf',
    bold: '../cfdi2pdf/fonts/Roboto/Roboto-Medium.ttf',
    italics: '../cfdi2pdf/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: '../cfdi2pdf/fonts/Roboto/Roboto-MediumItalic.ttf',
  },
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique',
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique',
  },
  Times: {
    normal: 'Times-Roman',
    bold: 'Times-Bold',
    italics: 'Times-Italic',
    bolditalics: 'Times-BoldItalic',
  },
  Symbol: {
    normal: 'Symbol',
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats',
  },
};

/**
 * creates a pdf of a received cfdi xml in the client
 * @param {String} xml xml in string
 * @param {Object} response response sent from the server to the client
 * @param {Object} options options
 */
const createPDFServer = async (xml, options = {}) => {
  /*
  const parsedXML = await xml2js.parseStringPromise(xml);
  const jsonData = parseData(parsedXML);
  const trimmedXML = xml.trim();
  // jsonData.cadenaOriginal = await cadenaOriginal.generaCadena(trimmedXML);
  // jsonData.cadenaOriginalCC = cadenaOriginal.generaCadenaOriginalCC(trimmedXML);

  const printer = new PdfPrinter(options.fonts || defaultFonts);

  const docDefinition = createPDFContent(jsonData, options);
  const doc = printer.createPdfKitDocument(docDefinition);
  if (options.save && options.save.folder && options.save.fileName) {
    const fileName = `${options.save.folder}/${options.save.fileName}`;
    const writeStream = fs.createWriteStream(fileName);
    doc.pipe(writeStream);
  }

  return doc;
  */
};

//module.exports = createPDFServer;
export default createPDFServer;
