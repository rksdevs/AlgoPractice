function consonantVowels (s) {

    let vowels = "aeiou";
    let consonant="";
    
    for (let i =0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonant += s[i] + '\n';
        }
    }
console.log(consonant);
}

consonantVowels("javascriptloops");