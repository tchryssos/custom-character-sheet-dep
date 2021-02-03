const ternary = <T, U>(condition: boolean, truthy: T, falsey: U): T | U => {
	if (condition) {
		return truthy;
	}
	return falsey;
};

export default ternary;
