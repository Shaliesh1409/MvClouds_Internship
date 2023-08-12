 
function removeLeadingTrailingZeros(n) {
    const cleanedStr = Number(n).toString();
  
    const estimationNumber =Math.round(parseFloat(cleanedStr));
  
    return estimationNumber;
  }
  console.log(removeLeadingTrailingZeros(245.4));
  console.log(removeLeadingTrailingZeros(245.6));
  console.log(removeLeadingTrailingZeros(00000248.400000));


  