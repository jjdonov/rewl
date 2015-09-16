class RuleEngine {

  constuctor() {

  }

  runOn(document, rules) {
    return rules.map((rule) => {
      return rule.runOn(document);
    });
  }
}

module.exports = RuleEngine;
