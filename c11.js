const { readFileSync } = require('node:fs');
var arr = JSON.parse(readFileSync('data.json', 'utf-8'));
// console.log(arr);

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var i = 0;

console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!');
rl.setPrompt('Pertanyaan : ' + arr[i].definition + '\nTebakan : ');
rl.prompt();
rl.on('line', (jawab) => {
    if (jawab.toLowerCase() == arr[i].term) {
        console.log('Selamat Anda Benar!\n');
        i++;
        if (i == arr.length) {
            console.log('Hore Anda Menang!\n');
            process.exit(0);
        }
        rl.setPrompt('Pertanyaan : ' + arr[i].definition + '\nTebakan : ');
        rl.prompt();
    } else {
        console.log('Wkwkwkwk, Anda kurang beruntung!\n');
        rl.setPrompt('Tebakan : ');
        rl.prompt();
    }
}).on('close', () => {
    console.log('\nYah nyerah yaa TT');
    process.exit(0);
})
