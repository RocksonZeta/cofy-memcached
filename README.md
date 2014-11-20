cofy-memcached
==============
[![Build Status](https://travis-ci.org/RocksonZeta/cofy-memcached.svg?branch=master)](https://travis-ci.org/RocksonZeta/cofy-memcached)

[memcached](https://github.com/3rd-Eden/node-memcached) co version.

##Installation
```
$ npm install cofy-memcached --save
```
**Old methods not change.New methods invoke convention: `yield obj.$asyncMethod`**

###Example
```js
var Memcached = require('cofy-memcached');
var memcached = new Memcached('localhost:11211');
yield memcached.$set("key" ,"value");
var v = yield memcached.$get('key');
v.should.equal('value');
yield memcached.$del('k1');
```