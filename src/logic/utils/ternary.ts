export default (condition: boolean, truthy: any, falsey: any) => {
	if (condition) {
		return truthy
	}
	return falsey
}
