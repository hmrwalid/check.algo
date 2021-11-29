// count length sentence;
function length(s) {
    var count = 0;
    var len = 0;
    var countSpace = 0;
    var word = 0;
    var numVowel = 0
    if (s === ".") {
        count += 1;
    }

    while (s[count] !== ".") {
        count++;
    }
    len = count + 1
    for (var i = 0; i < len; i++) {
        if (s[i] === " ") {
            countSpace += 1
        }
        if (s[i] === "a" || s[i] === "A") {
            numVowel += 1
        }
        if (s[i] === "e" || s[i] === "E") {
            numVowel += 1

        }
        if (s[i] === "u" || s[i] === "U") {
            numVowel += 1

        }
        if (s[i] === "i" || s[i] === "I") {
            numVowel += 1

        }
        if (s[i] === "o" || s[i] === "O") {
            numVowel += 1

        }

    }
    word = countSpace + 1;


    console.log(word, len, numVowel)
}

console.log(length("Eh Ui walid."));