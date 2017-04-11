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
