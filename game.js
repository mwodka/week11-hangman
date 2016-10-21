var exports = module.exports = {};
var wordBank = [
	'anything',
	'works',
	'here',
	'for',
	'now'
];
module.exports.getRandomWord = function () {
	var index = Math.random() * (wordBank);
}

