function addAndMultiplyDigits(input) {
    const numbers = input.split(' ').map(Number);
  console.log(numbers);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
    while (sum >= 10) {
      let product = 1;
      const digits = sum.toString().split('');
      for (let digit of digits) {
        product *= parseInt(digit, 10);
      }
      sum = product;
    }
  
    return sum;
  }
  
  const userInput = "16 28";
  const result = addAndMultiplyDigits(userInput);
  console.log(result); 
  