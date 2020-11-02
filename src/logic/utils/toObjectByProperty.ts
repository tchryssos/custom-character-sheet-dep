export default (array: { [key: string]: any }[], key: string): {[key: string]: any} => array.reduce(
	(acc, cur) => ({ ...acc, [cur[key]]: cur }), {},
)
