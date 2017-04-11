'use strict';

/*
  TODO: A command needs to have usage instructions.
  TODO: A command needs to be able to override the command prefix.
*/
class Command {

  constructor(pattern, fn) {
    this.re = new RegExp(pattern, 'g');
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

module.exports = Command;
