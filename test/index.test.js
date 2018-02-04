const assert = require('assert');

const name = require('../index.js').name;

describe('#index.js', () => {

    describe('#name()', () => {
        it('name("lj") should return 0', () => {
            assert.strictEqual(name(), "lj");
        });
    });
});
