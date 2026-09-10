const readline = require('readline');
const fs = require('fs');
let babyjellyDB = new Map();
try {
    
    if (fs.existsSync('babyjelly.json')) {
        const data = fs.readFileSync('babyjelly.json', 'utf8');
        const parsedData = JSON.parse(data);
        babyjellyDB = new Map(parsedData);
        console.log('babyjellyDB loaded from babyjelly.json');
    } else {
        console.log('babyjelly.json does not exist yet. Starting with an empty database.');
    }
} catch (err) {
    console.error('what are you waffling on about?:', err);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'babyjelly> '
});


rl.prompt();

rl.on('line', (line) => {
    const [command, ...args] = line.trim().split(' ');


    switch (command) {
        case 'set':
            babyjellyDB.set(args[0], args[1]);
            break;
        case 'get':
            console.log(babyjellyDB.get(args[0]));
            break;
        case 'delete':
            babyjellyDB.delete(args[0]);
            break;
        case 'save':
            const text = JSON.stringify(Array.from(babyjellyDB));
            fs.writeFileSync('babyjelly.json', text);
            console.log('babyjellyDB saved to babyjelly.json');
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

