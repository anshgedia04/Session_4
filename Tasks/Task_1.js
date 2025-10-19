function sumNumbersInString(str) {
  let sum = 0;
  let num = '';
  
  for (let char of str) {
    if (char >= '0' && char <= '9') {
      num += char;
    } else if (num) {
      sum += +num;
      num = '';
    }
  }
  
  return sum + +num;
}


console.log(sumNumbersInString("foo8bar8cat2tc2")); // 20
console.log(sumNumbersInString("abc123def456"));     // 579
console.log(sumNumbersInString("noNumbers"));        // 0
console.log(sumNumbersInString("1a2b3c100"));        // 106