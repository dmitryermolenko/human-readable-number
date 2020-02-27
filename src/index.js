module.exports = function toReadable (number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondDozenNumbers = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  
  const getHundreds = (num) => {
    return (num > 99) ? `${units[Math.floor(num / 100)]} hundred ${getDozens(num % 100)}` : getDozens(num);
  }

  const getDozens = (num) => {
    switch(true) {
      case(num > 19 || num == 10):
        return `${dozens[Math.floor(num / 10)]} ${units[num % 10]}`;
        break;

      case(num > 10 && num < 20):
        return `${secondDozenNumbers[num % 10]}`;
        break;

      case(num < 10): {
        return `${units[num]}`;
        break;
      }
    }
  }

   return number ? getHundreds(number).trim() : 'zero';
};

