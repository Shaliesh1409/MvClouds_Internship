function moveuppercaseletterstofront(word) {

    let uppercaseletters = "";
    let lowecaseletters = "";
    for (let i = 0; i < word.length; ++i) {
        const char = word[i];
        if (char >= 'A' && char <= 'Z') {
            uppercaseletters+=char;
        }
        else {
            lowecaseletters+=char;
        }
    }
    return uppercaseletters+lowecaseletters;

}
console.log(moveuppercaseletterstofront("hApPy"))