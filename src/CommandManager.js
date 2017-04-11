const Command = require("./Command");

/*
  TODO: Define a prefix (or list of prefixes)
  TODO: Prefix handling when a message is consumed.
*/
class CommandManager {

  constructor(options = {}) {
    this.commands = []
  }

  register(pattern, fn) {
    var cmd = new Command(pattern, fn);
    this.commands.push(cmd);
    return cmd;
  }

  register_command(cmd) {
    this.commands.push(cmd)
    return cmd;
  }

  consume(message, context={}) {
    this.commands.forEach(item => {
      var matches = item.re.exec(message);
      if (!matches) return;
      item.fn(matches.slice(1, matches.length), context);
    });
  }
}

module.exports = CommandManager;
