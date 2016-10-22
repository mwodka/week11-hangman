var exports = module.exports = {};
var wordBank = [
	'pneumonoultramicroscopicsilicovolcanoconiosis',
	'pseudopseudohypoparathyroidism',
	'floccinaucinihilipilification',
	'antidisestablishmentarianism',
	'euouae',
	'strenghts'
];
module.exports.getRandomWord = function () {
	var index = parseInt(Math.random() * wordBank.length);
	return wordBank[index];
}

