const pdfmakeExample = {
  content: [
    { text: 'This is a header', style: 'header' },
    'No styling here, this is a standard paragraph',
    { text: 'Another text', style: 'anotherStyle' },
    { text: 'Multiple styles applied', style: ['header', 'anotherStyle'] },
  ],

  styles: {
    header: {
      fontSize: 22,
      bold: true,
    },
    anotherStyle: {
      italics: true,
      alignment: 'right',
    },
  },
};

module.exports = pdfmakeExample;
