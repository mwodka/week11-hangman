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
	var index = Math.random() * (wordBank);
	return wordBank[index];
}

