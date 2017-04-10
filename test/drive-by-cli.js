var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Should be able to give usage feedback
// Should be able to add custom validator on a command
class Command {
  constructor(pattern, validator, fn) {
    this.pattern = pattern;
    this.usage = usage;
    this.fn = fn;
  }

  // It's a parsers responsibility for making sure command patterns match, not
  // the command itself.
  get pattern() {
    return this.pattern;
  }
}

class CommandParser {
  constructor(...args) {
    this.commands = []
  }

  add(command) {
    this.commands.add(command);
    return this;
  }

  parse(line) {
    this.commands.forEach((item, index, array) => {

    })
  }
}

// Command.from(message) (return parsedcommand)
var parser = new CommandParser();

// () => {} for no args
// (cmd, args) => {} for all args
var cmd = new Command("test", () => {}, () => {})

rl.on('line', function(line) {
   parser.parse(line);
 });
