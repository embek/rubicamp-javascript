const { readFile, writeFileSync } = require('node:fs');
const { argv, exit } = require('node:process');
let arr = [];
function help() {
    console.log(`>>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
$ node todo.js list: outstanding asc|desc
$ node todo.js list: completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
$ node todo.js filter:<tag_name>`)
}

if (argv.length < 3) {
    help();
    exit(0);
}

readFile('task.json', 'utf-8', (err, data) => {
    if (err) writeFileSync('task.json', JSON.stringify(arr))
    arr = JSON.parse(data);
    switch (argv[2]) {
        case 'list':
            console.log('Daftar pekerjaan');
            for (x in arr) console.log(`${parseInt(x) + 1}. ${arr[x].isComplete ? '[X]' : '[ ]'} ${arr[x].task}`);
            break;
        case 'task':
            task_id = argv[3] - 1;
            console.log(`Task\t : ${arr[task_id].task}\nSelesai\t : ${arr[task_id].isComplete ? 'Sudah' : 'Belum'}${arr[task_id].tag.length!==0 ? `\nTags\t : ${arr[task_id].tag}` : ''}`);
            break;
        case 'add':
            task_content = '';
            argv.splice(3).forEach((element) => task_content += ` ${element}`);
            task_content = task_content.trim();
            arr.push({ task: task_content, isComplete: false, tag: [] })
            console.log(`'${task_content}' telah ditambahkan`);
            break;
        case 'delete':
            task_id = argv[3] - 1;
            console.log(`'${arr[task_id].task}' telah dihapus dari daftar`);
            arr.splice(task_id, 1);
            break;
        case 'complete':
            task_id = argv[3] - 1;
            console.log(`'${arr[task_id].task}' telah selesai.`);
            arr[task_id].isComplete = true;
            break;
        case 'uncomplete':
            task_id = argv[3] - 1;
            console.log(`'${arr[task_id].task}' status selesai dibatalkan.`);
            arr[task_id].isComplete = false;
            break;
        case 'list:outstanding':
            console.log('Daftar pekerjaan');
            if (argv[3] == 'asc') {
                for (x in arr) if (!arr[x].isComplete) console.log(`${parseInt(x) + 1}. [ ] ${arr[x].task}`);
            } else if (argv[3] == 'desc') {
                for (let i = arr.length - 1; i >= 0; i--) if (!arr[i].isComplete) console.log(`${i + 1}. [ ] ${arr[i].task}`);
            }
            break;
        case 'list:completed':
            console.log('Daftar pekerjaan');
            if (argv[3] == 'asc') {
                for (x in arr) if (arr[x].isComplete) console.log(`${parseInt(x) + 1}. [X] ${arr[x].task}`);
            } else if (argv[3] == 'desc') {
                for (let i = arr.length - 1; i >= 0; i--) if (arr[i].isComplete) console.log(`${i + 1}. [X] ${arr[i].task}`);
            }
            break;
        case 'tag':
            task_id = argv[3] - 1;
            daftar = argv.slice(4);
            masuk = [];
            daftar.forEach((element) => {
                if (!arr[task_id].tag.includes(element)) masuk.push(element)
            })
            arr[task_id].tag.push(...masuk);
            console.log(`Tag '${masuk.toString()}' telah ditambahkan ke daftar '${arr[task_id].task}'`);
            break;
        case argv[2].match(/^filter:/)?.input:
            tag_name = argv[2].substring(argv[2].search(':') + 1);
            for (x in arr) if (arr[x].tag.find((element) => element == tag_name)) console.log(`${parseInt(x) + 1}. ${arr[x].isComplete ? '[X]' : '[ ]'} ${arr[x].task}`);
            break;
        case 'help':
            help();
            break;
    }
    writeFileSync('task.json', JSON.stringify(arr));
});

