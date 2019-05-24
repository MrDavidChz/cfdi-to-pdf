const formatCurrency = currency =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'symbol' }).format(currency);

const breakEveryNCharacters = (str = '', n = 86) => {
  const arr = str.match(new RegExp(`.{1,${n}}`, 'g'));
 if(arr){
  const result = arr.reduce((a, b) => {
    const check = b.substr(0, Math.floor(n / 3));
    if (a.length + b.length < n || check.includes('+') || check.includes('|')) {
      return `${a}${b}`;
    }
    return `${a}\n${b}`;
  });
  return result;
 }


};

module.exports = { formatCurrency, breakEveryNCharacters };
