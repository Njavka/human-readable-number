module.exports = function toReadable (number) {
  const units = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
  ];
  const teens = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
  ];
  const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
  ];
  let numeral = "";
  if (number < 10) {
        numeral = units[number];
    } else if (number < 20) {
        numeral = teens[number - 10];
    } else if (number < 100) {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        if (unit === 0) {
            numeral = tens[ten];
        } else {
            numeral = tens[ten] + " " + units[unit];
        }
    } else if (number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        if (remainder === 0) {
            numeral = units[hundred] + " hundred";
        } else {
            const ten = Math.floor(remainder / 10);
            const unit = remainder % 10;
            if (remainder < 10) {
                numeral = units[hundred] + " hundred " + units[remainder];
            } else if (remainder < 20) {
                numeral = units[hundred] + " hundred " + teens[remainder - 10];
            } else {
                if (unit === 0) {
                    numeral = units[hundred] + " hundred " + tens[ten];
                } else {
                    numeral = units[hundred] + " hundred " + tens[ten] + " " + units[unit];
                }
            }
        }
    }
    return numeral;
}
