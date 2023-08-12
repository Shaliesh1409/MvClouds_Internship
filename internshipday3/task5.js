function Swapnumber(number){
    const string=String(number);
    if(string.length!=2){
        throw new Error("ENTER A  VALID TWO DIGIT NUMBER")
    }
    const swappednumber=Number(string[1]+string[0]);
    return number>=swappednumber;
}
console.log(Swapnumber(43))