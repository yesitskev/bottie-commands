var readline = require('readline');
var kwargs = require('kwargs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// Should be able to give usage feedback
// Should be able to add custom validator on a command
// Could be internal i guess.
class Command {
  constructor(pattern, fn) {
    this.re = new RegExp(pattern);
    this.fn = fn;
  }

  // It's a parsers responsibility for making sure command patterns match, not
  // the command itself.
  re() {
    return this.re;
  }

  // Same as pattern goes for the command func
  fn() {
    return this.fn;
  }
}

// Declared and used a singleton
class CommandParser {
  constructor(...args) {
    this.commands = [];
  }

  on(pattern, fn) {
    var cmd = new Command(pattern, fn);
    this.commands.push(cmd);
  }

  parse(message) {
    this.commands.forEach(item => {
      this._handle(message, item);
    });
  }

  // message is a string
  // command is a command object where re is a RegExp and fn is a function.
  _handle(message, command) {
    var match = command.re.exec(message);
    if (!match) {
      // This command is invalid for the given message.
      return;
    }
    match.shift();
    command.fn(match);
  }
}

// Command.from(message) (return parsedcommand)
var parser = new CommandParser({
  prefix: '!'
});

parser.on("test ((?:[a-z][a-z]+))", param1 => {
  console.log("test->" + param1);
});

rl.on('line', function(line) {
   parser.parse(line);
});
