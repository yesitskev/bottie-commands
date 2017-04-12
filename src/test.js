const Command = require("./Command");
const CommandManager = require("./CommandManager");
const ReadLine = require("readline");

// --------------------------------------------------------------------------

var manager = new CommandManager({
  allow_help: true,
  allow_usage: true
});

manager.register("(?:sg|start|startgame) ([a-z][a-z]+) ([a-z][a-z]+)", (c, p) => {
  console.log(">", c, p);
});

manager.dispatch("sg somemap someserver", {});















































// --------------------------------------------------------------------------

var terminal = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

terminal.on('line', function(line) {
   manager.dispatch(line, { terminal: terminal });
});
