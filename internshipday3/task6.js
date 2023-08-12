function rightShift(num, shiftAmount) {
    const isNegative = num < 0;
    
    num = isNegative ? -num : num;

    const result = Math.floor(num / Math.pow(2, shiftAmount));

    return isNegative ? -result : result;
}

console.log(rightShift(80, 3)); 
console.log(rightShift(-24, 2)); 
