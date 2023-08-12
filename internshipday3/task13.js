function capitalizeEvenAscii(inputString) {
    let result = '';
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString.charAt(i);
      console.log(i)
      const asciiValue = inputString.charCodeAt(i);
  
      if (asciiValue % 2 === 0) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
    }
  
    return result;
  }
  
  const userInput = "THE LITTLE MERMAID";
  const output = capitalizeEvenAscii(userInput);
  console.log(output); 
  