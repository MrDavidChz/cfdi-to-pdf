const { parseString } = require('xml2js');

// import necesary functions
const parseData = require('./parseData');
const createPDFContent = require('./createPDFContent');

// EXAMPLE---------------------------
// const pdfmakeExample = require('./examples/pdfmakeExample');
// const xmlExample = require('./examples/xmlExample');
//----------------------------------

// require pdfmake
require('pdfmake/build/pdfmake.js');
require('pdfmake/build/vfs_fonts.js');

/**
 * creates a pdf of a received cfdi xml in the client
 * @param {String} xml xml in string
 */
const createPDFClient = (xml, options = {}) => {
  // xml = xmlExample //EXAMPLE
  parseString(xml, (err, res) => {
    if (res) {
      const json = parseData(res);
      //console.log(json);
      const content = createPDFContent(json, options);
      //console.log(content);
      // eslint-disable-next-line
      pdfMake.createPdf(content).open();
      // pdfMake.createPdf(pdfmakeExmaple).open() //EXAMPLE
    } else {
      throw err;
    }
  });
};

module.exports = createPDFClient;
