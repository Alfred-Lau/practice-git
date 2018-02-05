const assert = require('assert');

const name = require('../index.js').name;

// 这是需要的，如果需要Mocha测试支持es6:    "test": "mocha --require babel-register"

describe('#index.js', () => {

    describe('#name()', () => {
        it('name("lj") should pass', () => {
            assert.strictEqual(name("lj"), 'lj');
        });
    });
});
