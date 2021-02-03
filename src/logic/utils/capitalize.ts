import slice from 'ramda/src/slice';

const capitalize = (string = ''): string => {
	const words = string.split(' ');
	return words
		.map((word) => `${word[0].toUpperCase()}${slice(1, Infinity, word)}`)
		.join(' ');
};

export default capitalize;
