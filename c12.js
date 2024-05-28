const { argv, stdin, stdout } = require('node:process');
const { readFileSync } = require('node:fs');
if (argv.length < 3) {
    console.log("Tolong sertakan nama file sebagai inputan soalnya\nMisalnya \'node solution.js data.json\'");
    process.exit(0);
}
var arr = JSON.parse(readFileSync(argv[2], 'utf-8'));

console.log("Selamat datang di permainan Tebak-tebakan. kamu akan diberikan pertanyaan dari file ini \'data.json\'.\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan \'skip\' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi.\n");

const readline = require('node:readline');

const rl = readline.createInterface({
    input: stdin, output: stdout,
});

var i = 0, salah = 0;

console.log('Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!');
rl.setPrompt('Pertanyaan : ' + arr[i].definition + '\nTebakan : ');
rl.prompt();
rl.on('line', (jawab) => {
    if (jawab.toLowerCase() == arr[i].term) {
        console.log('\nAnda beruntung!\n');
        arr.splice(i, 1);
        i = Math.floor(Math.random() * (arr.length - 1));
        salah = 0;
        if (arr.length == 0) {
            console.log('Anda berhasil!');
            process.exit(0);
        }
        rl.setPrompt('Pertanyaan : ' + arr[i].definition + '\nTebakan : ');
        rl.prompt();
    } else if (jawab == 'skip') {
        tmp = arr[i];
        arr[i] = arr[arr.length - 1];
        arr[arr.length - 1] = tmp;
        if (arr.length > 1) i = Math.floor(Math.random() * (arr.length - 2));
        salah = 0;
        rl.setPrompt('\nPertanyaan : ' + arr[i].definition + '\nTebakan : ');
        rl.prompt();
    } else {
        salah++;
        console.log('Anda kurang beruntung! anda telah salah ', salah, ' kali. Silahkan coba lagi\n');
        rl.setPrompt('Tebakan : ');
        rl.prompt();
    }
}).on('close', () => {
    console.log('\nYah kok nyerah TT');
    process.exit(0);
})
