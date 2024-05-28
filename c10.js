const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini > ',
});

rl.prompt();

rl.on('line', (kalimat) => {
    var kata = kalimat.split(" ");
    var vokal = ['a', 'i', 'u', 'e', 'o'];
    var hasil = ''
    for (let x in kata) {
        if (x != 0) hasil += ' ';
        //console.log(x,words[x]);
        if (vokal.some(chr => chr == kata[x][0].toLowerCase())) {
            hasil += kata[x];
        } else {
            hasil += kata[x].slice(1) + kata[x][0] + 'nyo';
        }
    }
    console.log('hasil konversi :', hasil);
    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});