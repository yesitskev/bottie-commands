
// Declared and used a singleton
class Parser {
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

module.exports = Parser;
