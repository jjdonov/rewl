class Rule {

  constructor() {
    this.id = id || '';
    this.fireOn = null;
    this.conditionsAreMetBy = null;
  }

  when(predicate) {
    this.conditionsAreMetBy = callBack  || () => {
      return false;
    };
    return this;
  }

  then(action) {
    this.fireOn = action || () => {};
    return this;
  }

  runOn(document) {
    if(this.conditionsAreMetBy(document)) {
      return this.fireOn(document);
    }
  }
}

Rule.ALWAYS = true;
Rule.NEVER = false;

module.exports = Rule;
