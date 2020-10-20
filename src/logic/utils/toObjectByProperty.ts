export default (array: { [key: string]: any }[], key: string) => array.reduce(
	(acc, cur) => ({ ...acc, [cur[key]]: cur }), {},
)
