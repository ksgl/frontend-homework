'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
});

QUnit.module('Тестируем функцию rle при неправильных входных данных', function () {
	QUnit.test('rle работает правильно', function (assert) {
		//let errorInstance = new TypeError("Invalid input: not an empty string expected.");
		assert.strictEqual(rle(5), null);
		assert.strictEqual(rle(null), null);
		assert.strictEqual(rle(undefined), null);
		assert.strictEqual(rle(""), null);
	});
});

QUnit.module('Ещё раз тестируем функцию rle на строках', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('++++++++++++++++='), '+16=');
		assert.strictEqual(rle('asdfghjkl;'), 'asdfghjkl;');
		assert.strictEqual(rle('k'), 'k');
	});
});
