var expect = require('chai').expect;
var me = require('../index');

describe('me', function() {
  describe('name', function() {
    it('should have a name object property', function(){
      expect(me.hasOwnProperty('name')).to.be.true;
    });
    it('should have a first name', function(){
      expect(me.name.hasOwnProperty('first')).to.be.true;
    });
    it('should have a last name', function(){
      expect(me.name.hasOwnProperty('last')).to.be.true;
    });
  });
  describe('links', function(){
    it('should have a link to twitter profile', function(){
      expect(me.hasOwnProperty('twitter')).to.be.true;
    });
    it('should have a link to StackOverflow profile', function(){
      expect(me.hasOwnProperty('stackoverflow')).to.be.true;
    });
    it('should have a link to GitHub profile', function(){
      expect(me.hasOwnProperty('github')).to.be.true;
    });
  });
});
