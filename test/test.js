'use strict';
var co = require('co');
var Memcached = require('../');
describe("cofy-memcached", function(){
	var memcached = new Memcached('localhost:11211');
	it("#$set $get" , function(done){
		co(function*(){
			yield memcached.$set("key" ,"value");
			var v = yield memcached.$get('key');
			v.should.equal('value');
			yield memcached.$del('k1');
			done();
		});
	});
});