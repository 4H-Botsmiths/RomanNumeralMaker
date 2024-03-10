let romanNumerals = '';

const number = JSON.parse(process.argv[2]);
if (number > 3999 || number < 1 || (Math.trunc(number) !== number)) {
  console.error('Number must be a whole number between 1 and 3999');
  process.exit(1);
}

const thousands = Math.trunc(number / 1000);
const thousandsRemainder = number % 1000;
romanNumerals += parse(thousands, 'M');

const hundreds = Math.trunc(thousandsRemainder / 100);
const hundredsRemainder = thousandsRemainder % 100;
romanNumerals += parse(hundreds, 'C', 'D', 'M');

const tens = Math.trunc(hundredsRemainder / 10);
const tensRemainder = hundredsRemainder % 10;
romanNumerals += parse(tens, 'X', 'L', 'C');

const ones = tensRemainder;
romanNumerals += parse(ones, 'I', 'V', 'X');

console.log('\n----------------------------------------------------------------');
console.log('Your Roman Numeral Is', romanNumerals);
console.log('----------------------------------------------------------------\n');
/**
 * 
 * @param num the number to parse (should be between 0 and 9)
 * @param firstSymbol 
 * @param secondSymbol 
 * @param thirdSymbol 
 * @returns 
 */
function parse(num: number, firstSymbol: string, secondSymbol?: string, thirdSymbol?: string) {
  let result = '';
  if (num < 4) {
    for (let i = 0; i < num; i++) {
      result += firstSymbol;
    }
  } else if (num < 5) {
    result += firstSymbol;
    result += secondSymbol;
  } else if (num < 9) {
    result += secondSymbol;
    for (let i = 0; i < num - 5; i++) {
      result += firstSymbol;
    }
  } else if (num < 10) {
    result += firstSymbol;
    result += thirdSymbol;
  } else {
    result += thirdSymbol;
  }
  return result;
}