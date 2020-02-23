module.exports = function toReadable (number) {
    let result = [];
    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }
    if(number == 0){return 'zero'}
    if(number / 100 >= 1){
      let hundreds = Math.floor(number/100);
     result.push(numbers[hundreds]);
     result.push('hundred');
     number -= 100 * hundreds;
    }
    if(number / 10 >= 1){
        if(number < 20 && number > 10){
        result.push(numbers[number]);
        number -= number; 
        }else{
          result.push(numbers[number - number % 10])
          result.push(numbers[number % 10])
        }
    }else{
      result.push(numbers[number])
    }
  
    return result.join(' ').trim();
}
