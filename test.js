var Name = require('./index.js');
var expect = require('chai').expect;

describe('Firsttest', function(){
    it('It should return my name', function(){
        var name = new Name();
        var result = name.sayname();
        expect(result).to.equal('Adesh Shah');
    })
})