function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(countVowels("Celebration")); // Output: 5 (e, e, a, i, o)
console.log(countVowels("JavaScript is awesome")); // Output: 8 (a, a, i, e, i, a, o,e)
