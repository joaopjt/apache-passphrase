const { Command } = require('commander');
const { name, version } = require('./package.json');
const program = new Command();

const alphabet = {
  "a": require('./alphabet/alpha.json'),
  "b": require('./alphabet/beta.json'),
  "c": require('./alphabet/charlie.json'),
  "d": require('./alphabet/delta.json'),
  "e": require('./alphabet/echo.json'),
  "f": require('./alphabet/foxtrot.json'),
  "g": require('./alphabet/golf.json'),
  "h": require('./alphabet/hotel.json'),
  "i": require('./alphabet/india.json'),
  "j": require('./alphabet/juliet.json'),
  "k": require('./alphabet/kilo.json'),
  "l": require('./alphabet/lima.json'),
  "m": require('./alphabet/mike.json'),
  "n": require('./alphabet/november.json'),
  "o": require('./alphabet/oscar.json'),
  "p": require('./alphabet/papa.json'),
  "q": require('./alphabet/quebec.json'),
  "r": require('./alphabet/romeo.json'),
  "s": require('./alphabet/sierra.json'),
  "t": require('./alphabet/tango.json'),
  "u": require('./alphabet/uniform.json'),
  "v": require('./alphabet/victor.json'),
  "w": require('./alphabet/whiskey.json'),
  "x": require('./alphabet/xray.json'),
  "y": require('./alphabet/yankee.json'),
  "z": require('./alphabet/zulu.json')
};


const nato = {
  "ALPHA": 'a',
  "BETA": 'b',
  "CHARLIE": 'c',
  "DELTA": 'd',
  "ECHO": 'e',
  "FOXTROT": 'f',
  "GOLF": 'g',
  "HOTEL": 'h',
  "INDIA": 'i',
  "JULIET": 'j',
  "KILO": 'k',
  "LIMA": 'l',
  "MIKE": 'm',
  "NOVEMBER": 'n',
  "OSCAR": 'o',
  "PAPA": 'p',
  "QUEBEC": 'q',
  "ROMEO": 'r',
  "SIERRA": 's',
  "TANGO": 't',
  "UNIFORM": 'u',
  "VICTOR": 'v',
  "WHISKEY": 'w',
  "XRAY": 'x',
  "YANKEE": 'y',
  "ZULU": 'z'
};

program
  .name(name)
  .description('A natural language processing model for computers')
  .version(version);

program.command('parse')
  .description('Parse a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('-p, --protons <number>', 'protons')
  .action((word, { protons }) => {
    let result = '';
    let lastLetter = null;

    Object.values(String(word)).forEach((letter) => {
      protons = protons || 1;
      letter = letter.toLowerCase();
      l = letter;
      ll = lastLetter;

      if (lastLetter === null) {
        lastLetter = letter;
        result += alphabet['x'][letter];
        return null;
      }

      if (letter === ' ') {
        result += '-'
        lastLetter = null;
        return null;
      }

      for (let i = 0; i < protons; i++) {
        console.log(`index: ${ll}`);
        console.log(`letter: ${ll}`);

        l = alphabet[ll][l];
        ll = nato[l];
      }

      // next
      result += l;
      lastLetter = letter;

      return null;
    });

    console.log(result);
  });

program.parse();