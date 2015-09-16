class RuleEngine {
  
  constuctor() {

  }

  runOn(document, rules) {
    rules.forEach((rule) => {
      rule.runOn(document);
    });
  }
}
