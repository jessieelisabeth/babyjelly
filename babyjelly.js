const readline = require('readline');
const fs = require('fs');
let babyjellyDB = new Map();
try {
    
    if (fs.existsSync('babyjelly.jsonl')) {
        const data = fs.readFileSync('babyjelly.jsonl', 'utf8');

const lines = data.split('\n'); // split the data into lines
    for (const line of lines) {
    if (line === '') { // skip empty lines
        continue;
    }

    const record = JSON.parse(line);

    switch (record[0]) { // the past
        case 'set':
            babyjellyDB.set(record[1], record[2]);
            break;
        case 'delete':
            babyjellyDB.delete(record[1]);
            break;
        default:
            console.log(`what are you waffling on about?: ${record[0]}`);
    }
}

        console.log('babyjellyDB loaded from babyjelly.jsonl');
    } else {
        console.log('babyjelly.jsonl does not exist yet. Starting with an empty database.');
    }
} catch (err) {
    console.error('what are you waffling on about?:', err);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'babyjelly> '
});

// the present
rl.prompt();

rl.on('line', (line) => {
    const [command, ...args] = line.trim().split(' ');


    switch (command) {
        case 'set':
            fs.appendFileSync('babyjelly.jsonl', JSON.stringify(['set', args[0], args[1]]) + '\n');
            babyjellyDB.set(args[0], args[1]);
            break;
        case 'get':
            console.log(babyjellyDB.get(args[0]));
            break;
        case 'delete':
            fs.appendFileSync('babyjelly.jsonl', JSON.stringify(['delete', args[0]]) + '\n');
            babyjellyDB.delete(args[0]);
            break;
        case 'save':
            console.log('babyjelly is already up to date');
            break;
        case 'exit':
            rl.close();
            console.log('goodnight babyjelly!');
            break;
        default:
            console.log(`what are you waffling on about?: ${command}`);
    }   
    if (command !== 'exit'){
        rl.prompt();
    }
});

