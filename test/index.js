const assert = require('assert');
const edm00se = require('../lib');

describe('npm-edm00se', function(){
  it('module should provide properties', function() {
    const name = edm00se.name;
    assert.equal(name.first, 'Eric', 'first name is "Eric"');
    assert.equal(name.last, 'McCormick', 'last name is "McCormick"');
    assert(Boolean(edm00se.twitter), 'has twitter link');
    assert(Boolean(edm00se.github), 'has GitHub link');
  });
});
