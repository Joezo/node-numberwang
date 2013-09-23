var assert = require('assert');
var nw = require('../index.js');
describe('numberwang', function(){
  it('should return blank with nulls', function() {
    assert.equal(nw(), '');
    assert.equal(nw(null), '');
  });
  it('should return with bad data', function() {
    assert.deepEqual(nw({hello: 'wwfwf'}), {hello: 'wwfwf'});
    assert.deepEqual(nw({hello: '32ddd'}), {hello: '32ddd'});
  });
  it('should handle dodgy data', function(){
    assert.doesNotThrow(function(){nw(new Date());});
    assert.doesNotThrow(function(){nw(undefined);});
    assert.doesNotThrow(function(){nw(null);});
    assert.doesNotThrow(function(){nw(function(){});});
  });
  it('should work with good data', function(){
    assert.deepEqual(nw({hello: '3'}), {hello: 3});
    assert.deepEqual(nw({hello: '3', goodbye: 4}), {hello: 3, goodbye: 4});
    assert.deepEqual(nw({hello: '3', goodbye: 4, comeAgain: 'soon'}), {hello: 3, goodbye: 4, comeAgain: 'soon'});
    assert.equal(nw('3'), 3);
    assert.equal(nw(3), 3);
    assert.ok( typeof nw('4') === 'number' );
    assert.ok( typeof nw(3) === 'number' );
  });
});
