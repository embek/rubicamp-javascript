function stringManipulation(word) {
    //write your code here
    var vokal = ['a', 'i', 'u', 'e', 'o'];
    if (vokal.some(chr => chr == word[0].toLowerCase())) {
        console.log(word);
    } else {
        console.log(word.slice(1) + word[0] + 'nyo')
    }
}

stringManipulation('ayam'); //"ayam"
stringManipulation('Ayam');
stringManipulation('bebek'); //"ebekbnyo”
stringManipulation('Bebek');
