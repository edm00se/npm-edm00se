import assert from 'assert';
import edm00se from '../lib';

describe('npm-edm00se', () => {
  it('module should provide properties', () => {
    const name = edm00se.name;
    assert.equal(name.first, 'Eric', 'first name is "Eric"');
    assert.equal(name.last, 'McCormick', 'last name is "McCormick"');
    assert(Boolean(edm00se.twitter), 'has twitter link');
    assert(Boolean(edm00se.github), 'has GitHub link');
  });
});
