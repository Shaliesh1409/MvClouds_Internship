function findFactors(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  const number1 = 12;
  const factors1 = findFactors(number1);
  console.log(factors1); 
  
  const number2 = 4;
  const factors2 = findFactors(number2);
  console.log(factors2); 
  