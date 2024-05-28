function sentencesManipulation(sentence) {
    //write your code here
    var words = sentence.split(" ");
    var vokal = ['a', 'i', 'u', 'e', 'o'];
    var hasil = ''
    for (let x in words) {
        if (x != 0) hasil += ' ';
        //console.log(x,words[x]);
        if (vokal.some(chr => chr == words[x][0].toLowerCase())) {
            hasil += words[x];
        } else {
            hasil += words[x].slice(1) + words[x][0] + 'nyo';
        }
    }
    console.log(hasil);
}

sentencesManipulation('ibu pergi ke pasar bersama aku');