/*jshint expr: true*/
let expect = require('chai').expect;
let Rule = require('../src/rule');
let RuleEngine = require('../src/rule_engine.js');

describe('rule_engine', () => {
  it('Can run rules', (done) => {
    let anEngine = new RuleEngine();
    let rule = new Rule().when((doc) => {
      return Rule.ALWAYS;
    }).then((doc) => {
      return "sauce";
    });
    let result = anEngine.runOn({}, [rule]);
    console.log(JSON.stringify(result));
    expect(result).to.deep.equal(['sauce']);
    done();
  });
});
