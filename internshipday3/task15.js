function findHighestAndLowest(inputString) {
    const numbers = inputString.split(' ').map(Number);
  
    const highest = Math.max(...numbers);
    const lowest = Math.min(...numbers);
  
    return `${highest.toString()} ${lowest.toString()}`;
  }
  
  const userInput = "1 2 3 4 5";
  const result = findHighestAndLowest(userInput);
  console.log(result); 
  