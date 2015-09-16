/*jshint expr: true*/
let expect = require('chai').expect;
let Rule = require('../src/rule');

describe('rule', () => {
  it('exposes ALWAYS and NEVER', (done) => {
    expect(Rule.ALWAYS).to.be.ok;
    expect(Rule.NEVER).to.not.be.ok;
    done();
  });
});
